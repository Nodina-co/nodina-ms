# Publication des articles POC IA, 28 octobre 2026

JD a approuvé les deux textes et demandé leur publication, puis précisé : « I just want you to get this live on prod ». Les textes approuvés sont conservés ; seuls les champs de date et de brouillon changent. Cette précision ne supprimait pas les étapes après publication exigées par `content/editorial-plan.md` §3b. Leur omission initiale a été corrigée après le rappel de JD, qui a explicitement autorisé la programmation LinkedIn des deux articles.

## Résultat vérifié

- FR : https://nodina.com/fr/blog/poc-ia-production/
- EN : https://nodina.com/en/blog/why-ai-pilots-never-reach-production/
- Version Cloudflare : `cee38248-37d2-44d3-b067-d8e1cf9dac35`, activée à 100 % sur `nodina-production`.
- Version précédente conservée : `38071249-6681-428f-96cd-3781c07ac7a9`.
- Vérification publique : 28 octobre à 09:32 UTC, soit 10:32 Europe/Paris.

Les deux articles répondent HTTP 200. Auteur Jean-David Collard, FAQ visible et structurée, dates du 28 octobre, canonicals, alternates FR/EN et robots indexables vérifiés. Les deux index du Journal, le sitemap, le flux RSS, les exports Markdown et les images Open Graph répondent HTTP 200 et comprennent les nouveaux contenus. Les empreintes du HTML public des articles et des index correspondent au paquet de production vérifié.

## Préparation et déploiement

Node 24.22.1. `npm run check` réussi : 52 tests, audit des 24 pages localisées. Revue de publication sans défaut bloquant. Le paquet public isolé est construit avec `python3 tools/build-release.py --production --node <Node24>`. `dist/` reste le build de prévisualisation et n’est pas envoyé.

Envoi par `wrangler versions upload --config wrangler.production.json --keep-vars`, puis activation de la version exacte par `wrangler versions deploy <version>@100% --config wrangler.production.json --yes`. Aucune commande `triggers deploy` ou `wrangler deploy`. La lecture API séparée des routes a été refusée par les permissions existantes ; aucune permission supplémentaire demandée. La version activée et les réponses du domaine public constituent les preuves de cette publication.

Les reçus techniques et les empreintes sont conservés dans le dossier local ignoré `tools/forms/production/.local/`, dont `posts-publication-health-20261028.json`. Le code local et les documents de suivi sont modifiés ; aucun commit, push ou PR réalisé pour cette publication directe.

## Indexation et diffusion requises après publication

Les deux URL brutes et les commandes ci-dessous ont été fournies dans le chat. Coller chaque URL séparément dans Google Search Console → Inspection de l’URL → Demander une indexation. Aucune indexation effective n’est déduite de leur accessibilité. JD a exécuté les deux commandes IndexNow ; sa capture du terminal fournie le 28 octobre 2026 affiche HTTP `200` pour la version FR et HTTP `200` pour la version EN. Les deux soumissions sont reçues ; cela ne confirme pas leur indexation. La demande manuelle dans Google Search Console reste à confirmer séparément.

Commandes IndexNow exécutées par JD depuis la racine du dépôt, chacune avec une réponse HTTP `200` :

```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://api.indexnow.org/indexnow?url=https://nodina.com/fr/blog/poc-ia-production/&key=$(cat tools/forms/production/.local/indexnow-key.txt)"
curl -s -o /dev/null -w "%{http_code}\n" "https://api.indexnow.org/indexnow?url=https://nodina.com/en/blog/why-ai-pilots-never-reach-production/&key=$(cat tools/forms/production/.local/indexnow-key.txt)"
```

Les deux articles ont été programmés avec le navigateur signé dans Chrome, via le planificateur natif de la page entreprise NODINA (identifiant LinkedIn `146884377`). La file était vide avant ajout. Les créneaux sont les deux prochains mardis ou jeudis après le 28 octobre, à 08:00 Europe/Paris. L’interface indique explicitement « Central European Standard Time, based on your location », soit CET / UTC+1 pour ces dates.

| Position | Langue | Créneau vérifié | Article |
|---|---|---|---|
| 1 | FR | jeudi 29 octobre 2026, 08:00 Europe/Paris | https://nodina.com/fr/blog/poc-ia-production/ |
| 2 | EN | mardi 3 novembre 2026, 08:00 Europe/Paris | https://nodina.com/en/blog/why-ai-pilots-never-reach-production/ |

Chaque enregistrement a affiché « Post scheduled. ». La vue « Nodina’s scheduled posts » montre les deux dates dans cet ordre, avec les aperçus des articles et leurs images Open Graph générées. Aucun article n’a été publié immédiatement. Aucun élément existant n’a été modifié ou supprimé. Capture de vérification : `/private/tmp/nodina-linkedin-schedule-20261028.png`.

Texte français programmé, sans hashtag :

```text
Un POC IA teste une approche sur un périmètre limité.
Passer en production demande un responsable du résultat, des données accessibles, des critères d’acceptation et des moyens d’exploitation. Ces décisions se prennent avant de construire la suite.
https://nodina.com/fr/blog/poc-ia-production/
```

Texte anglais programmé, sans hashtag :

```text
An AI proof of concept tests whether an approach can perform a defined task.
Production needs evidence that the complete workflow meets business acceptance criteria, with authorized data access and someone responsible for operating it. A working demo leaves those questions open unless the pilot tested them.
https://nodina.com/en/blog/why-ai-pilots-never-reach-production/
```

Preuve complémentaire fournie par JD le 28 octobre : le tableau de bord IndexNow affiche deux soumissions sur les dix-sept dernières heures, source « Self ». Une ligne est visible pour l’URL française, horodatée « Today at 18:02 ». La capture ne montre pas de ligne anglaise ; sa réception reste confirmée séparément par le HTTP 200 du terminal. Aucune indexation effective ni demande Google Search Console n’est déduite de cette capture.
