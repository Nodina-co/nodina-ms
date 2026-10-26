# Mise en production — refonte du site et langue par navigateur

**Préparé le 26 octobre 2026 par Chloe pour JD.** Chloe n’a pas d’accès Cloudflare ; les étapes 2 à 5 sont à faire par JD, sur la machine qui contient le dossier privé `tools/forms/production/.local/`.

## Ce qui change

Deux commits sur `main`, déjà poussés sur GitHub :

| Commit | Contenu |
|---|---|
| `f25e437` | Réécriture des textes FR/EN : home, Conseil et intégration IA (ex « Solutions IA sur mesure », même URL), AI-native Teams, Contact, Sélection, Profils, À propos. Même design. |
| `8dbfc55` | La racine `nodina.com/` choisit la langue selon le navigateur : `/fr/` si le navigateur préfère le français, `/en/` sinon. Un petit Worker (`src/worker/index.mjs`) fait cette redirection ; tout le reste reste des assets statiques. `x-default` hreflang pointe désormais sur la racine. |

Aucune modification du formulaire Contact, du consentement GA4, des pages légales ni des routes. Préproduction inchangée (statique, française).

**À relire avant déploiement :** les textes français ont été écrits par Chloe/Claude, pas par JD. Une relecture native des pages FR est recommandée. Les textes sont dans `content/site/offers.fr.json` et `content/site/fr.json`.

## Nouveauté dans la configuration Wrangler

`wrangler.production.json` contient maintenant `main`, `assets.binding` et `assets.run_worker_first: ["/"]`. L’envoi transporte donc le script Worker **et** les assets. `wrangler versions upload` s’en charge ; rien à faire à la main.

## Étapes

### 1. Récupérer le code

```sh
git pull origin main
npm ci
npm run check
```

Attendu : 52 tests, `PASS: 20 localized draft pages…`.

### 2. Construire le paquet public

```sh
python3 tools/build-release.py --production --node <chemin-node24>
```

Le script lit `tools/forms/production/.local/site-contact-cutover.prepared.env` (endpoint Contact) et `indexnow-key.txt`, et écrit dans `tools/forms/production/.local/public-dist`. Procédure habituelle, inchangée.

### 3. Vérifier le paquet en local (facultatif)

```sh
PORT=4180 node tools/preview.mjs
```

`http://127.0.0.1:4180/` doit rediriger vers `/en/` ou `/fr/` selon la langue du navigateur ; sans JavaScript, une page de secours propose les deux liens. Attention : ce preview sert `dist/` (le build local), pas `public-dist`.

### 4. Envoyer et déployer

```sh
npx wrangler versions upload --config wrangler.production.json --keep-vars
```

Noter l’identifiant de version affiché, puis :

```sh
npx wrangler versions deploy <version-id>@100% --config wrangler.production.json --yes
```

Ne pas utiliser `wrangler deploy` ni `triggers deploy` (risque de retirer la route `nodina.com/*`, cf. `tools/cloudflare/README.md`).

### 5. Contrôler en ligne

- `https://nodina.com/` depuis un navigateur en anglais → `/en/` ; en français → `/fr/`. La réponse porte `Vary: Accept-Language`.
- `https://nodina.com/en/` et `/fr/` affichent le nouveau titre « Put AI to work in the business you already run. » / « Mettez l’IA au travail dans l’entreprise que vous dirigez déjà. »
- `/en/custom-ai-solutions/` et `/fr/solutions-ia-sur-mesure/` répondent 200 (URL conservées).
- Formulaire Contact : un envoi de test si souhaité, procédure habituelle.

Vérification rapide en ligne de commande :

```sh
curl -sI -H 'Accept-Language: en-US,en;q=0.9' https://nodina.com/ | grep -i '^location'
curl -sI -H 'Accept-Language: fr-FR,fr;q=0.9' https://nodina.com/ | grep -i '^location'
```

### Retour arrière

Cloudflare conserve les versions précédentes :

```sh
npx wrangler versions list --config wrangler.production.json
npx wrangler versions deploy <ancienne-version>@100% --config wrangler.production.json --yes
```

## Après déploiement

- Resoumettre le sitemap dans Search Console et Bing (textes et titres modifiés), procédure du 9 octobre.
- Mettre à jour `content/PLAN.md` / `content/decisions.md` avec la date de mise en ligne, selon l’usage du projet.
