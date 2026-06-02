"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing and using the Vastu Vibe India website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.",
  },
  {
    title: "2. Services",
    content: "Vastu Vibe India provides custom furniture manufacturing, interior design services, modular furniture solutions, space planning, and renovation services. All services are subject to availability and mutual agreement.",
  },
  {
    title: "3. Quotations & Pricing",
    content: "All quotations provided are valid for 30 days from the date of issue unless otherwise specified. Prices are subject to change based on material costs, design complexity, and market conditions. Final pricing will be confirmed in the project agreement.",
  },
  {
    title: "4. Payment Terms",
    content: "A 50% advance payment is required to commence any project. The remaining 50% is due upon completion and before delivery/installation. For large projects, milestone-based payment schedules may be agreed upon.",
  },
  {
    title: "5. Project Timeline",
    content: "Estimated timelines are provided based on project scope and current workload. While we strive to meet all deadlines, delays may occur due to material availability, design changes, or unforeseen circumstances. We will communicate any delays promptly.",
  },
  {
    title: "6. Design Approvals",
    content: "All designs must be approved by the client before production begins. Any changes requested after approval may incur additional charges and extend the project timeline.",
  },
  {
    title: "7. Warranty",
    content: "All custom furniture comes with a 5-year warranty against manufacturing defects. Modular furniture carries a 3-year warranty. Warranty does not cover normal wear and tear, misuse, or damage caused by improper handling.",
  },
  {
    title: "8. Cancellation Policy",
    content: "Projects can be cancelled within 7 days of signing the agreement with a full refund minus administrative charges. After production begins, cancellation fees will apply based on work completed.",
  },
  {
    title: "9. Intellectual Property",
    content: "All designs, drawings, and concepts created by Vastu Vibe India remain our intellectual property until full payment is received. Upon full payment, clients receive usage rights for their specific project.",
  },
  {
    title: "10. Limitation of Liability",
    content: "Vastu Vibe India shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our total liability shall not exceed the project value.",
  },
  {
    title: "11. Dispute Resolution",
    content: "Any disputes arising from these terms or our services shall be resolved through mutual discussion. If unresolved, disputes shall be subject to the jurisdiction of courts in New Delhi, India.",
  },
  {
    title: "12. Contact Information",
    content: "For any questions regarding these Terms and Conditions, please contact us at: info@vastuvibeindia.com or call us at +91 99999 99999.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Terms and Conditions"
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
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-pure-white">
              Terms & Conditions
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-8">
            <p className="text-dark-charcoal/70 text-sm">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p className="text-dark-charcoal/70 mt-4 leading-relaxed">
              Welcome to Vastu Vibe India. These Terms and Conditions govern your use of our website 
              and services. Please read these terms carefully before using our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-pure-white p-6 lg:p-8 rounded-2xl border border-warm-beige"
              >
                <h2 className="font-heading text-xl font-bold text-deep-walnut mb-4">
                  {section.title}
                </h2>
                <p className="text-dark-charcoal/70 leading-relaxed text-sm">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}