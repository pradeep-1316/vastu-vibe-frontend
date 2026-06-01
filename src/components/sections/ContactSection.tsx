"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@vastuvibeindia.com",
    href: "mailto:info@vastuvibeindia.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123, Premium Design Studio, New Delhi, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 10 AM - 7 PM",
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section className="section-padding bg-cream-ivory relative overflow-hidden">
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='%233C2A1E'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
            Let's Create Something Beautiful
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6 leading-relaxed">
            Ready to transform your space? Reach out to us for a consultation.
            We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
              {contactInfo.map((info) => {
              const Icon = info.icon;
              const Card = info.href ? "a" : "div";
              const cardProps = info.href ? { href: info.href, key: info.label } : { key: info.label };
              return (
                <Card
                  {...cardProps}
                  className="flex items-start gap-4 p-4 rounded-xl bg-pure-white border border-warm-beige hover:border-luxury-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-deep-walnut/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-medium-gray uppercase tracking-wider mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium text-deep-walnut">
                      {info.value}
                    </p>
                  </div>
                </Card>
              );
            })}
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-pure-white rounded-2xl p-6 lg:p-8 shadow-sm border border-warm-beige">
              <h3 className="font-heading text-xl font-bold text-deep-walnut mb-6">
                Request a Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-charcoal mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream-ivory/50",
                        "text-sm text-dark-charcoal placeholder-medium-gray/60",
                        "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                        "transition-all duration-300"
                      )}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-charcoal mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream-ivory/50",
                        "text-sm text-dark-charcoal placeholder-medium-gray/60",
                        "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                        "transition-all duration-300"
                      )}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-dark-charcoal mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream-ivory/50",
                        "text-sm text-dark-charcoal placeholder-medium-gray/60",
                        "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                        "transition-all duration-300"
                      )}
                      placeholder="+91 99999 99999"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-dark-charcoal mb-1.5"
                    >
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream-ivory/50",
                        "text-sm text-dark-charcoal",
                        "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                        "transition-all duration-300"
                      )}
                    >
                      <option value="">Select a service</option>
                      <option value="custom-furniture">Custom Furniture</option>
                      <option value="interior-design">Interior Design</option>
                      <option value="modular-furniture">Modular Furniture</option>
                      <option value="space-planning">Space Planning</option>
                      <option value="renovation">Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-charcoal mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border border-warm-beige bg-cream-ivory/50",
                      "text-sm text-dark-charcoal placeholder-medium-gray/60",
                      "focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/30",
                      "transition-all duration-300 resize-none"
                    )}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300",
                    "bg-deep-walnut text-cream-ivory hover:bg-luxury-gold hover:text-deep-walnut",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  {submitted ? (
                    <span className="inline-flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      Message Sent Successfully!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}