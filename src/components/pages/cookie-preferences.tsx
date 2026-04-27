"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  readConsent,
  saveConsent,
  type ConsentStatus,
} from "@/src/lib/cookie-consent";

export function CookiePreferences() {
  const [status, setStatus] = useState<ConsentStatus | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    const consent = readConsent();
    if (consent) {
      setStatus(consent.status);
      setUpdatedAt(consent.timestamp);
    }
  }, []);

  const handleChoice = (next: ConsentStatus) => {
    saveConsent(next);
    setStatus(next);
    const now = new Date().toISOString();
    setUpdatedAt(now);
    setFeedback(
      next === "accepted"
        ? "Vous avez accepté les cookies."
        : "Vous avez refusé les cookies."
    );
  };

  const formattedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-xl border border-light-gray bg-light-gray-2 p-5">
        <p className="text-base text-dark-gray">
          <span className="font-semibold text-black">État actuel :</span>{" "}
          {status === "accepted" && (
            <span className="text-green font-semibold">
              Cookies acceptés
            </span>
          )}
          {status === "refused" && (
            <span className="text-red font-semibold">Cookies refusés</span>
          )}
          {status === null && (
            <span className="font-semibold">Aucun choix enregistré</span>
          )}
        </p>
        {formattedDate && (
          <p className="mt-1 text-sm text-dark-gray">
            Dernière mise à jour : {formattedDate}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          fullWidthOnMobile
          onClick={() => handleChoice("refused")}
        >
          Tout refuser
        </Button>
        <Button
          variant="default"
          fullWidthOnMobile
          onClick={() => handleChoice("accepted")}
        >
          Tout accepter
        </Button>
      </div>

      {feedback && (
        <p
          role="status"
          aria-live="polite"
          className="text-sm text-dark-gray"
        >
          {feedback} Vos préférences ont été enregistrées.
        </p>
      )}
    </div>
  );
}

export default CookiePreferences;
