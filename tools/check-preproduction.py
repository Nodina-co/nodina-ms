"""Check the sealed preproduction package locally; does not verify Cloudflare Access."""
from pathlib import Path
import json
import re
import sys

from importlib.util import spec_from_file_location, module_from_spec

sys.dont_write_bytecode = True
PROJECT = Path(__file__).resolve().parents[1]
spec = spec_from_file_location("check_site", PROJECT / "tools/check-site.py")
site = module_from_spec(spec)
spec.loader.exec_module(site)


def check():
    errors = []

    def require(condition, message):
        if not condition:
            errors.append(message)

    config = json.loads((PROJECT / "wrangler.preproduction.json").read_text())
    require(config.get("name") == "nodina-preproduction", "Expected a separate preproduction Worker.")
    require(config.get("account_id") == "fd3a2bc5aad5864906bab1ffbafc8007", "Expected the inspected NODINA account.")
    require(config.get("workers_dev") is False, "workers.dev must stay disabled before Access is configured.")
    require(config.get("preview_urls") is False, "Preview/version URLs must stay disabled.")
    require(config.get("routes") == [] and not config.get("route"), "No domain or route may be connected yet.")
    require(not config.get("env"), "Unexpected environment could override the sealed configuration.")
    require(not config.get("main"), "Static preproduction must not execute a Worker script.")
    assets = config.get("assets", {})
    require(assets.get("directory") == "./dist", "Only dist may be packaged.")
    require(assets.get("html_handling") == "force-trailing-slash", "Expected trailing slashes.")
    require(assets.get("not_found_handling") == "404-page", "Missing URLs must return the 404 page.")
    require(not assets.get("run_worker_first"), "Do not invoke a Worker before static assets.")

    if not site.ROOT.is_dir():
        errors.append("Missing dist: run npm run build first.")
    else:
        files = [p for p in site.ROOT.rglob("*") if p.is_file()]
        require(len(files) <= 20000, "Package exceeds the Workers Free static file limit.")
        for path in files:
            rel = path.relative_to(site.ROOT)
            require(not path.is_symlink(), f"Unexpected symlink: {rel}")
            require(path.stat().st_size <= 25 * 1024 * 1024, f"Asset exceeds 25 MiB: {rel}")
            require(not any(part.startswith('.') for part in rel.parts), f"Hidden file in package: {rel}")
            require(path.suffix not in {'.map', '.md', '.py', '.gs'}, f"Internal/source file in package: {rel}")
            if path.suffix == '.html':
                page = site.Page(path.read_text())
                require(any(a.get('name') == 'robots' and 'noindex' in a.get('content', '') for a in page.attrs('meta')), f"HTML lacks noindex: {rel}")

        for filename in ['_headers', '_redirects', 'robots.txt']:
            path = site.ROOT / filename
            require(path.is_file() and path.read_bytes() == (PROJECT / 'public' / filename).read_bytes(), f"Missing or stale {filename}.")
        headers = site.ROOT / '_headers'
        if headers.is_file():
            require(bool(re.search(r'^/\*\s*\n\s+X-Robots-Tag:\s*noindex, nofollow, noarchive\s*$', headers.read_text(), re.M)), "Missing global noindex response header.")
        require((site.ROOT / '404.html').is_file(), "Missing 404.html.")
        endpoint = re.search(r'https://script\.google\.com/macros/s/[A-Za-z0-9_-]+/exec', (PROJECT / 'tools/forms/README.md').read_text())
        require(endpoint is not None, "Existing Google endpoint is not documented.")
        for locale in ['fr', 'en']:
            path = site.ROOT / locale / 'contact/index.html'
            if not path.is_file():
                errors.append(f"Missing {locale} contact page.")
                continue
            forms = site.Page(path.read_text()).attrs('form')
            require(len(forms) == 1, f"Expected one {locale} contact form.")
            if forms and endpoint:
                require(forms[0].get('data-ready') == 'true' and forms[0].get('action') == endpoint.group(), f"{locale} form must use the existing Google service; check PUBLIC_CONTACT_ENDPOINT at build time.")

    if errors:
        print('\n'.join('FAIL: ' + error for error in errors))
        return 1
    print(f'PASS: sealed static preproduction package ({len(files)} files), noindex and existing FR/EN Google endpoint. Cloudflare Access remains unverified.')
    return 0


if __name__ == '__main__':
    try:
        sys.exit(check())
    except (OSError, ValueError) as error:
        print(f'FAIL: {error}')
        sys.exit(1)
