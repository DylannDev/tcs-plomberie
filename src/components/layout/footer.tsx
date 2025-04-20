import Link from "next/link";
import { MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+33612345678" className="hover:text-primary">
                  06 12 34 56 78
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Montpellier, France
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Lundi - Vendredi: 8h - 19h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Samedi: 9h - 18h</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Dimanche: Urgences uniquement</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-2">
              <Link
                href="/mentions-legales"
                className="block hover:text-primary"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="block hover:text-primary"
              >
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="block hover:text-primary">
                Conditions générales de vente
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} TCS Plomberie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
