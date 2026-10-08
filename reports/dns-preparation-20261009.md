# DNS NODINA préparés — 9 octobre 2026

**État actualisé : délégation DNS approuvée et appliquée ; voir ci-dessous.** Les sections de préparation conservent le relevé initial.

## Délégation appliquée après accord de JD

JD répond « ok » à la demande explicite de remplacement par chin.ns.cloudflare.com et finley.ns.cloudflare.com. Namecheap est passé sur Custom DNS avec ces deux valeurs ; enregistrement puis rechargement confirment leur persistance. Le registrar et les réglages de renouvellement ne sont pas modifiés.

Le registre parent .com et le résolveur consulté retournent déjà les deux serveurs Cloudflare. Les dix valeurs sont vérifiées sur chacun de ces serveurs : **20 correspondances sur 20**, y compris les TXT avec respect de la casse. Les destinations GitHub Pages, le MX et sa priorité 1 restent conservés. Tous les enregistrements importés restent DNS only ; aucun proxy n’est activé.

Le bouton « I updated my nameservers » est utilisé après l’enregistrement effectif ; une demande « Check nameservers now » est ensuite transmise. L’interface indique d’abord « Waiting for your registrar to propagate your new nameservers », puis, après rechargement, « Your domain is now protected by Cloudflare ». L’activation est ainsi confirmée ; la table DNS relue contient toujours dix valeurs DNS only. Le message générique d’accueil sur le proxy ne remplace pas ces statuts effectifs. Le certificat reste à constater avant les associations Worker publiques.

La sauvegarde locale ignorée consigne l’accord, les valeurs relues, la réponse du registre parent et les comparaisons. Aucune capture, notification, recette de formulaire ou soumission d’indexation. La prochaine étape reste l’ouverture de Contact Production par JD, selon PROMETHEUS §13.5, avec accord distinct pour son accès public. Aucun lancement du nouveau site ou activation GA4 n’est déduit de cet accord DNS.

## Relevé initial avant délégation

Après connexion de JD à Namecheap, la zone nodina.com est relevée dans Advanced DNS, tables Host Records entièrement développées et recherche vide. Neuf Host Records et un Mail Record sont présents. DNSSEC et Dynamic DNS sont désactivés ; aucune modification du registrar ou de sa délégation n’est effectuée.

## Reprise enregistrée dans Cloudflare

La zone nodina.com est créée dans le compte NODINA existant avec l’offre Free. Un fichier BIND construit depuis le relevé complet est importé ; aucun scan automatique n’est utilisé comme inventaire. La page DNS Records confirme dix enregistrements enregistrés et l’état **pending**.

| Usage | Enregistrements | État importé |
| --- | --- | --- |
| Site actuel GitHub Pages | 4 A à la racine, 1 CNAME www | Destinations conservées, DNS only |
| Google Workspace | 1 MX, priorité 1 | Destination conservée, DNS only |
| Authentification mail | SPF, DKIM, DMARC : 3 TXT | Contenus conservés, DNS only |
| Propriété Google | 1 TXT | Contenu conservé, DNS only |

Les dix valeurs correspondent au relevé Namecheap et aux réponses de son serveur faisant autorité. Les TXT sont comparés en respectant la casse et en concaténant leurs chaînes BIND ; le DKIM reste identique. La priorité MX est conservée. La page Cloudflare après enregistrement confirme dix lignes, toutes DNS only.

Namecheap affiche Automatic pour les TTL ; les réponses DNS observées donnent 1799 secondes. Le fichier préparé utilise cette valeur explicite, affichée 1799 sec après import. Il ne prétend pas exporter le réglage interne exact du TTL Automatic Namecheap.

Les cinq enregistrements Web portent l’attribut BIND `cf_tags=cf-proxied:false`, confirmé DNS only dans l’interface. L’option d’accueil autorise les robots et Bot Preference Sync est désactivé pendant la préparation ; ces préférences persistantes et les règles WAF restent à relire avant publication.

## Proposition initiale avant accord

Serveurs Cloudflare attribués :

- `chin.ns.cloudflare.com`
- `finley.ns.cloudflare.com`

La délégation publique reste `dns1.registrar-servers.com` / `dns2.registrar-servers.com`. Ne pas cliquer « I updated my nameservers » tant que le changement n’est pas effectivement appliqué. L’accord de préparation et la connexion de JD ne valent pas accord de délégation DNS.

La prochaine action proposée est de remplacer uniquement ces deux serveurs de noms dans Namecheap après accord explicite. Cloudflare servirait les dix valeurs conservées, avec les destinations actuelles de GitHub Pages et Google Workspace. Cette étape transfère la gestion DNS ; elle ne publie pas le nouveau site. Ne pas activer de proxy ou supprimer les anciens enregistrements Web à cette étape. La propagation peut être progressive ; constater l’activation sans créer de nouvelle recette de formulaire.

Pour revenir à la délégation précédente, sélectionner Namecheap BasicDNS et vérifier les dix valeurs depuis le relevé local ; le retour dépend aussi de la propagation DNS. Conserver l’ancien dépôt GitHub Pages et sa configuration jusqu’à stabilisation.

## Sauvegardes et suite

Inventaire Namecheap, fichier BIND, comparaison et état Cloudflare sont enregistrés dans `tools/forms/production/.local/`, ignoré par Git, fichiers mode 600. Aucune donnée WHOIS, contact personnel ou nouvelle capture n’est ajoutée. Les identifiants privés de comptes et de zone restent dans cette sauvegarde locale.

Contact Production reste Only myself ; son ouverture et son déploiement par JD selon PROMETHEUS §13.5 restent une étape distincte. Nouveau Worker public, associations de domaines, lancement, GA4 et soumissions d’indexation ne sont pas appliqués. Le candidat du 9 octobre reste disponible localement ; [dossier de publication](public-launch-preparation-20261009.md).

Aucun nouveau test, message de formulaire, notification ou capture. Cette étape ne modifie que la préparation DNS distante et sa documentation.

## Sources

[Configuration complète Cloudflare](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/) : préserver la zone avant de changer les serveurs de noms. [Import BIND Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/) : noms complets, attribut `cf-proxied` prioritaire sur l’option globale d’import. [Changement de serveurs Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/).
