# Configuration des comptes NODINA

État au 5 octobre 2026 : JD confirme qu'aucun outil de mesure ou de référencement n'est configuré pour NODINA. Parcours actif : PROMETHEUS 0.3, un compte à la fois. Les créations de comptes, consentements et éventuels enregistrements DNS sont effectués par JD selon la section 3.

## 1. Google Analytics 4 — propriété et flux créés

JD termine la création du compte et de la propriété sous `jd@nodina.com` ; sa capture affiche les quatre premières étapes terminées. Le navigateur confirme la création réussie. L'agent crée ensuite le flux Web dans cette propriété existante, sans créer de nouveau compte ni accepter de conditions supplémentaires.

| Identifiant | Valeur relue |
|---|---|
| Compte Analytics | `410716626` (URL de la console) |
| Propriété numérique | `557424928` (Admin → Property details) |
| Flux Web | `16047238617` |
| Measurement ID | `G-J8NV7Z1HMX` (instructions de balise et accueil) |

[Console GA4](https://analytics.google.com/analytics/web/?authuser=4#/a410716626p557424928/reports/intelligenthome). [Capture de la propriété créée](../../reports/screenshots/nodina-ga4-property-created-20261005.jpg). Ces identifiants de configuration ne sont pas des clés d'API ni des mots de passe.

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

Le [brouillon prêt pour création](../../reports/screenshots/nodina-ga4-ready-create-20261005.jpg) est conservé comme historique. L'effectif, les objectifs, la catégorie, le fuseau et la devise sont relus dans Property details après création. Les e-mails facultatifs de Google sont décochés et enregistrés dans les préférences du compte utilisateur. L'accueil affiche **No data received from your website yet**. La rétention, les événements clés, les canaux et le contrôle de collecte restent à configurer dans la suite du parcours GA4.

Aucune balise installée dans le site à ce stade. Une propriété créée sans balise ne prouve pas une collecte ; l'installation et la vérification des événements suivent la préparation des comptes. Aucun passage en index ni ouverture de la préproduction ne découle de cette configuration.

## 2. Google Search Console — domaine validé

JD clique sur CONTINUE puis confirme « fait ». Google affiche **Ownership auto verified**, méthode **Domain name provider**. Aucun nouvel enregistrement DNS fourni ou modifié par l'agent. La propriété de domaine est `sc-domain:nodina.com`, ajoutée au compte le 5 octobre 2026 ; le compte connecté est `jd@nodina.com`. Les paramètres affichent **You are a verified owner**. [Console](https://search.google.com/u/4/search-console/settings?resource_id=sc-domain%3Anodina.com), [preuve de validation](../../reports/screenshots/nodina-search-console-verified-20261005.jpg).

Le fournisseur DNS précis et l'enregistrement existant ayant permis l'auto-validation ne sont pas identifiés par cette vérification. Google demande de conserver l'enregistrement DNS de validation. Aucun nouvel enregistrement ne doit être ajouté à l'aveugle.

Les rapports indiquent un traitement en cours et aucune donnée exploitable ; cela n'établit pas une absence de trafic. Aucun sitemap soumis ni requête d'indexation envoyée. La soumission du sitemap de production attend un site public approuvé et accessible. Le domaine privé `workers.dev` n'est pas ajouté comme propriété publique.

## 3. Bing Webmaster Tools — import Search Console confirmé ; IndexNow à finaliser

JD termine lui-même le parcours d'import depuis Google Search Console. Après un premier écran sans sites, il confirme que l'import a finalement fonctionné, puis signale une page blanche. L'agent constate cette page blanche et rouvre directement le tableau de bord NODINA avec une URL sans paramètres OAuth. La console se charge. **Verification Code → Google Search Console** indique explicitement que `https://nodina.com/` a été importé depuis Search Console et, étant déjà validé chez Google, ne nécessite aucun code de validation Bing. [Preuve de validation par import](../../reports/screenshots/nodina-bing-import-verified-20261005.jpg). Le tableau de bord est laissé ouvert. La cause précise de la page blanche n'est pas établie. Aucun DNS modifié, aucune entrée supprimée ni nouvelle autorisation accordée par l'agent.

Les paragraphes suivants retracent la préparation avant cette confirmation.

Après le refus initial du lancement de connexion Google par le contrôle automatique, JD poursuit lui-même et fournit une capture de Bing avec le site `https://nodina.com/` ajouté manuellement, statut **Not verified**. Le profil Bing connecté est relu : **JD COLLARD, jd@nodina.com**. Aucun nouveau compte ni consentement créé par l'agent. Le fournisseur de connexion exact n'est pas établi par la seule lecture du profil.

Les méthodes de validation de l'ajout manuel sont examinées. Bing propose un CNAME de nom `4641167d975da28e9abb0538162e6784` et cible `verify.bing.com` ; une lecture DNS publique ne renvoie aucune valeur CNAME pour ce nom. Aucun enregistrement ajouté. [Capture de l'option DNS](../../reports/screenshots/nodina-bing-cname-20261005.jpg).

JD demande « Pourquoi ne pas utiliser la Google Search Console pour l'import ? ». L'import est retenu pour la suite, puisque `sc-domain:nodina.com` est déjà validé ; aucun ajout DNS nécessaire dans ce parcours. La console est laissée sur **Import your sites from GSC**, bouton **Import**. [Écran prêt](../../reports/screenshots/nodina-bing-import-ready-20261005.jpg).

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
