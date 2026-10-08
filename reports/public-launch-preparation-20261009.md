**État actuel, 9 octobre 2026 :** lancement public autorisé explicitement et appliqué, seize pages FR/EN publiées ; Contact version 2 public, GA4 désactivé. Cloudflare sert nodina.com ; www redirigé, HTTPS actif. GitHub Pages dépublié par JD. [Bascule vérifiée](public-launch-20261009.md). Les paragraphes suivants conservent l’historique daté.

# Préparation de la publication NODINA — 9 octobre 2026

JD valide les textes et la structure des seize pages FR/EN et autorise la préparation de la mise en ligne. Les pages sont **ready**, pas encore publiées. Ce dossier prépare la bascule ; aucune publication du nouveau site, ouverture Contact, collecte GA4 ou soumission d’URL n’est effectuée. Après accord DNS distinct de JD, la délégation Cloudflare est appliquée avec ses dix enregistrements conservés ; Cloudflare confirme ensuite son activation, avec dix valeurs toujours DNS only : [reprise DNS vérifiée](dns-preparation-20261009.md).

## Paquet préparé

- Registre : [publication.json](../content/publication.json), présenté dans [PLAN.md](../content/PLAN.md). Accord de lancement et dates de publication restent vides.
- Build isolé : [build-release.py](../tools/build-release.py). Le candidat retire les bandeaux de maquette et de revue légale, conserve noindex, utilise le formulaire per-request préparé et désactive Analytics. Le build habituel conserve la présentation de revue et le service existant.
- Seize pages, canonical nodina.com, alternates FR/EN/x-default et données structurées existantes conservés. Chaque page dispose de son texte Markdown ; llms.txt, llms-full.txt et un flux RSS vide sont générés. Aucun article ou guide n’est inventé.
- Proposition d’indexation séparée : sitemap des seize pages ready, robots publics et paquet IndexNow. Le sitemap réellement servi par le candidat est vide : aucune page ready n’est déclarée published.
- security.txt préparé aux deux emplacements RFC, avec l’adresse existante build@nodina.com et expiration le 9 avril 2027 ; aucun délai de réponse ou programme de récompense annoncé.
- Worker public distinct proposé : [configuration fermée du candidat](../wrangler.release-candidate.json), [configuration des domaines à la bascule](../wrangler.production.proposed.json), [redirection www proposée](../tools/cloudflare/www-redirect.proposed.json). workers.dev et les URL de versions restent désactivés. Ces fichiers ne prouvent aucun réglage distant.
- Racine vers /fr/ ; anciennes ancres services, approche, expertise, manifeste et contact orientées vers les sections ou pages correspondantes dans le navigateur. Les fragments ne sont pas envoyés au serveur. Les chemins inconnus restent des 404.

Les sorties et la configuration Contact sont conservées dans le dossier local ignoré `tools/forms/production/.local/`. Les identifiants de stockage, URL préparées, sauvegardes privées et captures ne sont pas publiés dans Git. Le paquet contient uniquement les assets statiques et fichiers publics générés.

Les droits Wrangler existants ne sont pas étendus. Leurs permissions sur une future zone et ses domaines ne sont pas confirmées ; les associations pourront être appliquées dans le tableau de bord, ou avec les seuls droits nécessaires après accord. Une simulation réussie ne valide aucun droit API distant.

Construction locale, Node 24 sélectionné dans le PATH :

```sh
python3 tools/build-release.py
NODINA_PREVIEW_STAGE=release-candidate PORT=4185 node tools/preview.mjs
```

Le serveur écoute uniquement 127.0.0.1 et ajoute noindex. Le candidat est destiné à une revue locale ; aucun accès anonyme fonctionnel au nouveau formulaire Google n’est affirmé. Ne pas effectuer d’envoi d’essai : JD a clôturé les recettes le 7 octobre.

## Hébergement actuel identifié

Le dépôt local `nodina-website` correspond à [jd-collard/nodina-website](https://github.com/jd-collard/nodina-website), commit `266ed39a9629f43ba46116eee04d15548ae1af46`. L’API GitHub Pages confirme nodina.com, source main à la racine, HTTPS imposé et état built. Une archive de ce commit et ses empreintes sont sauvegardées localement ; le dépôt ancien reste intact.

Les DNS publics observés au début de la préparation le 9 octobre donnent dns1.registrar-servers.com et dns2.registrar-servers.com ; l’apex utilise les quatre adresses 185.199.108–111.153 de GitHub Pages, www pointe vers jd-collard.github.io. Les serveurs correspondent à [Namecheap BasicDNS](https://www.namecheap.com/support/knowledgebase/article.aspx/923/10/what-is-your-basicdns/). Cela identifie le fournisseur DNS, pas le compte gestionnaire ni l’ensemble de la zone.

Au début de la préparation, le compte Cloudflare NODINA affiche un seul Worker, nodina-preproduction, son adresse protégée par Access et aucune zone DNS. La zone nodina.com est ensuite créée sur Free avec les dix valeurs Namecheap reprises, DNS only et statut pending. La délégation est ensuite appliquée après accord distinct de JD ; registre .com et réponses des deux serveurs vérifiés, puis activation confirmée dans Cloudflare. La préproduction distante conserve son déploiement antérieur ; elle ne constitue pas une preuve du candidat local du 9 octobre.

Le relevé local inclut NS, A/AAAA, MX, TXT, CAA, SOA, www et DMARC. **Ce relevé public ne remplace pas un inventaire complet de la zone**. Le relevé intégral des tables Namecheap est ensuite sauvegardé localement, DKIM et vérification inclus, puis comparé à l’import Cloudflare. Voir la [reprise DNS](dns-preparation-20261009.md).

## Ordre de bascule à préparer puis approuver

1. **Inventaire terminé le 9 octobre ; conserver sa sauvegarde.** Accéder au compte Namecheap qui gère le domaine. Exporter tous les enregistrements et conserver les TTL. Identifier les enregistrements mail et vérification à préserver. Relever les restrictions CAA et l’état DNSSEC avant migration.
2. **Zone Free, import et délégation vérifiés le 9 octobre après accord distinct de JD.** Préparer nodina.com dans le compte Cloudflare NODINA, offre Free ; comparer l’import au relevé complet. Conserver d’abord les destinations GitHub Pages. Aucun changement de serveurs de noms tant que cet inventaire n’est pas complet et la migration approuvée. Le scan automatique Cloudflare ne suffit pas.
3. Préparer Contact Production dans Google avec exécution par JD et accès Anyone. JD effectue la validation et le déploiement selon PROMETHEUS §13.5. L’accès aujourd’hui enregistré est Only myself ; les deux versions privées restent intactes. Ne pas déplacer les données ni recréer les déclencheurs.
4. Présenter à JD le paquet final, les DNS précis et le retour arrière. Obtenir son accord explicite de lancement et de changement d’accès. Analytics reste désactivé, avec un accord distinct nécessaire pour sa collecte. Ne pas réouvrir la validation des textes déjà acquise.
5. Après accord, relever les réglages effectivement appliqués au formulaire. Enregistrer l’accord dans le plan et préparer les dates de publication de la bascule. Construire avec `python3 tools/build-release.py --production` : le script refuse une absence d’accord, une page non publiée ou un accès Contact non enregistré. Il ne déploie rien. Les dates restent prévisionnelles jusqu’à la bascule effectivement terminée ; en cas d’échec, revenir à ready et retirer ces dates.
6. Migrer les serveurs de noms avec la zone complète préservée, attendre son activation et le certificat valide. Une zone active est requise pour les [Custom Domains Workers](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/). Ne pas déplacer la messagerie. Conserver GitHub Pages et sa configuration jusqu’à stabilisation.
7. Vérifier les éventuelles routes déjà associées au nouveau Worker puis déployer le paquet public. Associer seulement nodina.com et www.nodina.com ; résoudre les anciens enregistrements Web en conflit à cette étape. Appliquer la redirection www → nodina.com sans écraser d’autres règles de zone. Préproduction et Access restent séparés.
8. Après publication, constater les réponses publiques HTTPS, canonical/hreflang, indexabilité des seules pages publiées, 404, redirections, assets, fichiers SEO et absence de collecte. Ce constat ne crée aucun nouveau message ou dossier de test ; toute nouvelle recette de formulaire demanderait un accord distinct. Confirmer les dates réelles de publication dans le plan.
9. Seulement ensuite, vérifier le fichier de propriété IndexNow à son URL publique avec réponse 200 et contenu exact. Générer le paquet final depuis le build publié, puis soumettre sitemap à Search Console/Bing et URL à IndexNow après accord. Une réponse de réception ne prouve pas une indexation. Les comptes Search Console et Bing existent déjà : ne pas les recréer.

## Retour arrière

Avant toute bascule, conserver le candidat/public build précédent, l’export DNS complet, les réglages GitHub Pages et la version du formulaire. L’archive locale actuelle restaure uniquement le code ancien ; elle ne sauvegarde ni un compte ni une zone complète.

Si le nouveau site présente un problème, rétablir les enregistrements Web vers GitHub Pages depuis l’export, retirer les associations Worker publiques en conflit et désactiver la redirection proposée si nécessaire. Préserver tous les enregistrements mail. Le retour des anciens serveurs de noms est un recours distinct, avec délai de propagation ; il n’est pas instantané. Vérifier le certificat et l’affichage de l’ancien site après retour.

## Vérification locale et limites

Build du candidat et build habituel : compilation réussie des seize pages FR/EN, racine et 404. Contrôles de sortie : bandeaux absents du candidat, noindex conservé, Analytics désactivé, Contact per-request, canonical et hreflang exacts, liens internes/assets présents et JSON-LD analysable. Seize fichiers Markdown, sitemap servi vide, proposition de seize URL et flux RSS sans article. Les scripts Python/JavaScript et configurations JSON sont analysables. Simulation Wrangler 4.147.0 réussie : `--dry-run: exiting now.` Elle est locale et ne certifie ni DNS, ni certificat, ni accès Google.

Aucune nouvelle suite, recette, notification ou capture. Aucun envoi réel depuis le candidat, contrôle mobile supplémentaire ou mesure de performance effectué. Le partage social conserve les meta OG textuelles existantes ; image de partage 1200×630, tags Twitter et vérification du rendu partagé restent à préparer. Les robots explicites issus de PROMETHEUS sont proposés ; documentation courante relue pour Google, Bing, OpenAI, Claude, Perplexity, Apple, DuckDuckGo, Amazon et Brave. Meta et les agents secondaires restent à revérifier avant publication ; le groupe générique Allow couvre aussi ces agents. Brave indique suivre Googlebot, donc aucun token Bravebot non confirmé n’est inventé.

Cette préparation ne clôt pas toutes les phases PROMETHEUS : recherche, requêtes/clusters, briefs éditoriaux, articles/guides et contrôles publics restent distincts. Le Reporting du 8 octobre est sauvegardé, paramètres et déclencheur conservés. Le premier lundi après migration est le 12 octobre ; aucun nouveau déclencheur ou contrôle automatique n’est ajouté.

## Sources techniques relues le 9 octobre

- [Custom Domains Cloudflare](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/), [configuration Wrangler](https://developers.cloudflare.com/workers/wrangler/configuration/), [en-têtes Static Assets](https://developers.cloudflare.com/workers/static-assets/headers/), [redirections](https://developers.cloudflare.com/workers/static-assets/redirects/).
- [Redirection www vers la racine](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-www-to-root/), [règles via API](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-api/) : règle de zone nécessitant un trafic proxifié ; exemple à adapter sans remplacer les règles existantes.
- [Namecheap, changement de serveurs de noms](https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/).
- [IndexNow](https://www.indexnow.org/documentation), [security.txt RFC 9116](https://www.rfc-editor.org/rfc/rfc9116.html). llms.txt reste une proposition communautaire, sans promesse de classement ou d’utilisation par un assistant.
- [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/overview-google-crawlers), [Bing](https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0), [OpenAI](https://developers.openai.com/api/docs/bots), [Claude](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers), [Apple](https://support.apple.com/en-ie/119829), [DuckAssistBot](https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot), [Amazon](https://developer.amazon.com/amazonbot), [Brave](https://safe.search.brave.com/help/brave-search-crawler).
