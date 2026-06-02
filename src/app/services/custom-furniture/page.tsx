"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Ruler, Palette, TreePine, Wrench } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Premium Wood Selection",
    description: "We source only the finest hardwoods including Sheesham, Teak, Oak, and Walnut for lasting quality.",
  },
  {
    icon: Ruler,
    title: "Custom Dimensions",
    description: "Every piece is crafted to your exact specifications, ensuring perfect fit in your space.",
  },
  {
    icon: Palette,
    title: "Personalized Design",
    description: "Work with our designers to create unique pieces that reflect your style and personality.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description: "Our master artisans bring decades of experience to every joint, curve, and finish.",
  },
];

const process = [
  { step: "01", title: "Consultation", description: "We discuss your vision, requirements, and preferences in detail." },
  { step: "02", title: "Design", description: "Our designers create detailed sketches and 3D renderings for your approval." },
  { step: "03", title: "Material Selection", description: "Choose from our curated selection of premium woods and finishes." },
  { step: "04", title: "Crafting", description: "Our artisans handcraft your piece with meticulous attention to detail." },
  { step: "05", title: "Quality Check", description: "Rigorous quality inspection ensures perfection in every aspect." },
  { step: "06", title: "Delivery & Installation", description: "Professional delivery and installation at your location." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function CustomFurniturePage() {
  return (
    <main className="min-h-screen ">
      {/* Banner Section */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
          alt="Custom Wooden Furniture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-walnut/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl px-4"
          >
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-pure-white mt-4 mb-6">
              Custom Wooden Furniture
            </h1>
            <p className="text-warm-beige/80 text-lg leading-relaxed">
              Bespoke furniture crafted to your exact specifications, combining traditional 
              craftsmanship with contemporary design.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              What Makes Our Custom Furniture Special
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pure-white p-8 rounded-2xl border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-deep-walnut/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-deep-walnut mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-pure-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              Our Work
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Custom Furniture Gallery
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2069&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop",
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img}
                  alt={`Custom furniture ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-cream-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
              How It Works
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6">
              Our Custom Furniture Process
            </h2>
            <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-14 h-14 rounded-xl bg-luxury-gold flex items-center justify-center shrink-0">
                  <span className="font-heading text-lg font-bold text-deep-walnut">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-deep-walnut mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-charcoal/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-walnut">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Ready to Create Your Custom Furniture?
            </h2>
            <p className="text-warm-beige/80 mb-8 leading-relaxed">
              Let's bring your vision to life. Schedule a consultation with our design team 
              and start your custom furniture journey today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}