"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Villa Interior",
    category: "Interior Design",
    image: "/images/luxury-villa.png",
  },
  {
    title: "Modern Office Workspace",
    category: "Commercial",
    image: "/images/modern-office.png",
  },
  {
    title: "Custom Dining Set",
    category: "Furniture",
    image: "/images/coustom-dining.png",
  },
  {
    title: "Premium Bedroom Suite",
    category: "Furniture",
    image: "/images/premium-bedroom.png",
  },
  {
    title: "Riverside Cafe Design",
    category: "Interior Design",
    image: "/images/riverSideCafe.png",
  },
  {
    title: "Executive Office Suite",
    category: "Commercial",
    image: "/images/Executive-Office-Suite.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-padding bg-dark-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%23C5A55A'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mt-4 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          <p className="max-w-2xl mx-auto text-warm-beige/60 mt-6 leading-relaxed">
            A showcase of our finest work – from luxurious interiors to custom
            furniture pieces that define elegance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div
                className={`bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${
                  index === 0 ? "aspect-[4/3] sm:aspect-auto sm:h-full min-h-[300px]" : "aspect-[4/3]"
                }`}
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <span className="text-xs text-luxury-gold font-medium tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-heading text-lg lg:text-xl font-bold text-pure-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}