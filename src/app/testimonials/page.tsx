"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  Play,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  ThumbsUp,
  Heart,
  CheckCircle,
  MapPin
} from "lucide-react";

// Unique images for Testimonials page (not used elsewhere)
const bannerImage = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop";
const featuredProjectImage = "https://images.unsplash.com/photo-1600210491892-03d54c0aef86?q=80&w=2070&auto=format&fit=crop";
const projectImage1 = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop";
const projectImage2 = "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop";
const projectImage3 = "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop";

// Featured testimonial
const featuredTestimonial = {
  name: "Ankit & Priya Verma",
  role: "Homeowners, New Delhi",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  rating: 5,
  text: "Vastu Vibe India transformed our home into a masterpiece. From the initial consultation to the final installation, every step was handled with utmost professionalism and care. The attention to detail, quality of craftsmanship, and their understanding of our vision was exceptional. Every piece of furniture they created for us is a work of art that we cherish daily.",
  project: "Complete Home Furniture",
  projectImage: featuredProjectImage,
  location: "New Delhi",
};

// Testimonials data
const testimonials = [
  {
    name: "Meera Joshi",
    role: "CEO, TechStart Pvt Ltd",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "We commissioned Vastu Vibe India for our office interior design and custom furniture. The result was beyond our expectations. Professional, punctual, and absolutely brilliant in their work.",
    project: "Corporate Office Design",
    location: "Gurugram",
  },
  {
    name: "Rohit Malhotra",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "As an architect, I have high standards for craftsmanship. Vastu Vibe India exceeded every expectation. Their custom furniture pieces are not just functional – they are sculptural works.",
    project: "Custom Furniture Collection",
    location: "Mumbai",
  },
  {
    name: "Kavita Sharma",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "From our first consultation to the final installation, the experience was seamless. Our modular kitchen and living room furniture are absolutely stunning. Truly premium quality.",
    project: "Modular Kitchen & Living Room",
    location: "Bangalore",
  },
  {
    name: "Suresh Patel",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "The team designed and furnished our entire restaurant. The ambiance they created with custom wooden furniture has received countless compliments from our patrons.",
    project: "Restaurant Interior",
    location: "Jaipur",
  },
  {
    name: "Neha Kapoor",
    role: "Boutique Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop",
    rating: 5,
    text: "Vastu Vibe India understood our brand aesthetic perfectly. The boutique furniture and display units they created are elegant, functional, and have transformed our retail space.",
    project: "Boutique Store Design",
    location: "Pune",
  },
  {
    name: "Vikram Singh",
    role: "Hotel Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "The furniture for our boutique hotel is exceptional. Guests constantly compliment the unique designs and comfort. Vastu Vibe India delivered beyond our expectations.",
    project: "Hotel Furniture",
    location: "Udaipur",
  },
  {
    name: "Ananya Reddy",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "As a designer, I'm very particular about quality. Vastu Vibe India's craftsmanship is outstanding. They bring my designs to life with precision and care.",
    project: "Multiple Projects",
    location: "Hyderabad",
  },
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    rating: 5,
    text: "The bedroom set they crafted for us is stunning. The quality of wood, the finish, and the attention to detail is remarkable. Worth every rupee spent.",
    project: "Bedroom Furniture Set",
    location: "Chennai",
  },
];

// Client success stories
const successStories = [
  {
    title: "Luxury Villa Transformation",
    image: projectImage1,
    client: "Verma Family",
    description: "Complete furniture solution for a 5BHK luxury villa including living room, bedrooms, dining, and study.",
    duration: "3 months",
    pieces: "45+ pieces",
  },
  {
    title: "Modern Office Setup",
    image: projectImage2,
    client: "TechStart Pvt Ltd",
    description: "Ergonomic workstations, conference room furniture, and executive cabins for a 10,000 sq ft office.",
    duration: "2 months",
    pieces: "120+ pieces",
  },
  {
    title: "Boutique Hotel Furniture",
    image: projectImage3,
    client: "Heritage Hotels",
    description: "Custom furniture for 25 rooms including beds, wardrobes, desks, and lobby furniture.",
    duration: "4 months",
    pieces: "200+ pieces",
  },
];

// Stats
const stats = [
  { value: "500+", label: "Happy Clients", icon: Users },
  { value: "1000+", label: "Projects Completed", icon: CheckCircle },
  { value: "98%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: "4.9/5", label: "Average Rating", icon: Star },
];

// Client logos (placeholder)
const clientLogos = [
  "Heritage Hotels",
  "TechStart",
  "Design Studio",
  "Architects Inc",
  "Luxury Homes",
  "Premium Spaces",
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function TestimonialsPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            alt="Client Testimonials"
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
                Client Stories
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-pure-white mb-6"
            >
              What Our Clients
              <br />
              <span className="bg-gradient-to-r from-luxury-gold to-gold-light bg-clip-text text-transparent">
                Say About Us
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-warm-beige/80 text-lg"
            >
              Real stories from real clients who trusted us with their furniture dreams.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Featured Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Client Spotlight
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
              {/* Project Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={featuredTestimonial.projectImage}
                  alt={featuredTestimonial.project}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-luxury-gold text-deep-walnut text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-luxury-gold" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                <p className="text-dark-charcoal/80 leading-relaxed text-lg mb-8 italic">
                  &ldquo;{featuredTestimonial.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-luxury-gold">
                    <Image
                      src={featuredTestimonial.image}
                      alt={featuredTestimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-deep-walnut">
                      {featuredTestimonial.name}
                    </h4>
                    <p className="text-dark-charcoal/60 text-sm">
                      {featuredTestimonial.role}
                    </p>
                    <p className="text-luxury-gold text-xs flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {featuredTestimonial.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-warm-beige">
                  <span className="px-4 py-2 rounded-full bg-luxury-gold/10 text-luxury-gold text-sm font-medium">
                    {featuredTestimonial.project}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
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

      {/* Testimonials Carousel */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Client Reviews
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-cream-ivory rounded-2xl p-8 md:p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-8 h-8 text-luxury-gold" />
                </div>
                
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                <p className="text-dark-charcoal/80 leading-relaxed text-lg md:text-xl mb-8 italic">
                  &ldquo;{testimonials[activeTestimonial].text}&rdquo;
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-luxury-gold">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-heading text-lg font-bold text-deep-walnut">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-dark-charcoal/60 text-sm">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-deep-walnut text-pure-white flex items-center justify-center hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? "w-8 bg-luxury-gold" : "bg-deep-walnut/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-deep-walnut text-pure-white flex items-center justify-center hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              All Reviews
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              More Client Stories
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-pure-white rounded-xl p-6 border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4">
                  <Quote className="w-5 h-5 text-luxury-gold" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-dark-charcoal/70 leading-relaxed text-sm mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="text-xs text-luxury-gold font-medium tracking-wider uppercase bg-luxury-gold/10 px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-warm-beige">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold text-deep-walnut">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-dark-charcoal/60">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Success Stories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
              Project Highlights
            </h2>
            <div className="w-20 h-1 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-cream-ivory rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-walnut/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                      {story.client}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-deep-walnut mb-3">
                    {story.title}
                  </h3>
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed mb-4">
                    {story.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-luxury-gold">
                      <Award className="w-4 h-4" />
                      {story.pieces}
                    </span>
                    <span className="text-dark-charcoal/50">•</span>
                    <span className="text-dark-charcoal/60">
                      {story.duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-cream-ivory">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Trusted By
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut mt-4">
              Our Valued Clients
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pure-white rounded-xl p-6 flex items-center justify-center border border-warm-beige hover:border-luxury-gold/30 transition-all duration-300"
              >
                <span className="font-heading text-lg font-bold text-deep-walnut/60">
                  {logo}
                </span>
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
              Ready to Join Our
              <br />
              <span className="text-luxury-gold">Happy Clients?</span>
            </h2>
            <p className="text-warm-beige/80 text-lg mb-10 max-w-2xl mx-auto">
              Let us craft furniture that you'll love and cherish for generations. 
              Share your vision with us today.
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
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-pure-white/30 text-pure-white font-semibold hover:bg-pure-white hover:text-deep-walnut transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}