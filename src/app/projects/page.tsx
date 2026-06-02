"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Filter, 
  MapPin, 
  Calendar, 
  Award, 
  Users, 
  Star,
  CheckCircle,
  ArrowUpRight,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

// Unique banner image for Projects page
const bannerImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop";
const featuredProjectImage = "https://images.unsplash.com/photo-1600210491892-03d54c0aef86?q=80&w=2070&auto=format&fit=crop";

const categories = ["All", "Custom Furniture", "Living Room", "Bedroom", "Dining", "Office", "Commercial"];

const projects = [
  {
    title: "Royal Sheesham Dining Set",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    location: "Mumbai",
    description: "Handcrafted 8-seater dining set with intricate carvings in premium Sheesham wood.",
    duration: "6 weeks",
    material: "Sheesham Wood",
    year: "2024",
  },
  {
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    location: "Bangalore",
    description: "Complete bedroom furniture set with king bed, wardrobe, and dressing unit.",
    duration: "8 weeks",
    material: "Walnut & Teak",
    year: "2024",
  },
  {
    title: "Premium Teak Sofa Set",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    location: "Jaipur",
    description: "Custom 3+2+1 sofa set with premium upholstery and solid teak frame.",
    duration: "4 weeks",
    material: "Teak Wood",
    year: "2024",
  },
  {
    title: "Executive Office Setup",
    category: "Office",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
    location: "Noida",
    description: "Premium executive office with custom desk, storage, and conference table.",
    duration: "5 weeks",
    material: "Oak Wood",
    year: "2024",
  },
  {
    title: "Custom Wardrobe System",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    location: "Pune",
    description: "Walk-in wardrobe with sliding doors and customized internal organizers.",
    duration: "6 weeks",
    material: "Engineered Wood",
    year: "2024",
  },
  {
    title: "Live Edge Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2069&auto=format&fit=crop",
    location: "Delhi",
    description: "Unique live edge coffee table crafted from a single slab of mango wood.",
    duration: "3 weeks",
    material: "Mango Wood",
    year: "2024",
  },
  {
    title: "Restaurant Booth Seating",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    location: "Mumbai",
    description: "Custom booth seating and dining tables for upscale restaurant.",
    duration: "10 weeks",
    material: "Teak & Leather",
    year: "2023",
  },
  {
    title: "Study Room Library",
    category: "Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    location: "Hyderabad",
    description: "Custom study desk and floor-to-ceiling bookshelf unit in walnut finish.",
    duration: "5 weeks",
    material: "Walnut Wood",
    year: "2023",
  },
  {
    title: "Hotel Lobby Furniture",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    location: "Udaipur",
    description: "Statement furniture pieces for boutique hotel lobby with traditional elements.",
    duration: "12 weeks",
    material: "Sheesham & Marble",
    year: "2023",
  },
  {
    title: "Modular Kitchen Cabinets",
    category: "Custom Furniture",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    location: "Chennai",
    description: "Premium modular kitchen with soft-close cabinets and smart storage solutions.",
    duration: "8 weeks",
    material: "Marine Ply",
    year: "2024",
  },
  {
    title: "Kids Room Furniture",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    location: "Gurugram",
    description: "Custom bunk bed, study table, and storage unit for kids room.",
    duration: "5 weeks",
    material: "Pine Wood",
    year: "2024",
  },
  {
    title: "TV Unit with Bookshelf",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    location: "Kolkata",
    description: "Modern TV unit with integrated bookshelf and cable management system.",
    duration: "4 weeks",
    material: "Sheesham Wood",
    year: "2023",
  },
  {
    title: "Cafe Furniture Collection",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    location: "Rishikesh",
    description: "Custom wooden tables, chairs, and counter for riverside cafe.",
    duration: "8 weeks",
    material: "Teak & Metal",
    year: "2023",
  },
  {
    title: "Dining Console Set",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2069&auto=format&fit=crop",
    location: "Ahmedabad",
    description: "6-seater dining table with matching console and crockery unit.",
    duration: "6 weeks",
    material: "Rosewood",
    year: "2024",
  },
  {
    title: "Home Office Setup",
    category: "Office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2070&auto=format&fit=crop",
    location: "Bangalore",
    description: "Ergonomic home office with custom desk, chair, and storage solutions.",
    duration: "4 weeks",
    material: "Oak & Mesh",
    year: "2024",
  },
];

// Featured project
const featuredProject = {
  title: "Luxury Villa Complete Furnishing",
  image: featuredProjectImage,
  location: "New Delhi",
  description: "Complete furnishing of a 5BHK luxury villa including living room, bedrooms, dining, study, and outdoor furniture. Over 45 custom pieces crafted in Sheesham and Teak wood.",
  duration: "4 months",
  pieces: "45+ pieces",
  client: "Private Residence",
};

// Stats
const stats = [
  { value: "1000+", label: "Furniture Pieces", icon: Award },
  { value: "20+", label: "Cities Served", icon: MapPin },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "100%", label: "Custom Designs", icon: CheckCircle },
];

// Process steps
const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
  { step: "02", title: "Design", description: "Creating detailed designs and 3D renders" },
  { step: "03", title: "Crafting", description: "Handcrafting with premium materials" },
  { step: "04", title: "Delivery", description: "Professional installation at your space" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
            alt="Furniture Portfolio"
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
                Our Craftsmanship
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Furniture
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Every piece tells a story of craftsmanship. Explore our portfolio of 
              custom furniture projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Featured Project
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Project Spotlight
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-pure-white rounded-2xl overflow-hidden border border-warm-beige shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-luxury-gold text-deep-walnut text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-deep-walnut mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-dark-charcoal/70 leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm text-dark-charcoal/70">{featuredProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm text-dark-charcoal/70">{featuredProject.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm text-dark-charcoal/70">{featuredProject.pieces}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-luxury-gold" />
                    <span className="text-sm text-dark-charcoal/70">{featuredProject.client}</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deep-walnut text-pure-white font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300 w-fit"
                >
                  Start Similar Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-deep-walnut relative overflow-hidden">
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
                <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-luxury-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-warm-beige/70 uppercase tracking-wider text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Handcrafted Excellence
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              All Projects
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                    activeCategory === cat
                      ? "bg-deep-walnut text-pure-white shadow-lg"
                      : "bg-pure-white text-dark-charcoal/70 border border-warm-beige hover:border-luxury-gold/30"
                  )}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "grid" ? "bg-deep-walnut text-pure-white" : "bg-pure-white text-dark-charcoal/50"
                )}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  viewMode === "list" ? "bg-deep-walnut text-pure-white" : "bg-pure-white text-dark-charcoal/50"
                )}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-dark-charcoal/60 mb-6">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </p>

          {/* Projects Grid */}
          {viewMode === "grid" ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                        <p className="text-pure-white text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-dark-charcoal/60 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-warm-beige">
                        <span className="text-xs text-dark-charcoal/50">
                          {project.material}
                        </span>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1 text-sm font-medium text-deep-walnut hover:text-luxury-gold transition-colors"
                        >
                          Enquire
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-col md:flex-row gap-6 bg-pure-white rounded-xl p-4 border border-warm-beige hover:border-luxury-gold/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className="px-2 py-0.5 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-medium">
                            {project.category}
                          </span>
                          <h3 className="font-heading text-lg font-bold text-deep-walnut mt-2">
                            {project.title}
                          </h3>
                        </div>
                        <Link
                          href="/contact"
                          className="p-2 rounded-lg bg-deep-walnut/5 hover:bg-luxury-gold hover:text-deep-walnut transition-all"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <p className="text-dark-charcoal/70 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-dark-charcoal/50">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.duration}
                        </span>
                        <span>{project.material}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              How We Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Our Process
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-cream-ivory rounded-xl border border-warm-beige"
              >
                <div className="w-14 h-14 rounded-full bg-luxury-gold flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-lg font-bold text-deep-walnut">{step.step}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-dark-charcoal/60">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              Have a Unique Design
              <br />
              <span className="text-luxury-gold">in Mind?</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Share your design ideas, sketches, or inspiration images. Our master 
              craftsmen will bring your vision to life with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Start Your Project
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