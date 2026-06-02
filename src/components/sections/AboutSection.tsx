"use client";

import { motion } from "framer-motion";
import { Shield, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
  {
    icon: Shield,
    title: "Our Mission",
    description:
      "To craft exceptional custom furniture that perfectly matches your design vision. We transform your ideas into tangible masterpieces using premium materials and time-honored techniques.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be India's most trusted name in custom furniture making, where every design is unique, every piece is handcrafted with passion, and every client's dream becomes reality.",
  },
  {
    icon: Heart,
    title: "Our Philosophy",
    description:
      "Your design, our craftsmanship. We believe every piece of furniture should be as unique as its owner. Whatever design you imagine, we bring it to life with precision and care.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-cream-ivory">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <Image
          src="/images/banner-image.png"
          alt="About Vastu Vibe India"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-walnut/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-4">
              Crafting Excellence Since 2020
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">

          {/* Company Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-deep-walnut rounded-2xl flex items-center justify-center hidden md:flex">
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-luxury-gold">
                      1000+
                    </div>
                    <div className="text-xs text-cream-ivory tracking-wider uppercase mt-1">
                      Unique Pieces Crafted
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-deep-walnut">
                Your Design, Our Craftsmanship
              </h3>
              <p className="text-dark-charcoal/70 leading-relaxed">
                At Vastu Vibe India, we specialize in creating unique, custom-designed 
                furniture that perfectly matches your vision. Whether you have a specific 
                design in mind or need creative direction, our master craftsmen bring your 
                ideas to life with precision and passion.
              </p>
              <p className="text-dark-charcoal/70 leading-relaxed">
                From hand-carved wooden masterpieces to modern minimalist designs, we 
                craft every piece with meticulous attention to detail. We use only the 
                finest hardwoods - Sheesham, Teak, Oak, Walnut - sourced sustainably to 
                create furniture that becomes a family heirloom.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-deep-walnut text-cream-ivory font-medium hover:bg-luxury-gold hover:text-deep-walnut transition-all duration-300"
              >
                Know More About Us
              </Link>
            </motion.div>
          </div>

          {/* Mission, Vision, Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-pure-white border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-deep-walnut/5 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-deep-walnut mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-charcoal/70 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}