"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/lib/brand";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const items =
    filter === "All"
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section
      id="work"
      className="relative bg-[color:var(--color-charcoal-deep)] text-white py-28 md:py-40 overflow-hidden"
    >
      {/* Decorative blue glow */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[color:var(--color-royal-dark)] opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[color:var(--color-royal-light)] opacity-10 blur-3xl" />

      <div className="container-luxe relative">
        <Reveal>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[color:var(--color-royal-light)]" />
              <span className="eyebrow text-[color:var(--color-royal-light)]">
                PORTFOLIO
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Portfolio of{" "}
              <em className="not-italic text-[color:var(--color-royal-glow)]">
                Excellence
              </em>
            </h2>
          </div>
        </Reveal>

        {/* Filter pills */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {PORTFOLIO_FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-500 border ${
                    active
                      ? "bg-white text-[color:var(--color-charcoal)] border-white"
                      : "bg-transparent text-white/70 border-white/20 hover:border-white/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            transition={{ duration: 0.6, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {items.map((p, i) => (
                <motion.a
                  key={p.image}
                  href="#contact"
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.96 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.05,
                    ease,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-charcoal-deep)]/50 via-transparent to-transparent opacity-90 pointer-events-none" />
                    <div className="absolute inset-0 bg-[color:var(--color-royal-dark)]/0 group-hover:bg-[color:var(--color-royal-dark)]/15 transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
