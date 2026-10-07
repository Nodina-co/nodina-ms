# Confidentialité et cookies — brouillons du 6 octobre 2026

JD autorise leur préparation par « Go », puis confirme par « ok Go » les trois points présentés : NODINA SAS et son adresse, build@nodina.com pour les droits, douze mois après le dernier échange pour les demandes sans suite. Ces décisions sont intégrées aux textes FR/EN. Quatre pages sont préparées localement, sans publication publique, modification du service Contact ou activation de GA4. Elles portent une notice ciblée sur les points encore ouverts ; aucune suppression opérationnelle présumée.

| Page | Français | Anglais |
|---|---|---|
| Confidentialité | `/fr/confidentialite/` | `/en/privacy/` |
| Cookies | `/fr/cookies/` | `/en/cookies/` |

Les pages disposent d’un sommaire, de liens réciproques et d’un sélecteur vers la même page dans l’autre langue. Elles sont accessibles depuis le pied de page et le panneau de choix ; le formulaire donne accès à la confidentialité. Les textes sont dans [legal.ts](../src/lib/legal.ts). Les règles de préproduction et `noindex` restent actives.

## Faits retenus

- [Référentiel produit](../content/product-truth.md) : NODINA SAS, SIREN 103 513 834, siège au 54 chemin du Château, 06640 Saint-Jeannet, France ; entité exploitante et usage de l’adresse confirmés par JD après vérification officielle. Aucun bureau public présumé, capital ou numéro TVA déduit.
- Contact : formulaire existant vers Apps Script, classeur privé et notification Workspace. Dix-sept colonnes couvrent les coordonnées et le contexte, l’attribution, l’identifiant, la date, l’accord et l’état de notification. Les e-mails constituent aussi des copies des demandes. `build@nodina.com` est opérationnel et confirmé pour les droits. Durée retenue : douze mois après le dernier échange pour les demandes sans suite et les e-mails associés ; application et contrôle des copies à terminer.
- Reporting : export de statistiques et comptes, sans nom, e-mail ou texte de demande. Le dépôt analytique reste privé. Ce constat ne rend pas anonymes les données dans le classeur, la messagerie ou les services tiers.
- Hébergement : Cloudflare ; revue privée protégée par Access. Session d’accès configurée six heures lors de la vérification du 5 octobre ; cette durée ne décrit pas tous les cookies Cloudflare.
- [Mesure préparée](../content/analytics.md) : module désactivé dans le build livré, chargé sur le futur site public seulement après accord. Quatre événements, URL limitées, aucun champ saisi à GA4, Signals et personnalisation publicitaire désactivés. Le choix du navigateur dure six mois ; les cookies Google sont prévus pour 180 jours sans renouvellement automatique. Les cookies réels du SDK restent à observer après activation autorisée.
- Console GA4 lue le 6 octobre : données d’événements deux mois, données utilisateurs quatorze mois avec réinitialisation à chaque activité. Réglages inchangés ; ils ne déterminent pas la durée de tous les rapports agrégés.

## Informations et décisions nécessaires avant publication

| Point | Travail restant |
|---|---|
| Responsable | NODINA SAS et adresse confirmées et intégrées. Compléter les mentions légales séparément avec les informations manquantes vérifiées. |
| Contact des droits | `build@nodina.com` confirmé. Adopter et mettre en œuvre la procédure de réception, vérification proportionnée, réponse et traçabilité, avec responsable opérationnel et relais. Aucun document d’identité demandé systématiquement. |
| Base du contact | Consentement explicite retenu pour les demandes volontaires de ce formulaire et documenté FR/EN. Retrait direct par build@nodina.com ajouté au formulaire. Case, libellé et contact-v1 préservés. Les traitements hors formulaire et les dossiers contractuels nécessitent leur propre analyse. |
| Contact sans suite | **Douze mois après le dernier échange confirmés par JD.** Suivi privé Conservation créé, calcul et listes vérifiés sur six cas fictifs. Terminer la recette puis la suppression du classeur, des notifications, des messages envoyés, des exports et copies ; distinguer les dossiers devenus contractuels et les obligations de conservation. Aucune suppression automatique installée. |
| Journaux et mesure | Inventorier les journaux effectivement activés et leurs durées. Valider séparément les rétentions GA4, les rapports agrégés et le reporting privé. |
| Fournisseurs et transferts | CDPA Workspace et conditions Analytics acceptés et datés au 6 octobre ; contact principal enregistré. Identifier les entités contractantes, leurs rôles, les contrats de traitement applicables, les destinations et garanties pour Google et Cloudflare. Les documents publics des fournisseurs ne prouvent pas à eux seuls les paramètres ou accords du compte NODINA. |
| Recette de lancement | Après autorisation de publication et d’activation : vérifier les cookies et requêtes réels, refus, acceptation, retrait, expiration et Realtime ; revoir les textes FR/EN en fonction des observations. |

Les demandes d’identité, de contact des droits et de durée ont reçu l’accord « ok Go ». Ces points sont clos et ne doivent pas être redemandés. Leur validation ne certifie pas la conformité juridique de l’ensemble ni les contrats ou procédures encore non vérifiés.

Après le second « go », l’API officielle confirme une société NODINA, SIREN 103 513 834, avec Jean-David Collard comme président ; JD en confirme ensuite la correspondance et l’adresse. [Vérification d’identité et accord](../research/legal-identity-20261006.md). Une [procédure de traitement des droits et de conservation](../content/security/site-data-operations.md) est préparée, sans adoption de l’ensemble présumée ni suppression réelle. L’onglet Conservation permet désormais de renseigner manuellement le dernier échange ; le collecteur Contact ne le déduit pas. Un nettoyage fondé seulement sur la date de réception serait incorrect.

## Vérifications

`npm run preproduction:check` réussit : **27 tests**, dont quinze sur le module de mesure ; audit des **14 pages localisées** ; paquet de préproduction scellé de 53 fichiers. Le contrôle local ne vérifie pas à nouveau l’accès Cloudflare distant. Aucun formulaire réellement envoyé pendant cette recette.

Chrome local : lien du formulaire, sommaire au clavier et à la souris, changements FR/EN et liens entre politiques vérifiés. Les quatre pages tiennent dans le viewport de 320 pixels sans débordement horizontal. Boutons de choix de même largeur, réouverture et retrait sur la page cookies vérifiés ; aucun script Google après acceptation locale, aucune erreur ou alerte console observée. Ces observations locales ne prouvent pas le comportement réseau du SDK en production.

Confidentialité desktop (capture retirée le 7 octobre 2026), détail cookies mobile (capture retirée le 7 octobre 2026).

Après « ok Go », nouveau `npm run preproduction:check` réussi : 27 tests, 14 pages localisées, 53 fichiers scellés. Identité, adresse, contact et formulation de la durée retenue relus dans les deux pages de confidentialité construites. Recette Chrome des quatre pages à 320 pixels : aucun débordement, notices actualisées FR/EN, liens réciproques opérationnels, aucune erreur console observée. Aucun formulaire envoyé ni script Google chargé. La taille de fenêtre temporaire est rétablie ; aperçu de confidentialité laissé ouvert sur `http://127.0.0.1:4323/fr/confidentialite/`.

Confidentialité avec décisions confirmées (capture retirée le 7 octobre 2026), durée retenue en anglais sur mobile (capture retirée le 7 octobre 2026). Les captures précédentes restent historiques.

## Sources primaires consultées

- [CNIL — information et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence) et [exemples de mentions](https://cnil.fr/fr/passer-laction/rgpd-exemples-de-mentions-dinformation) : contenu de l’information et accès à un second niveau depuis le formulaire.
- [CNIL — droits des personnes](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3) et [réponse aux demandes](https://cnil.fr/fr/respecter-les-droits-des-personnes/repondre-aux-demandes-dexercice-des-droits).
- [CNIL — contrat](https://www.cnil.fr/fr/les-bases-legales/contrat), [intérêt légitime](https://www.cnil.fr/fr/les-bases-legales/interet-legitime) et [consentement](https://www.cnil.fr/fr/les-bases-legales/consentement) : bases à examiner sans transformer la case du formulaire en conclusion automatique.
- [CNIL — cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi) et [FAQ](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) : choix et retrait ; six mois pour mémoriser un choix constitue une recommandation à apprécier selon le contexte.
- [Cloudflare — confidentialité](https://www.cloudflare.com/privacypolicy/) et [cookies Access](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/) : infrastructure internationale et distinction entre authentification et mesure.
- [Google — Analytics et confidentialité](https://support.google.com/analytics/answer/12017362?hl=en) et [Workspace — transferts internationaux](https://services.google.com/fh/files/misc/workspace_and_workspace_edu_safeguards_for_international_data_transfers.pdf). Les données techniques de mesure ne sont pas présentées comme anonymes ; aucun traitement exclusivement européen n’est affirmé.

## Suite après « Go » — suivi et contrats

Le consentement du formulaire est retenu et le retrait est indiqué au premier niveau en FR/EN. Le suivi natif privé Conservation est créé dans le classeur existant : neuf colonnes, listes de statut, douze mois calendaires et états des copies. Six cas calculés dans Google Sheets passent ; les demandes réelles et les trois anciens TEST de Contact restent inchangés. Aucune purge automatique ou recette complète de suppression n’est déclarée opérationnelle.

Google Admin authentifié par JD montre le **CDPA non accepté**. Analytics / Account details montre les **Data Processing Terms non acceptées**, pays France, quatre partages facultatifs décochés ; DPA administration n’affiche aucun contact. Ces observations priment sur une supposition d’acceptation automatique fondée sur la documentation générale. [Dossier fournisseur et étapes exactes](../research/provider-contracts-20261006.md).

Le nouveau `npm run preproduction:check` passe : 27 tests, 14 pages localisées, 53 fichiers scellés. Chrome relit les textes et liens de retrait des formulaires FR/EN, les deux politiques actualisées et le tableau Google rendu à 100 %. Aucun envoi réel ni publication, et GA4 reste désactivé. Les captures antérieures sont historiques.

## Accords Google confirmés après « accepté »

Google Admin affiche le CDPA **Accepted by jd@nodina.com on Oct 06, 2026**. Analytics présentait un choix d’acceptation non sauvegardé ; l’agent clique Save conformément à la confirmation de JD et la console affiche les conditions acceptées le **6 octobre 2026**. DPA administration affiche Jean-David Collard, jd@nodina.com, l’adresse NODINA SAS confirmée et le rôle Primary contact. Aucun rôle DPO ou représentant EEE ajouté. Les quatre partages facultatifs Analytics restent décochés.

[Preuves courantes et points restant à vérifier](../research/provider-contracts-20261006.md). Les captures et constats « non accepté » ci-dessus sont historiques. La politique FR/EN conserve sa notice de validation : le contrat effectif Cloudflare, les entités contractantes, les durées techniques et la recette complète de suppression ne sont pas certifiés par ces acceptations. Aucun changement du code à cette étape ; les 27 tests précédents restent le dernier contrôle du build, sans nouvelle exécution inutile. Aucun envoi réel, publication ou activation GA4.

## Cloudflare qualifié et recette préparée

Les offres Free, logs et traces Workers désactivés, durées documentées Access/admin et état Logpush sont relevés en lecture seule dans le [dossier fournisseur](../research/provider-contracts-20261006.md). Le contrat Self-Serve incorpore le DPA ; aucun horodatage individuel inventé. Ces constats internes restent à intégrer aux politiques FR/EN lors de leur revue finale.

Un [dossier fictif de recette](retention-rehearsal-20261006.md) est préparé dans Chrome local, sans envoi ou suppression. La suppression de versions Sheets doit être vérifiée sur un fichier isolé et non sur l’historique entier de Contact. Aucun code modifié à cette étape ; le dernier contrôle du build reste celui décrit plus haut. GA4 reste désactivé et aucune publication réalisée.

Après « envoyé », JD a soumis ce dossier fictif. Le formulaire, la ligne Contact A5:Q5 et la notification Gmail concordent à 18 h 55, avec la référence 1d5a5c1e-4d8f-4663-a67c-a010bb6da6e0. Après son « oui », seules les valeurs de cette ligne et la notification exacte sont supprimées et vérifiées. Les trois anciens TEST sont intacts ; Gmail confirme Delete forever et la recherche globale par référence est vide. La version historique et les preuves locales restent conservées ; aucun effacement complet établi. [État courant et preuves](retention-rehearsal-20261006.md). Aucun code, réglage de collecte ou texte public changé.
