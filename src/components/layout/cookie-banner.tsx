"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  readConsent,
  saveConsent,
  type ConsentStatus,
} from "@/src/lib/cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleChoice = (status: ConsentStatus) => {
    saveConsent(status);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bannière de consentement aux cookies"
      className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl bg-white text-black shadow-2xl ring-1 ring-black/10 animate-fade-in sm:left-auto sm:right-3 sm:max-w-3xl"
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold sm:text-xl">
            Respect de votre vie privée
          </h2>
          <p className="text-sm text-dark-gray sm:text-base">
            Nous utilisons des cookies pour mesurer l&apos;audience du site et
            améliorer nos campagnes publicitaires. Vous pouvez accepter ou
            refuser ces cookies. Votre choix est conservé 6 mois et modifiable à
            tout moment depuis la page{" "}
            <Link
              href="/preferences-cookies"
              className="underline underline-offset-4 font-medium text-sky-blue hover:text-black transition-colors"
            >
              préférences cookies
            </Link>
            . Pour en savoir plus, consultez notre{" "}
            <Link
              href="/politique-confidentialite"
              className="underline underline-offset-4 font-medium text-sky-blue hover:text-black transition-colors"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            size="sm"
            fullWidthOnMobile
            onClick={() => handleChoice("refused")}
          >
            Tout refuser
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidthOnMobile
            onClick={() => handleChoice("accepted")}
          >
            Tout accepter
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
