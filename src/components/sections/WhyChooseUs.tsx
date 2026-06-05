"use client";

import {
  PenTool,
  Award,
  Users,
  Clock,
  Leaf,
  Ruler,
} from "lucide-react";
import { SectionHeader, FloatingCard } from "@/lib/animations";

const features = [
  {
    icon: PenTool,
    title: "Custom Designs",
    description:
      "Every piece is uniquely designed to match your vision, space, and requirements. No two creations are alike.",
  },
  {
    icon: Award,
    title: "Premium Materials",
    description:
      "We source only the finest woods and materials, ensuring durability, beauty, and sustainability in every creation.",
  },
  {
    icon: Users,
    title: "Expert Craftsmanship",
    description:
      "Our master artisans bring decades of experience, combining traditional techniques with modern precision.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We respect your time with clear timelines and punctual delivery, without compromising on quality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Committed to eco-friendly practices with responsibly sourced materials and minimal waste production.",
  },
  {
    icon: Ruler,
    title: "End-to-End Service",
    description:
      "From concept to installation, we manage every aspect of your project for a seamless experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-pure-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%233C2A1E'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Why Choose Us"
          title="What Sets Us Apart"
          caption="Trusted by 500+ Happy Clients Nationwide"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FloatingCard key={feature.title} delay={index * 0.08}>
              <div className="group p-8 rounded-2xl bg-cream-ivory hover:bg-deep-walnut transition-all duration-500 cursor-default">
                <div className="w-14 h-14 rounded-xl bg-deep-walnut/10 flex items-center justify-center mb-5 group-hover:bg-luxury-gold/20 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-luxury-gold transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-walnut mb-3 group-hover:text-cream-ivory transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-dark-charcoal/70 leading-relaxed text-sm group-hover:text-warm-beige/80 transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
