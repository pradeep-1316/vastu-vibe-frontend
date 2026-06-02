"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Building2,
  User,
  FileText,
  ChevronRight,
  Star,
  Award,
  Users,
  ThumbsUp
} from "lucide-react";
import { cn } from "@/lib/utils";

// Unique images for Contact page (not used elsewhere)
const bannerImage = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop";
const showroomImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop";

// Contact information
const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 93526 65547",
    subtitle: "Mon-Sat, 10AM-7PM",
    href: "tel:+919352665547",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@vastuvibeindia.com",
    subtitle: "We reply within 24 hours",
    href: "mailto:info@vastuvibeindia.com",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vastu Vibe India, Jaipur",
    subtitle: "Rajasthan, India",
    href: "#map",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    subtitle: "Quick response guaranteed",
    href: "https://wa.me/919352665547",
    color: "bg-green-500/10 text-green-600",
  },
];

// Office - Only Jaipur
const offices = [
  {
    city: "Jaipur",
    address: "Vastu Vibe India, Jaipur, Rajasthan",
    phone: "+91 93526 65547",
    email: "info@vastuvibeindia.com",
    hours: "Mon-Sat: 10AM-7PM",
    isMain: true,
  },
];

// Business hours
const businessHours = [
  { day: "Monday - Friday", hours: "10:00 AM - 7:00 PM", isOpen: true },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM", isOpen: true },
  { day: "Sunday", hours: "By Appointment Only", isOpen: false },
];

// Service options for form
const serviceOptions = [
  "Custom Furniture",
  "Interior Design",
  "Modular Kitchen",
  "Wardrobe",
  "Office Furniture",
  "Renovation",
  "Consultation",
  "Other",
];

// Stats
const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "1000+", label: "Projects Done", icon: Award },
  { value: "98%", label: "Satisfaction", icon: ThumbsUp },
  { value: "24hr", label: "Response Time", icon: Clock },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
      }, 4000);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={bannerImage}
            alt="Contact Vastu Vibe India"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-walnut/70 via-deep-walnut/50 to-deep-walnut/90" />
        
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-6 py-2 rounded-full bg-luxury-gold/20 border border-luxury-gold/30 text-luxury-gold text-sm font-medium tracking-wider uppercase mb-6">
                Get in Touch
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Something Beautiful
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Ready to transform your space? Reach out to us for a consultation. 
              We'd love to hear about your project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-cream-ivory -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-pure-white rounded-xl p-6 border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", info.color)}>
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-sm font-bold text-deep-walnut uppercase tracking-wider mb-1">
                  {info.title}
                </h3>
                <p className="font-heading text-lg font-bold text-deep-walnut mb-1 group-hover:text-luxury-gold transition-colors">
                  {info.value}
                </p>
                <p className="text-sm text-dark-charcoal/60">
                  {info.subtitle}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="bg-pure-white rounded-2xl p-8 lg:p-10 border border-warm-beige shadow-lg">
                <div className="mb-8">
                  <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
                    Request a Quote
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut mt-2">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-dark-charcoal/60 mt-2">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-deep-walnut mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/30" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={cn(
                            "w-full pl-12 pr-4 py-3.5 rounded-xl border bg-cream-ivory/50",
                            "text-sm text-dark-charcoal placeholder-dark-charcoal/40",
                            "focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300",
                            errors.name ? "border-red-400" : "border-warm-beige focus:border-luxury-gold"
                          )}
                          placeholder="Your name"
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-deep-walnut mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/30" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={cn(
                            "w-full pl-12 pr-4 py-3.5 rounded-xl border bg-cream-ivory/50",
                            "text-sm text-dark-charcoal placeholder-dark-charcoal/40",
                            "focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300",
                            errors.email ? "border-red-400" : "border-warm-beige focus:border-luxury-gold"
                          )}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-deep-walnut mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/30" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-warm-beige bg-cream-ivory/50 text-sm text-dark-charcoal placeholder-dark-charcoal/40 focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300"
                          placeholder="+91 93526 65547"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-deep-walnut mb-2">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/30" />
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-warm-beige bg-cream-ivory/50 text-sm text-dark-charcoal focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 appearance-none"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-charcoal/30 rotate-90" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-deep-walnut mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-warm-beige bg-cream-ivory/50 text-sm text-dark-charcoal focus:outline-none focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1l">Under ₹1 Lakh</option>
                      <option value="1l-5l">₹1 Lakh - ₹5 Lakh</option>
                      <option value="5l-10l">₹5 Lakh - ₹10 Lakh</option>
                      <option value="10l-25l">₹10 Lakh - ₹25 Lakh</option>
                      <option value="above-25l">Above ₹25 Lakh</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-deep-walnut mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={cn(
                        "w-full px-4 py-3.5 rounded-xl border bg-cream-ivory/50 resize-none",
                        "text-sm text-dark-charcoal placeholder-dark-charcoal/40",
                        "focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 transition-all duration-300",
                        errors.message ? "border-red-400" : "border-warm-beige focus:border-luxury-gold"
                      )}
                      placeholder="Tell us about your project, design preferences, timeline..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className={cn(
                      "w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300",
                      "flex items-center justify-center gap-2",
                      submitted
                        ? "bg-green-500 text-pure-white"
                        : "bg-deep-walnut text-pure-white hover:bg-luxury-gold hover:text-deep-walnut shadow-lg hover:shadow-xl"
                    )}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-pure-white rounded-2xl p-6 border border-warm-beige">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-deep-walnut">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-warm-beige last:border-0">
                      <span className="text-sm text-dark-charcoal/70">{item.day}</span>
                      <span className={cn(
                        "text-sm font-medium",
                        item.isOpen ? "text-deep-walnut" : "text-luxury-gold"
                      )}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={showroomImage}
                  alt="Our Showroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="font-heading text-lg font-bold text-pure-white mb-1">
                    Visit Our Showroom
                  </h4>
                  <p className="text-warm-beige/80 text-sm">
                    See our craftsmanship up close and discuss your project in person.
                  </p>
                </div>
              </div>

              <div className="bg-deep-walnut rounded-2xl p-6 text-center">
                <h4 className="font-heading text-lg font-bold text-pure-white mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-warm-beige/70 text-sm mb-4">
                  Our team is available to help you with any questions.
                </p>
                <a
                  href="https://wa.me/919352665547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-pure-white font-semibold hover:bg-green-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Section - Only Jaipur */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Office
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Visit Our Studio
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="max-w-xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-deep-walnut text-pure-white rounded-2xl p-8 border border-luxury-gold/30"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold mb-4">
                  Main Office
                </span>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-luxury-gold" />
                  <h3 className="font-heading text-xl font-bold">{office.city}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-sm flex items-start gap-2 text-warm-beige/80">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-luxury-gold" />
                    {office.address}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-warm-beige/80">
                    <Phone className="w-4 h-4 shrink-0 text-luxury-gold" />
                    {office.phone}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-warm-beige/80">
                    <Mail className="w-4 h-4 shrink-0 text-luxury-gold" />
                    {office.email}
                  </p>
                  <p className="text-sm flex items-center gap-2 text-warm-beige/80">
                    <Clock className="w-4 h-4 shrink-0 text-luxury-gold" />
                    {office.hours}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-deep-walnut relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <div className="font-heading text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-warm-beige/70 uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="relative h-[400px] bg-cream-ivory">
        <div className="absolute inset-0 bg-gradient-to-b from-pure-white to-cream-ivory" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-luxury-gold" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-deep-walnut mb-2">
              Find Us on Map
            </h3>
            <p className="text-dark-charcoal/60 mb-6">
              Vastu Vibe India, Jaipur, Rajasthan
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deep-walnut text-pure-white font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-deep-walnut relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mb-6">
              Ready to Start Your
              <br />
              <span className="text-luxury-gold">Dream Project?</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's bring your vision to life. Schedule a free consultation with our 
              design team and explore endless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/furniture"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Browse Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919352665547"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold hover:bg-pure-white hover:text-deep-walnut transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}