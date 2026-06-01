"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Our Mission",
    description:
      "To craft exceptional wooden furniture and interior spaces that blend timeless craftsmanship with modern design, bringing warmth and elegance to every space we touch.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be India's most trusted name in premium custom furniture and interior design, setting new standards in craftsmanship, innovation, and personalized design solutions.",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    description:
      "Every piece of furniture tells a story. We believe in creating pieces that resonate with your personality, reflect your style, and stand the test of time.",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-cream-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
            Crafting Excellence Since 2020
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
        </motion.div>

        {/* Company Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop')",
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-deep-walnut rounded-2xl flex items-center justify-center hidden md:flex">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-luxury-gold">
                    5+
                  </div>
                  <div className="text-xs text-cream-ivory tracking-wider uppercase mt-1">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut">
              Where Artisanship Meets Modern Design
            </h3>
            <p className="text-dark-charcoal/70 leading-relaxed">
              At Vastu Vibe India, we are passionate about creating furniture
              that transforms spaces into experiences. Our team of skilled
              artisans and designers work together to bring your vision to life,
              combining traditional craftsmanship with contemporary aesthetics.
            </p>
            <p className="text-dark-charcoal/70 leading-relaxed">
              From conceptualization to final installation, we ensure every
              detail is perfected. We use only the finest materials, sourced
              sustainably, to create pieces that are not just furniture, but
              heirlooms in the making.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deep-walnut text-cream-ivory font-medium hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              Know More About Us
            </Link>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-pure-white border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-deep-walnut/5 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-luxury-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-deep-walnut mb-3">
                {value.title}
              </h3>
              <p className="text-dark-charcoal/70 leading-relaxed text-sm">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}