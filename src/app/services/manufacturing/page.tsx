"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Factory, TreePine, Hammer, Sparkles, Recycle, Award } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "State-of-the-Art Facility",
    description: "Modern manufacturing unit equipped with advanced machinery and technology.",
  },
  {
    icon: TreePine,
    title: "Sustainable Sourcing",
    description: "Responsibly sourced wood from certified forests and sustainable plantations.",
  },
  {
    icon: Hammer,
    title: "Master Craftsmen",
    description: "Skilled artisans with generations of woodworking expertise.",
  },
  {
    icon: Sparkles,
    title: "Premium Finishes",
    description: "Hand-applied finishes using premium stains, lacquers, and polishes.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Process",
    description: "Environmentally conscious manufacturing with minimal waste and emissions.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Multi-stage quality checks ensuring every piece meets our high standards.",
  },
];

const process = [
  { step: "01", title: "Design Finalization", description: "Finalizing designs with detailed technical drawings and specifications." },
  { step: "02", title: "Material Procurement", description: "Sourcing premium wood and materials from trusted suppliers." },
  { step: "03", title: "Cutting & Shaping", description: "Precision cutting using CNC machines and traditional tools." },
  { step: "04", title: "Assembly", description: "Expert assembly using time-tested joinery techniques." },
  { step: "05", title: "Finishing", description: "Multiple coats of finish for protection and beauty." },
  { step: "06", title: "Quality Control", description: "Final inspection before packaging and delivery." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen ">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop"
          alt="Furniture Manufacturing"
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
              Furniture Manufacturing
            </h1>
            <p className="text-warm-beige/80 text-lg leading-relaxed">
              In-house manufacturing capabilities combining traditional craftsmanship 
              with modern technology for exceptional quality.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Capabilities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Manufacturing Excellence
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

      {/* Gallery Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Facility
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Inside Our Workshop
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1601061945697-20902200460e?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1597020966298-5f8c0c6f0b0a?q=80&w=2070&auto=format&fit=crop",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Manufacturing ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
              Our Manufacturing Process
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
              Visit Our Manufacturing Facility
            </h2>
            <p className="text-warm-beige/80 mb-8 leading-relaxed">
              See firsthand how we craft your furniture. Schedule a factory tour and 
              witness our commitment to quality and craftsmanship.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Schedule Factory Tour
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}