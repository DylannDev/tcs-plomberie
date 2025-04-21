// ➕ Balisage JSON-LD de la FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "En combien de temps pouvez-vous intervenir à Montpellier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons généralement dans la journée pour toute urgence plomberie, chauffage ou climatisation à Montpellier et ses alentours. Pour une installation planifiée, nous vous proposons un rendez-vous rapide selon vos disponibilités.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des devis gratuits ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, tous nos devis sont gratuits et sans engagement. Que ce soit pour un dépannage ou une installation, nous vous envoyons un devis clair avant chaque intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous en dehors de Montpellier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous nous déplaçons dans toute la métropole de Montpellier, notamment à : Castelnau-le-Lez, Lattes, Pérols, Mauguio, Clapiers, Jacou, Grabels, Juvignac, Le Crès, Saint-Jean-de-Védas, Saint-Gély-du-Fesc, Teyran, Prades-le-Lez, Fabrègues, Castries et Sète. N'hésitez pas à nous contacter pour vérifier si nous couvrons votre commune.",
      },
    },
    {
      "@type": "Question",
      name: "Quels types de travaux de plomberie réalisez-vous ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous prenons en charge tous vos besoins : fuites d’eau, débouchage de canalisation, remplacement de robinet, installation de sanitaires, chauffe-eau, etc. Nous assurons également l’entretien régulier de vos équipements.",
      },
    },
    {
      "@type": "Question",
      name: "Entretenez-vous les chaudières et les climatisations ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous assurons l’entretien et le dépannage de chaudières gaz, électriques, et de systèmes de climatisation. Un entretien régulier garantit la sécurité et la longévité de vos équipements.",
      },
    },
    {
      "@type": "Question",
      name: "Êtes-vous certifié ou assuré pour vos interventions ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, nous sommes assurés et déclarés. Vous bénéficiez d’une intervention réalisée dans le respect des normes, avec une garantie sur les travaux effectués. La sécurité et la transparence sont nos priorités.",
      },
    },
  ],
};

export default faqSchema;
