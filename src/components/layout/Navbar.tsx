"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Custom Wooden Furniture", href: "/services/custom-furniture" },
      { label: "Interior Design", href: "/services/interior-design" },
      { label: "Modular Furniture", href: "/services/modular-furniture" },
      { label: "Space Planning", href: "/services/space-planning" },
      { label: "Furniture Manufacturing", href: "/services/manufacturing" },
      { label: "Renovation Solutions", href: "/services/renovation" },
    ],
  },
  {
    label: "Portfolio",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Interior Design", href: "/projects?cat=interior" },
      { label: "Furniture", href: "/projects?cat=furniture" },
      { label: "Commercial", href: "/projects?cat=commercial" },
    ],
  },
  { label: "Our Furniture", href: "/furniture" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-pure-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: isScrolled ? "#3C2A1E" : "#C5A55A" }}
            >
              <span className={cn(
                "font-heading text-base lg:text-lg font-bold",
                isScrolled ? "text-[#C5A55A]" : "text-[#3C2A1E]"
              )}>VV</span>
            </div>
            <span className={cn(
              "font-heading text-base lg:text-lg font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-[#3C2A1E]" : "text-white"
            )}>Vastu Vibe</span>
          </Link>

          {/* Desktop Nav */}
          <div ref={navRef} className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        isScrolled
                          ? "text-[#2D2D2D]/80 hover:text-[#3C2A1E] hover:bg-[#3C2A1E]/5"
                          : "text-white/85 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        openDropdown === i && "rotate-180"
                      )} />
                    </button>
                    {openDropdown === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-xl border border-[#E8DDD0]/60 py-2 z-50"
                      >
                        <div className="absolute -top-1.5 left-6 w-3 h-3 rotate-45 bg-white border-l border-t border-[#E8DDD0]/60" />
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#2D2D2D]/80 hover:text-[#C5A55A] hover:bg-[#F7F3EC]/60 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 inline-block",
                      isScrolled
                        ? "text-[#2D2D2D]/80 hover:text-[#3C2A1E] hover:bg-[#3C2A1E]/5"
                        : "text-white/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Phone */}
            <a
              href="tel:+919999999999"
              className={cn(
                "hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-200",
                isScrolled ? "text-[#8B7355] hover:text-[#3C2A1E]" : "text-white/70 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+91 99999 99999</span>
            </a>

            {/* CTA */}
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300",
                isScrolled
                  ? "bg-[#3C2A1E] text-[#F7F3EC] hover:bg-[#C5A55A] hover:text-[#3C2A1E]"
                  : "bg-[#C5A55A] text-[#3C2A1E] hover:bg-white"
              )}
            >
              Get a Quote
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "text-[#3C2A1E]" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-[#E8DDD0] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
              {navItems.map((item, i) => (
                <div key={i}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileDropdown(openMobileDropdown === i ? null : i)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-[#2D2D2D]/80 hover:text-[#C5A55A] hover:bg-[#F7F3EC] font-medium text-sm transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          openMobileDropdown === i && "rotate-180"
                        )} />
                      </button>
                      <AnimatePresence>
                        {openMobileDropdown === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pl-3 border-l-2 border-[#C5A55A]/30 space-y-0.5 py-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2 text-sm text-[#2D2D2D]/60 hover:text-[#C5A55A] transition-colors rounded-lg"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-[#2D2D2D]/80 hover:text-[#C5A55A] hover:bg-[#F7F3EC] font-medium text-sm transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-2.5 border-t border-[#E8DDD0] mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-xl bg-[#3C2A1E] text-[#F7F3EC] font-semibold text-sm hover:bg-[#C5A55A] hover:text-[#3C2A1E] transition-all"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-[#3C2A1E]/20 text-[#2D2D2D] font-medium text-sm hover:bg-[#3C2A1E] hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  +91 99999 99999
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}