# Access & Secrets Management

Statut : proposition interne du 2026-09-28, à valider par JD. Issue du [cadrage](../../research/sources/2026-09-28-security-trust.txt), sans attestation de déploiement de ces contrôles.

## Principes

Limiter les permissions au besoin opérationnel ; séparer environnements et accès ; protéger les clés et secrets ; tracer les décisions importantes. En Teams, appliquer les règles client ; en Systems, définir les mesures avec le client dans le périmètre livré.

## Cycle d’accès proposé

1. Onboarding : identifier la personne ou le compte de service, son responsable, sa mission, les environnements, permissions et durée nécessaires ; obtenir les validations requises.
2. Attribution : utiliser les mécanismes autorisés par le client, sans secrets dans le dépôt, les messages ou les documents publics. Définir les permissions des agents et outils séparément des besoins humains.
3. Exploitation : tenir l’inventaire des accès et secrets, préciser responsables et échéances, limiter la visibilité des journaux contenant des informations sensibles.
4. Rotation : définir par secret la procédure, les événements déclencheurs et la fréquence appropriée ; ne pas annoncer de périodicité non décidée.
5. Révocation/offboarding : retirer les accès devenus inutiles, traiter les secrets partagés concernés, transférer les responsabilités nécessaires et conserver une trace de vérification.

## Points ouverts

Gestionnaire de secrets, fournisseurs d’identité, exigences d’authentification, propriétaires des accès, délais de révocation, règles de rotation, revues d’accès et traitement d’un secret compromis restent à définir. Aucun outil précis ni SLA imposé par défaut.
