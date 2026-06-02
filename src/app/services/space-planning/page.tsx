"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Move, Eye, Target, PenTool, Ruler } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Space Analysis",
    description: "Comprehensive analysis of your space dimensions, natural light, and architectural features.",
  },
  {
    icon: Move,
    title: "Traffic Flow",
    description: "Optimizing movement patterns for comfortable and efficient space utilization.",
  },
  {
    icon: Eye,
    title: "Visual Balance",
    description: "Creating harmonious proportions and focal points throughout your space.",
  },
  {
    icon: Target,
    title: "Functional Zoning",
    description: "Defining distinct areas for different activities while maintaining cohesion.",
  },
  {
    icon: PenTool,
    title: "2D & 3D Layouts",
    description: "Detailed floor plans and 3D visualizations to preview your space before execution.",
  },
  {
    icon: Ruler,
    title: "Furniture Placement",
    description: "Strategic furniture positioning for optimal comfort, aesthetics, and functionality.",
  },
];

const process = [
  { step: "01", title: "Site Visit", description: "We visit your space to take measurements and understand the environment." },
  { step: "02", title: "Requirement Analysis", description: "Understanding your lifestyle, needs, and how you want to use the space." },
  { step: "03", title: "Concept Development", description: "Creating initial layout concepts with multiple options for your review." },
  { step: "04", title: "Detailed Planning", description: "Finalizing layouts with precise furniture placement and specifications." },
  { step: "05", title: "3D Visualization", description: "Photorealistic renders to help you visualize the final result." },
  { step: "06", title: "Implementation Guide", description: "Detailed documentation for seamless execution of the plan." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function SpacePlanningPage() {
  return (
    <main className="min-h-screen ">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
          alt="Space Planning Services"
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
              Space Planning
            </h1>
            <p className="text-warm-beige/80 text-lg leading-relaxed">
              Strategic space planning that maximizes functionality, flow, and 
              aesthetics for residential and commercial environments.
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
              Space Planning Expertise
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
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Space Planning Projects
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop", title: "Open Plan Living" },
              { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", title: "Office Layout" },
              { img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop", title: "Kitchen Planning" },
              { img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop", title: "Bedroom Layout" },
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
              Our Planning Process
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
              Optimize Your Space Today
            </h2>
            <p className="text-warm-beige/80 mb-8 leading-relaxed">
              Let our experts create the perfect layout for your space. Book a consultation 
              and receive a complimentary space analysis.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Book Space Analysis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}