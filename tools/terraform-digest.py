"""Read-only reporting arithmetic. No API calls, credentials, or snapshot summation."""
import argparse
import csv
import json
import math
from datetime import date
from pathlib import Path


def numeric(value):
    try:
        value = float(value)
        return value if math.isfinite(value) else None
    except (TypeError, ValueError):
        return None


def comparison(current, previous, current_window, previous_window, threshold=30):
    result = {"current": current, "previous": previous, "absolute_change": None,
              "percent_change": None, "status": "unknown"}
    if current is None or previous is None or not current_window or not previous_window:
        return result
    a, b = current_window, previous_window
    duration = lambda w: (date.fromisoformat(w['end']) - date.fromisoformat(w['start'])).days
    if duration(a) != duration(b) or max(a['start'], b['start']) <= min(a['end'], b['end']):
        result['status'] = 'incomparable or overlapping windows'
        return result
    result['absolute_change'] = current - previous
    if min(current, previous) < threshold:
        result['status'] = 'small sample'
    else:
        result['status'] = 'comparable observations; processing finality not guaranteed'
        if previous:
            result['percent_change'] = round(100 * (current - previous) / previous, 2)
    return result


def snapshot(path):
    raw = json.loads(path.read_text())
    data, ga, search = raw.get('data', {}), raw.get('gaPeriods', {}), raw.get('searchPeriods', {})
    observations, windows = {}, {}
    for name, response in data.items():
        if isinstance(response, dict) and response.get('kind') == 'analyticsData#runReport':
            dimensions = [h['name'] for h in response.get('dimensionHeaders', [])]
            metrics = [h['name'] for h in response.get('metricHeaders', [])]
            rows = [{"dimensions": dict(zip(dimensions, [v['value'] for v in row.get('dimensionValues', [])])),
                     "metrics": dict(zip(metrics, [numeric(v['value']) for v in row.get('metricValues', [])]))}
                    for row in response.get('rows', [])]
            observations[name] = {"source": "GA4", "rows": rows, "value": None, "scope": "top rows" if dimensions else "total"}
            if not dimensions and len(rows) == 1 and len(metrics) == 1:
                observations[name]['value'] = rows[0]['metrics'][metrics[0]]
            for period in sorted(ga, key=len, reverse=True):
                if name.endswith('_' + period):
                    windows[name] = ga[period]
                    break
        elif name.startswith('search_') and isinstance(response, dict):
            rows = response.get('rows', [])
            observations[name] = {"source": "Search Console", "rows": rows, "value": None,
                                  "scope": "total" if name.removeprefix('search_') in search else "top rows or status"}
            period = name.removeprefix('search_')
            if period in search:
                windows[name] = search[period]
                if len(rows) == 1 and not rows[0].get('keys'):
                    observations[name]['totals'] = {k: numeric(rows[0].get(k)) for k in ['clicks', 'impressions', 'ctr', 'position']}
        elif name.startswith('bing_'):
            observations[name] = {"source": "Bing", "rows": response, "scope": "raw Bing dates; not aligned to Google"}
        elif name == 'leads':
            observations[name] = {"source": "Contact counts", "sheets": response}
    comparisons = {}
    for current, previous in [('week', 'previous_week'), ('month', 'previous_month'), ('month', 'month_last_year')]:
        for key in ['sessions', 'engaged_sessions', 'organic_sessions', 'ai_referral_sessions'] + [c['key'] for c in raw.get('conversions', [])]:
            a, b = key + '_' + current, key + '_' + previous
            comparisons[a + '_vs_' + previous] = comparison(observations.get(a, {}).get('value'), observations.get(b, {}).get('value'), windows.get(a), windows.get(b))
        a, b = 'search_' + current, 'search_' + previous
        for metric in ['clicks', 'impressions']:
            comparisons[a + '_' + metric + '_vs_' + previous] = comparison(observations.get(a, {}).get('totals', {}).get(metric), observations.get(b, {}).get('totals', {}).get(metric), windows.get(a), windows.get(b))
    for sheet in data.get('leads', []):
        source_label = ('sheet_' + str(sheet['sheet']) if 'sheet' in sheet
                        else 'source_' + str(sheet.get('source', 'unknown')))
        for current, previous in [('week', 'previous_week'), ('month', 'previous_month')]:
            a, b = sheet.get('periods', {}).get(current), sheet.get('periods', {}).get(previous)
            for metric in ['leads', 'qualified']:
                comparisons[f"{source_label}_{metric}_{current}"] = comparison(a.get(metric) if a else None, b.get(metric) if b else None, a, b, threshold=5)
    return {"file": path.name, "generated": raw.get('generated'), "run_type": raw.get('runType'),
            "provisional": path.name.endswith('-test.json'), "errors": raw.get('errors', []),
            "notes_count": len(raw.get('notes', [])), "notes": raw.get('notes', []),
            "ga4_responses": sum(v.get('source') == 'GA4' for v in observations.values()),
            "ga_periods": ga, "search_periods": search, "limits": raw.get('limits', {}),
            "conversions": raw.get('conversions', []), "observations": observations, "comparisons": comparisons}


def digest(folder, main=None):
    files = sorted(Path(folder).glob('*.json'), reverse=True)
    snapshots = [snapshot(p) for p in files]
    if not snapshots:
        raise ValueError('No JSON files found; no report baseline available.')
    latest = max(snapshots, key=lambda s: (s['generated'] or '', not s['provisional']))
    result = {"newest_file": latest['file'], "latest_is_provisional": latest['provisional'],
              "snapshots_never_summed": True, "snapshots": snapshots}
    if main:
        claims = Path(main) / 'content/claims.csv'
        if claims.exists():
            rows = list(csv.DictReader(claims.open(newline='')))
            today = date.today().isoformat()
            result['claims'] = {"expired_ids": [r['id'] for r in rows if r.get('expires_on') and r['expires_on'] < today],
                                "expiry_unspecified_ids": [r['id'] for r in rows if not r.get('expires_on')]}
        citations = Path(main) / 'research/ai-citations.csv'
        if citations.exists():
            rows = list(csv.DictReader(citations.open(newline='')))
            result['historical_ai_samples'] = {"count": len(rows), "dates": sorted({r['date'] for r in rows}),
                                               "by_engine": {e: sum(r['engine'] == e for r in rows) for e in sorted({r['engine'] for r in rows})},
                                               "warning": "Heterogeneous historical samples; no platform share or trend."}
    return result


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('data_folder')
    parser.add_argument('--main', default=str(Path(__file__).resolve().parents[1]))
    args = parser.parse_args()
    print(json.dumps(digest(args.data_folder, args.main), ensure_ascii=False, indent=2, allow_nan=False))
