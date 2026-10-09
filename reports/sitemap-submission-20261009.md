**Suite, 9 octobre :** IndexNow soumis après un accord distinct, HTTP 202 ; validation de clé en cours. [État actualisé](submit/2026-10-09-indexnow.md). Les paragraphes ci-dessous décrivent l’étape antérieure des sitemaps.

# NODINA — sitemap soumis à Google et Bing, 9 octobre 2026

Après l’accord explicite de JD « Go pour soumettre le sitemap à Google et Bing », l’URL https://nodina.com/sitemap.xml est soumise aux propriétés NODINA existantes.

| Console | Propriété | Résultat observé |
|---|---|---|
| Google Search Console | sc-domain:nodina.com, compte jd@nodina.com | « Sitemap submitted successfully », puis « Sitemap processed successfully » ; 16 pages découvertes, 0 vidéo, dernière lecture 9 octobre 2026 |
| Bing Webmaster Tools | https://nodina.com | Une ligne enregistrée ; statut Processing, 0 erreur et 0 avertissement affichés, aucune exploration confirmée à ce stade |

Google affiche brièvement « Couldn't fetch » après réception. La fiche détaillée suivante confirme le traitement réussi et les 16 pages : aucun nouvel envoi nécessaire. La réponse publique du sitemap est HTTP 200, Content-Type application/xml ; les résolveurs 1.1.1.1 et 8.8.8.8 donnent les adresses Cloudflare.

Bing affiche la date 10/8/2026 dans sa console ; l’opération a lieu le 9 octobre en Europe/Paris (8 octobre UTC). Aucun nouveau compte, droit, service analytique, test de formulaire, capture ou déclencheur créé. Les pages de confirmation sont conservées ouvertes pour JD.

La soumission et la découverte ne prouvent pas l’indexation. Bing reste en traitement. IndexNow n’est pas soumis : l’accord reçu concerne les deux sitemaps. Le reporting hebdomadaire existant et ses paramètres sont conservés ; les étapes éditoriales PROMETHEUS restent celles du [rapport de lancement](public-launch-20261009.md).

[Google : aide du rapport Sitemaps](https://support.google.com/webmasters/answer/7451001) distingue la récupération du fichier et le suivi des pages indexées.
