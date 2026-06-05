"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionCaption } from "@/lib/animations";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "New Delhi",
    role: "Homeowner",
    rating: 5,
    content:
      "Vastu Vibe India transformed our home into a masterpiece. The attention to detail, quality of craftsmanship, and their understanding of our vision was exceptional. Every piece of furniture they created for us is a work of art.",
  },
  {
    name: "Rajesh Mehta",
    location: "Mumbai",
    role: "Business Owner",
    rating: 5,
    content:
      "We commissioned Vastu Vibe India for our office interior design and custom furniture. The result was beyond our expectations. Professional, punctual, and absolutely brilliant in their work. Highly recommended!",
  },
  {
    name: "Ananya Gupta",
    location: "Bangalore",
    role: "Architect",
    rating: 5,
    content:
      "As an architect, I have high standards for craftsmanship. Vastu Vibe India exceeded every expectation. Their custom furniture pieces are not just functional – they are sculptural works that elevate any space.",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    role: "Restaurant Owner",
    rating: 5,
    content:
      "The team designed and furnished our entire restaurant. The ambiance they created with custom wooden furniture and thoughtful interior design has received countless compliments from our patrons.",
  },
  {
    name: "Neha Patel",
    location: "Ahmedabad",
    role: "Homeowner",
    rating: 5,
    content:
      "From our first consultation to the final installation, the experience with Vastu Vibe India was seamless. Our modular kitchen and living room furniture are absolutely stunning. Truly premium quality.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index % testimonials.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1 + testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-12 md:py-16 bg-deep-walnut relative overflow-hidden">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
      <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />
      
      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
      <div className="absolute bottom-[2px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Title area */}
        <div className="text-center mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-luxury-gold font-medium text-xs tracking-[0.2em] uppercase block"
          >
            Testimonials
          </motion.span>
          <SectionCaption text="Real Stories from Our Happy Clients" />
        </div>

        {/* Testimonial - compact card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-deep-walnut/40 backdrop-blur rounded-xl p-6 border border-luxury-gold/10 shadow-lg">
                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-1 mb-3"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 400 }}
                    >
                      <Star
                        className={`w-3.5 h-3.5 ${
                          i < t.rating
                            ? "fill-luxury-gold text-luxury-gold"
                            : "text-warm-beige/20"
                        }`}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="text-warm-beige/80 leading-relaxed text-sm md:text-base font-light"
                >
                  &ldquo;{t.content}&rdquo;
                </motion.p>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2.5 mt-4 pt-3 border-t border-luxury-gold/10"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-luxury-gold to-amber-600 flex items-center justify-center shrink-0"
                  >
                    <span className="text-[10px] font-bold text-deep-walnut">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </motion.div>
                  <div>
                    <p className="text-xs font-semibold text-pure-white leading-tight">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-warm-beige/50 leading-tight">
                      {t.role} &bull; {t.location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - compact */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-7 h-7 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold/60 hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </motion.button>

            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                >
                  <span
                    className={`block rounded-full transition-all duration-400 ${
                      index === current
                        ? "w-5 h-1.5 bg-luxury-gold"
                        : "w-1.5 h-1.5 bg-warm-beige/20 hover:bg-warm-beige/40"
                    }`}
                  />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-7 h-7 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold/60 hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
