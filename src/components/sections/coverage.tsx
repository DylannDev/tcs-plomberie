"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Montpellier",
  "Lattes",
  "Castelnau-le-Lez",
  "Mauguio",
  "Juvignac",
  "Grabels",
  "Saint-Jean-de-Védas",
  "Pérols",
  "Villeneuve-lès-Maguelone",
  "Saint-Gély-du-Fesc",
];

export function Coverage() {
  return (
    <section id="zone-intervention" className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Zone d'intervention</h2>
          <p className="text-muted-foreground">
            Nous intervenons sur Montpellier et ses alentours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Villes desservies</h3>
            <ul className="grid grid-cols-2 gap-4">
              {cities.map((city) => (
                <li key={city} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg h-[400px] flex items-center justify-center"
          >
            <p className="text-muted-foreground text-center">
              Carte Google Maps à intégrer
              <br />
              <span className="text-sm">(Emplacement réservé)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
