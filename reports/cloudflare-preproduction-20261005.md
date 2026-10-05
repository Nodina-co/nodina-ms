# Préproduction privée NODINA — 5 octobre 2026

[Ouvrir NODINA](https://nodina-preproduction.jd-fd3.workers.dev/fr/), puis choisir le fournisseur **Cloudflare** pour se connecter avec `jd@nodina.com`.

## État déployé

| Élément | Valeur vérifiée |
|---|---|
| Compte | Jd@nodina.com's Account — `fd3a2bc5aad5864906bab1ffbafc8007` |
| Forfaits | Workers Free et Zero Trust Teams Free Base, actifs |
| Worker | `nodina-preproduction` |
| Version envoyée | `926cc206-8a72-4879-a036-55402dd465d7` |
| Ressources transférées | 46, plus configuration `_headers` / `_redirects` |
| Protection | Access, All traffic, ce Worker seulement |
| Politique | NODINA préproduction — JD, `a7f3be67-47ca-41cf-80ea-34354fc39ddf` |
| Application Access | `699e8cce-da91-44bf-a7fd-873878c2c6bb` |
| Autorisation | Allow, adresse exacte `jd@nodina.com`, session de six heures |
| Adresse active | `nodina-preproduction.jd-fd3.workers.dev` |
| Aperçus / domaines personnalisés | Désactivés / aucun |

JD a autorisé explicitement le déploiement privé, puis le droit corrigé Workers Scripts Write. Le paquet a été envoyé sans URL active. La protection et sa politique ont été relues avant d'activer la seule adresse protégée. L'indexation reste désactivée.

## Résultats

- Build, 12/12 tests, contrôle des dix pages, contrôle du paquet de 48 fichiers et simulation Wrangler réussis avant envoi.
- **63/63 chemins sans session** répondent HTTP 302 vers le domaine Access `white-rain-6085.cloudflareaccess.com`. Le contrôle couvre notamment les pages, leurs alias, toutes les ressources statiques envoyées et un chemin absent. Aucun cookie utilisé, aucune redirection suivie. [Résultats HTTP](cloudflare-private-http-20261005.json).
- Connexion effective de JD avec le fournisseur Cloudflare existant, puis ouverture de `/fr/` depuis la racine.
- **10/10 pages FR/EN** ouvertes après connexion : titres, H1, langues et meta robots `noindex,nofollow,noarchive` vérifiés.
- **10/10 pages à 320 pixels** : aucun débordement horizontal. Les contrôles desktop n'en détectent pas non plus.
- Filtres profils : deux disponibles, sept en mission ; changement EN → FR du formulaire conservant l'offre `systems` ; page absente affichant la 404 bilingue. [Résultats navigateur](cloudflare-private-browser-20261005.json).
- Formulaires FR/EN actifs vers le service Google existant ; aucun nouvel envoi réel. La recette locale du 4 octobre reste documentée dans le [raccordement](../tools/forms/README.md).

Les en-têtes de sécurité et `X-Robots-Tag` sont conservés dans le paquet envoyé ; leurs réponses authentifiées distantes n'ont pas été inspectées directement. L'affichage de la page 404 est vérifié, son statut HTTP après authentification ne l'est pas. Aucune tentative depuis le compte d'une autre personne : la restriction à JD repose sur la politique relue et les contrôles sans session.

## Preuves visuelles

- [Protection Worker et politique appliquée](screenshots/cloudflare-worker-access-20261005.jpg).
- [Adresse protégée active, aperçus désactivés](screenshots/cloudflare-private-url-20261005.jpg).
- [Écran de connexion Access](screenshots/cloudflare-access-login-20261005.jpg).
- [Homepage privée FR](screenshots/nodina-private-fr-home-20261005.jpg).
- [Affichage mobile](screenshots/nodina-private-mobile-20261005.jpg).

## Prochain envoi

La [configuration d'envoi](../wrangler.preproduction.json) reste volontairement fermée. Un déploiement avec ce fichier désactive l'adresse `workers.dev` ; il faut relire Access puis réactiver uniquement cette adresse protégée selon le [parcours](../tools/cloudflare/README.md). Le fichier local ne certifie pas l'état distant.

Le lancement public reste distinct. Les profils illustratifs, le statut réel de Select, les pages légales et la mesure restent à finaliser avant cette étape.
