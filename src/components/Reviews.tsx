"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/brand";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-[color:var(--color-pearl)] py-28 md:py-40">
      <div className="container-luxe">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[color:var(--color-royal-dark)]" />
              <span className="eyebrow text-[color:var(--color-royal-dark)]">
                CLIENT VOICES
              </span>
              <span className="h-px w-10 bg-[color:var(--color-royal-dark)]" />
            </div>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="font-display text-7xl md:text-8xl text-[color:var(--color-charcoal)] leading-none">
                5.0
              </span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + i * 0.1,
                        ease,
                      }}
                    >
                      <Star className="h-5 w-5 fill-[color:var(--color-royal-dark)] text-[color:var(--color-royal-dark)]" />
                    </motion.div>
                  ))}
                </div>
                <span className="eyebrow text-[color:var(--color-charcoal)]/65 text-[0.7rem]">
                  VERIFIED CLIENT SATISFACTION
                </span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Built once.{" "}
              <em className="not-italic text-royal-gradient">Loved for years.</em>
            </h2>
          </div>
        </Reveal>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease }}
              whileHover={{ y: -6 }}
              className="group relative bg-white p-8 md:p-10 rounded-3xl ring-luxe overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-[color:var(--color-royal-dark)]/10 group-hover:text-[color:var(--color-royal-dark)]/25 transition-colors duration-500" />

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-[color:var(--color-royal-dark)] text-[color:var(--color-royal-dark)]"
                  />
                ))}
              </div>

              <p className="text-[color:var(--color-charcoal)]/80 text-base md:text-lg leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-black/5">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[color:var(--color-royal-dark)] to-[color:var(--color-royal-light)] flex items-center justify-center text-white font-medium text-sm tracking-wide">
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-[color:var(--color-charcoal)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[color:var(--color-charcoal)]/55 tracking-wide">
                    {t.city}
                  </div>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-px bg-[color:var(--color-royal-dark)] w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
