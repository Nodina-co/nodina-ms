# NODINA — raccordement Contact préparé le 8 octobre 2026

Après « étape suivante », préparation locale de la bascule vers Contact Production. Aucun changement du site actif, déploiement Google ou publication publique.

## Résultat

Le build Astro et le client signé acceptent désormais les URL `/exec` de `script.google.com`, sous les chemins `/macros/s/`, `/a/macros/nodina.com/s/` et `/a/nodina.com/macros/s/`. La forme Workspace fournie est conservée ; aucune réécriture vers une URL standard ni disponibilité anonyme déduite. Le build refuse les autres hôtes, domaines Workspace, URL de développement, paramètres et fragments. Le client refuse aussi les identifiants d’URL et les ports non standard.

Le lecteur Reporting autorise maintenant les seize chemins de pages FR/EN, dont `/fr/mentions-legales/` et `/en/legal-notice/`. Les références libres restent regroupées en `(unknown)` avant export.

## Préparation privée et vérification statique

Dans `tools/forms/production/.local/`, exclu de Git : configuration proposée, build séparé, bundle Reporting et métadonnées de préparation. Dossier privé et fichiers de préparation protégés ; URL et identifiants ne sont pas recopiés dans ce rapport.

- Le build séparé utilise la version 2 du déploiement privé enregistrée le 7 octobre, avec `PUBLIC_CONTACT_STORAGE=per-request`. Il conserve `noindex` et Analytics désactivé.
- Les rendus Contact FR/EN comportent la cible configurée et les champs du client signé ; les notices utilisent la variante par dossier déjà approuvée.
- Compilation Astro réussie avec Node 24. Syntaxe du client et du bundle Reporting vérifiée sans exécution. Aucun appel Google, soumission, notification, capture ou nouvel essai.
- Le bundle Reporting préparé contient 26 898 caractères (26 902 octets UTF-8), SHA-256 `7155a3d9df58bce38d205679e0cacdac18b037d6a55f72f76b9636d2dd4620c3`.

La configuration `.env`, le build `dist/` et l’aperçu courant restent legacy. Le Reporting déployé conserve son bundle du 7 octobre de 26 852 caractères : l’ajout des deux références légales est seulement local. Les permissions privées enregistrées ne sont pas revérifiées ici ; cette préparation ne démontre aucun accès anonyme au nouveau service.

## Suite

1. Enregistrer le bundle Reporting préparé dans le projet existant, conserver manifeste, propriétés et déclencheur, puis comparer le code sauvegardé. Aucun nouvel upload de test.
2. Recueillir la validation regroupée des pages dans la [revue finale FR/EN](site-final-review-20261008.html) ; Confidentialité/Cookies et procédure de conservation restent déjà validés. Téléphone professionnel différé hors de cette version.
3. Préparer routage et indexation pour les seules URL approuvées. Obtenir l’accord explicite de lancement avant élargissement d’accès Google et publication. Activation GA4 distincte.

Le premier rapport hebdomadaire après migration reste à vérifier le 12 octobre. Conserver l’ancien endpoint et l’ancien stockage pour le retour arrière des nouvelles réceptions ; aucun transfert automatique des dossiers, aucune suppression autorisée par cette préparation. Voir [le suivi de production](production-handoff-20261007.md) pour les autres étapes PROMETHEUS.
