# Préproduction privée NODINA

**En ligne le 5 octobre 2026 :** [NODINA, préproduction privée](https://nodina-preproduction.jd-fd3.workers.dev/fr/). Le Worker `nodina-preproduction` est protégé par Access sur **All traffic**, pour l'adresse exacte `jd@nodina.com`, avec une session de six heures. Les aperçus restent désactivés et aucun domaine personnalisé n'est associé. Les 63 requêtes anonymes contrôlées sont redirigées vers Access ; les dix pages FR/EN et leur affichage mobile sont vérifiés après connexion. [Rapport et preuves](../../reports/cloudflare-preproduction-20261005.md).

## Historique de préparation et d'autorisation

Préparation locale commencée le 4 octobre 2026. À cette étape, aucun déploiement du site et aucune URL de préproduction vérifiée. Après connexion de JD, le tableau de bord confirme **Jd@nodina.com's Account**, ID `fd3a2bc5aad5864906bab1ffbafc8007`, et **No projects found** dans Workers & Pages. La configuration cible explicitement ce compte. JD vérifie ensuite son e-mail ; Workers plans confirme **Free**, **$0**, **Current plan**. Le parcours Zero Trust Free annonce 50 utilisateurs et 0 $ par siège/mois, mais exige un moyen de paiement, les conditions et une autorisation de facturer les dépassements. L'agent ne remplit ni n'accepte ces éléments.

JD répond ensuite « fait ». Le tableau de bord Cloudflare One et les paramètres du compte NODINA sont accessibles ; ils affichent le domaine d'équipe `white-rain-6085.cloudflareaccess.com` et `jd@nodina.com`. Une navigation suivante révèle toutefois une session désormais connectée à **jd@checkia.fr**, avec seulement les comptes Checkia, et refuse l'accès au compte NODINA. La reconnexion au compte NODINA est demandée. Le forfait Zero Trust actif reste à relire après reconnexion ; aucune politique Access enregistrée par l'agent. La session Wrangler existante est expirée et doit également être renouvelée avant tout déploiement.

JD confirme sa reconnexion le 5 octobre. Le compte NODINA est de nouveau accessible ; la page des abonnements confirme **Workers Free — Active** et **Zero Trust Teams Free Base — Active**. Le parcours de connexion officiel Wrangler est ouvert avec seulement `user:read`, `account:read`, `workers:write` et le renouvellement `offline_access`. Le consentement affiche `jd@nodina.com` et **Jd@nodina.com's Account** ; l'autorisation est laissée à JD, sans déploiement.

JD répond « autorisé ». Le premier retour OAuth arrive après expiration du parcours ; l'agent relance exactement les mêmes permissions approuvées et termine leur renouvellement. Wrangler confirme ensuite `jd@nodina.com`, le compte NODINA et ces quatre droits. Aucun droit Access, Pages, base de données ou facturation en écriture demandé. Le formulaire de politique **NODINA préproduction — JD** est préparé dans Cloudflare One : Allow, adresse exacte `jd@nodina.com`, six heures, sans enregistrement. Huit heures n'est pas une option proposée par ce formulaire ; six heures est retenu pour la proposition finale.

Workers & Pages est relu après cette connexion : **No projects found**, sous-domaine de compte `jd-fd3.workers.dev`. L'intégration d'identité **Cloudflare** existe déjà. Utiliser ce fournisseur pour la connexion de JD ; aucun nouvel IdP ni OAuth d'un fournisseur tiers à ajouter. Capture du brouillon Access (capture retirée le 7 octobre 2026). La documentation de protection d'un Worker est revérifiée le 5 octobre : choisir `worker` / All traffic pour protéger tous ses points d'entrée.

JD autorise explicitement le premier déploiement privé. Build, 12 tests, audit des dix pages, contrôle de 48 fichiers et simulation sont revalidés. La politique réutilisable **NODINA préproduction — JD** est enregistrée, ID `a7f3be67-47ca-41cf-80ea-34354fc39ddf`, Allow, une règle, utilisée par zéro application. Elle n'assure donc encore aucune protection d'un Worker. Le déploiement fermé est tenté, mais échoue lors de la lecture initiale des déploiements avec **No access to the specified resource** : aucun transfert du paquet ni URL activée.

Le scope OAuth `workers:write` préparé initialement ne satisfait pas le droit **Workers Scripts Write** requis par l'API d'envoi. Le consentement corrigé est ouvert : `user:read`, `account:read`, `workers_scripts:write` et `offline_access` ; il remplace le scope Workers général et demande seulement l'accès d'écriture aux scripts. Le nouveau droit est laissé à JD pour approbation. Consentement corrigé (capture retirée le 7 octobre 2026), [permission officielle d'envoi](https://developers.cloudflare.com/api/resources/workers/subresources/scripts/methods/update/). L'accord de déploiement privé est acquis et ne doit pas être redemandé.

JD confirme « autorisé » pour ce consentement corrigé. Wrangler vérifie le compte exact puis transfère 46 ressources statiques ; `_headers` et `_redirects` sont traités comme configuration. Version `926cc206-8a72-4879-a036-55402dd465d7`, sans cible exposée initialement. L'application Access `699e8cce-da91-44bf-a7fd-873878c2c6bb` est ensuite créée sur ce Worker et associée à la politique JD ; application et politique sont relues à six heures. L'adresse `workers.dev` est activée seulement après cette vérification. Le fournisseur Cloudflare existant authentifie JD et ouvre le site. Aucun envoi réel de formulaire pendant cette mise en ligne.

## Configuration préparée

`wrangler.preproduction.json` décrit un Worker séparé `nodina-preproduction`, qui sert uniquement `dist/` sans code serveur. Wrangler 4.147.0 est verrouillé dans les dépendances de développement. Le fichier d'envoi conserve volontairement `workers_dev: false`, `preview_urls: false` et `routes: []`. Il diffère de l'état distant validé, où seule l'adresse `workers.dev` protégée est active. Un prochain envoi avec ce fichier désactive cette adresse ; relire Access puis la réactiver manuellement selon le parcours ci-dessous. Ces paramètres ne créent pas Access et ne prouvent pas qu'une ressource préexistante n'a aucun domaine : vérifier l'état distant avant tout envoi.

Les dix routes conservent leurs URL, le contenu FR/EN, `noindex`, les en-têtes de sécurité et la redirection `/` vers `/fr/`. La gestion des pages HTML ajoute la barre finale ; une URL absente utilise `404.html` avec un statut 404.

`PUBLIC_CONTACT_ENDPOINT` est un paramètre **de build Astro**. Le `.env` local contient déjà le service Google vérifié ; une installation neuve doit renseigner la même valeur avant de construire. Source de référence : [formulaire existant](../forms/README.md). Ne pas créer de nouveau classeur ou script. Ce paramètre n'est pas un secret et le définir seulement comme variable du Worker ne modifie pas les pages déjà construites. L'authentification du site ne privatise pas le service Apps Script public existant.

## Vérifier localement, sans déployer

Avec Node 24 et Python 3 :

```sh
npm ci
npm run preproduction:check
WRANGLER_SEND_METRICS=false WRANGLER_LOG_PATH=.wrangler/logs npm run preproduction:dry-run
```

Le contrôle exige un formulaire FR/EN actif vers le service Google documenté, des pages non indexables, l'exclusion des sources internes et les limites de fichiers statiques du forfait Free. La simulation Wrangler prépare uniquement des fichiers locaux dans `.wrangler/preproduction/`. Elle ne certifie ni la politique Access, ni les réponses HTTP du futur hébergement. Aucun script de déploiement automatique n'est ajouté à la CI.

## Accès validé et appliqué

**État actuel :** premier déploiement privé terminé et vérifié. L'accord de JD et l'autorisation Wrangler corrigée sont acquis. L'alternative temporaire par mot de passe n'a pas été implémentée. La recette d'un nouvel envoi réel de formulaire depuis cet hébergement reste à faire avec un accord distinct ; la publication publique reste une étape séparée.

Workers Static Assets sur le forfait **Workers Free**, protégé par **Cloudflare Access / Zero Trust Teams Free Base**. Les deux forfaits sont confirmés actifs dans le compte. Refuser toute option payante avec le budget supplémentaire nul.

Politique approuvée et appliquée : accès à JD seul, règle Allow sur l'adresse exacte `jd@nodina.com`, sans règle Everyone, Bypass ou domaine e-mail entier ; session de six heures. ID de politique `a7f3be67-47ca-41cf-80ea-34354fc39ddf`, application `699e8cce-da91-44bf-a7fd-873878c2c6bb`. Le fournisseur d'identité Cloudflare déjà présent est réutilisé. La vérification ne comprend pas de tentative depuis le compte d'une autre personne ; la restriction est établie par la règle relue et les contrôles anonymes.

Protéger **ce Worker seulement**, trafic complet, avec la destination Access `worker` plutôt que `preview_worker`. La protection couvre alors ses domaines et ses aperçus ; ne pas activer une règle globale sur tous les Workers d'un compte qui peut héberger d'autres projets. Éviter tout domaine de production NODINA pendant cette préparation.

## Parcours de déploiement privé

1. JD se connecte. Lire le compte cible, ses droits, le forfait Workers, Zero Trust et les éventuelles ressources `nodina-preproduction`. Ne pas réutiliser une ressource d'un autre projet sur la seule base de son nom.
2. Respecter l'accord de première mise en ligne privée acquis le 5 octobre, selon le gate de la section 3 de PROMETHEUS. Toute extension à d'autres personnes, publication publique, création de compte ou acceptation de conditions demande son propre accord.
3. Si la cible est nouvelle, envoyer le paquet avec les URL désactivées. Si elle existe, vérifier d'abord ses domaines, routes et protections pour éviter une exposition par une adresse existante.
4. Configurer et relire Access pour ce Worker, **All traffic**, avec la seule adresse approuvée. Si Zero Trust exige une inscription, JD la termine sur Free avant la suite.
5. Après confirmation de la politique, activer uniquement son adresse `workers.dev` dans le tableau de bord ; garder les aperçus désactivés et aucun domaine personnalisé. Le fichier d'envoi et le contrôle local restent fermés : chaque nouvel envoi doit être suivi de cette vérification et de la réactivation protégée. Consigner l'état distant observé dans le rapport, sans utiliser la configuration locale comme preuve d'Access.
6. Tester l'URL exacte retournée par Cloudflare sans session : pages FR/EN, 404, CSS, JavaScript et images doivent demander une authentification ou être refusés. La connaissance d'une URL d'asset ne doit donner aucun accès. Tester aussi les éventuelles anciennes URL et versions. Le `noindex` ne remplace pas Access.
7. JD s'authentifie. Contrôler FR/EN, navigation, filtres, passage de langue avec l'offre, mobile, redirections et 404. Les réponses HTML/assets doivent conserver `X-Robots-Tag` ; les redirections Cloudflare peuvent précéder `_headers`, donc ne pas supposer cet en-tête sur les réponses 3xx.
8. Vérifier le formulaire depuis cet hébergement. Un nouvel envoi réel doit être identifié TEST, utiliser les ressources existantes et être autorisé ; enregistrer la ligne, la confirmation et la réception Inbox. Les tests locaux du 4 octobre ne prouvent pas cette recette distante.
9. Conserver l'URL privée et les résultats dans le rapport. La publication publique reste distincte et attend notamment les faits des profils/Select, les pages légales et la mesure prévue par PROMETHEUS.

## Sources vérifiées le 4 octobre 2026

Validation locale terminée : build réussi, 12/12 tests et audit des dix pages réussis ; contrôle de préproduction réussi sur 48 fichiers ; Wrangler 4.147.0 termine avec `--dry-run: exiting now.` Les cas négatifs rejettent une URL publique activée et une source map ajoutée au paquet. Le test HTTP a nécessité une exécution autorisée hors sandbox après `listen EPERM`. Aucun envoi réel de formulaire pendant cette préparation.

- [Facturation Static Assets](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/) : requêtes statiques gratuites et illimitées, stockage sans coût supplémentaire. Les appels de code Worker relèvent d'un autre quota ; aucun script Worker n'est prévu ici.
- [Limites Workers](https://developers.cloudflare.com/workers/platform/limits/) : Free, 20 000 fichiers par version et 25 MiB par fichier.
- [Configuration Wrangler](https://developers.cloudflare.com/workers/wrangler/configuration/) : désactivation explicite des adresses `workers.dev` et d'aperçu/version.
- [Access pour un Worker](https://developers.cloudflare.com/workers/configuration/cloudflare-access/) : protection de tout le trafic d'un Worker, y compris ses domaines et aperçus ; Zero Trust doit être activé.
- [Offres Zero Trust](https://www.cloudflare.com/plans/zero-trust-services/) : offre gratuite annoncée ; les conditions concrètes du compte restent à vérifier, aucun nombre de sièges disponible n'est présumé.
- [Authentification HTTP Basic](https://developers.cloudflare.com/workers/examples/basic-auth/) et [Worker avant les assets](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/) : base technique de l'alternative temporaire ; HTTPS obligatoire, tous les chemins doivent passer par l'authentification. L'exemple du fournisseur seul n'est pas une certification de sécurité.
- [Pages statiques et 404](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/), [barre finale](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/), [en-têtes](https://developers.cloudflare.com/workers/static-assets/headers/), [redirections](https://developers.cloudflare.com/workers/static-assets/redirects/).
