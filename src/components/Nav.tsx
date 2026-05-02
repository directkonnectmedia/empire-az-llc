"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-[0_2px_30px_-15px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between py-4 md:py-5">
        <a href="#top" className="group">
          <Logo
            variant={scrolled ? "dark" : "light"}
            size="md"
            withTagline={false}
            markTextScale="1.4em"
          />
        </a>

        {/* Center nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled
                  ? "text-[color:var(--color-charcoal)] hover:text-[color:var(--color-royal-dark)]"
                  : "text-white/90 hover:text-white"
              } group`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-[color:var(--color-royal-light)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={BRAND.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-[color:var(--color-charcoal)]" : "text-white/90"
            } hover:text-[color:var(--color-royal-light)]`}
          >
            <Phone className="h-4 w-4" />
            {BRAND.phone}
          </a>
          <a href="#contact" className="btn btn-primary text-xs">
            Book Consult
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(true)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? "text-[color:var(--color-charcoal)]" : "text-white"
          }`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[color:var(--color-charcoal-deep)]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="container-luxe flex items-center justify-between py-5">
              <Logo variant="light" size="md" withTagline={false} />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-luxe mt-12 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-4xl text-white/90 hover:text-white border-b border-white/10 pb-4"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={BRAND.phoneHref}
                  className="flex items-center gap-2 text-white/80"
                >
                  <Phone className="h-4 w-4" />
                  {BRAND.phone}
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary self-start"
                >
                  Book Consult
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
