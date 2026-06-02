"use client";

import Link from "next/link";
import Image from "next/image";
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
  { label: "Custom Wooden Furniture", href: "/services/custom-furniture" },
  { label: "Modular Furniture", href: "/services/modular-furniture" },
  { label: "Interior Design", href: "/services/interior-design" },
  { label: "Space Planning", href: "/services/space-planning" },
  { label: "Furniture Manufacturing", href: "/services/manufacturing" },
  { label: "Renovation Solutions", href: "/services/renovation" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Section 1: Company Info - Logo & Description */}
          <motion.div {...fadeInUp} className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/vastu-vibes-logo.png"
                  alt="Vastu Vibe India"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-warm-beige/80 leading-relaxed mb-6">
              Premium furniture & interior design specialists crafting unique
              wooden furniture and interior solutions tailored to your
              requirements. Experience the perfect blend of craftsmanship,
              modern aesthetics, and personalized design.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
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
            className="lg:col-span-2"
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
            className="lg:col-span-3"
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
            className="lg:col-span-3"
          >
            <h3 className="font-heading text-lg font-semibold text-pure-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919352665547"
                  className="flex items-start gap-3 text-sm text-warm-beige/70 hover:text-luxury-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-luxury-gold shrink-0" />
                  <span>+91 93526 65547</span>
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
                    Jaipur, Rajasthan
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
        </div>

        {/* Newsletter Section - Separate Row */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-16 border-t border-warm-beige/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-pure-white mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-sm text-warm-beige/70">
                Get updates on new collections, design inspirations, and exclusive offers.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className={cn(
                      "w-full px-5 py-3.5 rounded-xl bg-walnut-light/30 border border-warm-beige/20",
                      "text-sm text-cream-ivory placeholder-warm-beige/50",
                      "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                      "transition-all duration-300"
                    )}
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-luxury-gold text-deep-walnut font-semibold text-sm hover:bg-gold-light transition-all duration-300 shrink-0 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-green-400 mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/919352665547"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                "bg-green-600 text-white text-sm font-semibold",
                "hover:bg-green-700 transition-all duration-300"
              )}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-beige/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-warm-beige/50">
              &copy; {new Date().getFullYear()} Vastu Vibe India. All rights reserved.
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