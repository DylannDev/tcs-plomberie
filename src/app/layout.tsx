import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import faqSchema from "../lib/schema/faqSchema";
import { Section } from "../components/ui/section";
import { PreFooter } from "../components/sections/pre-footer";
import { LocalBusinessJsonLd } from "../components/seo/LocalBusinessJsonLd";

export const metadata: Metadata = {
  title: "Plombier agréé à Montpellier – Chauffage & clim | TCS Plomberie",
  description:
    "Plombier agréé à Montpellier, TCS Plomberie intervient 7j/7 pour les fuites, WC bouchés, dépannage, installation ou entretien chauffage et climatisation.",
  keywords:
    "plombier Montpellier, dépannage plomberie Montpellier, chauffagiste Montpellier, climatisation Montpellier, urgence plombier Montpellier, installation plomberie, entretien chaudière, dépannage climatisation",
  openGraph: {
    title:
      "Plombier, chauffagiste & climatisation à Montpellier | Thermo Clim Sanitaire",
    description:
      "Intervention rapide pour vos besoins en plomberie, chauffage et climatisation à Montpellier et alentours. Devis gratuit immédiat avec Thermo Clim Sanitaire Plomberie, artisan de confiance 7j/7.",
    type: "website",
    locale: "fr_FR",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Réduit aux poids les plus utilisés
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.className}>
      <head>
        <LocalBusinessJsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`antialiased relative overflow-x-hidden`}>
        <Navbar />
        <div className="flex flex-col min-h-screen w-full">
          <div className="flex-grow">{children}</div>
          <Section size="large">
            <PreFooter />
          </Section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
