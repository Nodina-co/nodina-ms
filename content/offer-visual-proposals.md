# Distinguer les offres NODINA

2026-10-03 — **Piste A explicitement choisie par JD (« A ») et appliquée à la maquette FR/EN.** La direction A Précision reste acquise ; AI-native Teams reste l’entrée d’acquisition principale. Cette sélection concerne la distinction des offres, pas une nouvelle direction de marque ni une autorisation de publication.

Comparatif interactif : http://127.0.0.1:4178/assets/offer-directions.html

| Piste | Teams | Systems | Intérêt | Contrepartie |
|---|---|---|---|---|
| A — Fonds distincts, recommandée | Blanc, cobalt #244BC5 | Bleu pâle #F0F4FB, même cobalt | Garde le site majoritairement blanc et une seule couleur de marque | Les libellés restent indispensables dans les petits composants |
| B — Deux accents | Blanc, cobalt #244BC5 | Blanc, vert pétrole #0B6B60 | Facile à décliner dans les liens, cartes, filtres et contact | Ajoute une seconde couleur ; distinction plus légère sur les grandes sections |
| C — Clair/sombre | Blanc, cobalt | Anthracite #202425, texte blanc et accent #BED0FF | Changement de chapitre très lisible | Attire fortement l’attention sur Systems ; plus de sombre |

## Règles retenues pour A

- Nom complet de l’offre visible en tête de section et de page ; le visiteur n’a pas à mémoriser une couleur.
- Repère Teams rond et Systems carré dans les exemples ; la forme accompagne le libellé, sans remplacer le nom.
- Teams reste prioritaire par sa place, le contenu du hero et son CTA principal. Le traitement graphique ne doit pas inverser cette hiérarchie.
- Le code retenu suit chaque offre dans les sections, cartes, navigation contextualisée et contact. Les exemples du comparatif ne modifient pas les destinations existantes.
- Méthode commune, fondateur, FAQ et aide au choix restent neutres. Le fond bleu pâle est réservé aux éléments Systems ; l’aide au choix et la combinaison utilisent un gris neutre.
- Les offres combinées conservent les deux noms et un traitement neutre, sans créer une troisième identité.

## Prototype et validation

Fichier : `assets/offer-directions.html` dans le dossier persistant `homepage-20261002-round-2`. Autonome, police et logo locaux, noindex, aucune transmission ni enregistrement de décision. Trois filtres et une vue globale. Exemples construits sur le même contenu pour isoler l’effet du traitement visuel. Les liens ouvrent les parcours locaux existants.

Contrôles du comparatif : absence de débordement sur 320, 375, 768, 1024, 1440 pixels ; filtres A/B/C et retour à la vue globale vérifiés. Captures retirées le 7 octobre 2026 à la demande de JD. La description canonique corrigée a été relue dans le navigateur en FR/EN, à 375 pixels. Le comparatif conserve les trois propositions et indique maintenant A comme retenue.

## Application de la piste A

Teams sur blanc, cobalt et repère rond ; Systems sur #F0F4FB, même cobalt et repère carré. Noms explicites dans les cartes, les entrées et sections d’offre et la sélection des talents. La section Systems forme une bande pleine largeur ; ses CTA sont soulignés ou bordés cobalt. Les offres combinées gardent les deux noms sur un fond neutre.

Le contact reprend ce code selon le paramètre `offer` ou le choix du formulaire. Les liens de langue conservent le choix Teams/Systems/combined ; unknown garde une entrée neutre. Le formulaire demeure démonstratif et sans envoi.

Contrôles ciblés dans `qa-offer-a.json` : dix rendus d’accueil sur cinq largeurs, six rendus de sélection sur 320/375/1440 et 24 états de contact (deux langues × trois largeurs × quatre besoins), sans débordement. Parcours Systems vers contact puis anglais, changement vers Teams et retour français vérifiés. Captures retirées le 7 octobre 2026 à la demande de JD. Sauvegarde précédente : `history/20261003-before-offer-a/`.
