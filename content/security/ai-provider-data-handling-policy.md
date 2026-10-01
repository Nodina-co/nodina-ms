# AI Provider & Data Handling Policy

Statut : proposition interne du 2026-09-28, à valider par JD. Issue du [cadrage](../../research/sources/2026-09-28-security-trust.txt). Aucun fournisseur ni transfert de données autorisé par ce document.

## Décision par mission

Avant utilisation, documenter le service exact, le compte et les options retenus, les catégories de données envisagées, les flux, les règles client et l’autorité d’approbation. Un fournisseur cité dans la stack n’est pas automatiquement autorisé pour toute donnée.

## Critères à vérifier

- Conditions de confidentialité, entraînement, rétention, suppression, localisation et accès aux données.
- Conditions contractuelles et sous-traitants applicables au service et à l’offre réellement utilisés.
- Possibilité de limiter les données transmises, d’isoler les accès et d’appliquer les permissions nécessaires.
- Contraintes de sécurité, intégration, observabilité, qualité et coût de la mission.

## Contrôles proposés avant activation

Catégories de données et usages approuvés ; paramètres de traitement vérifiés ; secrets hors du code ; permissions limitées ; journalisation proportionnée sans exposition indue ; validation des outils accessibles aux agents et des actions sensibles ; comportement de repli documenté.

Les configurations exactes sont à définir par service. Vérifier les conditions actuelles du fournisseur au moment du choix, sans supposer qu’une offre gratuite, grand public ou API dispose des mêmes garanties.

## Alternatives

Lorsque les contraintes ne peuvent être satisfaites par un service externe, examiner minimisation/anonymisation, modèle privé ou open source, cloud dédié, environnement client ou on-premise. Ces options ne garantissent pas à elles seules confidentialité ou conformité.

## Points ouverts

Classification des données, matrice données/fournisseurs, liste des services autorisés, approbateurs, configurations minimales par outil et preuves de vérification restent à établir. Aucun contenu client sensible ne doit être considéré comme autorisé à la transmission sur la seule base de ce brouillon.
