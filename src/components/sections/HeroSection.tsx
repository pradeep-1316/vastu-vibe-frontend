"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown, Star, Award, Users, Sparkles } from "lucide-react";

// Hero slides with unique furniture images
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
    title: "Unique Furniture",
    subtitle: "Crafted For You",
    description: "We create one-of-a-kind furniture pieces tailored to your exact design vision.",
  },
  {
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
    title: "Handcrafted",
    subtitle: "With Passion",
    description: "Every piece tells a story of master craftsmanship and attention to detail.",
  },
  {
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
    title: "Premium",
    subtitle: "Wood Collection",
    description: "Finest Sheesham, Teak, Oak, and Walnut woods sourced sustainably.",
  },
];

// Floating badges
const floatingBadges = [
  { icon: Award, text: "Premium Quality", delay: 0 },
  { icon: Sparkles, text: "Custom Design", delay: 0.2 },
  { icon: Users, text: "500+ Happy Clients", delay: 0.4 },
];

// Stats data
const stats = [
  { value: "1000+", label: "Furniture Pieces", icon: Sparkles },
  { value: "50+", label: "Master Craftsmen", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "100%", label: "Custom Designs", icon: Award },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-charcoal">
      {/* Animated Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
            style={{
              y,
              backgroundImage: `url('${heroSlides[currentSlide].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-charcoal/80 via-dark-charcoal/60 to-dark-charcoal/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-charcoal/50 via-transparent to-dark-charcoal/50 z-10" />

      {/* Decorative Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated Gold Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent z-20"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent z-20"
      />

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {floatingBadges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + badge.delay }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-gold/10 border border-luxury-gold/30 backdrop-blur-sm"
            >
              <badge.icon className="w-4 h-4 text-luxury-gold" />
              <span className="text-luxury-gold text-xs sm:text-sm font-medium">
                {badge.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Heading with Animated Text */}
        <div className="mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide}>
              <motion.h1
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-pure-white leading-[1.1] mb-2"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.h1
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]"
              >
                <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </motion.h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-warm-beige/80 leading-relaxed mb-10"
          >
            {heroSlides[currentSlide].description}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/furniture"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold text-lg overflow-hidden transition-all duration-300 shadow-2xl shadow-luxury-gold/20 hover:shadow-luxury-gold/40"
          >
            <span className="absolute inset-0 bg-pure-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative flex items-center gap-2">
              Explore Furniture Collection
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="/services/custom-furniture"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold text-lg hover:bg-pure-white hover:text-deep-walnut transition-all duration-300 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center group-hover:bg-luxury-gold/30 transition-colors">
              <Play className="w-4 h-4 text-luxury-gold group-hover:text-deep-walnut" />
            </div>
            Custom Furniture
          </Link>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-3 mb-12"
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-12 bg-luxury-gold"
                  : "w-2 bg-pure-white/30 hover:bg-pure-white/50"
              }`}
            >
              {currentSlide === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-luxury-gold rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-4 md:p-6 rounded-2xl border border-pure-white/10 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-luxury-gold mr-2" />
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-gold">
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-warm-beige/70 uppercase tracking-wider text-center">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-warm-beige/50 text-xs uppercase tracking-widest">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-pure-white/30 flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-luxury-gold"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Side Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex justify-between pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-pure-white/10 backdrop-blur-sm border border-pure-white/20 flex items-center justify-center text-pure-white hover:bg-luxury-gold hover:text-deep-walnut hover:border-luxury-gold transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
            setIsAutoPlaying(false);
            setTimeout(() => setIsAutoPlaying(true), 10000);
          }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-pure-white/10 backdrop-blur-sm border border-pure-white/20 flex items-center justify-center text-pure-white hover:bg-luxury-gold hover:text-deep-walnut hover:border-luxury-gold transition-all duration-300"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}