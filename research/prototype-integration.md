# Intégration technique de la maquette NODINA

4 octobre 2026. Version locale de travail, non publiée.

La source importée est `/Users/jdc/.gstack/projects/Nodina-co-nodina-ms/designs/homepage-20261002-round-2/`. Les données initiales de `build.py` ont été lues comme données et fusionnées avec `editorial.json`, dans le même ordre que le prototype. Les scripts de génération et de migration n’ont pas été exécutés et le prototype externe n’a pas été modifié.

Les contenus désormais utilisés par Astro sont `content/site/fr.json` et `content/site/en.json`. Les gabarits sont dans `src/components/` et le head commun dans `src/layouts/SiteLayout.astro`. Les dix routes restent identiques. Les styles validés ont été repris ; seul le chemin de police a été adapté au build. Le lien vers le panneau d’annotation interne a été retiré du bandeau de prévisualisation.

Les neuf portraits originaux sont conservés dans `src/assets/profiles/`. Astro produit des versions WebP 80/160 pixels ; les originaux ne sont pas servis dans `dist/`. Leur provenance reste le manifeste `assets/profiles/generation.json` du prototype, copié dans `research/profile-image-generation.json`. Les noms de fichiers publics restent neutres. Les logos, outils et police conservent leurs licences dans `public/assets/`.

Les notes, recherches, anciennes versions, commentaires, captures de feedback et scripts internes sont exclus du build. Les captures de recette sont dans `reports/screenshots/`, hors du répertoire public.

## Validation effectuée

- Build Astro 7.3.5 réussi avec Node 24.19.0 ; dépendances verrouillées.
- Texte du contenu principal des huit pages hors contact comparé au HTML final du prototype : identique après normalisation des espaces. Le formulaire ajoute les validations, l’accord et ses états d’envoi.
- Contrôle automatisé des dix routes : métadonnées distinctes, canonical, équivalents FR/EN réciproques, données structurées JSON, liens, ancres, dimensions d’image, attributs d’accessibilité référencés, catalogue 7/2 et exclusion des documents internes.
- Tests hors ligne du traitement de contact : validation, stockage, doublons, échec de notification et d’écriture, configuration absente et réponse HTML. Tests HTTP du serveur local : 301, 404, ressources et en-têtes noindex.
- Contrôle navigateur des dix pages à 320 pixels : pas de débordement horizontal observé. Vérification des filtres de profils, critères de sélection et conservation de l’offre lors du changement de langue ; accueil et contact contrôlés à 1280 pixels. Aucun résultat de performance Lighthouse ou audit WCAG complet revendiqué.

## Points ouverts

JD a choisi `build@nodina.com` comme destinataire du formulaire ; la configuration de référence est dans `tools/forms/script-properties.example.json`. L’alias est créé sur `jd@nodina.com` et le service Google déployé par JD. L’enregistrement réel et les confirmations avec/sans JavaScript sont vérifiés. Les notifications arrivent en Inbox via `jd@nodina.com`, destinataire interne retenu après deux essais vers son propre alias restés dans les messages envoyés. Le 4 octobre 2026, la lecture DNS publique renvoie `1 smtp.google.com.` pour le MX de `nodina.com`. `insights@nodina.com` reste l’adresse choisie pour les publications, sans configuration réalisée.

Les profils restent illustratifs et NODINA Select non opérationnel. Les pages légales, outils de mesure, comptes, redirections de domaines, accès de préproduction et paramètres Cloudflare restent à finaliser. Le build conserve noindex ; aucun déploiement n’a été effectué.

Administration Google inspectée le 4 octobre 2026 dans l’onglet Chrome indiqué par JD : organisation Nodina, domaine principal `nodina.com`, compte actif `jd@nodina.com`. Après un premier refus du contrôle automatique d’approbation, JD confirme explicitement la création de l’alias. L’enregistrement réussit : Google affiche « Alternate email addresses updated » puis `build@nodina.com` dans les adresses secondaires du compte. Aucun nouvel utilisateur, achat de licence ou droit OAuth ; aucun e-mail de test envoyé. Cette vérification confirme la configuration, pas encore la livraison d’un message.

Au « Go » suivant, le projet Apps Script autonome **NODINA — Contact** est créé sur `jd@nodina.com` : `19uwBWro4LmwnL0KrK1G4BxV329Ss5aj820jXiIjfZWVF-hV_fWqkf3Gb`. Le code et le manifeste sont enregistrés après comparaison du texte avec les fichiers locaux. JD installe et connecte le plugin Google Drive ; le profil retourné confirme `jd@nodina.com`. Le classeur préparé est importé au format natif dans le dossier `ChatGPT` : [NODINA — Contact](https://docs.google.com/spreadsheets/d/1o3HpWGkOjSePSdr8kZJYXWsaS4XgYbgL9Y2rcQ3tgHw/edit). Onglet `Contact`, 17 en-têtes exacts, aucune demande, première ligne figée, rendu Google vérifié et fuseau Paris. Propriétaire JD seul et partage privé confirmés. Les deux propriétés `CONTACT_NOTIFICATION_EMAIL` et `CONTACT_SHEET_ID` sont enregistrées et relues dans le projet existant.

Après un refus initial de la sélection `Anyone` par le contrôle automatique, JD finalise lui-même le déploiement public et ses autorisations OAuth (Google Sheets et envoi d’e-mails). Google confirme la version 1 le 4 octobre 2026 à 20:04 (Europe/Paris). Le classeur reste privé. URL `/exec` relevée dans le dialogue de succès et renseignée dans `.env` local, ignoré par Git ; référence complète dans `tools/forms/README.md`. Build réussi, 12 tests et audit de 10 pages réussis. Le service rejette correctement un POST invalide sans écrire de ligne ni envoyer de notification ; HTTP 200 JSON et lecture CORS depuis Chrome confirmés. JD a ensuite autorisé l’envoi d’essai. Trois demandes TEST sont conservées dans le classeur : deux envois JavaScript à 20:10 et 20:15, puis un POST HTML sans scripts à 20:18. Les trois lignes ont le statut `sent`. La notification finale vers la boîte principale `jd@nodina.com` est confirmée dans Inbox. L’alias public `build@nodina.com` est aussi ajouté dans « Send mail as », adresse par défaut JD inchangée ; cet ajout seul n’avait pas permis de voir la deuxième notification en Inbox. Aucun déploiement du site.

Cette intégration ne termine donc pas toute la Phase 2 de PROMETHEUS et ne vaut pas accord de publication.

## Préparation de préproduction Cloudflare

La [configuration et le parcours privé](../tools/cloudflare/README.md) sont préparés localement : Worker statique distinct, URLs et routes désactivées, noindex et formulaire Google conservés, contrôle du paquet et simulation Wrangler réussis. Le compte NODINA identifié après connexion de JD n'a aucun projet Workers/Pages ; Cloudflare demande la vérification de l'e-mail et la mise en place de Zero Trust. Le forfait exact reste à vérifier après cet e-mail. Aucun déploiement du site ni politique Access appliquée.

JD confirme ensuite « vérifié » : la page Workers plans affiche désormais **Free / $0 / Current plan**. Le parcours Zero Trust Free mène à une activation avec moyen de paiement et autorisation de facturer les dépassements. L'agent ne remplit ni n'accepte ce formulaire. Alternative sans souscription proposée : un mot de passe sur Workers Free pour la préproduction temporaire, avec contrôle avant toutes les ressources et refus en cas de configuration absente. Choix de JD attendu, aucun déploiement.

Sources techniques consultées : [installation Astro](https://docs.astro.build/en/install-and-setup/), [déploiement statique sur Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/), le 4 octobre 2026.

Le 5 octobre, JD répond « fait ». Cloudflare One et les paramètres NODINA affichent un domaine d'équipe `white-rain-6085.cloudflareaccess.com`. Puis la session Cloudflare bascule sur `jd@checkia.fr` et ne donne plus accès au compte NODINA ; une reconnexion est demandée. Le forfait Zero Trust final reste à confirmer. Wrangler signale une session expirée après vérification réseau. Aucune politique Access ni premier déploiement effectués ; la configuration locale reste fermée et ciblée sur le compte NODINA.

Après confirmation de la reconnexion par JD, le compte NODINA est rétabli. Les abonnements **Workers Free** et **Zero Trust Teams Free Base** sont confirmés actifs. Le consentement Wrangler officiel est ouvert sur ce compte avec quatre droits : lecture de l'utilisateur et du compte, gestion des Workers et maintien de connexion. L'autorisation est laissée à JD ; aucun premier déploiement effectué.

JD répond « autorisé ». Après relance du retour OAuth expiré avec les mêmes droits approuvés, Wrangler confirme le bon compte. La règle Access est préparée sans sauvegarde pour `jd@nodina.com` seul, Allow, six heures (option disponible dans l'interface). Le premier déploiement privé et l'application de cette protection restent soumis à l'accord final.

JD autorise ensuite explicitement le déploiement privé. La politique Access est enregistrée (ID `a7f3be67-47ca-41cf-80ea-34354fc39ddf`), mais associée à zéro application. Les contrôles locaux sont revalidés, puis la tentative de déploiement fermé échoue avant transfert : le scope Wrangler `workers:write` préparé ne satisfait pas **Workers Scripts Write**, requis par l'API d'envoi. Un consentement corrigé est ouvert et laissé à JD. Aucun site déployé ni adresse activée. L'accord de déploiement ne doit pas être redemandé.

## Préproduction privée en ligne — 5 octobre 2026

JD autorise le droit Wrangler corrigé. L'envoi statique réussit, version `926cc206-8a72-4879-a036-55402dd465d7`. Access protège ensuite tout le trafic de ce Worker seul avec la politique JD, session de six heures. L'adresse [nodina-preproduction.jd-fd3.workers.dev](https://nodina-preproduction.jd-fd3.workers.dev/fr/) est activée après vérification ; aucun aperçu ni domaine personnalisé activé.

Les 63 chemins contrôlés sans session sont redirigés vers Access. Après connexion de JD, les dix pages FR/EN et leur affichage à 320 pixels sont vérifiés sans débordement ; filtres de profils, offre conservée au changement de langue, redirection racine et affichage 404 vérifiés. Les formulaires restent raccordés au même service Google, sans nouvel envoi réel. Noindex conservé. [Rapport détaillé, captures et limites](../reports/cloudflare-preproduction-20261005.md).

Le fichier Wrangler d'envoi reste fermé et nécessite la réactivation de l'adresse protégée après un futur déploiement. La publication publique, les faits des profils/Select, les pages légales et la mesure restent à finaliser séparément.
