**Bascule du 9 octobre 2026 :** JD confirme le déploiement public de la version 2. Google confirme Anyone et exécution sous jd@nodina.com ; endpoint standard fourni par Google enregistré localement et intégré au site public. Version 1 privée conservée ; pas de nouveau formulaire envoyé ni modification de propriétés/déclencheurs. [État et limites](../../../reports/public-launch-20261009.md). Les sections suivantes sont historiques.

# Contact — préparation de production

Le 7 octobre 2026, l'opérateur initialise « NODINA — Contact Production ». Dossier et synthèse distincts, accès privés vérifiés ; première reconstruction complete et un déclencheur horaire installés. Deux déploiements Only myself sont enregistrés, versions 1 et 2 ; Reporting est raccordé à la synthèse de production. [Résultat et limites](../../../reports/contact-production-setup-20261007.md). Le candidat Google version 3 reste TEST uniquement et privé. Le site conserve son endpoint Contact version 1 ; `.env` n'est pas modifié.

## Sources à examiner

- `Code.gs` est généré depuis la concaténation core + google + web du candidat Google v3, dont le SHA-256 attendu est `c9e277d3eb644ad6c1d5543dd405cdfd511ea1ca659b7f97b278f715115168ff`. Le générateur refuse un autre contenu ou une transformation ambiguë.
- Mode exigé : production. Schéma de fichiers distinct : `nodina-production-contact-file-v1`. Les fichiers de recette sont refusés avant écriture. Les demandes ordinaires sont acceptées ; les noms TEST restent exclus des comptes.
- Manifeste : Advanced Drive/Sheets, `drive.file`, envoi de courriel et `script.scriptapp` pour gérer le déclencheur horaire. Ce dernier droit est nouveau par rapport au candidat et doit être présenté avant consentement. Aucun accès Gmail ou Drive global.
- `Operations.gs` ajoute une reconstruction horaire privée. L'installation construit d'abord une synthèse complète puis conserve l'ID du déclencheur sous verrou ; une installation connue ne crée pas de doublon, un état ambigu demande une réconciliation. Un déclencheur installé, Every hour vérifié. Cinq exécutions automatiques horaires Completed sont relues le 7 octobre. L'horaire Google n'est pas une garantie de délai ; Reporting refuse une synthèse trop ancienne.
- `ndInitializeProduction_` crée un dossier et une synthèse propres au futur projet, privés et appartenant à JD. La clé est générée dans Google ; ne pas la lire ni la copier. Aucun lanceur public de maintenance dans le bundle.
- SHA-256 produit : `d344f3c2fdb09712efd7d9fb6e7fa5d72b2fd6c3510b6002e33721c1a82fecd1`.

Régénérer avec `node tools/forms/production/build.mjs tools/forms/production/Code.gs`. Les valeurs des fichiers `*.proposed.json` sont validées explicitement par JD le 7 octobre : validité de jeton de 3 600 secondes, reconstruction toutes les heures et fraîcheur Reporting de 7 200 secondes. Les propriétés Contact sont enregistrées et vérifiées dans Google ; les identifiants créés restent dans `.local/contact-setup.json`, exclu de Git. Les IDs des modèles publics restent vides. Le raccordement préparé se trouve dans `.local/reporting-properties.json` ; la migration Google est appliquée et ses trois propriétés enregistrées sont vérifiées. Le fichier d'exemple conserve les champs configurables vides.

Projet Google : `1Y4PS-8oTce9efTlO6adxoPHAdIhIA1yW8iShZEX4cNFtH0BUkuukozUe`. `Code.gs`, `Operations.gs` et `appsscript.json` sont enregistrés dans ce projet et leur contenu recopié depuis l'éditeur correspond exactement aux fichiers locaux. Le lanceur temporaire `Bootstrap.gs` est retiré après installation ; son modèle `Bootstrap.gs.txt` reste local. Ne pas exposer de maintenance dans la web app. Ne jamais lire ou copier la clé générée dans Google.

Ordre d'installation après acceptation des paramètres : ajouter les quatre propriétés non vides du fichier proposé, laisser les IDs et la clé à l'initialiseur ; sélectionner `initializeProduction` dans l'éditeur, présenter les trois scopes à JD et obtenir son consentement Google, puis exécuter cette initialisation une fois. Elle crée uniquement le stockage privé. Exécuter ensuite `installProductionSchedule` pour la première synthèse et le déclencheur. En cas de `setup uncertain` ou `schedule reconciliation required`, examiner l'état existant avant tout nouvel essai ; ne pas effacer les marqueurs de sécurité à l'aveugle. Retirer entièrement `Bootstrap.gs` avant le déploiement. Pour une maintenance ultérieure depuis le sélecteur de fonctions de l'éditeur, remettre temporairement le lanceur puis le retirer avant toute nouvelle version de déploiement. Reporting est migré séparément ; conserver sa sauvegarde locale et ses anciens paramètres pour retour arrière.

## Raccordement du site préparé

**Mise à jour du 8 octobre :** build et client signé acceptent les URL standard et Workspace `nodina.com` en `/exec`, sans réécriture. Un build séparé per-request/noindex, Analytics désactivé, utilise le déploiement privé version 2 enregistré. La configuration active et `dist/` restent legacy ; aucun appel au service. Les deux références légales sont ajoutées au lecteur Reporting puis sauvegardées dans Google après « Go » le 8 octobre : code relu identique, manifeste vérifié et déclencheur conservé, aucune exécution lancée. [Préparation et suite](../../../reports/contact-cutover-prepared-20261008.md).

`PUBLIC_CONTACT_STORAGE` vaut `legacy` par défaut. `per-request` active le client signé et un champ receipt_token vide. Le build ne génère jamais une référence signée. Le client obtient une preuve serveur puis conserve cette référence à chaque réessai ; seul un accusé positif émet l'événement de réception.

Sans JavaScript, le formulaire statique signé reste masqué. Un lien localisé ouvre le formulaire rendu par Google avec sa preuve serveur et son POST HTML ; build@nodina.com fournit aussi un contact par courriel. Cela ajoute une navigation. Le formulaire legacy conserve son POST direct. Les deux builds ont été vérifiés localement ; le transport JSON anonyme/CORS depuis le loopback est confirmé sur le candidat TEST v3 ; la future origine publique et le parcours complet avec JavaScript désactivé restent non vérifiés. L'absence de script dans le formulaire ne prouve pas à elle seule que l'enveloppe Google fonctionne quand JavaScript est entièrement désactivé.

Ne changer les variables du build de production qu'après recette du nouvel endpoint et validation des notices. Aucun service alternatif, proxy ou nouvel hébergeur introduit.

## Migration Reporting enregistrée

Les versions du 7 octobre de `tools/terraform-collector/Code.gs` et `tools/forms/candidate/reporting-reader.gs` sont installées dans le projet Reporting existant le 7 octobre, code sauvegardé et recopié exactement après rechargement ; manifeste et planning conservés. Aucun nouvel upload de test, à la demande de JD. Le rapport automatique du 12 octobre reste à vérifier.

Configuration explicite au moment de la migration :

| Propriété | Valeur |
|---|---|
| CONTACT_LEADS_SOURCE | retained-contact-files-v1 |
| CONTACT_SUMMARY_ID | Synthèse du nouveau stockage de production, jamais celle de recette |
| CONTACT_SUMMARY_MAX_AGE_SECONDS | 7200, validé par JD et enregistré dans Google |

Sans choix explicite de source, le nouveau code conserve legacy-contact-v1. En mode synthèse, aucune addition ni lecture de l'ancien classeur ; une synthèse indisponible crée une erreur et jamais un repli silencieux ou un faux zéro. Schéma du futur JSON : version 5. Les rapports annoncent des dossiers encore conservés ; l'effacement réduit les comptes historiques. Qualification reste null.

Le 7 octobre à 12 h 33 Paris, le lecteur a réellement lu la synthèse de recette depuis Reporting avec Sheets readonly existant : zéro demande commerciale, qualification null. Lanceur temporaire retiré, code original restauré exactement. [Preuve et limites](../../../reports/contact-production-preparation-20261007.md).

## Conditions de bascule encore ouvertes

1. Recette C/D clôturée : client JSON anonyme depuis le loopback confirmé ; HTML Workspace confirmé, parcours HTML anonyme et JavaScript entièrement désactivé non vérifié. JD demande de ne plus lancer d'essais. [Résultats et limites](../../../reports/contact-anonymous-recipe-20261007.md).
2. Retrait pendant la validité d'un jeton confirmé avec C, sans nouveau fichier ni notification. C/D et leurs notifications sont conservés ; leur suppression est différée. Cette préparation ne vaut pas une autorisation de purge.
3. Planning horaire installé et première reconstruction complete. JD ne demande plus de tests ; cinq exécutions automatiques horaires Completed sont observées ; le budget Google sous charge reste non mesuré. Sans reconstruction après une réception, la synthèse reste unavailable. Ne pas présenter une seule reconstruction comme une preuve de fonctionnement automatique durable.
4. Stockage de production privé créé et vérifié après consentement Google par JD. Finaliser les notices et vérifier les deux langues avant publication.
5. Revue finale de l'URL, de la configuration et du retour arrière avant publication. Le retour arrière dirige les nouvelles réceptions vers l'ancien service ; il ne recopie pas les dossiers ni ne restaure ceux supprimés. Documenter séparément le traitement de l'ancien stockage.

Références relues le 7 octobre : [Content Service et redirections](https://developers.google.com/apps-script/guides/content#redirects), [HTML Service](https://developers.google.com/apps-script/guides/html/restrictions), [déclencheurs](https://developers.google.com/apps-script/guides/triggers/installable), [quotas](https://developers.google.com/apps-script/guides/services/quotas). La documentation décrit la plateforme ; les comportements de l'endpoint doivent être éprouvés.
