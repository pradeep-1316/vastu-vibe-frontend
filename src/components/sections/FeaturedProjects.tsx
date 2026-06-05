"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/lib/animations";

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
    <section className="section-padding bg-gradient-to-br from-cream-ivory via-pure-white to-cream-ivory relative overflow-hidden">
      {/* Subtle gold accent top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent" />
      
      {/* Decorative corner orbs */}
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-luxury-gold/[0.04] blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-luxury-gold/[0.04] blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Our Portfolio"
          title="Featured Projects"
          caption="Luxury Redefined in Every Detail"
        />

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
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
            </StaggerItem>
          ))}
        </StaggerContainer>

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
