# NODINA — prochaine étape PROMETHEUS : configuration de production

État au 7 octobre 2026, après clôture des essais par JD. Ce dossier prépare la bascule ; il ne certifie ni un lancement public ni la fin de PROMETHEUS.

## Ce qui est acquis

- Site FR/EN en préproduction privée, comptes GA4/GSC/Bing configurés, reporting hebdomadaire installé. Les résultats historiques sont dans [discovery](../research/discovery.md).
- Consentement GA4 et notices FR/EN préparés, mesure désactivée. Identité NODINA, contact build@nodina.com et douze mois après le dernier échange pour les demandes sans suite confirmés.
- Collecteur par dossier, client signé et variante de production séparée préparés. La [recette C/D](contact-anonymous-recipe-20261007.md) confirme le transport JSON anonyme depuis le loopback et le retrait pendant la validité du jeton. Aucun nouvel essai demandé.
- Reporting préparé pour lire une seule source explicite. Les chemins libres sont regroupés en `(unknown)` avant export ; le digest traite les formats ancien et nouveau.

## Étape immédiate : initialiser le stockage privé

JD confirme explicitement « oui, valide les paramètres » le 7 octobre. Les quatre propriétés Contact non secrètes sont enregistrées et vérifiées ; le raccordement Reporting reste à faire :

| Choix | Valeur validée | Conséquence |
|---|---|---|
| Validité du jeton de formulaire | 3 600 secondes | Une heure pour compléter ou réessayer une même demande ; aucune prolongation automatique. Distinct de la conservation des données. |
| Reconstruction de la synthèse | Toutes les heures | Un déclencheur dans le futur projet de production, avec verrou et refus d'une couverture incomplète. Aucun déclencheur créé actuellement. |
| Fraîcheur maximale lue par Reporting | 7 200 secondes | Tolère un retard de reconstruction ; au-delà, erreur explicite et aucun faux zéro. |
| Origine de réception | Nouveau projet Contact de production | Dossier, synthèse et clé distincts ; ne jamais utiliser les IDs du candidat TEST. |

Le projet séparé « NODINA — Contact Production » est créé sous jd@nodina.com : `1Y4PS-8oTce9efTlO6adxoPHAdIhIA1yW8iShZEX4cNFtH0BUkuukozUe`. Aucune initialisation de stockage, exécution ou publication à ce stade. Le choix horaire dispose d'un helper privé `Operations.gs` et du scope `script.scriptapp` dans le manifeste préparé, à présenter avant consentement. Les consentements et l'installation restent à faire. Le sélecteur de l'éditeur est prêt sur `initializeProduction` ; JD doit lancer Run, consentir les droits Google puis terminer cette initialisation privée.

Les propriétés attendues sont recensées dans [Contact production](../tools/forms/production/README.md). Les IDs de production restent vides jusqu'à création. La clé doit être générée dans Google et ne doit être ni lue ni copiée dans Git.

Préparation reprise le 7 octobre : `Code.gs`, `Operations.gs`, le manifeste Drive v3/Sheets v4 et le lanceur temporaire `Bootstrap.gs` enregistrés dans le projet de production. Comparaison exacte par recopie de l'éditeur pour les sources ; aucune exécution, propriété de production appliquée ou autorisation OAuth accordée. Le bundle `Code.gs` conserve son SHA-256 `d344f3c2fdb09712efd7d9fb6e7fa5d72b2fd6c3510b6002e33721c1a82fecd1`. Contrôles locaux limités à la syntaxe et à l'intégrité ; aucune nouvelle recette ni capture. Le lanceur temporaire doit être retiré avant tout déploiement.

Après confirmation, ND_MODE=production, ND_OWNER_EMAIL=jd@nodina.com, ND_TOKEN_TTL_SECONDS=3600 et ND_SUMMARY_EVERY_HOURS=1 sont sauvegardés dans Google ; les quatre valeurs et l'état désactivé des champs enregistrés sont contrôlés. Aucune clé ou ID de stockage généré à cette étape. La limite CONTACT_SUMMARY_MAX_AGE_SECONDS=7200 est validée mais pas encore appliquée au Reporting.

## Ordre de la suite

1. Initialiser le stockage privé avec les paramètres validés et finaliser les notices sur le stockage réellement retenu. Le parcours HTML anonyme avec JavaScript entièrement désactivé reste non vérifié ; le contact par e-mail demeure disponible. Ne pas annoncer ce parcours comme certifié.
2. Préparer le projet Google de production séparé, son stockage privé et le raccordement Reporting explicite. Garder l'ancien endpoint et l'ancien stockage disponibles pour un retour arrière des nouvelles réceptions ; aucune copie automatique des dossiers.
3. Soumettre les pages finales à validation : les profils DEMO et NODINA Select restent des points ouverts. Recenser les URL approuvées dans `content/PLAN.md` avant indexation.
4. Préparer le domaine public, redirections, sitemap, robots, feed, llms et paquet IndexNow uniquement pour ces URL. La préproduction doit rester protégée et non indexable.
5. Après accord explicite de lancement, effectuer la bascule publique puis les soumissions Google/Bing et la configuration des événements GA4. Ne pas traiter le commit/push comme cet accord de publication du site.

Les recherches manquantes de Phase 1, mots-clés/clusters, briefs éditoriaux et guides d'exploitation restent à terminer selon [PROMETHEUS, référence active désignée le 1er octobre](../prometheus_update_2026-10-01/PROMETHEUS.md). Les phases suivantes ne sont pas closes par les recettes Contact.
