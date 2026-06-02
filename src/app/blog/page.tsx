"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Search,
  TrendingUp,
  BookOpen,
  Heart,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  ArrowUpRight,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

// Unique banner image for Blog page
const bannerImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";
const authorImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2074&auto=format&fit=crop";

const categories = [
  { id: "all", label: "All Posts", icon: BookOpen },
  { id: "furniture", label: "Furniture", icon: Heart },
  { id: "interior", label: "Interior Design", icon: Home },
  { id: "decor", label: "Home Decor", icon: Bookmark },
  { id: "guides", label: "Tips & Guides", icon: TrendingUp },
  { id: "trends", label: "Trends", icon: Tag },
];

const blogPosts = [
  {
    title: "10 Timeless Wooden Furniture Pieces Every Home Needs",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Discover the essential wooden furniture pieces that add warmth, elegance, and functionality to any home. From classic dining tables to statement bookshelves.",
    author: "Priya Mehta",
    authorRole: "Head of Design",
    date: "May 15, 2024",
    readTime: "5 min read",
    views: "2.4K",
    comments: 12,
    featured: true,
  },
  {
    title: "The Art of Space Planning: A Complete Guide",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop",
    excerpt: "Learn the fundamentals of space planning to create functional, beautiful interiors that maximize comfort and flow in your home or office.",
    author: "Rajesh Sharma",
    authorRole: "Founder & CEO",
    date: "May 10, 2024",
    readTime: "8 min read",
    views: "3.1K",
    comments: 18,
    featured: false,
  },
  {
    title: "2024 Interior Design Trends You Need to Know",
    category: "trends",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    excerpt: "From biophilic design to sustainable materials, explore the top interior design trends shaping homes and offices this year.",
    author: "Vikram Singh",
    authorRole: "Senior Designer",
    date: "May 5, 2024",
    readTime: "6 min read",
    views: "4.2K",
    comments: 24,
    featured: false,
  },
  {
    title: "How to Choose the Right Wood for Your Furniture",
    category: "guides",
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=2070&auto=format&fit=crop",
    excerpt: "A comprehensive guide to selecting the perfect wood type for your furniture based on durability, aesthetics, and budget considerations.",
    author: "Arjun Kapoor",
    authorRole: "Master Craftsman",
    date: "April 28, 2024",
    readTime: "7 min read",
    views: "1.8K",
    comments: 9,
    featured: false,
  },
  {
    title: "Creating a Productive Home Office Setup",
    category: "decor",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Design the perfect home office with ergonomic furniture, proper lighting, and organizational solutions that boost productivity.",
    author: "Sneha Patel",
    authorRole: "Interior Stylist",
    date: "April 22, 2024",
    readTime: "5 min read",
    views: "2.9K",
    comments: 15,
    featured: false,
  },
  {
    title: "The Benefits of Custom Furniture Over Ready-Made",
    category: "furniture",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Why investing in custom-made furniture is worth it. Learn about quality, personalization, and long-term value of bespoke pieces.",
    author: "Rajesh Sharma",
    authorRole: "Founder & CEO",
    date: "April 15, 2024",
    readTime: "6 min read",
    views: "3.5K",
    comments: 21,
    featured: false,
  },
  {
    title: "Color Psychology in Interior Design",
    category: "interior",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Understanding how colors affect mood and behavior can transform your space. Learn to choose the right palette for every room.",
    author: "Priya Mehta",
    authorRole: "Head of Design",
    date: "April 10, 2024",
    readTime: "7 min read",
    views: "2.1K",
    comments: 11,
    featured: false,
  },
  {
    title: "Sustainable Furniture: Eco-Friendly Choices for Your Home",
    category: "trends",
    image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Explore sustainable furniture options that are good for your home and the planet. From reclaimed wood to eco-friendly finishes.",
    author: "Vikram Singh",
    authorRole: "Senior Designer",
    date: "April 5, 2024",
    readTime: "5 min read",
    views: "1.6K",
    comments: 8,
    featured: false,
  },
  {
    title: "Modular Kitchen Design: Complete Buyer's Guide",
    category: "guides",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Everything you need to know about modular kitchens - layouts, materials, finishes, and how to choose the right design for your space.",
    author: "Sneha Patel",
    authorRole: "Interior Stylist",
    date: "March 28, 2024",
    readTime: "10 min read",
    views: "5.2K",
    comments: 32,
    featured: false,
  },
  {
    title: "Living Room Furniture Arrangement Tips",
    category: "decor",
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Master the art of furniture arrangement with these expert tips for creating a balanced and inviting living room.",
    author: "Priya Mehta",
    authorRole: "Head of Design",
    date: "March 20, 2024",
    readTime: "6 min read",
    views: "2.8K",
    comments: 14,
    featured: false,
  },
  {
    title: "Bedroom Design: Creating Your Personal Sanctuary",
    category: "interior",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Transform your bedroom into a peaceful retreat with these design principles for furniture, lighting, and decor.",
    author: "Rajesh Sharma",
    authorRole: "Founder & CEO",
    date: "March 15, 2024",
    readTime: "8 min read",
    views: "3.4K",
    comments: 19,
    featured: false,
  },
  {
    title: "Wood Finishes Explained: Oil vs Lacquer vs Wax",
    category: "guides",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2069&auto=format&fit=crop",
    excerpt: "Understanding different wood finishes and their pros and cons to make the right choice for your furniture.",
    author: "Arjun Kapoor",
    authorRole: "Master Craftsman",
    date: "March 10, 2024",
    readTime: "7 min read",
    views: "1.9K",
    comments: 10,
    featured: false,
  },
];

// Popular tags
const popularTags = [
  "Custom Furniture",
  "Wood Types",
  "Interior Design",
  "Home Decor",
  "Sustainability",
  "Modular Kitchen",
  "Bedroom Design",
  "Office Furniture",
  "Wood Finishes",
  "Space Planning",
];

// Stats
const stats = [
  { value: "100+", label: "Articles Published" },
  { value: "50K+", label: "Monthly Readers" },
  { value: "12", label: "Expert Authors" },
  { value: "4.8", label: "Average Rating" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || activeCategory !== "all");

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
            alt="Design Blog"
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
                Our Blog
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              Design
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Insights
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Expert insights, design tips, and inspiration to help you create 
              beautiful, functional spaces.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-cream-ivory -mt-12 relative z-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-charcoal/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-pure-white border border-warm-beige focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 outline-none transition-all duration-300 text-dark-charcoal placeholder-dark-charcoal/40 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8 bg-cream-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-deep-walnut text-pure-white shadow-lg"
                    : "bg-pure-white text-dark-charcoal/70 border border-warm-beige hover:border-luxury-gold/30"
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "all" && featuredPost && !searchQuery && (
        <section className="section-padding bg-cream-ivory pt-0">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-luxury-gold text-deep-walnut text-sm font-semibold">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-xs text-dark-charcoal/60 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {featuredPost.views}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-deep-walnut mb-4 group-hover:text-luxury-gold transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-dark-charcoal/70 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-deep-walnut">{featuredPost.author}</p>
                        <p className="text-xs text-dark-charcoal/60">{featuredPost.authorRole}</p>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-deep-walnut hover:text-luxury-gold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.div {...fadeInUp}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut">
                {activeCategory === "all" ? "Latest Articles" : categories.find(c => c.id === activeCategory)?.label}
              </h2>
              <p className="text-dark-charcoal/60 text-sm mt-1">
                {regularPosts.length} article{regularPosts.length !== 1 ? "s" : ""} found
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                        {categories.find(c => c.id === post.category)?.label}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-pure-white/90 backdrop-blur-sm">
                      <Eye className="w-3 h-3 text-dark-charcoal/60" />
                      <span className="text-xs text-dark-charcoal/60">{post.views}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-dark-charcoal/60 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {post.comments}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-deep-walnut mb-3 group-hover:text-luxury-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-dark-charcoal/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-warm-beige">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                          <User className="w-4 h-4 text-luxury-gold" />
                        </div>
                        <span className="text-xs text-dark-charcoal/60">{post.author}</span>
                      </div>
                      <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-medium text-deep-walnut hover:text-luxury-gold transition-colors"
                      >
                        Read
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* No results */}
          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-dark-charcoal/20 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-deep-walnut mb-2">
                No articles found
              </h3>
              <p className="text-dark-charcoal/60">
                Try a different search term or category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Tags Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-8">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Trending Topics
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut mt-4">
              Popular Tags
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-cream-ivory border border-warm-beige hover:border-luxury-gold/30 hover:bg-luxury-gold/10 text-sm text-dark-charcoal/70 hover:text-luxury-gold transition-all duration-300"
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Author Spotlight */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-pure-white rounded-2xl p-8 lg:p-12 border border-warm-beige text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-luxury-gold/30">
              <Image
                src={authorImage}
                alt="Featured Author"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Featured Author
            </span>
            <h3 className="font-heading text-2xl font-bold text-deep-walnut mt-2 mb-2">
              Rajesh Sharma
            </h3>
            <p className="text-dark-charcoal/60 text-sm mb-4">
              Founder & CEO, Vastu Vibe India
            </p>
            <p className="text-dark-charcoal/70 leading-relaxed max-w-2xl mx-auto mb-6">
              With over 15 years of experience in luxury furniture design, Rajesh brings 
              deep insights into craftsmanship, materials, and design trends. His articles 
              help readers make informed decisions about their furniture investments.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-luxury-gold">45+</div>
                <div className="text-xs text-dark-charcoal/60">Articles</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-luxury-gold">12K+</div>
                <div className="text-xs text-dark-charcoal/60">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-luxury-gold">4.9</div>
                <div className="text-xs text-dark-charcoal/60">Rating</div>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deep-walnut text-pure-white font-semibold hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
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
                <div className="font-heading text-3xl md:text-4xl font-bold text-luxury-gold mb-2">
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

      {/* Newsletter CTA */}
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
                Stay Updated with
                <br />
                <span className="text-luxury-gold">Design Trends</span>
              </h3>
              <p className="text-warm-beige/80 max-w-xl mx-auto mb-8">
                Subscribe to our newsletter and never miss our latest articles, 
                design tips, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-xl bg-pure-white/10 border border-pure-white/20 text-pure-white placeholder-pure-white/50 focus:outline-none focus:border-luxury-gold"
                />
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300 shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}