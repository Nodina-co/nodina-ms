# Configuration des comptes NODINA

**État courant au 6 octobre 2026 :** comptes confirmés, reporting hebdomadaire installé, module de consentement et événements GA4 préparés et testés localement. Collecte désactivée, aucun déploiement de ces modifications. Mesures améliorées du flux désactivées pour éviter les doublons ; rétention lue : événements deux mois, utilisateurs quatorze mois, reset d'activité activé. Quatre brouillons de confidentialité/cookies intégrés localement ; identité de NODINA SAS, build@nodina.com pour les droits et douze mois pour les contacts sans suite confirmés par JD. Base du contact, application de la conservation, durées techniques, garanties de transfert, validation des textes et recette Google réelle restent à finaliser avant activation publique. [Contrat de mesure](../../content/analytics.md), [preuve technique](../../reports/analytics-preparation-20261006.md), [brouillons et points ouverts](../../reports/legal-drafts-20261006.md). Les paragraphes suivants conservent l'historique du setup.

État au 5 octobre 2026 : JD confirme qu'aucun outil de mesure ou de référencement n'est configuré pour NODINA. Parcours actif : PROMETHEUS 0.3, un compte à la fois. Les créations de comptes, consentements et éventuels enregistrements DNS sont effectués par JD selon la section 3.

## 1. Google Analytics 4 — propriété et flux créés

JD termine la création du compte et de la propriété sous `jd@nodina.com` ; sa capture affiche les quatre premières étapes terminées. Le navigateur confirme la création réussie. L'agent crée ensuite le flux Web dans cette propriété existante, sans créer de nouveau compte ni accepter de conditions supplémentaires.

| Identifiant | Valeur relue |
|---|---|
| Compte Analytics | `410716626` (URL de la console) |
| Propriété numérique | `557424928` (Admin → Property details) |
| Flux Web | `16047238617` |
| Measurement ID | `G-J8NV7Z1HMX` (instructions de balise et accueil) |

[Console GA4](https://analytics.google.com/analytics/web/?authuser=4#/a410716626p557424928/reports/intelligenthome). Capture de la propriété créée (capture retirée le 7 octobre 2026). Ces identifiants de configuration ne sont pas des clés d'API ni des mots de passe.

| Champ | Paramètre de la propriété créée |
|---|---|
| Compte Analytics | NODINA |
| Propriété | NODINA — Site web |
| Fuseau des rapports | France Time, pour les rapports en heure de Paris |
| Devise | Euro |
| Catégorie | Computers & Electronics |
| Effectif | 1 à 10 salariés, confirmé par JD |
| Partages facultatifs | Les quatre options désactivées dans le brouillon avant création ; paramètres enregistrés à relire séparément |
| Objectifs sélectionnés | Generate leads ; Understand web and/or app traffic |
| Flux créé | Web, `https://nodina.com`, NODINA — Web ; mesures améliorées activées |

Le brouillon prêt pour création (capture retirée le 7 octobre 2026) est conservé comme historique. L'effectif, les objectifs, la catégorie, le fuseau et la devise sont relus dans Property details après création. Les e-mails facultatifs de Google sont décochés et enregistrés dans les préférences du compte utilisateur. L'accueil affiche **No data received from your website yet**. La rétention, les événements clés, les canaux et le contrôle de collecte restent à configurer dans la suite du parcours GA4.

Aucune balise installée dans le site à ce stade. Une propriété créée sans balise ne prouve pas une collecte ; l'installation et la vérification des événements suivent la préparation des comptes. Aucun passage en index ni ouverture de la préproduction ne découle de cette configuration.

## 2. Google Search Console — domaine validé

JD clique sur CONTINUE puis confirme « fait ». Google affiche **Ownership auto verified**, méthode **Domain name provider**. Aucun nouvel enregistrement DNS fourni ou modifié par l'agent. La propriété de domaine est `sc-domain:nodina.com`, ajoutée au compte le 5 octobre 2026 ; le compte connecté est `jd@nodina.com`. Les paramètres affichent **You are a verified owner**. [Console](https://search.google.com/u/4/search-console/settings?resource_id=sc-domain%3Anodina.com), preuve de validation (capture retirée le 7 octobre 2026).

Le fournisseur DNS précis et l'enregistrement existant ayant permis l'auto-validation ne sont pas identifiés par cette vérification. Google demande de conserver l'enregistrement DNS de validation. Aucun nouvel enregistrement ne doit être ajouté à l'aveugle.

Les rapports indiquent un traitement en cours et aucune donnée exploitable ; cela n'établit pas une absence de trafic. Aucun sitemap soumis ni requête d'indexation envoyée. La soumission du sitemap de production attend un site public approuvé et accessible. Le domaine privé `workers.dev` n'est pas ajouté comme propriété publique.

## 3. Bing Webmaster Tools — import Search Console confirmé ; IndexNow à finaliser

JD termine lui-même le parcours d'import depuis Google Search Console. Après un premier écran sans sites, il confirme que l'import a finalement fonctionné, puis signale une page blanche. L'agent constate cette page blanche et rouvre directement le tableau de bord NODINA avec une URL sans paramètres OAuth. La console se charge. **Verification Code → Google Search Console** indique explicitement que `https://nodina.com/` a été importé depuis Search Console et, étant déjà validé chez Google, ne nécessite aucun code de validation Bing. Preuve de validation par import (capture retirée le 7 octobre 2026). Le tableau de bord est laissé ouvert. La cause précise de la page blanche n'est pas établie. Aucun DNS modifié, aucune entrée supprimée ni nouvelle autorisation accordée par l'agent.

Les paragraphes suivants retracent la préparation avant cette confirmation.

Après le refus initial du lancement de connexion Google par le contrôle automatique, JD poursuit lui-même et fournit une capture de Bing avec le site `https://nodina.com/` ajouté manuellement, statut **Not verified**. Le profil Bing connecté est relu : **JD COLLARD, jd@nodina.com**. Aucun nouveau compte ni consentement créé par l'agent. Le fournisseur de connexion exact n'est pas établi par la seule lecture du profil.

Les méthodes de validation de l'ajout manuel sont examinées. Bing propose un CNAME de nom `4641167d975da28e9abb0538162e6784` et cible `verify.bing.com` ; une lecture DNS publique ne renvoie aucune valeur CNAME pour ce nom. Aucun enregistrement ajouté. Capture de l'option DNS (capture retirée le 7 octobre 2026).

JD demande « Pourquoi ne pas utiliser la Google Search Console pour l'import ? ». L'import est retenu pour la suite, puisque `sc-domain:nodina.com` est déjà validé ; aucun ajout DNS nécessaire dans ce parcours. La console est laissée sur **Import your sites from GSC**, bouton **Import**. Écran prêt (capture retirée le 7 octobre 2026).

Le contrôle automatique refuse le clic Import, car ce bouton peut lancer un consentement OAuth donnant accès à Search Console, non encore explicitement accordé. L'action n'est pas répétée ni contournée. JD doit ouvrir Import, choisir `jd@nodina.com` et lire/valider lui-même les permissions proposées. Ensuite sélectionner **NODINA seulement**, relire l'URL exacte et le statut de validation. Ne pas supprimer l'entrée manuelle ni importer d'autres sites pour résoudre un éventuel doublon. Aucun accès Search Console accordé à Bing par l'agent.

IndexNow et la soumission du sitemap restent à finaliser avec le lancement public approuvé ; aucun site privé `workers.dev` à soumettre. Le reporting n'est pas déclaré opérationnel tant que les sources ne répondent pas.

### Repérage DNS public, distinct de l'import

Le 5 octobre, `dig +short NS nodina.com` renvoie `dns1.registrar-servers.com.` et `dns2.registrar-servers.com.` ; ces serveurs correspondent aux DNS Namecheap d'après sa documentation officielle. Le registrar et les accès au compte DNS ne sont pas confirmés par ce relevé. Aucun changement de serveurs ou de zone DNS effectué.

## 4. Reporting — après confirmation des trois sources

Appliquer PROMETHEUS 15.2 : projet Google Cloud, collecte Apps Script, dépôt de données privé, essais et planification. Les trois comptes sont confirmés ; la préparation du [collecteur](../terraform-collector/README.md) et du [plan de mesure](../../content/analytics.md) est engagée. Six tests simulés réussis ; aucune collecte réelle ni planification. Google Cloud confirme NODINA Reporting / `nodina-reporting`, numéro `931529905894`, créé par JD dans l'organisation `nodina.com`. Sheets, Analytics Data et Search Console API sont activées. JD crée la configuration OAuth ; Audience confirme Internal. JD crée le projet Apps Script **NODINA - Reporting** ; Project Settings confirme son association au projet Cloud standard `931529905894`. Les deux sources sont collées/enregistrées par JD et comparées aux fichiers locaux. JD crée `Nodina-co/nodina-marketing-analytics` ; GitHub confirme Private, main et le README initial. Après vérification d'identité par JD, le formulaire du token fine-grained est limité au seul dépôt analytique, Contents R/W et Metadata R, expiration 2027-01-03. La génération et le collage dans Script Properties / GITHUB_TOKEN restent à JD. Aucun droit utilisateur OAuth sur les sources ou horaire de collecte n'est configuré à cette étape. Les sources doivent répondre avant de considérer le reporting comme opérationnel.

## Sources consultées le 5 octobre 2026

- [Google : configurer Analytics pour un site Web](https://support.google.com/analytics/answer/9304153?hl=fr) : compte, propriété, flux et installation de la balise sont des étapes distinctes.
- [Google : ajouter une propriété](https://support.google.com/analytics/answer/9744165?hl=en) : création et paramètres de propriété.
- [Google : valider la propriété du site](https://support.google.com/webmasters/answer/9008080?hl=fr) : validation des domaines par le fournisseur DNS.
- [Bing : Add and Verify site](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b) : import depuis Search Console et méthodes de validation ; contenu textuel obtenu dans le résultat de recherche officiel, l'ouverture web de cette application exige JavaScript.
- [Namecheap : DNS d'un domaine](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/) : correspondance des serveurs DNS publics relevés.
- [PROMETHEUS, référence du projet](../../prometheus_update_2026-10-01/PROMETHEUS.md), sections 0.3 et 3.

État courant après « remplacés » de JD : le remplacement des identifiants est confirmé par JD après l’incident de lecture UI. Les cinq Script Properties sont présentes et enregistrées ; seules leur présence et les trois valeurs non secrètes ont été vérifiées. Les nouvelles valeurs et la révocation ne sont pas inspectées par l’agent. Code.gs est affiché avec uploadTestReport sélectionné. JD doit lancer Run et autoriser Google sous jd@nodina.com ; la validité des accès sera confirmée par le test réel. Aucun premier test exécuté ni déclencheur installé. Test prêt (capture retirée le 7 octobre 2026).

État au 6 octobre après « fait » : le premier test réel termine sans erreur et [son JSON privé](https://github.com/Nodina-co/nodina-marketing-analytics/blob/main/data/2026-10-06-test.json) est relu. GA4, Search Console, Bing et Sheets répondent ; `errors` est vide, 58 notes décrivent les réponses statistiques vides sans les assimiler à des zéros mesurés. Les comptes Contact sont nuls sur les périodes arrêtées au 3 octobre ; aucune donnée personnelle n’est exportée. installWeeklySchedule est sélectionné, Run reste à JD ; cible lundi vers 09:00 Paris, ±15 minutes, première échéance le 12 octobre. Aucun horaire installé, terraform.md et premier rapport analytique encore à terminer.

État après le second « fait » du 6 octobre : installWeeklySchedule termine avec succès ; Triggers présente un déclencheur uploadWeeklyReport Time-based sous jd@nodina.com, lundi vers 09:00 Paris ±15 minutes. Première exécution automatique attendue le 12 octobre, à contrôler lors de la session suivante après cette date. [terraform.md](../../terraform.md) contient les instructions d’analyse ; AGENTS.md et CLAUDE.md du dépôt analytique y renvoient. Clone HTTPS côte à côte vérifié, aucun nouveau secret ; [premier rapport provisoire](https://github.com/Nodina-co/nodina-marketing-analytics/blob/main/reports/terraform-2026-10-06.md) enregistré et actualisé le même jour. Collecte installée ; mesure visiteurs GA4 encore sans balise/événements.

## Vérification contractuelle du 6 octobre 2026

Account details du compte NODINA 410716626 affiche France, les quatre partages facultatifs décochés et les Data Processing Terms **non acceptées**. DPA administration n’affiche aucun contact. Aucun réglage, accord contractuel ou collecte activé lors de cette lecture. La confirmation de connexion ne vaut pas acceptation contractuelle. [Dossier et étape ouverte](../../research/provider-contracts-20261006.md).

Après la réponse « accepté » de JD : contact principal enregistré et relu ; choix d’accord déjà coché par JD mais non sauvegardé, puis Save complété par l’agent. La console confirme **The Data Processing Terms for this account were accepted on October 6, 2026**. Le constat précédent est historique ; aucun partage facultatif ni collecte activé. [Preuves courantes](../../research/provider-contracts-20261006.md).
