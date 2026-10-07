# Contact — préparation de production

Préparé localement le 7 octobre 2026 ; aucun projet, stockage, accès public ou déploiement de production créé. Le candidat Google version 3 reste TEST uniquement et privé. Le site conserve son endpoint Contact version 1 ; `.env` n'est pas modifié.

## Sources à examiner

- `Code.gs` est généré depuis la concaténation core + google + web du candidat Google v3, dont le SHA-256 attendu est `c9e277d3eb644ad6c1d5543dd405cdfd511ea1ca659b7f97b278f715115168ff`. Le générateur refuse un autre contenu ou une transformation ambiguë.
- Mode exigé : production. Schéma de fichiers distinct : `nodina-production-contact-file-v1`. Les fichiers de recette sont refusés avant écriture. Les demandes ordinaires sont acceptées ; les noms TEST restent exclus des comptes.
- Manifeste identique en droits au candidat : Advanced Drive/Sheets, `drive.file` et envoi de courriel seulement. Aucun accès Gmail, Drive global, suppression ou scope de déclencheurs.
- `ndInitializeProduction_` crée un dossier et une synthèse propres au futur projet, privés et appartenant à JD. La clé est générée dans Google ; ne pas la lire ni la copier. Aucun lanceur public de maintenance dans le bundle.
- SHA-256 produit : `d344f3c2fdb09712efd7d9fb6e7fa5d72b2fd6c3510b6002e33721c1a82fecd1`.

Régénérer avec `node tools/forms/production/build.mjs tools/forms/production/Code.gs`. Le fichier de propriétés est un exemple, pas une configuration appliquée. La durée des jetons reste vide ; la proposition de 24 heures n'est pas adoptée.

## Raccordement du site préparé

`PUBLIC_CONTACT_STORAGE` vaut `legacy` par défaut. `per-request` active le client signé et un champ receipt_token vide. Le build ne génère jamais une référence signée. Le client obtient une preuve serveur puis conserve cette référence à chaque réessai ; seul un accusé positif émet l'événement de réception.

Sans JavaScript, le formulaire statique signé reste masqué. Un lien localisé ouvre le formulaire rendu par Google avec sa preuve serveur et son POST HTML ; build@nodina.com fournit aussi un contact par courriel. Cela ajoute une navigation. Le formulaire legacy conserve son POST direct. Les deux builds ont été vérifiés localement ; le transport JSON anonyme/CORS depuis le loopback est confirmé sur le candidat TEST v3 ; la future origine publique et le parcours complet avec JavaScript désactivé restent non vérifiés. L'absence de script dans le formulaire ne prouve pas à elle seule que l'enveloppe Google fonctionne quand JavaScript est entièrement désactivé.

Ne changer les variables du build de production qu'après recette du nouvel endpoint et validation des notices. Aucun service alternatif, proxy ou nouvel hébergeur introduit.

## Migration Reporting préparée

Installer la nouvelle source locale `tools/terraform-collector/Code.gs` avec `tools/forms/candidate/reporting-reader.gs` dans le projet Reporting existant, après revue. Son manifeste et son planning restent identiques. Le code actuel Google n'est pas modifié par cette préparation.

Configuration explicite au moment de la migration :

| Propriété | Valeur |
|---|---|
| CONTACT_LEADS_SOURCE | retained-contact-files-v1 |
| CONTACT_SUMMARY_ID | Synthèse du nouveau stockage de production, jamais celle de recette |
| CONTACT_SUMMARY_MAX_AGE_SECONDS | Durée à décider, entre 60 et 86400 |

Sans choix explicite de source, le nouveau code conserve legacy-contact-v1. En mode synthèse, aucune addition ni lecture de l'ancien classeur ; une synthèse indisponible crée une erreur et jamais un repli silencieux ou un faux zéro. Schéma du futur JSON : version 5. Les rapports annoncent des dossiers encore conservés ; l'effacement réduit les comptes historiques. Qualification reste null.

Le 7 octobre à 12 h 33 Paris, le lecteur a réellement lu la synthèse de recette depuis Reporting avec Sheets readonly existant : zéro demande commerciale, qualification null. Lanceur temporaire retiré, code original restauré exactement. [Preuve et limites](../../../reports/contact-production-preparation-20261007.md).

## Conditions de bascule encore ouvertes

1. Recette C/D clôturée : client JSON anonyme depuis le loopback confirmé ; HTML Workspace confirmé, parcours HTML anonyme et JavaScript entièrement désactivé non vérifié. JD demande de ne plus lancer d'essais. [Résultats et limites](../../../reports/contact-anonymous-recipe-20261007.md).
2. Retrait pendant la validité d'un jeton confirmé avec C, sans nouveau fichier ni notification. C/D et leurs notifications sont conservés ; leur suppression est différée. Cette préparation ne vaut pas une autorisation de purge.
3. Choisir les durées techniques et la cadence de reconstruction ; tester le budget Google et la fraîcheur avant la collecte du lundi. Aucun déclencheur nouveau n'est installé. Sans reconstruction après une réception, la synthèse reste unavailable. Une reconstruction manuelle ne suffit pas à qualifier le reporting automatique de production.
4. Créer et vérifier le stockage de production privé, autoriser les droits exacts, finaliser les notices et vérifier les deux langues.
5. Revue finale de l'URL, de la configuration et du retour arrière avant publication. Le retour arrière dirige les nouvelles réceptions vers l'ancien service ; il ne recopie pas les dossiers ni ne restaure ceux supprimés. Documenter séparément le traitement de l'ancien stockage.

Références relues le 7 octobre : [Content Service et redirections](https://developers.google.com/apps-script/guides/content#redirects), [HTML Service](https://developers.google.com/apps-script/guides/html/restrictions), [déclencheurs](https://developers.google.com/apps-script/guides/triggers/installable), [quotas](https://developers.google.com/apps-script/guides/services/quotas). La documentation décrit la plateforme ; les comportements de l'endpoint doivent être éprouvés.
