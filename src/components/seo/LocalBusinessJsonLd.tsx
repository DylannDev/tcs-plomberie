"use client";

import Script from "next/script";

export const LocalBusinessJsonLd = () => {
  return (
    <Script
      id="localbusiness-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "Plumber"],
          name: "Thermo Clim Sanitaire",
          alternateName: "TCS Plomberie",
          url: "https://tcs-plomberie-montpellier.fr",
          logo: "https://tcs-plomberie-montpellier.fr/logo.svg",
          image: "https://tcs-plomberie-montpellier.fr/plombier-5.webp",
          description:
            "Thermo Clim Sanitaire propose des services de plomberie, chauffage et climatisation à Montpellier et ses alentours. Intervention 24h/24 et 7j/7, devis gratuit.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "73 allée Kleber",
            addressLocality: "Montpellier",
            postalCode: "34000",
            addressCountry: "FR",
          },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 43.6111,
              longitude: 3.8767,
            },
            geoRadius: 25000,
          },
          openingHours: ["Mo-Su 00:00-23:59"],
          telephone: "+33775715252",
          email: "thermoclimsanitaire@gmail.com",
          priceRange: "€€",
          sameAs: [
            "https://www.facebook.com/thermoclimsanitaire",
            "https://www.instagram.com/thermoclimsanitaire",
          ],
        }),
      }}
    />
  );
};
