"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 5 categories × 5 modern luxury images = 25 images
const galleryImages = [
  // === Living Room (5) ===
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop", alt: "Modern Luxury Living Room", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop", alt: "Contemporary Living Lounge", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?q=80&w=2070&auto=format&fit=crop", alt: "Elegant Living Space", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2066&auto=format&fit=crop", alt: "Minimalist Luxury Living", category: "Living Room" },
  { src: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080&auto=format&fit=crop", alt: "Designer Living Room", category: "Living Room" },

  // === Bedroom (5) ===
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Master Bedroom", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2089&auto=format&fit=crop", alt: "Modern Bedroom Suite", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop", alt: "Premium Bedroom Design", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2057&auto=format&fit=crop", alt: "Cozy Luxury Bedroom", category: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2070&auto=format&fit=crop", alt: "Contemporary Bedroom", category: "Bedroom" },

  // === Kitchen (5) ===
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop", alt: "Modern Luxury Kitchen", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", alt: "Designer Kitchen Interior", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop", alt: "Modular Kitchen Design", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1556909211-d5b04e3a4f29?q=80&w=1974&auto=format&fit=crop", alt: "Premium Kitchen Setup", category: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1631679706909-fae22c2181ec?q=80&w=2080&auto=format&fit=crop", alt: "Elegant Kitchen Space", category: "Kitchen" },

  // === Office (5) ===
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", alt: "Executive Office Suite", category: "Office" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop", alt: "Modern Workspace", category: "Office" },
  { src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop", alt: "Corporate Office Design", category: "Office" },
  { src: "https://images.unsplash.com/photo-1631193816258-28b44b21e78b?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Boardroom", category: "Office" },
  { src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2064&auto=format&fit=crop", alt: "Designer Workstation", category: "Office" },

  // === Dining (5) ===
  { src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop", alt: "Custom Dining Set", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop", alt: "Elegant Dining Table", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", alt: "Restaurant Interior", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", alt: "Cafe Dining Space", category: "Dining" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop", alt: "Fine Dining Setup", category: "Dining" },

  // === Furniture (5) ===
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", alt: "Designer Sofa", category: "Furniture" },
  { src: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=1974&auto=format&fit=crop", alt: "Woodworking Detail", category: "Furniture" },
  { src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop", alt: "Luxury Armchair", category: "Furniture" },
  { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2080&auto=format&fit=crop", alt: "Custom Wardrobe", category: "Furniture" },
  { src: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=2070&auto=format&fit=crop", alt: "Handcrafted Chair", category: "Furniture" },
];

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Dining", "Furniture"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") {
      // "All" tab: har category ki sirf pehli image dikhao
      const seen = new Set<string>();
      return galleryImages.filter((img) => {
        if (seen.has(img.category)) return false;
        seen.add(img.category);
        return true;
      });
    }
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section-padding bg-cream-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase">
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mt-4 mb-6">
            Our Work in Focus
          </h2>
          <div className="w-20 h-0.5 bg-luxury-gold mx-auto" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-deep-walnut text-cream-ivory"
                  : "bg-pure-white text-dark-charcoal/70 hover:bg-deep-walnut/10 border border-warm-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedImage(index)}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-dark-charcoal/0 group-hover:bg-dark-charcoal/50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-pure-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-dark-charcoal/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-pure-white/10 flex items-center justify-center text-pure-white hover:bg-pure-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] w-full h-full"
            >
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat rounded-2xl"
                style={{
                  backgroundImage: `url('${filtered[selectedImage].src}')`,
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}