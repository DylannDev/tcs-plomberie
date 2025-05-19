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
  title:
    "Plombier, chauffagiste & climatisation à Montpellier | Thermo Clim Sanitaire",
  description:
    "Besoin d’un plombier, chauffagiste ou climaticien à Montpellier ? Thermo Clim Sanitaire intervient 7j/7 pour tout dépannage, installation ou entretien.",
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
  preload: true,
  fallback: ["system-ui", "arial"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={outfit.variable}>
      <head>
        <LocalBusinessJsonLd />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Preload des ressources critiques */}
        <link
          rel="preload"
          href="/fonts/outfit-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`antialiased relative overflow-x-hidden ${outfit.className}`}
      >
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
