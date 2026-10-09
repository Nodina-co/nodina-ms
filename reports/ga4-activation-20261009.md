# Activation GA4 — 9 octobre 2026

JD autorise explicitement « ok pour activer GA4, Go ». GA4 est activé sur les seize pages publiques de nodina.com, après consentement du visiteur. La préproduction et le candidat restent exclus.

## Publication et retour arrière

Worker `nodina-production`, version `8f0b65c7-ae6c-4d50-9264-6209c7fcaa66`, déployée à 100 % le 9 octobre 2026. Version précédente, sans mesure : `cc253aca-e98a-4b49-abb7-4a31cff2e039`.

Le bundle est compilé avec Node 24 puis envoyé par `wrangler versions upload --config wrangler.production.json --keep-vars` et activé par `wrangler versions deploy <version>@100% --config wrangler.production.json --yes`. Ces commandes conservent les routes existantes ; aucun changement DNS, domaine, accès Contact ou préproduction. Aucun nouvel envoi d’indexation.

`content/publication.json` enregistre l’autorisation Analytics. `tools/build-release.py --production` active la mesure seulement avec cet accord enregistré ; le candidat reste désactivé. Les notices Confidentialité/Cookies FR/EN décrivent désormais la collecte active et le retrait du choix, avec mise à jour au 9 octobre.

## Réglages et signification

- Compte `410716626`, propriété `557424928`, flux Web `16047238617`, balise `G-J8NV7Z1HMX` : identifiants relus dans Google.
- Mesures améliorées désactivées, aucun tag connecté supplémentaire. Module client inchangé : Google Signals et personnalisation publicitaire désactivés ; consentements publicitaires refusés.
- Conservation existante relue et conservée : événements deux mois, utilisateurs quatorze mois, réinitialisation sur nouvelle activité activée. Cela ne fixe pas la durée de tous les rapports agrégés.
- `generate_lead` enregistré comme événement clé, comptage une fois par événement, sans valeur monétaire par défaut. Il signifie une demande enregistrée, pas une qualification commerciale. Les événements clés préexistants restent présents ; le module n’émet ni `purchase`, ni `qualify_lead`, ni `close_convert_lead`.
- `page_ref` enregistré comme dimension personnalisée de portée événement, pour une page NODINA connue, sans paramètres ni champ de formulaire.

## Vérification limitée à l’activation

Le build valide les seize configurations `enabled: true, preview: false`, les canoniques, les robots et le formulaire per-request. Hors Confidentialité/Cookies, les pages HTML ne changent que par ce drapeau. Les six pages accueil et notices FR/EN sont relues par HTTPS avec curl : réponses réussies, empreintes SHA-256 identiques au bundle publié. Le client HTTP Python a reçu 403 ; curl et Chrome ont confirmé la disponibilité.

Chrome ouvre l’accueil public français : panneau de choix visible, aucune balise `nodina-google-tag` dans le DOM avant acceptation. Après Accepter, le panneau est masqué et la balise Google est présente avec l’identifiant attendu. GA4 Realtime affiche un utilisateur actif, une vue « NODINA — Votre équipe d’ingénieurs AI-native » et les événements `page_view`, `first_visit`, `session_start`, chacun une fois. Les deux derniers sont des événements automatiques du SDK après consentement.

Aucune soumission de formulaire, notification ou événement de demande simulé. `primary_cta_click`, `form_start` et `generate_lead` sont implémentés mais leur réception réelle n’est pas confirmée par cette vérification. Les rapports standard peuvent encore afficher l’avertissement initial ; Realtime confirme la réception. La visite de vérification fait partie des premiers chiffres et ne constitue pas une demande commerciale.

Les fichiers de déploiement, la sauvegarde du bundle précédent et les reçus d’indexation restent locaux et ignorés. Aucune capture créée. Le reporting hebdomadaire existant conserve ses paramètres et son déclencheur ; première exécution automatique attendue le 12 octobre vers 09:00 Paris.

Sources techniques : [Google — mode de consentement basique](https://developers.google.com/tag-platform/security/concepts/consent-mode), [Cloudflare — versions et déploiements](https://developers.cloudflare.com/workers/wrangler/commands/workers/).
