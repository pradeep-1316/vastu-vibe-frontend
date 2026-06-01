"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Custom Wooden Furniture", href: "#" },
  { label: "Modular Furniture", href: "#" },
  { label: "Interior Design", href: "#" },
  { label: "Space Planning", href: "#" },
  { label: "Furniture Manufacturing", href: "#" },
  { label: "Renovation Solutions", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Pinterest", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-deep-walnut text-cream-ivory overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-deep-walnut via-luxury-gold to-deep-walnut" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Section 1: Company Info */}
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-deep-walnut font-heading text-lg font-bold">
                  VV
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold text-pure-white">
                  Vastu Vibe
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gold">
                  India
                </span>
              </div>
            </Link>
            <p className="text-sm text-warm-beige/80 leading-relaxed mt-4">
              Premium furniture & interior design specialists crafting unique
              wooden furniture and interior solutions tailored to your
              requirements. Experience the perfect blend of craftsmanship,
              modern aesthetics, and personalized design.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-walnut-light/30 flex items-center justify-center text-warm-beige hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
                >
                  {social.label === "Instagram" && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                  {social.label === "Facebook" && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  )}
                  {social.label === "Pinterest" && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10" />
                      <line x1="18" y1="20" x2="18" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="16" />
                    </svg>
                  )}
                  {social.label === "YouTube" && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                    </svg>
                  )}
                  {social.label === "LinkedIn" && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading text-lg font-semibold text-pure-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-beige/70 hover:text-luxury-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 3: Services */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-lg font-semibold text-pure-white mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-warm-beige/70 hover:text-luxury-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section 4: Contact Details */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading text-lg font-semibold text-pure-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-3 text-sm text-warm-beige/70 hover:text-luxury-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                  <span>+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vastuvibeindia.com"
                  className="flex items-start gap-3 text-sm text-warm-beige/70 hover:text-luxury-gold transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                  <span>info@vastuvibeindia.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-warm-beige/70">
                  <MapPin className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                  <span>
                    123, Premium Design Studio,
                    <br />
                    New Delhi, India - 110001
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-warm-beige/70">
                  <Clock className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                  <span>
                    Mon - Sat: 10:00 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Section 5: Newsletter (spans 2 cols on lg) */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-lg font-semibold text-pure-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-warm-beige/70 mb-4">
              Subscribe to receive updates on new collections, design
              inspirations, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-walnut-light/30 border border-warm-beige/20",
                    "text-sm text-cream-ivory placeholder-warm-beige/50",
                    "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                    "transition-all duration-300"
                  )}
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-luxury-gold text-deep-walnut font-semibold text-sm hover:bg-gold-light transition-all duration-300 shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-green-400 mt-2">
                Thank you for subscribing!
              </p>
            )}

            {/* WhatsApp CTA */}
            <div className="mt-8 p-4 rounded-xl bg-walnut-light/20 border border-warm-beige/10">
              <p className="text-sm text-warm-beige/80 mb-3">
                Have a question? Chat with us on WhatsApp!
              </p>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
                  "bg-green-600 text-white text-sm font-semibold",
                  "hover:bg-green-700 transition-all duration-300"
                )}
              >
                <Send className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-beige/50">
              &copy; {new Date().getFullYear()} Vastu Vibe India. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs text-warm-beige/50 hover:text-luxury-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-warm-beige/50 hover:text-luxury-gold transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}