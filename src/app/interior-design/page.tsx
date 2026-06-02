"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Coffee, Bed, UtensilsCrossed, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Retail"];

const designStyles = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Transform your home into a sanctuary that reflects your personality and lifestyle.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Office Interiors",
    description: "Create productive and inspiring workspaces that boost employee morale and efficiency.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Coffee,
    title: "Cafe & Restaurant",
    description: "Design inviting dining spaces that enhance the customer experience and brand identity.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
  },
  {
    icon: Bed,
    title: "Hotel & Hospitality",
    description: "Create memorable guest experiences through thoughtful hospitality design.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Retail Spaces",
    description: "Design retail environments that attract customers and drive sales.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Complex",
    description: "Large-scale commercial interior solutions for corporate and business spaces.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
  },
];

const projects = [
  {
    title: "Modern Luxury Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    location: "New Delhi",
    area: "4,500 sq ft",
  },
  {
    title: "Tech Startup Office",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
    location: "Gurugram",
    area: "8,000 sq ft",
  },
  {
    title: "Boutique Hotel Lobby",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    location: "Udaipur",
    area: "2,500 sq ft",
  },
  {
    title: "Artisan Coffee House",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    location: "Mumbai",
    area: "1,800 sq ft",
  },
  {
    title: "Fashion Boutique",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    location: "Bangalore",
    area: "1,200 sq ft",
  },
  {
    title: "Penthouse Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    location: "Chennai",
    area: "3,200 sq ft",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function InteriorDesignPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Interior Design Services"
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
              Interior Design
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-4 mb-6">
              Transforming Spaces
            </h1>
            <p className="text-warm-beige/80 text-lg leading-relaxed">
              Complete interior design solutions that blend aesthetics with functionality, 
              creating spaces that inspire and delight.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Design Styles Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Interior Design Specializations
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designStyles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={style.image}
                    alt={style.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-lg bg-luxury-gold flex items-center justify-center mb-2">
                      <style.icon className="w-5 h-5 text-deep-walnut" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-pure-white">
                      {style.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Interior Design Portfolio
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                  activeCategory === cat
                    ? "bg-deep-walnut text-pure-white shadow-lg"
                    : "bg-cream-ivory text-dark-charcoal/70 border border-warm-beige hover:border-luxury-gold/30"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/90 via-deep-walnut/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-xl font-bold text-pure-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-warm-beige/80 text-sm">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {project.location}
                      </span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              Our Design Process
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your vision, needs, and budget." },
              { step: "02", title: "Concept Design", description: "Creating mood boards and initial design concepts." },
              { step: "03", title: "Development", description: "Detailed drawings, material selection, and 3D renders." },
              { step: "04", title: "Execution", description: "Bringing the design to life with expert craftsmanship." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-xl font-bold text-deep-walnut">{item.step}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-warm-beige/80 mb-8 leading-relaxed">
              Schedule a free consultation with our interior design team and let's create 
              something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}