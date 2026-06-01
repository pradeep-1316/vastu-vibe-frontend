"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Living Room",
    description: "Sofas, coffee tables, entertainment units",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    count: "24+ Designs",
  },
  {
    title: "Bedroom",
    description: "Beds, wardrobes, nightstands",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    count: "18+ Designs",
  },
  {
    title: "Dining Room",
    description: "Dining tables, chairs, sideboards",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    count: "15+ Designs",
  },
  {
    title: "Office Furniture",
    description: "Desks, bookcases, conference tables",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    count: "20+ Designs",
  },
  {
    title: "Modular Kitchen",
    description: "Custom kitchen cabinets and islands",
    image: "https://images.unsplash.com/photo-1556909114-44e3e7009e2b?q=80&w=2070&auto=format&fit=crop",
    count: "12+ Designs",
  },
  {
    title: "Outdoor & Garden",
    description: "Patio sets, garden benches, planters",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop",
    count: "10+ Designs",
  },
];

export default function FurnitureCollection() {
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
            Our Collection
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
            Furniture Collection
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6 leading-relaxed">
            Explore our curated collection of handcrafted wooden furniture,
            designed to bring elegance and functionality to every room.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${category.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/30 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                <span className="text-xs text-luxury-gold font-medium tracking-wider uppercase mb-2">
                  {category.count}
                </span>
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-pure-white mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-warm-beige/80 mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-luxury-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore Collection
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/furniture"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-deep-walnut text-deep-walnut font-semibold hover:bg-deep-walnut hover:text-cream-ivory transition-all duration-300"
          >
            View All Furniture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}