"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  HelpCircle,
  Package,
  Truck,
  CreditCard,
  Clock,
  Shield,
  Wrench,
  Ruler,
  TreePine,
  Star,
  CheckCircle,
  Plus,
  Minus
} from "lucide-react";

// Unique images for FAQ page (not used elsewhere)
const bannerImage = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop";
const helpImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop";

// FAQ Categories
const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "general", label: "General", icon: Star },
  { id: "custom", label: "Custom Furniture", icon: Wrench },
  { id: "materials", label: "Materials & Wood", icon: TreePine },
  { id: "ordering", label: "Ordering", icon: Package },
  { id: "delivery", label: "Delivery", icon: Truck },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "warranty", label: "Warranty", icon: Shield },
];

// FAQ Data
const faqs = [
  {
    category: "general",
    question: "What types of furniture do you make?",
    answer: "We specialize in custom wooden furniture including living room sets, bedroom furniture, dining tables, office furniture, modular kitchens, wardrobes, and outdoor furniture. Every piece is handcrafted to your exact specifications and design preferences.",
  },
  {
    category: "general",
    question: "Do you offer interior design services?",
    answer: "Yes, we provide complete interior design services alongside our custom furniture. Our design team can help you plan your space, select materials, and create a cohesive design that complements your custom furniture pieces.",
  },
  {
    category: "custom",
    question: "How do I order custom furniture?",
    answer: "Simply share your design ideas, sketches, or inspiration images with us through our contact form, phone, or by visiting our showroom. Our design team will work with you to finalize the design, materials, and specifications before beginning production.",
  },
  {
    category: "custom",
    question: "Can I visit your workshop to see the crafting process?",
    answer: "Absolutely! We welcome showroom and workshop visits. You can see our craftsmen at work, view material samples, and discuss your project in person. Please schedule an appointment for a personalized tour.",
  },
  {
    category: "custom",
    question: "How long does custom furniture take to make?",
    answer: "Production time varies based on complexity and current workload. Typically, a single piece takes 3-6 weeks, while complete room sets may take 8-12 weeks. We provide detailed timelines during the consultation phase.",
  },
  {
    category: "materials",
    question: "What types of wood do you use?",
    answer: "We work with premium hardwoods including Sheesham (Indian Rosewood), Teak, Oak, Walnut, Mango wood, and Acacia. Each wood type has unique characteristics, and we help you choose the best option based on your design, budget, and usage requirements.",
  },
  {
    category: "materials",
    question: "Are your materials sustainably sourced?",
    answer: "Yes, we are committed to sustainability. All our wood is sourced from certified forests and sustainable plantations. We also offer reclaimed wood options for eco-conscious clients.",
  },
  {
    category: "materials",
    question: "What finishes do you offer?",
    answer: "We offer a wide range of finishes including natural oil, lacquer, polyurethane, wax, and paint finishes. We also provide custom color matching and specialty finishes like distressed, antique, and high-gloss.",
  },
  {
    category: "ordering",
    question: "What is the minimum order value?",
    answer: "We don't have a strict minimum order value. We're happy to craft single pieces or complete furniture sets. However, larger orders may qualify for volume discounts.",
  },
  {
    category: "ordering",
    question: "Can I modify my order after placing it?",
    answer: "Minor modifications can be made within the first week of order confirmation. Major design changes after production has begun may incur additional charges and extend the delivery timeline.",
  },
  {
    category: "delivery",
    question: "Do you deliver across India?",
    answer: "Yes, we deliver pan-India. For local deliveries (Delhi NCR), we use our own team for safe installation. For other cities, we partner with specialized furniture movers to ensure safe transit and assembly.",
  },
  {
    category: "delivery",
    question: "Is installation included in the delivery?",
    answer: "Yes, professional installation is included with all deliveries. Our team ensures every piece is properly assembled, placed, and finished to perfection in your space.",
  },
  {
    category: "delivery",
    question: "What are the delivery charges?",
    answer: "Delivery charges vary based on location and order size. Local deliveries in Delhi NCR are often complimentary for orders above a certain value. We provide detailed delivery quotes during the ordering process.",
  },
  {
    category: "payment",
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, UPI, credit/debit cards, and cheques. For large orders, we also offer EMI options through select banking partners.",
  },
  {
    category: "payment",
    question: "What is your payment schedule?",
    answer: "We typically require 50% advance payment to begin production, with the remaining 50% due before delivery. For large projects, we offer milestone-based payment schedules.",
  },
  {
    category: "warranty",
    question: "Do you offer warranty on your furniture?",
    answer: "Yes, all our custom furniture comes with a 5-year warranty against manufacturing defects. Modular furniture carries a 3-year warranty. We also offer extended warranty options for additional peace of mind.",
  },
  {
    category: "warranty",
    question: "What does the warranty cover?",
    answer: "Our warranty covers manufacturing defects, structural issues, and hardware problems. It does not cover normal wear and tear, damage from misuse, or natural variations in wood grain and color.",
  },
  {
    category: "warranty",
    question: "Do you provide after-sales service?",
    answer: "Yes, we provide comprehensive after-sales service including polishing, repairs, and maintenance. Our service team is available for annual maintenance contracts to keep your furniture looking its best.",
  },
];

// Quick links
const quickLinks = [
  { label: "Custom Furniture", href: "/services/custom-furniture", icon: Wrench },
  { label: "Our Collection", href: "/furniture", icon: Package },
  { label: "Contact Us", href: "/contact", icon: Phone },
  { label: "About Us", href: "/about", icon: Star },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
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
            alt="FAQ - Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-walnut/70 via-deep-walnut/50 to-deep-walnut/90" />
        
        {/* Decorative elements */}
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
                Help Center
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Find answers to common questions about our custom furniture services, 
              materials, delivery, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-cream-ivory -mt-16 relative z-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/40" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-pure-white border border-warm-beige focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all duration-300 text-dark-charcoal placeholder-dark-charcoal/40 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-8 bg-cream-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-deep-walnut text-pure-white shadow-lg"
                    : "bg-pure-white text-dark-charcoal/70 border border-warm-beige hover:border-luxury-gold/30"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut">
              {activeCategory === "all" 
                ? "All Questions" 
                : categories.find(c => c.id === activeCategory)?.label}
            </h2>
            <p className="text-dark-charcoal/60 mt-2">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`bg-pure-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    openFAQ === index
                      ? "border-luxury-gold/50 shadow-lg"
                      : "border-warm-beige hover:border-luxury-gold/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        openFAQ === index ? "bg-luxury-gold text-deep-walnut" : "bg-luxury-gold/10 text-luxury-gold"
                      }`}>
                        {openFAQ === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                      <h3 className="font-heading text-base md:text-lg font-semibold text-deep-walnut">
                        {faq.question}
                      </h3>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20">
                          <p className="text-dark-charcoal/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No results message */}
          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-dark-charcoal/20 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-deep-walnut mb-2">
                No questions found
              </h3>
              <p className="text-dark-charcoal/60">
                Try a different search term or browse all categories.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Quick Links
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut mt-4">
              Explore More
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="flex flex-col items-center gap-3 p-6 bg-cream-ivory rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                    <link.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <span className="font-heading text-sm font-bold text-deep-walnut text-center">
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
                Need More Help?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-dark-charcoal/70 leading-relaxed mb-8">
                Can't find the answer you're looking for? Our team is here to help. 
                Reach out to us through any of the channels below, and we'll get back 
                to you as soon as possible.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 p-4 bg-pure-white rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-charcoal/60">Call us at</p>
                    <p className="font-heading font-bold text-deep-walnut">+91 99999 99999</p>
                  </div>
                </a>

                <a
                  href="mailto:info@vastuvibeindia.com"
                  className="flex items-center gap-4 p-4 bg-pure-white rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-charcoal/60">Email us at</p>
                    <p className="font-heading font-bold text-deep-walnut">info@vastuvibeindia.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pure-white rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-charcoal/60">Chat on WhatsApp</p>
                    <p className="font-heading font-bold text-deep-walnut">Quick Response</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={helpImage}
                  alt="Customer Support"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-deep-walnut text-pure-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center">
                    <Clock className="w-6 h-6 text-deep-walnut" />
                  </div>
                  <div>
                    <p className="text-sm text-warm-beige/80">Response Time</p>
                    <p className="font-heading font-bold text-luxury-gold">Within 24 Hours</p>
                  </div>
                </div>
              </motion.div>
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-luxury-gold/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
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
              <span className="text-luxury-gold">Furniture Project?</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us bring your vision to life with handcrafted furniture that's 
              uniquely yours. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/furniture"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold hover:bg-pure-white hover:text-deep-walnut transition-all duration-300"
              >
                Browse Collection
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}