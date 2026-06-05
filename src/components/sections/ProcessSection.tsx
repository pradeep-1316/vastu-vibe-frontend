"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Cog, Home } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/lib/animations";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    description:
      "We begin by understanding your vision, requirements, and preferences. This helps us create a design that truly reflects your style.",
  },
  {
    icon: PenTool,
    title: "2. Design",
    description:
      "Our designers create detailed plans, 3D renderings, and material selections. You'll see your space come to life before we build.",
  },
  {
    icon: Cog,
    title: "3. Manufacturing",
    description:
      "Skilled artisans bring the designs to life using premium materials and time-honored techniques combined with modern precision.",
  },
  {
    icon: Home,
    title: "4. Installation",
    description:
      "Our team handles the complete installation process, ensuring every piece is perfectly placed and finished to perfection.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-cream-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Our Process"
          title="How We Bring Your Vision to Life"
          caption="4 Simple Steps to Your Dream Space"
        />

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-luxury-gold/20 via-luxury-gold to-luxury-gold/20 origin-left"
          />

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            staggerDelay={0.15}
          >
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step Icon Circle */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-16 h-16 rounded-full bg-pure-white shadow-lg flex items-center justify-center mb-6 border-2 border-luxury-gold/20"
                  >
                    <step.icon className="w-7 h-7 text-luxury-gold" />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(197, 165, 90, 0.2)" }}
                    className="bg-pure-white rounded-2xl p-6 shadow-sm border border-warm-beige w-full transition-all duration-300"
                  >
                    <h3 className="font-heading text-lg font-bold text-deep-walnut mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-dark-charcoal/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
