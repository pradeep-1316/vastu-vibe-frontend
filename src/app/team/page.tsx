"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, 
  ArrowRight, 
  Award, 
  Users, 
  Heart, 
  Target, 
  Lightbulb,
  Star,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ExternalLink
} from "lucide-react";

// Unique images for Team page (not used elsewhere)
const bannerImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";
const cultureImage1 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop";
const cultureImage2 = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";
const cultureImage3 = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";
const officeImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

// Leadership team
const leadership = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop",
    bio: "Visionary leader with 15+ years in luxury furniture design and business strategy. Rajesh founded Vastu Vibe India with a mission to bring world-class custom furniture to every home.",
    expertise: ["Business Strategy", "Design Vision", "Client Relations"],
    linkedin: "#",
    email: "rajesh@vastuvibeindia.com",
  },
  {
    name: "Priya Mehta",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop",
    bio: "Award-winning designer specializing in luxury residential spaces. Priya brings 12 years of experience in creating bespoke furniture designs that blend tradition with modernity.",
    expertise: ["Furniture Design", "Space Planning", "Color Theory"],
    linkedin: "#",
    email: "priya@vastuvibeindia.com",
  },
];

// Design team
const designTeam = [
  {
    name: "Vikram Singh",
    role: "Senior Furniture Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop",
    bio: "Specializes in modern furniture design with sustainable materials.",
    expertise: ["Modern Design", "3D Modeling", "Material Selection"],
  },
  {
    name: "Ananya Reddy",
    role: "Interior Stylist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
    bio: "Expert in creating cohesive interior schemes with custom furniture.",
    expertise: ["Styling", "Client Consultation", "Trend Research"],
  },
  {
    name: "Rohan Gupta",
    role: "Design Associate",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    bio: "Young talent bringing fresh perspectives to traditional craftsmanship.",
    expertise: ["CAD Design", "Sketching", "Prototyping"],
  },
];

// Master craftsmen
const craftsmen = [
  {
    name: "Arjun Kapoor",
    role: "Master Craftsman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    bio: "Expert woodworker with traditional techniques passed down through generations. 20+ years of experience.",
    specialty: "Hand Carving & Joinery",
  },
  {
    name: "Sneha Patel",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
    bio: "Ensures seamless execution from concept to installation with precision.",
    specialty: "Project Coordination",
  },
  {
    name: "Mohan Das",
    role: "Senior Carpenter",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
    bio: "Master of precision woodworking and complex furniture structures.",
    specialty: "Precision Woodworking",
  },
  {
    name: "Lakshmi Nair",
    role: "Finishing Specialist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2076&auto=format&fit=crop",
    bio: "Expert in premium wood finishes, polishing, and surface treatments.",
    specialty: "Wood Finishing",
  },
];

// Company values
const values = [
  { icon: Heart, title: "Passion", description: "We love what we do, and it shows in every piece we create." },
  { icon: Target, title: "Precision", description: "Attention to detail is at the core of our craftsmanship." },
  { icon: Lightbulb, title: "Innovation", description: "We constantly explore new techniques and design possibilities." },
  { icon: Users, title: "Collaboration", description: "We work closely with clients to bring their vision to life." },
];

// Awards & Recognition
const awards = [
  { year: "2024", title: "Best Custom Furniture Maker", organization: "India Design Awards" },
  { year: "2023", title: "Excellence in Craftsmanship", organization: "Furniture Association of India" },
  { year: "2023", title: "Sustainable Design Champion", organization: "Green Design Council" },
  { year: "2022", title: "Rising Star in Furniture Design", organization: "Design India Summit" },
];

// Open positions
const openPositions = [
  { title: "Senior Furniture Designer", location: "New Delhi", type: "Full-time" },
  { title: "Workshop Supervisor", location: "New Delhi", type: "Full-time" },
  { title: "Client Relations Manager", location: "Mumbai", type: "Full-time" },
  { title: "Junior Design Associate", location: "New Delhi", type: "Full-time" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={bannerImage}
            alt="Vastu Vibe India Team"
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
                The People Behind Vastu Vibe
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Meet Our
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Creative Team
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              A passionate team of designers, craftsmen, and visionaries dedicated to 
              transforming your furniture dreams into reality.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Visionaries
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Our Leadership
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Image */}
                  <div className="md:col-span-2 relative aspect-square md:aspect-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deep-walnut/20 md:bg-gradient-to-l" />
                  </div>
                  
                  {/* Info */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl font-bold text-deep-walnut mb-1">
                      {member.name}
                    </h3>
                    <p className="text-luxury-gold font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-dark-charcoal/70 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    
                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social links */}
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="w-10 h-10 rounded-full bg-deep-walnut/5 flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-all duration-300"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 rounded-full bg-deep-walnut/5 flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Creatives
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Design Team
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6">
              Our talented designers bring your vision to life with creative solutions 
              and innovative furniture concepts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designTeam.map((member, index) => (
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
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/90 via-deep-walnut/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover overlay with expertise */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-luxury-gold/90 text-deep-walnut text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-walnut mb-1">
                  {member.name}
                </h3>
                <p className="text-luxury-gold font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-dark-charcoal/70 text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Craftsmen Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Artisans
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Master Craftsmen
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6">
              The skilled hands behind every masterpiece. Our craftsmen bring decades 
              of experience and traditional expertise to every piece.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmen.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-pure-white rounded-xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                      {member.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-deep-walnut mb-1">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Culture
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-cream-ivory rounded-xl border border-warm-beige hover:border-luxury-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                  {value.title}
                </h3>
                <p className="text-dark-charcoal/70 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Culture Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[cultureImage1, cultureImage2, cultureImage3].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Team culture ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-deep-walnut relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Recognition
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mt-4 mb-6">
              Awards & Achievements
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-pure-white/5 backdrop-blur-sm border border-luxury-gold/20 rounded-xl p-6 text-center hover:bg-pure-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-luxury-gold" />
                </div>
                <div className="text-luxury-gold font-bold text-lg mb-2">
                  {award.year}
                </div>
                <h3 className="font-heading text-pure-white font-bold mb-2">
                  {award.title}
                </h3>
                <p className="text-warm-beige/60 text-sm">
                  {award.organization}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Join Our Team
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Open Positions
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            <p className="max-w-2xl mx-auto text-dark-charcoal/70 mt-6">
              We're always looking for talented individuals who share our passion 
              for craftsmanship and design excellence.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center justify-between p-6 bg-pure-white rounded-xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-walnut">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-dark-charcoal/60">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-dark-charcoal/70 mb-6">
              Don't see a position that fits your skills? We're always open to hearing from talented people.
            </p>
            <a
              href="mailto:careers@vastuvibeindia.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-deep-walnut text-pure-white font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send Your Resume
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
              Let's Create Something
              <br />
              <span className="text-luxury-gold">Beautiful Together</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're looking to join our team or want us to craft your dream 
              furniture, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold hover:bg-pure-white hover:text-deep-walnut transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}