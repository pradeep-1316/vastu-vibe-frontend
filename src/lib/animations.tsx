"use client";

import { motion } from "framer-motion";
import React from "react";

// ─── SplitText — animates each character with 3D rotateX ───
export function SplitText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
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

// ─── RevealMask — wipes content into view from bottom ───
export function RevealMask({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

// ─── StaggerContainer — staggered children reveal ───
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay, delayChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem — child of StaggerContainer ───
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        show: { opacity: 1, y: 0, scale: 1 },
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── FloatingCard — card with hover lift + glow ───
export function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

// ─── SectionCaption — tagline style matching VideoShowcase sub-heading ───
export function SectionCaption({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.55 }}
      className={`font-heading text-lg sm:text-xl md:text-2xl font-medium ${className}`}
    >
      {text}
    </motion.p>
  );
}

// ─── SectionHeader — unified section heading with reveal animations ───
export function SectionHeader({
  subtitle,
  title,
  description,
  caption,
}: {
  subtitle: string;
  title: string;
  description?: string;
  caption?: string;
}) {
  return (
    <div className="text-center mb-6">
      <RevealMask>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-xs font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
          {subtitle}
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
        </span>
      </RevealMask>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4 overflow-hidden leading-[1.1]">
        <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
          <SplitText text={title} />
        </span>
      </h2>
      {caption && <SectionCaption text={caption} className="mt-2 mb-4 text-soft-umber" />}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-20 h-1 bg-luxury-gold mx-auto"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-dark-charcoal/70 leading-relaxed text-base sm:text-lg max-w-xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

// ─── SectionHeaderDark — for dark background sections ───
export function SectionHeaderDark({
  subtitle,
  title,
  description,
  caption,
}: {
  subtitle: string;
  title: string;
  description?: string;
  caption?: string;
}) {
  return (
    <div className="text-center mb-6">
      <RevealMask>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-luxury-gold text-xs font-medium tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
          {subtitle}
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
        </span>
      </RevealMask>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-4 overflow-hidden leading-[1.1]">
        <span className="bg-gradient-to-r from-luxury-gold via-gold-light to-luxury-gold bg-clip-text text-transparent">
          <SplitText text={title} />
        </span>
      </h2>
      {caption && <SectionCaption text={caption} className="mt-2 mb-4 text-gold-light/90" />}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-20 h-1 bg-luxury-gold mx-auto"
      />
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-warm-beige/70 leading-relaxed text-base sm:text-lg max-w-xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
