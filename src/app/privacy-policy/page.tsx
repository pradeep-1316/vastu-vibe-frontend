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
    title: "1. Information We Collect",
    content: "We collect information that you provide directly to us, including your name, email address, phone number, and project details when you fill out our contact forms or request a quote. We also automatically collect certain information about your device and usage of our website through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use the information we collect to: respond to your inquiries and provide customer support; send you quotes, proposals, and project updates; improve our website and services; send marketing communications (with your consent); and comply with legal obligations.",
  },
  {
    title: "3. Information Sharing",
    content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or serving you, as long as they agree to keep this information confidential.",
  },
  {
    title: "4. Data Security",
    content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "5. Cookies",
    content: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.",
  },
  {
    title: "6. Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You can also opt-out of marketing communications at any time. To exercise these rights, please contact us at info@vastuvibeindia.com.",
  },
  {
    title: "7. Third-Party Links",
    content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.",
  },
  {
    title: "8. Children's Privacy",
    content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.",
  },
  {
    title: "9. Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date.",
  },
  {
    title: "10. Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at: info@vastuvibeindia.com or call us at +91 99999 99999.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Banner Section */}
      <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Privacy Policy"
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
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="mb-8">
            <p className="text-dark-charcoal/70 text-sm">
              <strong>Last Updated:</strong> January 1, 2024
            </p>
            <p className="text-dark-charcoal/70 mt-4 leading-relaxed">
              At Vastu Vibe India, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
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