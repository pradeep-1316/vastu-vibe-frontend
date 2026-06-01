"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Cog, Home } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    description:
      "We begin by understanding your vision, requirements, and preferences. This helps us create a design that truly reflects your style.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: PenTool,
    title: "2. Design",
    description:
      "Our designers create detailed plans, 3D renderings, and material selections. You'll see your space come to life before we build.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Cog,
    title: "3. Manufacturing",
    description:
      "Skilled artisans bring the designs to life using premium materials and time-honored techniques combined with modern precision.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Home,
    title: "4. Installation",
    description:
      "Our team handles the complete installation process, ensuring every piece is perfectly placed and finished to perfection.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-cream-ivory relative overflow-hidden">
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
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
            How We Bring Your Vision to Life
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6 leading-relaxed">
            A seamless journey from concept to creation, ensuring your complete
            satisfaction at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-luxury-gold/20 via-luxury-gold to-luxury-gold/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-pure-white shadow-lg flex items-center justify-center mb-6 border-2 border-luxury-gold/20">
                  <step.icon className="w-7 h-7 text-luxury-gold" />
                </div>

                <div className="bg-pure-white rounded-2xl p-6 shadow-sm border border-warm-beige w-full">
                  <h3 className="font-heading text-lg font-bold text-deep-walnut mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-dark-charcoal/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}