# NODINA — prochaine étape PROMETHEUS : configuration de production

État au 7 octobre 2026, après clôture des essais par JD. Ce dossier prépare la bascule ; il ne certifie ni un lancement public ni la fin de PROMETHEUS.

## Ce qui est acquis

- Site FR/EN en préproduction privée, comptes GA4/GSC/Bing configurés, reporting hebdomadaire installé. Les résultats historiques sont dans [discovery](../research/discovery.md).
- Consentement GA4 et notices FR/EN préparés, mesure désactivée. Identité NODINA, contact build@nodina.com et douze mois après le dernier échange pour les demandes sans suite confirmés.
- Collecteur par dossier, client signé et variante de production séparée préparés. La [recette C/D](contact-anonymous-recipe-20261007.md) confirme le transport JSON anonyme depuis le loopback et le retrait pendant la validité du jeton. Aucun nouvel essai demandé.
- Reporting préparé pour lire une seule source explicite. Les chemins libres sont regroupés en `(unknown)` avant export ; le digest traite les formats ancien et nouveau.
- Contact Production initialisé : dossier vide et synthèse privés, accès vérifiés ; première reconstruction complete et un déclencheur Every hour installés. Cinq exécutions automatiques horaires Completed vérifiées. [Résultat de setup](contact-production-setup-20261007.md).

## Étape achevée : déploiement privé et raccordement Reporting

JD confirme explicitement « oui, valide les paramètres » le 7 octobre. Les quatre propriétés Contact non secrètes sont enregistrées et vérifiées ; le raccordement Reporting est enregistré :

| Choix | Valeur validée | Conséquence |
|---|---|---|
| Validité du jeton de formulaire | 3 600 secondes | Une heure pour compléter ou réessayer une même demande ; aucune prolongation automatique. Distinct de la conservation des données. |
| Reconstruction de la synthèse | Toutes les heures | Un déclencheur installé dans le projet de production, avec verrou et refus d'une couverture incomplète. Every hour relu dans Google. |
| Fraîcheur maximale lue par Reporting | 7 200 secondes | Tolère un retard de reconstruction ; au-delà, erreur explicite et aucun faux zéro. |
| Origine de réception | Nouveau projet Contact de production | Dossier, synthèse et clé distincts ; ne jamais utiliser les IDs du candidat TEST. |

Le projet séparé « NODINA — Contact Production » est créé sous jd@nodina.com : `1Y4PS-8oTce9efTlO6adxoPHAdIhIA1yW8iShZEX4cNFtH0BUkuukozUe`. JD confirme « initialisé » après consentement Google ; le journal Completed et les permissions privées du nouveau dossier et de sa synthèse sont vérifiés. Operations.gs installe ensuite le planning horaire accepté. Deux déploiements privés sont enregistrés, versions 1 et 2 ; leurs URL restent dans la configuration locale exclue de Git.

Les propriétés attendues sont recensées dans [Contact production](../tools/forms/production/README.md). Les identifiants de stockage sont conservés localement dans `tools/forms/production/.local/`, exclu de Git ; la clé générée dans Google n'est ni lue ni copiée dans Git.

Code.gs, Operations.gs et le manifeste Drive v3/Sheets v4 sont enregistrés dans le projet de production et comparés exactement aux sources locales. Le bundle Code.gs conserve son SHA-256 `d344f3c2fdb09712efd7d9fb6e7fa5d72b2fd6c3510b6002e33721c1a82fecd1`. Bootstrap.gs est retiré après installation ; aucun nouvel essai ni capture.

ND_MODE=production, ND_OWNER_EMAIL=jd@nodina.com, ND_TOKEN_TTL_SECONDS=3600 et ND_SUMMARY_EVERY_HOURS=1 sont sauvegardés dans Google et vérifiés. La limite CONTACT_SUMMARY_MAX_AGE_SECONDS=7200 est appliquée au Reporting avec la source explicite retained-contact-files-v1 et la synthèse de production.

Manage deployments confirme Execute as Me / Who has access Only myself pour les deux versions. Le Reporting reçoit le bundle préparé, sauvegardé et relu exactement ; ses trois nouvelles propriétés sont vérifiées et son déclencheur hebdomadaire existant est conservé. Aucun nouveau test ni upload, à la demande de JD ; le premier rapport automatique du 12 octobre devra confirmer la migration. [Preuves et limites](contact-production-setup-20261007.md).

Le site utilise toujours le formulaire legacy ; les éventuelles réceptions dans cet ancien stockage ne sont pas additionnées à la source de production. La sauvegarde locale du code Reporting permet le retour arrière.

## Ordre de la suite

Le 8 octobre, le [raccordement local du site est préparé](contact-cutover-prepared-20261008.md) : compatibilité Workspace, build séparé per-request privé et références légales dans le lecteur. Aucun changement de `.env`, du site actif ou de Google. Prochaine opération : sauvegarder le nouveau bundle Reporting en conservant ses propriétés, manifeste et déclencheur, sans nouvel upload de test.

1. Notices FR/EN actualisées et dossier de validation préparé : [revue locale](launch-validation-20261007.md). JD confirme « validé » : notices et procédure manuelle adoptées, avec revue des échéances au moins mensuelle. JD confirme ensuite que les profils actuels sont réels : référentiel et libellés corrigés. Le 8 octobre, JD confirme la méthode NODINA Select utilisable ; sa disponibilité ne reste plus ouverte. Outil logiciel non confirmé, exemple du site toujours illustratif. Le parcours HTML anonyme avec JavaScript entièrement désactivé reste non vérifié ; le contact par e-mail demeure disponible. Ne pas annoncer ce parcours comme certifié.
2. Vérifier le premier rapport hebdomadaire après migration, le 12 octobre. Garder l'ancien endpoint et l'ancien stockage disponibles pour un retour arrière des nouvelles réceptions ; aucune copie automatique des dossiers.
3. Mentions légales FR/EN préparées le 8 octobre : [revue](legal-notice-review-20261008.html), téléphone différé par JD hors de cette version, validation encore attendue. Leurs deux routes sont ajoutées à la liste de références du lecteur Reporting local le 8 octobre ; nouveau bundle préparé, sauvegarde Google encore à effectuer. Dossier unique de revue finale préparé : [textes des seize pages FR/EN](site-final-review-20261008.html), liens vers l’aperçu local. Validation regroupée des textes et de la structure encore attendue : les profils sont confirmés réels par JD ; la méthode Select est confirmée utilisable ; la FAQ n’annonce pas de logiciel disponible. Recenser les URL approuvées dans `content/PLAN.md` avant indexation.
4. Préparer le domaine public, redirections, sitemap, robots, feed, llms et paquet IndexNow uniquement pour ces URL. La préproduction doit rester protégée et non indexable.
5. Après accord explicite de lancement, effectuer la bascule publique puis les soumissions Google/Bing et la configuration des événements GA4. Ne pas traiter le commit/push comme cet accord de publication du site.

Les recherches manquantes de Phase 1, mots-clés/clusters, briefs éditoriaux et guides d'exploitation restent à terminer selon [PROMETHEUS, référence active désignée le 1er octobre](../prometheus_update_2026-10-01/PROMETHEUS.md). Les phases suivantes ne sont pas closes par les recettes Contact.
