"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Building2, Store, Sofa } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/lib/animations";

const services = [
  {
    icon: Home,
    title: "Residential Interior",
    description: "Complete interior design for apartments, villas, and homes, creating spaces that reflect your personality.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Professional interior solutions for offices, showrooms, and corporate environments.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Store,
    title: "Restaurant & Cafe",
    description: "Ambient interior design that enhances dining experiences and reflects your brand identity.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Sofa,
    title: "Space Planning",
    description: "Strategic layout optimization to maximize functionality, flow, and aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function InteriorDesign() {
  return (
    <section className="section-padding bg-pure-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Interior Design"
          title="Transforming Spaces Into Experiences"
          caption="Where Design Meets Functionality"
        />

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-[3/2] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/40 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 rounded-xl bg-luxury-gold/20 backdrop-blur flex items-center justify-center mb-4"
                  >
                    <service.icon className="w-6 h-6 text-luxury-gold" />
                  </motion.div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-pure-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-warm-beige/80 max-w-md">
                    {service.description}
                  </p>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/interior-design"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-deep-walnut text-cream-ivory font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
          >
            Explore Interior Design Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
