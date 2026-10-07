# Préparation GA4 et consentement — 6 octobre 2026

Module commun dans SiteLayout, panneau FR/EN, préférences au pied de page et marquage des boutons principaux vers le contact. Événements : page_view, primary_cta_click, form_start et generate_lead après réception confirmée. [Contrat et limites](../content/analytics.md).

## Vérification

- 14 tests analytiques, comprenant refus, retrait, expiration, stockage non modifiable, attribution bornée et confirmation serveur ; 26 tests du site au total.
- `npm run preproduction:check` : build des dix routes FR/EN, audit des liens/métadonnées/consentement et paquet privé. Le contrôle statique ne prouve pas Cloudflare Access ; l'accès privé distant avait été vérifié séparément le 5 octobre.
- Chrome : interface FR/EN, choix conservé entre pages, changement de choix, clavier et focus ; 320 pixels sans débordement. Aucun script Google en mode local, aucun avertissement/erreur console observé. Aucun nouvel envoi réel Contact.
- Console : mesures améliorées du flux NODINA désactivées et switch relu false. Rétention seulement lue : événements deux mois, utilisateurs quatorze mois, reset d'activité activé.





## Livraison et activation

Code préparé localement, sans déploiement. `PUBLIC_ANALYTICS_ENABLED` absent : collecte désactivée. Même avec ce drapeau, localhost et l'hôte privé workers.dev ne collectent pas. Aperçu UI seul : `PUBLIC_ANALYTICS_PREVIEW=true npm run dev`, puis `/fr/contact/` sur l'adresse locale affichée par Astro. Ne pas livrer ce drapeau d'aperçu.

Activation sur nodina.com seulement après revue des informations et pages de confidentialité/cookies, confirmation des durées et accord de publication. La recette doit alors observer les requêtes Google et les quatre événements sur chaque page pertinente ; la console GA4 doit confirmer leurs significations et événements clés. Aucun résultat Realtime réel revendiqué aujourd'hui.

Retour au comportement désactivé : reconstruire sans `PUBLIC_ANALYTICS_ENABLED=true`. Les préférences déjà enregistrées n'ouvrent pas la collecte lorsque ce drapeau est absent. L'approbation antérieure du déploiement privé n'autorise pas un lancement public.
