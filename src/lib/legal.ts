import type { Locale } from './site';

// Match the storage setting used by ContactPage.astro.
const contactStorage = import.meta.env.PUBLIC_CONTACT_STORAGE?.trim() || 'legacy';
if (!['legacy', 'per-request'].includes(contactStorage)) throw new Error('PUBLIC_CONTACT_STORAGE must be legacy or per-request.');
const perRequest = contactStorage === 'per-request';

type Section = { id: string; title: string; paragraphs: string[]; items?: string[]; links?: { label: string; href: string }[] };
type Policy = { title: string; lead: string; sections: Section[] };
type LegalCopy = { back: string; label: string; date: string; draftTitle: string; draftBody: string; contents: string; privacy: Policy; cookies: Policy };

export const legalCopy: Record<Locale, LegalCopy> = {
  fr: {
    back: '← Retour à l’accueil', label: 'Vos données, vos choix', date: 'Mise à jour du 7 octobre 2026',
    draftTitle: 'Site de revue privé',
    draftBody: "Ces notices décrivent le formulaire utilisé dans cet environnement. La mesure d’audience reste désactivée sur le site de revue ; son activation et ses paramètres feront l’objet d’une validation distincte.",
    contents: 'Dans cette page',
    privacy: {
      title: 'Confidentialité',
      lead: 'Comprendre quelles informations le site utilise, pour quoi faire et comment exercer vos droits.',
      sections: [
        { id: 'responsable', title: 'Qui est responsable ?', paragraphs: [
          'Le responsable du traitement est NODINA, société par actions simplifiée (SAS), SIREN 103 513 834. Son siège social est situé au 54 chemin du Château, 06640 Saint-Jeannet, France.',
          'Pour les demandes relatives à vos données personnelles, écrivez à build@nodina.com.',
          'Cette page concerne le site vitrine et ses demandes de contact. Les données traitées au cours d’une mission client font l’objet d’un cadre distinct, adapté au projet.',
        ], links: [{ label: 'Contacter NODINA : build@nodina.com', href: 'mailto:build@nodina.com' }] },
        { id: 'contact', title: 'Lorsque vous nous contactez', paragraphs: [
          "Le formulaire recueille votre nom, votre e-mail professionnel, votre organisation et le contexte de votre projet. Ces champs sont obligatoires pour envoyer la demande. Le choix d’une offre et le calendrier envisagé sont facultatifs. Sans les champs obligatoires, le formulaire ne peut pas transmettre la demande ; vous pouvez aussi écrire à build@nodina.com.",
          'Il enregistre aussi la langue, la page d’origine, les paramètres éventuels de source et de campagne, la date, un identifiant de demande, votre accord et l’état de la notification. Ces informations servent au suivi de la demande, à éviter les doublons et à vérifier sa réception.',
          'La finalité est de comprendre votre besoin et de vous répondre. L’envoi ne vous inscrit à aucune newsletter. Évitez les données confidentielles ou sensibles dans le message.',
          'Le traitement de la demande envoyée par ce formulaire repose sur votre consentement, donné par la case prévue à cet effet. Vous pouvez le retirer à tout moment en écrivant à build@nodina.com. Le retrait ne remet pas en cause les traitements licites effectués auparavant. Cet accord n’autorise ni newsletter ni mesure d’audience.',
        ] },
        { id: 'mesure', title: 'La mesure d’audience facultative', paragraphs: [
          'Google Analytics est prévu pour comprendre les pages consultées et le parcours de contact. Il reste désactivé sur le site de revue. Après activation sur le site public, il ne sera chargé qu’après votre acceptation dans le panneau de choix.',
          'La mesure prévue couvre la page consultée, les clics sur les boutons principaux vers le contact, le début du formulaire et sa réception confirmée. Une réception ne constitue pas une qualification commerciale. Le module ne transmet aucun nom, e-mail, organisation, message ou identifiant de demande à Google Analytics.',
          'Les URL envoyées sont limitées aux pages connues, sans paramètres ni fragments. La provenance externe est réduite à son origine (protocole et domaine). Google traite également les identifiants de mesure et des informations techniques de navigateur, d’appareil et de connexion nécessaires à son service. Ces données ne sont pas présentées comme anonymes.',
          'La base juridique proposée pour cette mesure est votre consentement. Vous pourrez le refuser ou le retirer via les préférences du pied de page. Google Signals et la personnalisation publicitaire sont désactivés dans le module préparé.',
        ], links: [{ label: 'Informations de Google sur Analytics et la confidentialité', href: 'https://support.google.com/analytics/answer/12017362?hl=fr' }] },
        { id: 'destinataires', title: 'Qui reçoit les informations ?', paragraphs: [
          perRequest
            ? "La demande est reçue par Google Apps Script et enregistrée dans un fichier Google Sheets privé distinct pour chaque demande. La notification adressée à NODINA contient uniquement sa référence et un lien vers le dossier ; elle ne recopie pas vos coordonnées ni votre message. Les échanges ultérieurs sont conservés dans la messagerie Google Workspace. L’accès aux dossiers est réservé au responsable autorisé chez NODINA ; leur contenu n’est pas publié sur le site."
            : "La demande est reçue par Google Apps Script, enregistrée dans un classeur Google Sheets privé et notifiée dans la messagerie Google Workspace de NODINA. Les notifications et échanges peuvent constituer des copies de la demande. L’accès est réservé au responsable autorisé chez NODINA ; le contenu des demandes n’est pas publié sur le site.",
          "Cloudflare sert les pages et protège l’accès au site de revue. Ces services traitent les informations de connexion nécessaires, notamment l’adresse IP, les requêtes et, pour l’accès privé, les informations d’authentification. Leur finalité est de fournir le site et de protéger les accès, sur la base de notre intérêt légitime à assurer sa sécurité.",
          'Google Analytics recevra les données de mesure uniquement lorsque la collecte sera activée et acceptée. Le dépôt privé de reporting conserve des résultats statistiques et des comptes de demandes ; le collecteur n’y exporte ni nom, ni e-mail, ni message.',
        ] },
        { id: 'transferts', title: 'Les traitements hors de l’Union européenne', paragraphs: [
          'Les services Google et Cloudflare utilisent des infrastructures internationales. Le site ne garantit pas un traitement exclusivement dans l’Union européenne.',
          "Des traitements peuvent avoir lieu aux États-Unis et dans les autres pays où ces fournisseurs et leurs sous-traitants disposent d’infrastructures. Les accords de traitement Google Workspace et Cloudflare encadrent ces opérations et prévoient notamment des clauses contractuelles types pour les transferts concernés, selon les conditions de ces accords. Vous pouvez demander à build@nodina.com des informations sur les garanties applicables et la manière d’en obtenir une copie.",
        ], links: [
          { label: 'Cloudflare : accord de traitement et garanties de transfert', href: 'https://www.cloudflare.com/cloudflare-customer-dpa/' },
          { label: 'Google Workspace : garanties pour les transferts internationaux', href: 'https://cloud.google.com/terms/data-processing-addendum/' },
        ] },
        { id: 'durees', title: 'Combien de temps ?', paragraphs: [
          "Les demandes de contact sans suite et les e-mails associés sont conservés au maximum douze mois après le dernier échange. Une demande de retrait ou d’effacement peut être traitée avant cette échéance, selon les conditions applicables. Les données nécessaires à une obligation distincte font l’objet d’un examen séparé.",
          perRequest
            ? "Chaque dossier possède son suivi de conservation. NODINA renseigne le dernier échange, vérifie les copies dans la messagerie et les autres supports, puis effectue la suppression manuellement. La synthèse statistique contient seulement des comptes par date et page d’origine, sans coordonnées ni message. Ces comptes diminuent lorsque les dossiers sont supprimés ; la reconstruction est horaire. Le retrait des copies accessibles ne signifie pas une purge instantanée des sauvegardes du fournisseur."
            : "Le suivi de conservation est manuel : NODINA renseigne le dernier échange et vérifie les copies dans le classeur, la messagerie et les autres supports. Il ne supprime aucune donnée automatiquement. La suppression d’une ligne du classeur ne supprime pas à elle seule son historique ni les copies dans la messagerie ; ces supports doivent être traités séparément.",
          'Les réglages Analytics existants indiquent deux mois pour les données d’événements et quatorze mois pour les données utilisateurs, avec réinitialisation de la durée utilisateur à chaque nouvelle activité. Ces réglages ne fixent pas la durée de tous les rapports agrégés. Leur validation reste ouverte avant activation.',
          'Le choix de mesure est conservé six mois dans votre navigateur. Les cookies de mesure prévus ont une durée maximale configurée de 180 jours, sans renouvellement automatique. Sur l’offre gratuite utilisée pour le site de revue, Cloudflare indique une conservation des journaux d’authentification Access de 24 heures et des journaux d’administration de 18 mois. Les journaux et traces de l’application Workers sont désactivés dans la configuration vérifiée. Ces durées sont distinctes de celles des demandes de contact et des cookies. Les dossiers issus d’une mission client relèvent d’un cadre séparé.',
        ] },
        { id: 'droits', title: 'Vos droits et vos demandes', paragraphs: [
          'Selon les conditions applicables, vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données, ainsi que l’opposition ou la portabilité. Si un traitement repose sur le consentement, vous pouvez le retirer sans remettre en cause les opérations licites antérieures.',
          "Pour exercer vos droits, écrivez à build@nodina.com en précisant votre demande et, si vous en disposez, la référence ou la date de votre échange. N’envoyez pas spontanément une pièce d’identité ; un complément ne sera demandé qu’en cas de doute raisonnable sur votre identité. Nous répondons au plus tard sous un mois. Une prolongation justifiée peut être nécessaire ; vous en serez informé dans ce premier mois.",
          'Vous pouvez adresser une réclamation à la CNIL, notamment si vous estimez que vos droits ne sont pas respectés.',
        ], links: [{ label: 'Écrire à build@nodina.com', href: 'mailto:build@nodina.com' }, { label: 'CNIL : exercer vos droits et déposer une plainte', href: 'https://www.cnil.fr/fr/plaintes' }] },
      ],
    },
    cookies: {
      title: 'Cookies et choix de mesure',
      lead: 'La mesure d’audience est facultative. Votre choix ne conditionne pas l’accès aux pages ni l’envoi d’une demande de contact.',
      sections: [
        { id: 'choisir', title: 'Accepter, refuser, changer d’avis', paragraphs: [
          'Lorsque la mesure sera activée sur le site public, le panneau proposera Accepter et Refuser avec la même présentation. Google Analytics ne sera pas chargé avant acceptation. Sans accord, les interactions de navigation et de formulaire ne seront pas envoyées à Analytics.',
          'Le bouton Préférences de mesure, dans le pied de page, permettra de rouvrir le panneau et de retirer votre accord. Le retrait bloque la mesure et supprime les cookies Analytics concernés sans effacer le formulaire en cours de rédaction. Les interactions effectuées avant un accord ne sont pas rejouées.',
          'La mesure reste actuellement désactivée en préproduction. L’absence du panneau ou du bouton de préférences dans cet environnement ne vaut pas acceptation.',
        ] },
        { id: 'stockage', title: 'Ce qui est stocké dans le navigateur', paragraphs: [
          'Le choix et les cookies de mesure sont distincts. Les noms ci-dessous décrivent le module préparé ; les cookies Google doivent encore être observés lors de la recette du site public après consentement.',
        ], items: [
          'nodina.analytics-choice.v1 — stockage local du navigateur, distinct d’un cookie. Il mémorise votre accord ou votre refus et sa date d’expiration pendant six mois. Il ne contient ni nom ni e-mail et n’est pas transmis au serveur par ce module.',
          '_ga et _ga_J8NV7Z1HMX — cookies Google Analytics prévus uniquement après acceptation et activation publique. Ils servent aux identifiants de mesure ; durée configurée de 180 jours sans renouvellement automatique. Ils sont supprimés par le module en cas de retrait.',
        ] },
        { id: 'acces', title: 'Les cookies d’accès au site de revue', paragraphs: [
          'Le site de revue privé utilise Cloudflare Access pour authentifier les personnes autorisées. Ce service utilise ses propres cookies d’accès et de sécurité, distincts de la mesure d’audience. Refuser Analytics ne désactive pas cette authentification.',
          'La session d’accès au site de revue est configurée à six heures. Cela ne représente pas la durée de tous les cookies Cloudflare. La liste et les durées applicables au futur site public doivent être vérifiées selon les services réellement activés.',
        ], links: [{ label: 'Cloudflare : cookies nécessaires au fonctionnement d’Access', href: 'https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/' }] },
        { id: 'google', title: 'Les informations de mesure prévues', paragraphs: [
          'Après acceptation, Google recevra les pages connues et les interactions mesurées, ainsi que les identifiants de mesure et les informations techniques nécessaires à Analytics. Le module ne lui transmet aucun champ saisi du formulaire. Google Signals et la personnalisation publicitaire sont désactivés.',
          'Les traitements, les destinataires, les transferts et les durées des données de mesure sont détaillés dans la page Confidentialité. Les durées des cookies ne fixent pas à elles seules celles des données conservées par le service.',
        ] },
        { id: 'navigateur', title: 'Les limites du choix enregistré', paragraphs: [
          'Le choix concerne ce navigateur et cet appareil. Il n’est pas synchronisé entre vos appareils. Après expiration, suppression du stockage ou changement de navigateur, un nouveau choix sera demandé si la mesure est activée.',
          'Si le stockage local n’est pas disponible, le choix peut ne pas être conservé entre les pages. Une ancienne acceptation dans un stockage qui ne permet plus d’enregistrer un retrait n’active pas la mesure. Vous pouvez aussi gérer le stockage dans les paramètres du navigateur ; cela ne remplace pas le panneau de choix du site.',
        ] },
      ],
    },
  },
  en: {
    back: '← Back to home', label: 'Your information, your choices', date: 'Updated October 7, 2026',
    draftTitle: 'Private review site',
    draftBody: "These notices describe the form used in this environment. Audience measurement remains disabled on the review site; its activation and settings require separate approval.",
    contents: 'On this page',
    privacy: {
      title: 'Privacy', lead: 'Understand what information the website uses, why it is used, and how to exercise your rights.',
      sections: [
        { id: 'controller', title: 'Who is responsible?', paragraphs: [
          'The data controller is NODINA, a French société par actions simplifiée (SAS), registered under SIREN 103 513 834. Its registered office is at 54 chemin du Château, 06640 Saint-Jeannet, France.',
          'For requests concerning your personal data, write to build@nodina.com.',
          'This page covers the marketing website and its contact inquiries. Data processed during a client engagement is covered by a separate framework appropriate to that project.',
        ], links: [{ label: 'Contact NODINA: build@nodina.com', href: 'mailto:build@nodina.com' }] },
        { id: 'contact', title: 'When you contact us', paragraphs: [
          "The form collects your name, work email, organization and project context. These fields are required to submit an inquiry. Selecting an offer and providing expected timing are optional. The form cannot submit without the required fields; you can also write to build@nodina.com.",
          'It also records language, referring page, any source and campaign parameters, the date, a request identifier, your agreement and notification status. This information supports inquiry handling, duplicate prevention and receipt confirmation.',
          'The purpose is to understand your need and respond. Submitting the form does not subscribe you to a newsletter. Avoid confidential or sensitive information in your message.',
          'Processing an inquiry submitted through this form relies on your consent, given through the checkbox provided. You may withdraw it at any time by writing to build@nodina.com. Withdrawal does not affect earlier lawful processing. This permission does not authorize newsletters or audience measurement.',
        ] },
        { id: 'measurement', title: 'Optional audience measurement', paragraphs: [
          'Google Analytics is planned to understand page visits and the contact journey. It remains disabled on the review site. Once enabled on the public website, it will load only after you accept in the choice panel.',
          'The planned measurements cover the page viewed, clicks on primary contact buttons, the start of the form and confirmed receipt. Receipt does not mean commercial qualification. The module does not send names, emails, organizations, messages or request identifiers to Google Analytics.',
          'Sent URLs are restricted to known pages, without query parameters or fragments. External referrals are reduced to their origin (protocol and domain). Google also processes measurement identifiers and technical browser, device and connection information required for its service. This data is not described as anonymous.',
          'The proposed legal basis for measurement is your consent. You will be able to decline or withdraw it through the footer preferences. Google Signals and advertising personalization are disabled in the prepared module.',
        ], links: [{ label: 'Google’s information about Analytics and privacy', href: 'https://support.google.com/analytics/answer/12017362?hl=en' }] },
        { id: 'recipients', title: 'Who receives the information?', paragraphs: [
          perRequest
            ? "The inquiry is received by Google Apps Script and stored in a separate private Google Sheets file for each inquiry. The notification sent to NODINA contains only its reference and a link to the file; it does not copy your contact details or message. Subsequent exchanges are kept in the Google Workspace mailbox. Access to inquiry files is restricted to NODINA’s authorized operator; their content is not published on the website."
            : "The inquiry is received by Google Apps Script, stored in a private Google Sheets spreadsheet and notified to NODINA’s Google Workspace mailbox. Notifications and exchanges may contain copies of the inquiry. Access is restricted to NODINA’s authorized operator; inquiry content is not published on the website.",
          "Cloudflare serves the pages and protects access to the review site. These services process necessary connection information, including IP addresses, requests and, for private access, authentication information. Their purpose is to provide the website and secure access, based on our legitimate interest in its security.",
          'Google Analytics will receive measurement data only when collection is enabled and accepted. The private reporting repository stores statistical results and inquiry counts; the collector does not export names, emails or messages to it.',
        ] },
        { id: 'transfers', title: 'Processing outside the European Union', paragraphs: [
          'Google and Cloudflare services use international infrastructure. The website does not guarantee processing exclusively within the European Union.',
          "Processing may take place in the United States and other countries where these providers and their subprocessors maintain infrastructure. The Google Workspace and Cloudflare processing agreements govern these operations and provide, in particular, standard contractual clauses for relevant transfers, subject to their terms. You can ask build@nodina.com about applicable safeguards and how to obtain a copy.",
        ], links: [
          { label: 'Cloudflare: processing agreement and transfer safeguards', href: 'https://www.cloudflare.com/cloudflare-customer-dpa/' },
          { label: 'Google Workspace: international transfer safeguards', href: 'https://cloud.google.com/terms/data-processing-addendum/' },
        ] },
        { id: 'retention', title: 'How long is information kept?', paragraphs: [
          "Contact inquiries that do not proceed and related emails are kept for a maximum of twelve months after the last exchange. A withdrawal or deletion request may be handled before that deadline, subject to applicable conditions. Data required for a separate obligation is reviewed separately.",
          perRequest
            ? "Each inquiry file has its own retention tracker. NODINA records the last exchange, checks copies in the mailbox and other locations, and deletes them manually. The statistical summary contains only counts by date and referring page, with no contact details or message. These counts decrease when files are deleted; the summary is rebuilt hourly. Removing accessible copies does not mean immediate deletion of provider backups."
            : "Retention tracking is manual: NODINA records the last exchange and checks copies in the spreadsheet, mailbox and other locations. It does not delete data automatically. Deleting a spreadsheet row does not, by itself, remove its history or copies in the mailbox; those locations must be handled separately.",
          'The existing Analytics settings show two months for event data and fourteen months for user data, with the user-data period reset on new activity. These settings do not determine the retention of all aggregated reports. Approval remains open before activation.',
          'Your measurement choice is stored in your browser for six months. The planned measurement cookies have a configured maximum lifetime of 180 days without automatic renewal. For the free plan used by the review site, Cloudflare documents 24-hour retention for Access authentication logs and 18 months for administration logs. Workers application logs and traces are disabled in the verified configuration. These periods are separate from inquiry and cookie lifetimes. Records from a client engagement are covered by a separate framework.',
        ] },
        { id: 'rights', title: 'Your rights and requests', paragraphs: [
          'Subject to applicable conditions, you may request access, correction, deletion or restriction of your data, as well as object to processing or request portability. Where processing relies on consent, you may withdraw it without affecting earlier lawful processing.',
          "To exercise your rights, write to build@nodina.com with your request and, if available, the reference or date of your exchange. Do not send an identity document unsolicited; further information will be requested only if there is reasonable doubt about your identity. We respond within one month. A justified extension may be necessary; you will be informed within that first month.",
          'You may complain to the French data protection authority, the CNIL, particularly if you believe your rights are not being respected.',
        ], links: [{ label: 'Email build@nodina.com', href: 'mailto:build@nodina.com' }, { label: 'CNIL: exercising your rights and making a complaint', href: 'https://www.cnil.fr/fr/plaintes' }] },
      ],
    },
    cookies: {
      title: 'Cookies and measurement choices',
      lead: 'Audience measurement is optional. Your choice does not determine access to pages or whether you can submit an inquiry.',
      sections: [
        { id: 'choosing', title: 'Accept, decline, change your mind', paragraphs: [
          'Once measurement is enabled on the public site, the panel will offer Accept and Decline with the same presentation. Google Analytics will not load before acceptance. Without permission, navigation and form interactions will not be sent to Analytics.',
          'The Measurement preferences button in the footer will reopen the panel so you can withdraw consent. Withdrawal blocks measurement and deletes the relevant Analytics cookies without clearing a form draft. Interactions that occurred before permission are not replayed.',
          'Measurement currently remains disabled in preproduction. The absence of the panel or preference button in this environment does not mean acceptance.',
        ] },
        { id: 'storage', title: 'What is stored in your browser', paragraphs: [
          'Your choice and measurement cookies are separate. The names below describe the prepared module; Google cookies still need to be observed during public-site testing after consent.',
        ], items: [
          'nodina.analytics-choice.v1 — browser local storage, separate from a cookie. It remembers your acceptance or refusal and its expiry for six months. It contains no name or email and is not sent to the server by this module.',
          '_ga and _ga_J8NV7Z1HMX — planned Google Analytics cookies, only after acceptance and public activation. They support measurement identifiers; configured lifetime of 180 days without automatic renewal. The module deletes them on withdrawal.',
        ] },
        { id: 'access', title: 'Access cookies on the review site', paragraphs: [
          'The private review site uses Cloudflare Access to authenticate authorized visitors. This service uses its own access and security cookies, separate from audience measurement. Declining Analytics does not disable authentication.',
          'The review-site access session is configured for six hours. This is not the lifetime of every Cloudflare cookie. The inventory and periods applicable to the future public site must be checked against the services actually enabled.',
        ], links: [{ label: 'Cloudflare: cookies required for Access', href: 'https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/authorization-cookie/' }] },
        { id: 'google', title: 'The planned measurement information', paragraphs: [
          'After acceptance, Google will receive known pages and measured interactions, together with measurement identifiers and technical information required for Analytics. The module does not send entered form fields. Google Signals and advertising personalization are disabled.',
          'Processing, recipients, transfers and measurement-data retention are explained on the Privacy page. Cookie lifetime alone does not determine how long the service retains data.',
        ] },
        { id: 'browser', title: 'Limits of the saved choice', paragraphs: [
          'The choice applies to this browser and device. It is not synchronized between devices. After expiry, storage deletion or a browser change, a new choice will be requested if measurement is enabled.',
          'If local storage is unavailable, your choice may not persist between pages. An old acceptance in storage that can no longer save a withdrawal does not enable measurement. You can also manage storage in your browser settings; that does not replace the website’s choice panel.',
        ] },
      ],
    },
  },
};
