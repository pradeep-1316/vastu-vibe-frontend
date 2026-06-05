"use client";

import { useParams, notFound } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  Star,
  Ruler,
  Palette,
  Settings,
  TreePine,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  Hammer,
  Sparkles,
} from "lucide-react";
import { furnitureItems, getFurnitureBySlug } from "@/lib/data/furniture";

// ============================================================
// SCROLL-INDUCED ANIMATION COMPONENTS (unique to furniture detail)
// ============================================================

// 1. SplitText — animates each character with 3D rotateX
function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  let charIndex = 0;
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap mr-[0.3em]">
          {word.split("").map((char) => {
            const idx = charIndex++;
            return (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: delay + idx * 0.02, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
                style={{ transformOrigin: "50% 100%" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

// 2. RevealMask — wipes content into view from bottom
function RevealMask({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// 4. ParallaxImage — main hero image with scroll-parallax + dots + thumbnails
function ParallaxImage({
  images,
  name,
  selectedImage,
  setSelectedImage,
}: {
  images: string[];
  name: string;
  selectedImage: number;
  setSelectedImage: (n: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -25]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ y }}
        className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
      >
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={false}
            animate={{ opacity: index === selectedImage ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-0">
              <Image
                src={img}
                alt={`${name} view ${index + 1}`}
                fill
                className="object-cover scale-110"
                priority={index === 0}
              />
            </motion.div>
          </motion.div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-tr from-deep-walnut/30 via-transparent to-luxury-gold/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {images.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.15, x: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-pure-white/90 backdrop-blur flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-colors shadow-lg z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.15, x: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-pure-white/90 backdrop-blur flex items-center justify-center text-deep-walnut hover:bg-luxury-gold hover:text-pure-white transition-colors shadow-lg z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </>
        )}

        <motion.div
          key={selectedImage}
          initial={{ opacity: 0, y: 20, scale: 0.7, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-deep-walnut/80 backdrop-blur text-pure-white text-xs font-semibold z-10"
        >
          {selectedImage + 1} / {images.length}
        </motion.div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setSelectedImage(i)}
                className="group/dot"
              >
                <motion.span
                  className="block h-1.5 rounded-full"
                  initial={false}
                  animate={{
                    width: selectedImage === i ? 28 : 6,
                    backgroundColor: selectedImage === i ? "#C5A55A" : "rgba(255,255,255,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {images.length > 1 && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          className="flex gap-3 mt-4 overflow-x-auto pb-2"
        >
          {images.map((img, index) => (
            <motion.button
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.7 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                selectedImage === index ? "border-luxury-gold opacity-100 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${name} view ${index + 1}`} fill className="object-cover" />
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

// 5. MorphingCard — cards that scale + glow on hover while floating
function MorphingCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(197, 165, 90, 0.25)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 6. FloatingOrbs — animated blurred background orbs unique to this page
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        className="absolute top-10 -right-32 w-96 h-96 rounded-full bg-luxury-gold/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -left-32 w-[28rem] h-[28rem] rounded-full bg-deep-walnut/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-3xl"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// 7. MagneticCard — mouse-tracking 3D tilt card
function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default function FurnitureDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const item = getFurnitureBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!item) {
    notFound();
  }

  const images = item.additionalImages && item.additionalImages.length > 0
    ? [item.image, ...item.additionalImages]
    : [item.image];

  const relatedItems = furnitureItems
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 3);

  // Section-level parallax
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuresScroll } = useScroll({
    target: featuresSectionRef,
    offset: ["start end", "end start"],
  });
  const featuresBgY = useTransform(featuresScroll, [0, 1], ["-15%", "15%"]);

  return (
    <main className="min-h-screen bg-cream-ivory overflow-x-hidden">

      {/* ============= HERO ============= */}
      <section className="section-padding bg-pure-white relative overflow-hidden">
        <FloatingOrbs />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ParallaxImage
              images={images}
              name={item.name}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />

            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Category pills — slide down with bounce */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
                  className="flex items-center gap-3 mb-4 flex-wrap"
                >
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 rounded-full bg-luxury-gold/10 text-luxury-gold text-xs font-semibold border border-luxury-gold/20"
                  >
                    {item.category}
                  </motion.span>
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 rounded-full bg-deep-walnut/5 text-dark-charcoal/70 text-xs border border-deep-walnut/10"
                  >
                    {item.designStyle}
                  </motion.span>
                </motion.div>

                {/* Title with split-text reveal */}
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-deep-walnut mb-4 overflow-hidden">
                  <SplitText text={item.name} />
                </h1>

                {/* Rating row with spring animation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center gap-4 mb-6 flex-wrap"
                >
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                    <span className="font-semibold text-deep-walnut">{item.rating}</span>
                    <span className="text-dark-charcoal/50">({item.reviews} reviews)</span>
                  </div>
                  <span className="text-dark-charcoal/20">|</span>
                  <span className="text-sm text-dark-charcoal/60">{item.material}</span>
                </motion.div>

                {/* Description */}
                <p className="text-dark-charcoal/70 leading-relaxed text-lg font-medium mb-2">
                  {item.shortDescription}
                </p>
                <p className="text-dark-charcoal/60 leading-relaxed text-base mb-8">
                  {item.fullDescription}
                </p>

                {/* Product Information Grid — staggered card reveal */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                  className="grid grid-cols-2 gap-3 mb-6"
                >
                  {[
                    { icon: TreePine, label: "Material", value: item.material },
                    { icon: TreePine, label: "Wood Type", value: item.woodType },
                    { icon: Palette, label: "Fabric Type", value: item.fabricType ?? "N/A" },
                    { icon: Palette, label: "Finish Type", value: item.finishType },
                    { icon: Palette, label: "Color", value: item.color },
                    { icon: Settings, label: "Style", value: item.style },
                  ].map((card) => (
                    <motion.div
                      key={card.label}
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                        show: { opacity: 1, y: 0, scale: 1 },
                      }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-cream-ivory rounded-xl p-4 border border-warm-beige/50 hover:border-luxury-gold/30 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <card.icon className="w-4 h-4 text-luxury-gold" />
                        <span className="text-xs font-medium text-dark-charcoal/70">{card.label}</span>
                      </div>
                      <p className="text-sm text-deep-walnut font-medium">{card.value}</p>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      show: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-cream-ivory rounded-xl p-4 col-span-2 border border-warm-beige/50 hover:border-luxury-gold/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Settings className="w-4 h-4 text-luxury-gold" />
                      <span className="text-xs font-medium text-dark-charcoal/70">Room Type</span>
                    </div>
                    <p className="text-sm text-deep-walnut font-medium">{item.roomType}</p>
                  </motion.div>
                </motion.div>

                {/* Dimensions Section with reveal-mask */}
                <RevealMask className="mb-6" delay={0.1}>
                  <div className="bg-cream-ivory rounded-2xl p-5 border border-warm-beige">
                    <div className="flex items-center gap-2 mb-3">
                      <Ruler className="w-5 h-5 text-luxury-gold" />
                      <h3 className="font-heading text-base font-bold text-deep-walnut">Dimensions</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: "Length", value: item.length },
                        { label: "Width", value: item.width },
                        { label: "Height", value: item.height },
                        { label: "Weight", value: item.weight ?? "—" },
                      ].map((d) => (
                        <motion.div
                          key={d.label}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <p className="text-xs text-dark-charcoal/60 mb-1">{d.label}</p>
                          <p className="text-sm text-deep-walnut font-semibold">{d.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </RevealMask>

                {/* Customization chips — wave reveal */}
                <div className="mb-8">
                  <h3 className="font-heading text-sm font-bold text-deep-walnut mb-3">Customization Options</h3>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } } }}
                    className="flex flex-wrap gap-2"
                  >
                    {item.customization.map((opt) => (
                      <motion.span
                        key={opt}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          show: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="px-3 py-1.5 rounded-lg bg-luxury-gold/5 border border-luxury-gold/20 text-dark-charcoal/80 text-sm cursor-default"
                      >
                        {opt}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={`/contact?product=${encodeURIComponent(item.name)}`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300 shadow-lg"
                    >
                      Get Free Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={`/contact?product=${encodeURIComponent(item.name)}&type=enquiry`}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-deep-walnut/20 text-deep-walnut font-semibold hover:bg-deep-walnut hover:text-pure-white transition-all duration-300"
                    >
                      Enquire Now
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FEATURES ============= */}
      {item.features && item.features.length > 0 && (
        <section ref={featuresSectionRef} className="section-padding bg-cream-ivory relative overflow-hidden">
          <FloatingOrbs />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <RevealMask>
                <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase block">What Makes It Special</span>
              </RevealMask>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6 overflow-hidden">
                <SplitText text="Key Features" />
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-1 bg-luxury-gold mx-auto origin-left"
              />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {item.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    show: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-4 bg-pure-white rounded-xl p-6 border border-warm-beige hover:border-luxury-gold/30 hover:shadow-xl transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0"
                  >
                    <CheckCircle className="w-5 h-5 text-luxury-gold" />
                  </motion.div>
                  <p className="text-dark-charcoal/80">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============= CARE INSTRUCTIONS ============= */}
      {item.careInstructions && item.careInstructions.length > 0 && (
        <section className="section-padding bg-pure-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <RevealMask>
                <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase block">Care & Maintenance</span>
              </RevealMask>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6 overflow-hidden">
                <SplitText text={"How to Care for Your " + item.name.split(" ").slice(0, 2).join(" ")} />
              </h2>
              <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {item.careInstructions.map((instruction, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, rotate: -5 },
                    show: { opacity: 1, y: 0, rotate: 0 },
                  }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center p-6 bg-cream-ivory rounded-xl border border-warm-beige hover:shadow-2xl transition-all"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="font-heading text-lg font-bold text-deep-walnut">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                  <p className="text-dark-charcoal/70 text-sm">{instruction}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============= CRAFTSMANSHIP ============= */}
      <section className="section-padding bg-deep-walnut relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23C5A55A' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <RevealMask>
              <Sparkles className="w-10 h-10 text-luxury-gold mx-auto mb-3" />
            </RevealMask>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pure-white overflow-hidden">
              <SplitText text="Our Craftsmanship Promise" />
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: "Master Craftsmanship", desc: "Handcrafted by artisans with decades of experience" },
              { icon: Shield, title: "5-Year Warranty", desc: "Comprehensive warranty on all custom furniture" },
              { icon: Truck, title: "Pan-India Delivery", desc: "Safe delivery and installation across India" },
            ].map((it, index) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="text-center bg-deep-walnut/30 backdrop-blur p-6 rounded-2xl border border-luxury-gold/10"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.15 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4"
                >
                  <it.icon className="w-8 h-8 text-luxury-gold" />
                </motion.div>
                <h3 className="font-heading text-lg font-bold text-pure-white mb-2">{it.title}</h3>
                <p className="text-warm-beige/70 text-sm">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= RELATED ============= */}
      {relatedItems.length > 0 && (
        <section className="section-padding bg-cream-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <RevealMask>
                <span className="text-luxury-gold font-medium text-sm tracking-[0.2em] uppercase block">More Options</span>
              </RevealMask>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mt-4 mb-6 overflow-hidden">
                <SplitText text="You May Also Like" />
              </h2>
              <div className="w-20 h-1 bg-luxury-gold mx-auto" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {relatedItems.map((related, index) => (
                <motion.div
                  key={related.slug}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link
                    href={`/furniture/${related.slug}`}
                    className="group block bg-pure-white rounded-2xl overflow-hidden border border-warm-beige hover:border-luxury-gold/30 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-luxury-gold text-deep-walnut text-xs font-semibold">
                          {related.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                        <span className="text-xs font-medium text-dark-charcoal/70">{related.rating}</span>
                      </div>
                      <h3 className="font-heading font-bold text-deep-walnut mb-1">{related.name}</h3>
                      <p className="text-xs text-dark-charcoal/60">{related.material}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============= CTA ============= */}
      <section className="py-20 bg-pure-white relative overflow-hidden">
        <FloatingOrbs />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealMask>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-deep-walnut mb-6 overflow-hidden">
              <SplitText text="Have a Different Design in Mind?" />
            </h2>
          </RevealMask>
          <RevealMask delay={0.2}>
            <p className="text-dark-charcoal/70 text-lg mb-10 max-w-2xl mx-auto">
              We specialize in creating custom furniture exactly to your specifications. Share your ideas and our master craftsmen will bring your vision to life.
            </p>
          </RevealMask>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-luxury-gold text-deep-walnut font-semibold hover:bg-gold-light transition-all duration-300 shadow-lg"
              >
                Discuss Your Design <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services/custom-furniture"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-deep-walnut/20 text-deep-walnut font-semibold hover:bg-deep-walnut hover:text-pure-white transition-all duration-300"
              >
                Learn About Custom Furniture
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
