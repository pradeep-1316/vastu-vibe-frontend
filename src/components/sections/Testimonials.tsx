"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "New Delhi",
    role: "Homeowner",
    rating: 5,
    content:
      "Vastu Vibe India transformed our home into a masterpiece. The attention to detail, quality of craftsmanship, and their understanding of our vision was exceptional. Every piece of furniture they created for us is a work of art.",
    image: null,
  },
  {
    name: "Rajesh Mehta",
    location: "Mumbai",
    role: "Business Owner",
    rating: 5,
    content:
      "We commissioned Vastu Vibe India for our office interior design and custom furniture. The result was beyond our expectations. Professional, punctual, and absolutely brilliant in their work. Highly recommended!",
    image: null,
  },
  {
    name: "Ananya Gupta",
    location: "Bangalore",
    role: "Architect",
    rating: 5,
    content:
      "As an architect, I have high standards for craftsmanship. Vastu Vibe India exceeded every expectation. Their custom furniture pieces are not just functional – they are sculptural works that elevate any space.",
    image: null,
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    role: "Restaurant Owner",
    rating: 5,
    content:
      "The team designed and furnished our entire restaurant. The ambiance they created with custom wooden furniture and thoughtful interior design has received countless compliments from our patrons.",
    image: null,
  },
  {
    name: "Neha Patel",
    location: "Ahmedabad",
    role: "Homeowner",
    rating: 5,
    content:
      "From our first consultation to the final installation, the experience with Vastu Vibe India was seamless. Our modular kitchen and living room furniture are absolutely stunning. Truly premium quality.",
    image: null,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="section-padding bg-deep-walnut relative overflow-hidden">
      {/* Decorative Gold Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='%23C5A55A'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pure-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden min-h-[280px] flex items-center">
            <AnimatedTestimonial
              key={current}
              testimonial={testimonials[current]}
              variants={variants}
              custom={direction}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-warm-beige/30 flex items-center justify-center text-warm-beige hover:bg-luxury-gold hover:text-deep-walnut hover:border-luxury-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-luxury-gold w-8"
                      : "bg-warm-beige/30 hover:bg-warm-beige/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-warm-beige/30 flex items-center justify-center text-warm-beige hover:bg-luxury-gold hover:text-deep-walnut hover:border-luxury-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedTestimonial({
  testimonial,
  variants,
  custom,
}: {
  testimonial: (typeof testimonials)[0];
  variants: any;
  custom: number;
}) {
  return (
    <motion.div
      custom={custom}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full"
    >
      <div className="text-center px-4">
        <Quote className="w-10 h-10 text-luxury-gold/50 mx-auto mb-6" />
        <p className="text-lg md:text-xl text-warm-beige/90 leading-relaxed mb-8 italic font-light">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        <div className="flex items-center justify-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
          ))}
        </div>

        <div>
          <p className="font-heading text-lg font-bold text-pure-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-warm-beige/60">
            {testimonial.role} &middot; {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}