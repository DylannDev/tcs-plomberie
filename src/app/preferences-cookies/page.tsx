import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferences } from "@/src/components/pages/cookie-preferences";

export const metadata: Metadata = {
  title: "Préférences cookies | TCS Plomberie Montpellier",
  description:
    "Gérez vos préférences de cookies sur le site de TCS Plomberie : acceptez ou refusez à tout moment les cookies de mesure d'audience et de publicité.",
  alternates: {
    canonical: "/preferences-cookies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <main className="max-w-[900px] mx-auto px-5 sm:px-8 py-8 md:py-20 rich-text">
      <h1>Préférences cookies</h1>

      <p>
        Cette page vous permet de modifier à tout moment votre choix concernant
        les cookies déposés sur le site TCS Plomberie. Votre choix est conservé
        pendant 6 mois sur votre navigateur.
      </p>

      <h2>Cookies utilisés sur ce site</h2>
      <ul>
        <li>
          <strong>Google Tag Manager</strong> — gestionnaire de balises
          permettant de déclencher les outils ci-dessous.
        </li>
        <li>
          <strong>Google Analytics 4</strong> — mesure d&apos;audience
          (statistiques de visite, pages consultées). Cookies déposés
          uniquement après votre consentement.
        </li>
        <li>
          <strong>Google Ads</strong> — suivi des conversions publicitaires.
          Cookies déposés uniquement après votre consentement.
        </li>
      </ul>

      <h2>Modifier mes préférences</h2>
      <CookiePreferences />

      <p className="mt-8 text-sm">
        Pour plus d&apos;informations, consultez notre{" "}
        <Link href="/politique-confidentialite">
          politique de confidentialité
        </Link>
        .
      </p>
    </main>
  );
}
