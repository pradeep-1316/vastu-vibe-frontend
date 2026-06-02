"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Paintbrush, Hammer, Lightbulb, Sofa, Wrench } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Complete Home Renovation",
    description: "Transform your entire home with comprehensive renovation solutions from concept to completion.",
  },
  {
    icon: Paintbrush,
    title: "Interior Makeover",
    description: "Refresh your interiors with new colors, textures, and design elements.",
  },
  {
    icon: Hammer,
    title: "Structural Changes",
    description: "Safe and professional structural modifications to reconfigure your space.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Upgrades",
    description: "Modern lighting solutions that enhance ambiance and energy efficiency.",
  },
  {
    icon: Sofa,
    title: "Furniture Refresh",
    description: "Restore, reupholster, or replace furniture to breathe new life into your space.",
  },
  {
    icon: Wrench,
    title: "Kitchen & Bath Remodel",
    description: "Complete kitchen and bathroom renovations with premium fixtures and finishes.",
  },
];

const process = [
  { step: "01", title: "Initial Assessment", description: "We evaluate your current space and understand your renovation goals." },
  { step: "02", title: "Design Planning", description: "Creating detailed renovation plans with before/after visualizations." },
  { step: "03", title: "Material Selection", description: "Choosing premium materials, fixtures, and finishes for your project." },
  { step: "04", title: "Demolition & Prep", description: "Safe demolition and preparation of the space for renovation." },
  { step: "05", title: "Construction", description: "Expert execution of the renovation plan with quality craftsmanship." },
  { step: "06", title: "Final Touches", description: "Adding finishing details, styling, and final inspection." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function RenovationPage() {
  return (
    <main className="min-h-screen ">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070&auto=format&fit=crop"
          alt="Renovation Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-walnut/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl px-4"
          >
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-4 mb-6">
              Renovation Solutions
            </h1>
            <p className="text-warm-beige/80 text-lg leading-relaxed">
              Complete renovation services that transform outdated spaces into 
              modern, luxurious environments.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Renovation Services
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pure-white p-8 rounded-2xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-deep-walnut/5 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Transformations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Renovation Projects
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", title: "Living Room Transformation" },
              { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", title: "Kitchen Remodel" },
              { img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop", title: "Bathroom Renovation" },
              { img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop", title: "Bedroom Makeover" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-xl font-bold text-pure-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Our Renovation Process
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-luxury-gold flex items-center justify-center shrink-0">
                  <span className="font-heading text-lg font-bold text-deep-walnut">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-walnut">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Ready to Renovate Your Space?
            </h2>
            <p className="text-warm-beige/80 mb-8 leading-relaxed">
              Let's discuss your renovation project. Schedule a free consultation and 
              get a detailed quote for your transformation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}