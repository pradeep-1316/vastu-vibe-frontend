"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "What types of wood do you use for your furniture?",
    a: "We use premium quality hardwoods including Sheesham (Indian Rosewood), Mango Wood, Teak, Oak, and Walnut. Each wood type is carefully selected based on your requirements, budget, and the specific application of the furniture piece.",
  },
  {
    q: "Do you offer custom furniture design services?",
    a: "Absolutely! Custom design is our specialty. We work closely with you to understand your requirements, style preferences, and space constraints to create bespoke furniture pieces that are uniquely yours.",
  },
  {
    q: "What is the typical timeline for a custom furniture project?",
    a: "Timelines vary based on the complexity of the project. Typically, a custom furniture piece takes 3-6 weeks from design approval to delivery. Larger interior design projects may take 6-12 weeks. We provide a detailed timeline during the consultation phase.",
  },
  {
    q: "Do you provide interior design services for commercial spaces?",
    a: "Yes, we specialize in both residential and commercial interior design. Our portfolio includes offices, restaurants, cafes, showrooms, hotels, and other commercial spaces. We understand the unique requirements of commercial environments.",
  },
  {
    q: "What is your design process?",
    a: "Our process begins with an in-depth consultation to understand your vision. We then create detailed designs and 3D renderings for your approval. Once approved, our skilled artisans begin crafting your pieces, followed by professional installation.",
  },
  {
    q: "Do you offer warranties on your furniture?",
    a: "Yes, all our furniture comes with a comprehensive warranty against manufacturing defects. The warranty period varies by product type. We also offer after-sales service and maintenance support to ensure your furniture remains beautiful for years.",
  },
  {
    q: "Can you work within my budget?",
    a: "We believe in transparent pricing and work with various budget ranges. During the consultation, we discuss your budget and design solutions that offer the best value without compromising on quality and aesthetics.",
  },
  {
    q: "Do you handle the installation process?",
    a: "Yes, we provide end-to-end service including professional installation. Our team ensures that every piece is properly assembled, placed, and finished to perfection in your space.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-pure-white">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <Image
          src="/images/banner-image.png"
          alt="FAQ Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-walnut/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              FAQ
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-4">
              Frequently Asked Questions
            </h1>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">

          {/* FAQ Items */}
          <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-xl border transition-all duration-300 cursor-pointer ${
                openIndex === index
                  ? "border-luxury-gold/30 bg-cream-ivory"
                  : "border-warm-beige bg-pure-white hover:bg-cream-ivory/50"
              }`}
              onClick={() => toggle(index)}
            >
              <div className="flex items-center justify-between p-5 lg:p-6">
                <h3 className="font-heading text-base lg:text-lg font-semibold text-deep-walnut pr-4">
                  {faq.q}
                </h3>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "bg-luxury-gold text-deep-walnut rotate-45"
                      : "bg-deep-walnut/10 text-deep-walnut"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-dark-charcoal/70 leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}