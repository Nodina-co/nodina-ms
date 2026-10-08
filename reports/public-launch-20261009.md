# NODINA — mise en ligne publique, 9 octobre 2026

Le nouveau site est publié sur [nodina.com](https://nodina.com/fr/) après les accords explicites de JD pour Contact public et pour le site. Les seize pages FR/EN sont publiées le 9 octobre, heure de Paris. JD signale avoir retiré l’ancien GitHub Pages pendant la bascule.

## Hébergement et routage appliqués

- Worker `nodina-production`, version `cc253aca-e98a-4b49-abb7-4a31cff2e039`, 88 nouvelles ressources transférées. Préproduction privée séparée ; workers.dev et aperçus de production désactivés.
- Route `nodina.com/*`, zone nodina.com, comportement fail closed. Static Assets sert les fichiers et la page 404 ; aucune requête de contenu n’est envoyée à l’origine GitHub.
- Les quatre A existants et le CNAME www sont proxifiés, leurs destinations conservées. MX et quatre TXT Google Workspace/vérification demeurent DNS only avec leurs valeurs d’origine. Aucun enregistrement DNS supprimé.
- Règle de zone active : hostname égal à www.nodina.com ; 301 vers `concat("https://nodina.com", http.request.uri.path)`, paramètres de requête conservés.
- Universal SSL actif, apex et wildcard, échéance affichée 6 janvier 2027. Always Use HTTPS activé. Aucun forfait payant ajouté.

La proposition initiale de Custom Domains rencontre les anciens A/CNAME en conflit ; elle n’est pas appliquée. La configuration de référence est désormais [wrangler.production.json](../wrangler.production.json). Les anciens fichiers `.proposed.json` conservent la proposition historique, pas la topologie active.

## Contact Production

JD a confirmé son déploiement Google. Manage deployments confirme la version 2, « Me (jd@nodina.com) », accès Anyone, description « NODINA Contact Production — public — 2026-10-09 ». L’URL standard `/macros/s/…/exec` donnée par Google est enregistrée dans les métadonnées locales ignorées et intégrée au bundle public. Version 1 privée conservée. Le code, le manifeste, les propriétés et les déclencheurs ne sont pas modifiés pendant cette opération. Aucun nouveau formulaire envoyé.

## Disponibilité constatée

Constat HTTP en lecture seule à 23:38 UTC le 8 octobre / 01:38 Paris le 9 octobre, via l’IP publique Cloudflare avec validation TLS normale :

- 16 pages : HTTP 200, contenu identique au build publié (SHA-256). Canonical, hreflang, indexabilité et GA4 désactivé correspondent donc aux sorties contrôlées lors de la compilation.
- robots.txt, sitemap.xml, llms.txt, security.txt et fichier de propriété IndexNow : HTTP 200, contenu exact du build. Sitemap : les 16 pages publiées ; RSS préparé sans article.
- Page absente : HTTP 404 ; racine : 301 vers /fr/ ; HTTP : 301 vers HTTPS ; www : 301 vers l’apex avec chemin et paramètres conservés.
- Aucune nouvelle suite, recette, notification ou capture. Ces lectures vérifient la disponibilité de publication ; elles ne prouvent pas une nouvelle réception Contact ni une indexation.

Les DNS autoritaires Cloudflare et le résolveur 1.1.1.1 répondent déjà avec les IP Cloudflare. Le résolveur local du Mac retourne encore les anciennes IP GitHub au moment du constat ; Chrome affiche alors « Site not found ». Ce cache local peut retarder l’affichage du site, sans remettre en cause la réponse du nouveau Worker. Pas de purge du cache système effectuée.

GA4 reste désactivé dans le site. Cloudflare ajoute ses en-têtes réseau NEL/Report-To par défaut ; ne pas confondre cette télémétrie réseau avec GA4.

## Retour arrière

Conserver la version Cloudflare précédente avant chaque futur envoi public. L’archive locale du code ancien et le relevé DNS existent, mais GitHub Pages a été dépublié par JD : pointer de nouveau vers GitHub ne restaure pas un site. Un retour à cet hébergement demanderait de republier Pages, puis de vérifier ses réglages et son certificat. Préserver les cinq enregistrements mail/vérification dans toute intervention. Ne pas retirer la route active sans une destination disponible.

## Prochaine étape PROMETHEUS

Soumettre le sitemap aux comptes Search Console/Bing existants et les URL à IndexNow après accord de JD. La clé de propriété est maintenant servie publiquement ; aucune soumission n’a été effectuée. Reporting du 8 octobre conservé avec ses paramètres et son déclencheur ; première échéance hebdomadaire après migration le 12 octobre. Recherche, clusters/requêtes, briefs et articles/guides, ainsi que l’image de partage et ses tags sociaux, restent distincts de ce lancement. C/D et leurs notifications ne sont pas supprimés ; téléphone professionnel différé.
