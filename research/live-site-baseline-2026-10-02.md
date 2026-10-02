# Site public NODINA — observation initiale

2026-10-02. Lecture seule de [nodina.com](https://nodina.com/) dans le navigateur intégré. JD confirme ensuite que cette page est provisoire et destinée à être entièrement remplacée. Mode B et décision de ne pas importer de corpus éditorial conservés. Aucune modification du site ni connexion à son hébergement effectuée.

## Ce qui est accessible

Une page publique présente un conseil IA pour dirigeants et COMEX, avec cibles CAC 40 et ETI. Quatre rubriques d’offre : diagnostic, pilotage de programmes, audit/due diligence, formation. Navigation par ancres `#top`, `#manifeste`, `#services`, `#approche`, `#expertise`, `#contact`. Contact par lien e-mail protégé par Cloudflare ; fonctionnement de l’envoi non testé.

La page revendique des fondations doctorales, un parcours Europe/États-Unis, l’indépendance vis-à-vis des éditeurs, un NDA pour chaque échange et une réponse sous 48 heures ouvrées. Ce sont des textes existants, pas des engagements ajoutés au référentiel produit. Confirmer les engagements de contact et d’indépendance avant de les reprendre. La mention CAC 40 décrit une cible et ne prouve aucune référence client.

## Métadonnées du DOM rendu

| Élément | Observé le 2026-10-02 |
|---|---|
| Title | Nodina — Conseil en intelligence artificielle |
| Description | Cabinet de conseil IA, accompagnement stratégique CAC 40/ETI |
| H1 | Aucun élément `h1` trouvé dans le DOM rendu consulté |
| Canonical HTML | Aucune balise trouvée |
| Hreflang HTML | Aucun lien trouvé |
| Robots HTML | Aucune meta trouvée ; ne signifie pas absence de directive HTTP |
| JSON-LD | Aucun script `application/ld+json` trouvé |

Ce premier relevé DOM est complété ci-dessous par une lecture HTTP. Liens entrants, analytics, accessibilité, performance et disponibilité par pays ne sont pas audités. Les erreurs de lecture antérieures de l’outil web étaient propres à cette méthode et ne prouvaient pas l’absence de site.

## Complément HTTP après confirmation du remplacement

Lectures GET du 2026-10-02, sans session de compte ni modification distante. La lecture depuis le terminal isolé échoue d’abord en résolution DNS ; les requêtes de lecture autorisées hors de cette restriction aboutissent. Ce premier échec ne concerne pas la disponibilité du domaine.

| URL / contrôle | Réponse observée |
|---|---|
| `https://nodina.com/` | 200, HTML, 72 565 octets ; en-tête `server: GitHub.com` |
| `https://www.nodina.com/` | 301 vers `https://nodina.com/`, puis 200 |
| `http://nodina.com/` | 301 vers `https://nodina.com/`, puis 200 |
| `https://nodina.com/robots.txt` | 404 |
| `https://nodina.com/sitemap.xml` | 404 |
| `https://nodina.com/llms.txt` | 404 |
| `/cdn-cgi/l/email-protection`, cible du lien de contact sans fragment | 404 ; aucun envoi d’e-mail effectué |
| Racine avec User-Agent `GPTBot` | 200 |
| Racine avec User-Agent `ClaudeBot` | 200 |
| Racine avec User-Agent `PerplexityBot` | 200 |

Une seule page HTML éditoriale repérée dans les liens : la racine, avec six ancres internes. Le lien de protection d’e-mail est une route fonctionnelle à contrôler, pas une page à importer. Aucun flux annoncé dans les balises `link` du HTML récupéré. Environ 424 mots visibles dans le HTML après exclusion des scripts et styles, navigation et pied de page inclus ; ce nombre n’est pas une mesure de qualité éditoriale.

Le HTML confirme l’absence de H1, canonical, hreflang, meta robots et JSON-LD relevée dans le DOM. Aucun `X-Robots-Tag` ni `Set-Cookie` observé dans les réponses de cette série. Les cookies et scripts exécutés dans le navigateur ne sont pas audités par ce constat. Les en-têtes répondent GitHub ; le futur hébergement Cloudflare gratuit reste une décision distincte du déploiement actuel.

Les trois tests d’User-Agent montrent une réponse 200 depuis l’origine de cet audit ; ils ne simulent pas les IP des robots réels et ne prouvent ni indexation ni citation. Les 404 concernent les chemins testés, pas l’absence de tout fichier équivalent à une autre URL. Core Web Vitals, Search Console et backlinks restent non mesurés.

Pour le nouveau site : conserver l’entrée du domaine et vérifier les redirections ; définir explicitement son routage FR/EN ; ajouter les métadonnées et fichiers de découverte prévus ; tester le contact de bout en bout. Le lien de contact actuel renvoie une route 404 lors de la lecture HTTP : ne pas le recopier sans traitement approprié dans le nouvel hébergement.

## Conséquence pour la suite

Google affiche le domaine dans le premier résultat de marque du relevé privé. Deux réponses ChatGPT et deux Perplexity décrivent le positionnement de conseil actuel. Deux réponses Gemini confondent la marque avec Nobina, opérateur de transport sans lien établi avec NODINA. La seconde cite aussi [la page Companies & Projects de JD](https://www.jdcollard.com/companies-projects.html), dont le résumé de source visible décrit NODINA comme conseil stratégique pour comités exécutifs. Le futur référentiel doit rendre les deux offres d’ingénierie lisibles et cohérentes entre pages, métadonnées et profils. Aucune modification du site personnel, de cible ou d’URL décidée à partir de ces réponses.

JD confirme le remplacement intégral de cette page provisoire. Compléter l’audit des URLs et signaux existants pour préparer le remplacement sur le même domaine. Conserver la racine publique `https://nodina.com/` comme point d’entrée ; le traitement FR/EN de cette racine et toute autre modification d’URL seront explicités dans le plan. Ne pas supprimer la page en production avant que le nouveau site soit prêt et approuvé pour publication.
