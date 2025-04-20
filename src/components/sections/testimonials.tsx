"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Service impeccable, intervention dans l'heure. Merci !",
    author: "Claire M.",
    rating: 5,
  },
  {
    text: "Plombier très pro et sympa. Je recommande.",
    author: "Jean P.",
    rating: 5,
  },
  {
    text: "Pose de clim parfaite, travail propre et rapide.",
    author: "Sarah L.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Témoignages clients</h2>
          <p className="text-muted-foreground">
            Ce que nos clients disent de nos services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
