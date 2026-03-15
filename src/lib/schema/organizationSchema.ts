const baseUrl = "https://tcs-plomberie-montpellier.fr";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Thermo Clim Sanitaire",
  alternateName: "TCS Plomberie",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/logo.svg`,
    width: 200,
    height: 60,
  },
  image: `${baseUrl}/plombier-5.webp`,
  description:
    "TCS Plomberie propose des services de plomberie, chauffage et climatisation à Montpellier et ses alentours. Intervention 7j/7, devis gratuit.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "73 allée Kléber",
    addressLocality: "Montpellier",
    postalCode: "34000",
    addressRegion: "Occitanie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6111,
    longitude: 3.8767,
  },
  telephone: "+33775715252",
  email: "thermoclimsanitaire@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://www.facebook.com/thermoclimsanitaire",
    "https://www.instagram.com/thermoclimsanitaire",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "94",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services TCS Plomberie",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Plomberie",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dépannage plomberie",
              description:
                "Intervention rapide pour fuites d'eau, canalisations bouchées, WC, robinetterie.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Installation sanitaire",
              description:
                "Pose de lavabos, douches, WC, baignoires et rénovation de salle de bain.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Chauffe-eau",
              description:
                "Installation, remplacement et entretien de chauffe-eau électriques, gaz et thermodynamiques.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Chauffage",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Installation pompe à chaleur",
              description:
                "Installation de pompes à chaleur air/eau et air/air, certifié QualiPac RGE.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entretien chauffage",
              description:
                "Entretien annuel de chaudières gaz, pompes à chaleur et radiateurs.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Climatisation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Installation climatisation",
              description:
                "Pose de climatisation réversible, split et gainable. Certifié QualiPac RGE.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entretien climatisation",
              description:
                "Entretien et dépannage de climatisation toutes marques.",
            },
          },
        ],
      },
    ],
  },
};
