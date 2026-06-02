"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield,
  Star,
  CheckCircle,
  Sparkles,
  TreePine,
  Hammer,
  Eye,
  Clock,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

// Unique images for About page (not used elsewhere)
const bannerImage = "https://images.unsplash.com/photo-1601061945697-20902200460e?q=80&w=2070&auto=format&fit=crop";
const storyImage = "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?q=80&w=2070&auto=format&fit=crop";
const workshopImage1 = "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop";
const workshopImage2 = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070&auto=format&fit=crop";
const workshopImage3 = "https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=2070&auto=format&fit=crop";
const workshopImage4 = "https://images.unsplash.com/photo-1597020966298-5f8c0c6f0b0a?q=80&w=2070&auto=format&fit=crop";
const workshopImage5 = "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop";
const founderImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop";

// Values data
const values = [
  {
    icon: Shield,
    title: "Our Mission",
    description: "To craft exceptional custom furniture that perfectly matches your design vision. We transform your ideas into tangible masterpieces using premium materials and time-honored techniques.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To be India's most trusted name in custom furniture making, where every design is unique, every piece is handcrafted with passion, and every client's dream becomes reality.",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    description: "Your design, our craftsmanship. We believe every piece of furniture should be as unique as its owner. Whatever design you imagine, we bring it to life with precision and care.",
    color: "from-rose-500/20 to-rose-600/20",
  },
];

// Core principles
const principles = [
  { icon: TreePine, title: "Sustainable Sourcing", description: "We use only responsibly sourced hardwoods from certified forests." },
  { icon: Hammer, title: "Master Craftsmanship", description: "Every piece is handcrafted by artisans with decades of experience." },
  { icon: Eye, title: "Attention to Detail", description: "From joinery to finish, we obsess over every minute detail." },
  { icon: Star, title: "Premium Quality", description: "Only the finest materials and hardware make it into our furniture." },
  { icon: Clock, title: "Timeless Design", description: "We create pieces that remain beautiful for generations." },
  { icon: Users, title: "Client-Centric", description: "Your vision drives every decision we make." },
];

// Milestones
const milestones = [
  { year: "2020", title: "Founded", description: "Started with a small workshop and big dreams" },
  { year: "2021", title: "100th Project", description: "Completed our 100th custom furniture project" },
  { year: "2022", title: "Expanded Workshop", description: "Moved to a 10,000 sq ft state-of-the-art facility" },
  { year: "2023", title: "500+ Clients", description: "Reached the milestone of 500 happy clients" },
  { year: "2024", title: "1000+ Pieces", description: "Crafted over 1000 unique furniture pieces" },
];

// Stats
const stats = [
  { value: "1000+", label: "Furniture Pieces", icon: Sparkles },
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Master Craftsmen", icon: Hammer },
  { value: "5+", label: "Years Experience", icon: Award },
];

// Team preview
const teamPreview = [
  { name: "Rajesh Sharma", role: "Founder & CEO", image: founderImage },
  { name: "Priya Mehta", role: "Head of Design", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop" },
  { name: "Arjun Kapoor", role: "Master Craftsman", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const bannerY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.div
          style={{ y: bannerY }}
          className="absolute inset-0"
        >
          <Image
            src={bannerImage}
            alt="Vastu Vibe India Workshop"
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
                Our Story
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Crafting Dreams
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Into Reality
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Since 2020, we've been transforming spaces with handcrafted furniture 
              that tells your unique story.
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-pure-white/30 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
                Your Design,
                <br />
                Our Craftsmanship
              </h2>
              <div className="w-20 h-1 bg-luxury-gold mb-8" />
              <p className="text-dark-charcoal/70 leading-relaxed mb-6 text-lg">
                At Vastu Vibe India, we specialize in creating unique, custom-designed 
                furniture that perfectly matches your vision. Whether you have a specific 
                design in mind or need creative direction, our master craftsmen bring your 
                ideas to life with precision and passion.
              </p>
              <p className="text-dark-charcoal/70 leading-relaxed mb-8">
                From hand-carved wooden masterpieces to modern minimalist designs, we 
                craft every piece with meticulous attention to detail. We use only the 
                finest hardwoods - Sheesham, Teak, Oak, Walnut - sourced sustainably to 
                create furniture that becomes a family heirloom.
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "100% Custom Designs",
                  "Premium Hardwoods",
                  "Master Craftsmen",
                  "Lifetime Quality",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-luxury-gold shrink-0" />
                    <span className="text-sm text-deep-walnut font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={storyImage}
                  alt="Furniture Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-deep-walnut text-pure-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="font-heading text-4xl font-bold text-luxury-gold">1000+</div>
                <div className="text-sm text-warm-beige/80 uppercase tracking-wider mt-1">
                  Unique Pieces
                </div>
              </motion.div>
              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-luxury-gold/30 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Philosophy */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              What Drives Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-cream-ivory rounded-2xl p-8 border border-warm-beige hover:border-luxury-gold/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-deep-walnut mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-charcoal/70 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-deep-walnut relative overflow-hidden">
        {/* Background pattern */}
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

      {/* Core Principles */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              How We Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Our Core Principles
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-pure-white rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center shrink-0">
                  <principle.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Gallery */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Behind The Scenes
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Our Workshop
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6">
              Take a peek inside our state-of-the-art workshop where master craftsmen 
              bring your furniture dreams to life.
            </p>
          </motion.div>

          {/* Workshop Collage Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Image 1 - Large Featured (spans 2 cols, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl md:col-span-2 md:row-span-2 group cursor-pointer"
            >
              <Image
                src={workshopImage1}
                alt="Main Workshop Floor"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-deep-walnut/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold mb-2">
                  Featured
                </span>
                <h4 className="text-pure-white text-lg font-heading font-bold">
                  Main Workshop Floor
                </h4>
                <p className="text-warm-beige/80 text-sm mt-1">
                  Where master craftsmen bring designs to life
                </p>
              </div>
            </motion.div>

            {/* Image 2 - Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={workshopImage2}
                alt="Wood Selection Area"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-pure-white text-sm font-heading font-bold">
                  Wood Selection
                </h4>
              </div>
            </motion.div>

            {/* Image 3 - Middle Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={workshopImage3}
                alt="Crafting Station"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-pure-white text-sm font-heading font-bold">
                  Crafting Station
                </h4>
              </div>
            </motion.div>

            {/* Image 4 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={workshopImage4}
                alt="Finishing & Polishing"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-pure-white text-sm font-heading font-bold">
                  Finishing & Polish
                </h4>
              </div>
            </motion.div>

            {/* Image 5 - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <Image
                src={workshopImage5}
                alt="Quality Inspection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-pure-white text-sm font-heading font-bold">
                  Quality Check
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Milestones
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-luxury-gold/30 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-pure-white p-6 rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 inline-block">
                      <div className="font-heading text-2xl font-bold text-luxury-gold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-dark-charcoal/70 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-luxury-gold shrink-0 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-luxury-gold animate-ping opacity-30" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              The Experts
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {teamPreview.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-walnut mb-1">
                  {member.name}
                </h3>
                <p className="text-luxury-gold font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-deep-walnut text-pure-white font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              View Full Team
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              Ready to Create Something
              <br />
              <span className="text-luxury-gold">Extraordinary?</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Share your design vision with us and let our master craftsmen bring it to life. 
              Every piece we create is as unique as you are.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+919999999999"
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