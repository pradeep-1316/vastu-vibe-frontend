"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    text: "AI-Designed Elegance",
  },
  {
    icon: Shield,
    text: "Premium Craftsmanship",
  },
  {
    icon: Award,
    text: "100% Unique Designs",
  },
];

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-walnut via-dark-charcoal to-deep-walnut section-padding">
      {/* Subtle gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-luxury-gold/[0.04] blur-3xl" />
      <div className="absolute bottom-1/2 -right-40 w-80 h-80 rounded-full bg-luxury-gold/[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Video ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-luxury-gold/30 via-transparent to-luxury-gold/20 rounded-3xl blur-sm" />

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-luxury-gold/10 border border-pure-white/10 bg-dark-charcoal">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/images/why-choose-us.jpg"
              >
                <source src="/video/Luxury_chair_assembles_and_floats_202606051515.mp4" type="video/mp4" />
              </video>

              {/* Gradient overlay at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-luxury-gold text-deep-walnut text-xs font-bold px-4 py-2 rounded-full shadow-lg"
            >
              ✦ AI Visualized
            </motion.div>
          </motion.div>

          {/* ── Right: Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-xs font-medium tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              Where Vision Meets Reality
            </motion.span>

            {/* Main heading */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white leading-[1.1]"
              >
                Every Piece{" "}
                <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
                  Tells a Story
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="font-heading text-xl sm:text-2xl md:text-3xl text-gold-light/90 font-medium"
              >
                Uniquely Crafted, Just for You
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-warm-beige/70 leading-relaxed text-base sm:text-lg max-w-xl"
            >
              From the first sketch to the final polish, every creation is a reflection
              of your vision. We blend traditional craftsmanship with modern AI-powered
              design to deliver furniture that is as unique as you are — no templates,
              no mass production, just pure originality.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {features.map((f, i) => (
                <span
                  key={f.text}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pure-white/5 border border-pure-white/10 text-warm-beige/80 text-sm"
                >
                  <f.icon className="w-3.5 h-3.5 text-luxury-gold" />
                  {f.text}
                </span>
              ))}
            </motion.div>

            {/* Decorative divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-24 h-0.5 bg-gradient-to-r from-luxury-gold to-transparent origin-left"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}