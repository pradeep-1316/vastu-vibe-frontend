"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Eye, 
  Star, 
  Award, 
  Truck, 
  Shield,
  TreePine,
  Hammer,
  Sparkles,
  CheckCircle,
  Heart,
  Filter,
  Ruler,
  Palette,
  Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

// Unique banner image for Furniture page
const bannerImage = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop";
const craftsmanshipImage = "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop";
const materialsImage = "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2070&auto=format&fit=crop";

const categories = ["All", "Living Room", "Bedroom", "Dining", "Office", "Storage", "Kids Room", "Outdoor"];

const furnitureItems = [
  {
    slug: "royal-sheesham-dining-table",
    name: "Royal Sheesham Dining Table",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    material: "Sheesham Wood",
    description: "Handcrafted 6-seater dining table with intricate carvings and natural wood finish.",
    rating: 4.9,
    reviews: 48,
    dimensions: "72\" L x 36\" W x 30\" H",
    designStyle: "Traditional Royal",
    finish: "Natural Polish with Hand-carved Details",
    customization: ["Size", "Wood Type", "Finish Color", "Carving Pattern"],
    seatingCapacity: "6-8 persons",
  },
  {
    slug: "premium-teak-sofa-set",
    name: "Premium Teak Sofa Set",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    material: "Teak Wood",
    description: "3+2+1 sofa set with premium upholstery and solid teak frame.",
    rating: 4.8,
    reviews: 62,
    dimensions: "3-seater: 84\" W | 2-seater: 60\" W | 1-seater: 36\" W",
    designStyle: "Contemporary Classic",
    finish: "Honey Teak with Premium Fabric",
    customization: ["Fabric Color", "Cushion Firmness", "Wood Finish", "Configuration"],
    seatingCapacity: "6 persons total",
  },
  {
    slug: "king-size-bed-with-storage",
    name: "King Size Bed with Storage",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    material: "Walnut Wood",
    description: "Luxury king size bed with hydraulic storage and upholstered headboard.",
    rating: 4.9,
    reviews: 35,
    dimensions: "78\" L x 72\" W x 48\" H (Headboard)",
    designStyle: "Modern Luxury",
    finish: "Dark Walnut with Padded Headboard",
    customization: ["Headboard Design", "Storage Type", "Wood Finish", "Size"],
    seatingCapacity: "King Size Mattress",
  },
  {
    slug: "executive-office-desk",
    name: "Executive Office Desk",
    category: "Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    material: "Oak Wood",
    description: "Premium executive desk with cable management and soft-close drawers.",
    rating: 4.7,
    reviews: 28,
    dimensions: "72\" L x 36\" W x 30\" H",
    designStyle: "Executive Modern",
    finish: "Light Oak with Matte Finish",
    customization: ["Size", "Drawer Configuration", "Cable Management", "Finish"],
    seatingCapacity: "Single Executive",
  },
  {
    slug: "garden-lounge-set",
    name: "Garden Lounge Set",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aef86?q=80&w=2070&auto=format&fit=crop",
    material: "Treated Teak",
    description: "Weather-resistant outdoor lounge set with premium cushions.",
    rating: 4.8,
    reviews: 19,
    dimensions: "Sofa: 72\" W | Chairs: 30\" W each | Table: 48\" L",
    designStyle: "Outdoor Contemporary",
    finish: "Weather-treated Natural Teak",
    customization: ["Cushion Color", "Configuration", "Wood Treatment", "Size"],
    seatingCapacity: "5-6 persons",
  },
  {
    slug: "sliding-door-wardrobe",
    name: "Sliding Door Wardrobe",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    material: "Engineered Wood & Glass",
    description: "Customizable wardrobe with sliding doors and internal organizers.",
    rating: 4.9,
    reviews: 41,
    dimensions: "120\" W x 24\" D x 84\" H (Customizable)",
    designStyle: "Modern Minimalist",
    finish: "Matte Laminate with Glass Panels",
    customization: ["Size", "Door Style", "Internal Layout", "Finish Color"],
    seatingCapacity: "Full Room Storage",
  },
  {
    slug: "live-edge-coffee-table",
    name: "Live Edge Coffee Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2069&auto=format&fit=crop",
    material: "Mango Wood",
    description: "Unique live edge coffee table with natural wood patterns.",
    rating: 4.8,
    reviews: 33,
    dimensions: "48\" L x 24\" W x 18\" H (Natural Edge Varies)",
    designStyle: "Rustic Natural",
    finish: "Clear Coat Preserving Natural Edge",
    customization: ["Wood Slab Selection", "Leg Style", "Finish Type", "Size"],
    seatingCapacity: "4-6 persons around",
  },
  {
    slug: "ergonomic-office-chair",
    name: "Ergonomic Office Chair",
    category: "Office",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2070&auto=format&fit=crop",
    material: "Mesh & Wood",
    description: "Ergonomic chair with lumbar support and adjustable features.",
    rating: 4.6,
    reviews: 56,
    dimensions: "26\" W x 26\" D x 42-46\" H (Adjustable)",
    designStyle: "Ergonomic Modern",
    finish: "Mesh Back with Wood Accents",
    customization: ["Fabric Color", "Armrest Style", "Headrest", "Base Type"],
    seatingCapacity: "Single Person",
  },
  {
    slug: "8-seater-dining-set",
    name: "8-Seater Dining Set",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2069&auto=format&fit=crop",
    material: "Rosewood",
    description: "Elegant 8-seater dining set with carved legs and glass top option.",
    rating: 4.9,
    reviews: 22,
    dimensions: "96\" L x 42\" W x 30\" H",
    designStyle: "Classic Elegant",
    finish: "Rich Rosewood with Optional Glass Top",
    customization: ["Size", "Chair Design", "Top Option", "Finish"],
    seatingCapacity: "8 persons",
  },
  {
    slug: "tv-unit-with-bookshelf",
    name: "TV Unit with Bookshelf",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    material: "Sheesham Wood",
    description: "Modern TV unit with integrated bookshelf and cable management.",
    rating: 4.7,
    reviews: 38,
    dimensions: "72\" W x 18\" D x 60\" H",
    designStyle: "Modern Functional",
    finish: "Warm Sheesham with Matte Finish",
    customization: ["Size", "Shelf Configuration", "Cable Management", "Finish"],
    seatingCapacity: 'TV up to 65"',
  },
  {
    slug: "patio-dining-set",
    name: "Patio Dining Set",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    material: "Acacia Wood",
    description: "4-seater outdoor dining set with umbrella hole.",
    rating: 4.8,
    reviews: 15,
    dimensions: 'Table: 48" x 36" | Chairs: 18" W each',
    designStyle: "Outdoor Casual",
    finish: "Weather-resistant Acacia",
    customization: ["Umbrella Hole", "Cushion Color", "Wood Finish", "Size"],
    seatingCapacity: "4 persons",
  },
  {
    slug: "bedside-table-set",
    name: "Bedside Table Set",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2092&auto=format&fit=crop",
    material: "Walnut Wood",
    description: "Pair of bedside tables with drawers and open shelf.",
    rating: 4.7,
    reviews: 44,
    dimensions: '20" W x 16" D x 24" H (Each)',
    designStyle: "Modern Minimalist",
    finish: "Dark Walnut Satin",
    customization: ["Size", "Drawer Configuration", "Finish", "Hardware"],
    seatingCapacity: "Pair of Tables",
  },
  {
    slug: "study-desk-with-storage",
    name: "Study Desk with Storage",
    category: "Office",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    material: "Sheesham Wood",
    description: "Compact study desk with built-in shelves and drawer unit.",
    rating: 4.8,
    reviews: 29,
    dimensions: '48" W x 24" D x 36" H',
    designStyle: "Compact Modern",
    finish: "Natural Sheesham with Clear Coat",
    customization: ["Size", "Shelf Layout", "Drawer Side", "Finish"],
    seatingCapacity: "Single Person",
  },
  {
    slug: "kids-bunk-bed",
    name: "Kids Bunk Bed",
    category: "Kids Room",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    material: "Pine Wood",
    description: "Safe and sturdy bunk bed with ladder and guard rails.",
    rating: 4.9,
    reviews: 18,
    dimensions: '80" L x 42" W x 65" H',
    designStyle: "Kids Fun & Safe",
    finish: "Smooth Sanded with Child-safe Finish",
    customization: ["Color", "Ladder Position", "Guard Rail Style", "Storage Option"],
    seatingCapacity: "2 Single Mattresses",
  },
  {
    slug: "bookshelf-library-unit",
    name: "Bookshelf Library Unit",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    material: "Oak Wood",
    description: "Floor-to-ceiling bookshelf with adjustable shelves.",
    rating: 4.8,
    reviews: 26,
    dimensions: '96" W x 12" D x 96" H (Customizable)',
    designStyle: "Library Classic",
    finish: "Warm Oak with Satin Finish",
    customization: ["Size", "Shelf Spacing", "Back Panel", "Finish"],
    seatingCapacity: "Full Wall Storage",
  },
  {
    slug: "kids-study-table",
    name: "Kids Study Table",
    category: "Kids Room",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    material: "Mango Wood",
    description: "Colorful study table with chair and storage compartments.",
    rating: 4.7,
    reviews: 31,
    dimensions: '36" W x 20" D x 28" H',
    designStyle: "Kids Playful",
    finish: "Child-safe Paint with Natural Wood",
    customization: ["Color Scheme", "Storage Type", "Chair Style", "Size"],
    seatingCapacity: "1-2 Kids",
  },
  {
    slug: "shoe-rack-cabinet",
    name: "Shoe Rack Cabinet",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    material: "Engineered Wood",
    description: "Tilt-out shoe rack with seating area and mirror.",
    rating: 4.6,
    reviews: 42,
    dimensions: '36" W x 12" D x 48" H',
    designStyle: "Entryway Functional",
    finish: "Laminate with Mirror",
    customization: ["Size", "Tilt Mechanism", "Mirror Option", "Finish"],
    seatingCapacity: "12-15 Pairs of Shoes",
  },
  {
    slug: "accent-console-table",
    name: "Accent Console Table",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2069&auto=format&fit=crop",
    material: "Sheesham Wood",
    description: "Elegant console table with drawers for entryway styling.",
    rating: 4.8,
    reviews: 24,
    dimensions: '48" W x 14" D x 32" H',
    designStyle: "Entryway Elegant",
    finish: "Rich Sheesham with Brass Hardware",
    customization: ["Size", "Drawer Configuration", "Hardware", "Finish"],
    seatingCapacity: "Decorative Storage",
  },
];

// Features/USPs
const features = [
  { icon: TreePine, title: "Premium Hardwoods", description: "Only the finest Sheesham, Teak, Oak, and Walnut woods." },
  { icon: Hammer, title: "Master Craftsmanship", description: "Handcrafted by artisans with decades of experience." },
  { icon: Shield, title: "5-Year Warranty", description: "Comprehensive warranty on all custom furniture." },
  { icon: Truck, title: "Pan-India Delivery", description: "Safe delivery and installation across India." },
];

// Materials we use
const materials = [
  { name: "Sheesham", description: "Durable Indian Rosewood with rich grain patterns", color: "bg-amber-800" },
  { name: "Teak", description: "Premium hardwood known for strength and beauty", color: "bg-amber-700" },
  { name: "Oak", description: "Strong and versatile with distinctive grain", color: "bg-yellow-800" },
  { name: "Walnut", description: "Luxurious dark wood with elegant finish", color: "bg-amber-900" },
];

// Stats
const stats = [
  { value: "1000+", label: "Pieces Crafted", icon: Sparkles },
  { value: "500+", label: "Happy Clients", icon: Heart },
  { value: "50+", label: "Master Artisans", icon: Hammer },
  { value: "100%", label: "Custom Designs", icon: Award },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function FurniturePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filteredItems = activeCategory === "All"
    ? furnitureItems
    : furnitureItems.filter((item) => item.category === activeCategory);

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Banner — Split Layout: Left Caption + Right Video */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-deep-walnut pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-20 lg:pb-24">
        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent z-20" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-walnut/90 via-deep-walnut/70 to-deep-walnut/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/60 via-transparent to-dark-charcoal/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* ── Left: Caption ── */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pure-white leading-[1.1]">
                Custom Furniture
                <br />
                <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
                  Collection
                </span>
              </h1>

              {/* Tagline */}
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-gold-light/90 font-medium">
                 Timeless Luxury, Crafted to Inspire
              </h2>

              {/* Description */}
              <p className="text-warm-beige/70 leading-relaxed text-base sm:text-lg max-w-xl">
                From concept to creation, every piece is handcrafted with precision and passion.
Transforming your vision into timeless furniture that reflects your lifestyle.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pure-white/5 border border-pure-white/10 text-warm-beige/80 text-sm">
                  <TreePine className="w-3.5 h-3.5 text-luxury-gold" />
                  Luxury Interiors
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pure-white/5 border border-pure-white/10 text-warm-beige/80 text-sm">
                  <Hammer className="w-3.5 h-3.5 text-luxury-gold" />
                  Tailored for You
                </span>
                {/* <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-pure-white/5 border border-pure-white/10 text-warm-beige/80 text-sm">
                  <Shield className="w-3.5 h-3.5 text-luxury-gold" />
                  5-Year Warranty
                </span> */}
              </div>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="w-24 h-0.5 bg-gradient-to-r from-luxury-gold to-transparent origin-left"
              />
            </motion.div>

            {/* ── Right: Video ── */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative"
            >
              {/* Glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-br from-luxury-gold/30 via-transparent to-luxury-gold/20 rounded-3xl blur-sm" />

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-luxury-gold/10 border border-pure-white/10 bg-dark-charcoal">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video/Luxury_coffee_table_floating_space_202606051611.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-luxury-gold text-deep-walnut text-xs font-bold px-4 py-2 rounded-full shadow-lg"
              >
                ✦ AI Visualized
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-cream-ivory -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-pure-white rounded-xl p-5 border border-warm-beige text-center"
              >
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-sm font-bold text-deep-walnut mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-dark-charcoal/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Furniture Section */}
      <section id="collection" className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
              Your Design, Our Craftsmanship
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4 overflow-hidden leading-[1.1]">
              <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
                Unique Furniture For Every Space
              </span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-1 bg-luxury-gold mx-auto"
            />
          </motion.div>

          {/* Filter & Sort */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Tabs */}
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

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-dark-charcoal/50" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl text-sm border border-warm-beige bg-pure-white text-dark-charcoal focus:outline-none focus:border-luxury-gold"
              >
                <option value="default">Sort By</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-dark-charcoal/60 mb-6">
            Showing {sortedItems.length} {sortedItems.length === 1 ? "piece" : "pieces"}
          </p>

          {/* Furniture Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {sortedItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-pure-white/90 backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-luxury-gold text-luxury-gold" />
                      <span className="text-xs font-semibold text-deep-walnut">{item.rating}</span>
                    </div>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-deep-walnut/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Link 
                        href={`/furniture/${item.slug}`}
                        className="w-12 h-12 rounded-full bg-pure-white flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link 
                        href={`/contact?product=${encodeURIComponent(item.name)}`}
                        className="w-12 h-12 rounded-full bg-pure-white flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                      {item.name}
                    </h3>
                    
                    {/* Design Style Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-medium">
                        {item.designStyle}
                      </span>
                    </div>
                    
                    <p className="text-dark-charcoal/70 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Design Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-dark-charcoal/60">
                        <TreePine className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-medium">Material:</span>
                        <span>{item.material}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-dark-charcoal/60">
                        <Ruler className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-medium">Dimensions:</span>
                        <span>{item.dimensions}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-dark-charcoal/60">
                        <Palette className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-medium">Finish:</span>
                        <span>{item.finish}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-dark-charcoal/60">
                        <Settings className="w-3.5 h-3.5 text-luxury-gold" />
                        <span className="font-medium">Capacity:</span>
                        <span>{item.seatingCapacity}</span>
                      </div>
                    </div>
                    
                    {/* Customization Options */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-dark-charcoal/70 mb-2">Customizable:</p>
                      <div className="flex flex-wrap gap-1">
                        {item.customization.slice(0, 3).map((opt) => (
                          <span key={opt} className="px-2 py-0.5 rounded-full bg-cream-ivory text-dark-charcoal/60 text-xs">
                            {opt}
                          </span>
                        ))}
                        {item.customization.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full bg-cream-ivory text-dark-charcoal/60 text-xs">
                            +{item.customization.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-warm-beige">
                      <Link
                        href={`/furniture/${item.slug}`}
                        className="text-xs text-dark-charcoal/50 flex items-center gap-1 hover:text-luxury-gold transition-colors"
                      >
                        <Star className="w-3 h-3 fill-luxury-gold text-luxury-gold" />
                        {item.rating} ({item.reviews} reviews)
                      </Link>
                      <Link
                        href={`/contact?product=${encodeURIComponent(item.name)}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-deep-walnut hover:text-luxury-gold transition-colors"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Premium Materials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Woods We Work With
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-cream-ivory rounded-xl border border-warm-beige hover:border-luxury-gold/30 transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-full mx-auto mb-4", material.color)} />
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                  {material.name}
                </h3>
                <p className="text-sm text-dark-charcoal/60">
                  {material.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
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
                Our Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
                Master Craftsmanship
              </h2>
              <p className="text-dark-charcoal/70 leading-relaxed mb-6">
                Every piece of furniture we create goes through a meticulous process of 
                design, material selection, crafting, and finishing. Our master artisans 
                bring decades of experience to every joint, curve, and detail.
              </p>
              <div className="space-y-4">
                {[
                  "Design consultation and 3D visualization",
                  "Premium material selection",
                  "Handcrafted by master artisans",
                  "Multi-stage quality inspection",
                  "Professional delivery and installation",
                ].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <span className="text-dark-charcoal/70">{step}</span>
                  </div>
                ))}
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
                  src={craftsmanshipImage}
                  alt="Master Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-deep-walnut text-pure-white p-6 rounded-2xl shadow-2xl"
              >
                <div className="font-heading text-3xl font-bold text-luxury-gold">50+</div>
                <div className="text-sm text-warm-beige/80">Master Artisans</div>
              </motion.div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-luxury-gold/30 rounded-2xl -z-10" />
            </motion.div>
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

      {/* Custom Furniture CTA */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-deep-walnut rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "80px 80px",
              }}
            />
            <div className="relative z-10">
              <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-pure-white mb-4">
                Have a Unique Design in Mind?
              </h3>
              <p className="text-warm-beige/80 max-w-xl mx-auto mb-8">
                We specialize in creating one-of-a-kind furniture pieces. Share your design 
                ideas, sketches, or inspiration images and our master craftsmen will bring 
                your vision to life with precision and care.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/services/custom-furniture"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
                >
                  Explore Custom Furniture
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold hover:bg-pure-white hover:text-deep-walnut transition-all duration-300"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}