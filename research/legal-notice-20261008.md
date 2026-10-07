# Mentions légales — préparation du 8 octobre 2026

JD répond « Go » après la proposition de compléter les mentions légales. Les coordonnées déjà approuvées le 6 octobre restent acquises. Deux pages sont préparées dans le site de revue : `/fr/mentions-legales/` et `/en/legal-notice/`, accessibles depuis chaque pied de page et reliées par le sélecteur de langue. Aucune publication publique ou indexation à cette étape.

## Sources consultées

| Élément | Valeur préparée | Preuve et limite |
|---|---|---|
| Éditeur, forme | NODINA, SASU | [Attestation RNE INPI](https://data.inpi.fr/export/companies?format=pdf&ids=%5B%22103513834%22%5D), état au 26 août 2026, consultée le 8 octobre. La forme unipersonnelle est explicitement documentée ; la forme SAS déjà approuvée reste cohérente. |
| Capital | 1 000 € | Même attestation, page 1. Aucun changement depuis cet état présumé vérifié. |
| Siège | 54 chemin du Château, 06640 Saint-Jeannet, France | INPI et confirmation de JD du 6 octobre, [identité déjà approuvée](legal-identity-20261006.md). |
| SIREN / SIRET du siège | 103 513 834 / 103 513 834 00012 | Attestation INPI et vérification officielle du 6 octobre. |
| RCS | 103 513 834 RCS Grasse | [Fiche Pappers](https://www.pappers.fr/entreprise/nodina-103513834), source secondaire consultée le 8 octobre, mise à jour affichée au 26 août. Pas d'extrait Kbis récent lu. |
| TVA | FR88103513834 | Même fiche Pappers ; le numéro n'est ni calculé ni déclaré validé dans VIES. Confirmation de JD encore attendue avant publication. |
| Publication | Jean-David Collard, président | Président documenté dans la preuve officielle du 6 octobre. Le rôle de directeur de publication est proposé selon l'[article 93-2 de la loi du 29 juillet 1982](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000033971722), qui vise le représentant légal selon la forme de la société. |
| E-mail | build@nodina.com | Coordonnée de contact déjà utilisée et approuvée pour les droits. |
| Téléphone NODINA | Différé hors de cette version | JD précise le 8 octobre : « j’ajouterais mon tel pro plus tard mais pas dans cette version ». Ligne et placeholder retirés des pages FR/EN et de la revue. Aucun numéro récupéré ou inventé. |
| Hébergeur | Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis ; +1 888 993 5273 | [Conditions Self-Serve, §20 et pied de page](https://www.cloudflare.com/terms/). Fournisseur du site statique ; Google Apps Script/Workspace restent décrits comme services du formulaire et stockage dans la notice de confidentialité. |

L'attestation consultée décrit un état daté du 26 août ; ne pas la présenter comme une attestation émise le 8 octobre. Les données personnelles du dirigeant sans utilité pour le site ne sont pas reprises.

## Texte et revue

Le texte comprend identité de l'éditeur, identifiants, contact, direction de publication, hébergement et rappel du fonctionnement sur devis. Le formulaire sollicite un échange, sans commande ni contrat conclu par simple envoi. Les [exigences Service Public pour une société](https://entreprendre.service-public.gouv.fr/vosdroits/F37351) prévoient notamment le capital, les identifiants, l'e-mail et le téléphone de la société ainsi que l'identité et les coordonnées de l'hébergeur. JD diffère explicitement le téléphone hors de cette version. Ce choix ne modifie pas les exigences de la source ni ne constitue une validation de conformité globale ; il ne bloque pas la revue actuelle des textes.

[Revue HTML FR/EN autonome](../reports/legal-notice-review-20261008.html), issue des rendus du build. Le téléphone professionnel et sa mention à compléter sont omis conformément à la décision de JD ; les coordonnées de Cloudflare sont conservées. Les notices Confidentialité/Cookies approuvées le 7 octobre ne sont pas réécrites. Aucun inventaire de cookies nouveau ni promesse de conformité globale.

## Vérification locale et suite

Compilation statique Node 24 réussie : 18 sorties, dont 16 pages localisées. Vérification des deux nouvelles routes, métadonnées, liens de langue et pied de page, identifiants d'ancre et maintien noindex ; pas de suite de tests, formulaire envoyé, capture ou déploiement. Le registre local des routes de l'audit et la liste des pages connues du module Analytics sont actualisés ; GA4 reste désactivé.

Le lecteur Reporting actuellement déployé connaît les quatorze routes antérieures. Avant activation publique de GA4, ajouter les deux routes légales à sa liste de références admises et mettre à jour son bundle Google ; aucune modification de Google Apps Script pendant cette étape. Le site utilise encore le service Contact legacy. Cet écart n'empêche pas la préparation des mentions et reste dans le suivi de bascule.

Prochaine action : faire valider le texte concret et ses données légales, sans demander le téléphone pour cette version. Son ajout reste différé à la demande de JD. La validation globale des pages et l'accord de lancement public restent séparés.
