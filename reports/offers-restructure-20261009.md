# Révision des offres — prévisualisation du 9 octobre 2026

JD demande de réduire la densité de la home et de séparer les deux offres. Son « ok Go » autorise cette préparation. Aucun déploiement public effectué : le paquet public précédent reste conservé dans `tools/forms/production/.local/public-dist/` et les nouveaux textes sont en relecture.

## Choix préparés

- Priorité à la réalisation de solutions IA intégrées aux opérations : documents, connaissances et opérations entre logiciels. Ces usages sont des exemples possibles, sans résultat client inventé.
- Deux intentions distinguées : confier une réalisation à NODINA ou garder le pilotage produit et renforcer son équipe.
- Nom public proposé : **Solutions IA sur mesure**, en anglais **Custom AI solutions**. **AI-native Teams** conserve son nom. Aucun acronyme AICC n’est exposé ou développé sans définition validée.
- La home oriente. Les deux pages d’offre expliquent le problème, la solution, le périmètre et la prochaine action. Sélection, profils et manifeste restent accessibles sur leurs pages.
- Pas de nouvelle promesse de délai, gain, disponibilité, conformité ou référence client. Conditions et maintenance dépendent du périmètre convenu.

Ce choix commercial reste une hypothèse : aucune donnée ne démontre encore qu’il convertit mieux. Évaluer les demandes qualifiées par offre et leur progression commerciale ; une demande GA4 enregistrée ne vaut pas qualification. Les données initiales et le changement simultané de structure ne permettent pas une conclusion causale immédiate.

## Pages préparées

| Page | FR | EN | Sections | Mots FR / EN |
|---|---|---|---|---|
| Home | `/fr/` | `/en/` | 6 | 292 / 263 |
| Solutions IA | `/fr/solutions-ia-sur-mesure/` | `/en/custom-ai-solutions/` | 5 | 316 / 288 |
| AI-native Teams | `/fr/equipes-ai-native/` | `/en/ai-native-teams/` | 5 | 298 / 259 |

Prévisualisation locale : [home](http://127.0.0.1:4186/fr/), [solutions](http://127.0.0.1:4186/fr/solutions-ia-sur-mesure/), [équipes](http://127.0.0.1:4186/fr/equipes-ai-native/). Traductions accessibles par le menu de langue. Bandeau de maquette, noindex, aucune mesure GA4 sur localhost.

Le compteur utilise le texte de `main` dans le HTML, hors scripts/styles/SVG, de manière identique pour les deux versions. La home conservée contient 2 730 mots FR / 2 513 EN et 16 sections ; réduction d’environ 89 % de texte et passage à six sections. Cela mesure la densité éditoriale, pas les Core Web Vitals ou le taux de conversion.

## Contrôles effectués

- Build Astro sous Node 24 : 20 routes localisées, plus racine et 404.
- `python3 tools/check-site.py` : PASS, métadonnées, liens, ancres, assets, consentement et exclusion des fichiers internes.
- `node --test tests/analytics.test.mjs` : 15 tests ciblés passent, nouvelles routes incluses dans consentement et attribution nettoyée. Aucun appel GA4 réel.
- Test local ciblé du lecteur Reporting : un test passe, attribution des quatre nouvelles routes conservée et chemin privé neutralisé ; aucun appel Google ni notification.
- Navigateur : six pages FR/EN à 320 et 1 440 px, trois pages FR et home EN à 375 px ; aucun débordement horizontal. Menu mobile, changement de langue, navigation entre offres vérifiés. Aucune erreur/warning console observée.
- CTA Solutions FR et Teams EN : formulaire présélectionné sur `systems` et `teams`, sans saisie ni soumission. Valeurs du contrat Contact inchangées.
- Ancres historiques `#systems-detail` FR et `#teams-detail` EN : redirection vers la page dédiée ; query conservée pour le cas FR contrôlé.
- Compilation publique tentée uniquement pour vérifier le garde : rejet attendu avant construction, révision non approuvée. SHA-256 de la home publique conservée identique avant/après.

Pas de screenshot, formulaire de test, notification, test de charge, nouvelle soumission moteur ou contrôle de production effectué pour cette révision.

## Avant publication

1. JD relit les six pages et valide les nouveaux textes, le nom public de réalisation et la hiérarchie. Conserver les dates de l’ancienne publication ; enregistrer la nouvelle validation réelle et lever `reviewPending` seulement après cet accord.
2. Installer le lecteur Reporting local actualisé dans le bundle Google, en conservant paramètres et déclencheur. Le fichier `tools/forms/candidate/reporting-reader.gs` admet les quatre nouvelles routes ; la version Google n’est pas encore mise à jour. Sans cela, leur attribution Contact peut devenir `(unknown)` dans le rapport.
3. Préparer un candidat isolé avec Contact et consentement existants ; vérifier les vingt URL et leurs fichiers de découverte. La sitemap est générée depuis le plan approuvé, sans nombre de pages figé.
4. Publier après accord sur le candidat, contrôler les réponses publiques et les nouveaux liens. Le premier paquet public est conservé pour retour arrière.
5. Laisser les moteurs découvrir le sitemap actualisé, puis vérifier le traitement. Ne pas annoncer l’indexation ou des gains de conversion sans observation.

Le dossier de clôture précédent est historique. L’outil de conformité production ne doit pas être utilisé pour annoncer un score de succès sur cette révision : le plan a quatre brouillons et ne correspond pas encore au paquet de seize pages publié.
