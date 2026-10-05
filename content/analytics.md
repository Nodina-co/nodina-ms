# Mesure NODINA — préparation du 5 octobre 2026

Les comptes sont préparés ; la balise et les événements ci-dessous ne sont pas encore installés. La préproduction reste privée. Ce plan nomme les interactions selon ce qu'elles mesurent, conformément aux objectifs commerciaux confirmés dans [goals.md](goals.md).

| Événement prévu | Déclenchement à implémenter et vérifier | Signification |
|---|---|---|
| `primary_cta_click` | Clic sur le CTA principal vers le formulaire | Intérêt exprimé ; aucune demande reçue |
| `form_start` | Première interaction avec le formulaire, une fois par formulaire affiché | Début du formulaire ; aucun envoi confirmé |
| `generate_lead` | Réponse de stockage réussie du service de contact, une fois par demande | Demande enregistrée ; aucune qualification commerciale présumée |

Seule la demande enregistrée est prévue comme événement clé GA4 ; les clics et débuts de formulaire restent des interactions intermédiaires. Aucun événement de réservation n'est défini tant que l'agenda n'est pas configuré. L'installation doit respecter le consentement, éviter les doublons des mesures automatiques et ne transmettre ni nom, e-mail, organisation, message, identifiant de demande ni paramètres libres de formulaire à GA4.

Le reporting lira la propriété GA4 `557424928`, Search Console `sc-domain:nodina.com` et Bing `https://nodina.com/`. Les rapports GA4 seront préparés avec trois jours de délai, sans garantie de finalité ; Search Console utilise ses dates finalisées et Bing conserve ses dates brutes.

La source de vérité des demandes reçues est le classeur Contact existant. Le collecteur n'exporte que des comptes par fenêtre et page `ref`, exclut les lignes marquées `TEST-`, accepte les dates ISO du service existant et refuse les dates illisibles. Les références exportées doivent être des chemins FR/EN connus ; tout autre format est regroupé comme inconnu. Si la colonne `qualified` n'existe pas, les demandes qualifiées restent indisponibles. Une qualification consignée par JD reste distincte d'une réception de formulaire et nécessite le dédoublonnage par opportunité décrit dans les objectifs.

Les événements GA4 prévus mais absents retournent une absence de données ; cela ne prouve ni zéro demande ni zéro conversion. Les premières semaines après lancement peuvent produire des fichiers vides ou partiels. Le reporting demeure non opérationnel avant autorisation du script, test réel des trois sources, dépôt privé et installation du déclencheur.
