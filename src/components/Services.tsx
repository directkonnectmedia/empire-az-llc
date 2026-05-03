"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SERVICES } from "@/lib/brand";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-28 md:py-40">
      {/* Section header */}
      <div className="container-luxe">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-[color:var(--color-royal-dark)]" />
                <span className="eyebrow text-[color:var(--color-royal-dark)]">
                  WHAT WE BUILD
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-7xl text-[color:var(--color-charcoal)] leading-[0.95]">
                Two disciplines.{" "}
                <em className="not-italic text-royal-gradient">
                  One luxury standard.
                </em>
              </h2>
            </div>
            <p className="md:max-w-sm text-[color:var(--color-charcoal)]/65 leading-relaxed">
              Every project is custom-designed and handcrafted by the Empire AZ
              LLC team — no templates, no shortcuts, just refined work that lasts.
            </p>
          </div>
        </Reveal>

        {/* Alternating cards */}
        <div className="flex flex-col gap-32 md:gap-40">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} service={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  service,
  reverse,
}: {
  service: (typeof SERVICES)[number];
  reverse: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease }}
        className="lg:col-span-7"
      >
        <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden ring-luxe">
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[0.7rem] eyebrow text-[color:var(--color-charcoal)]">
            {service.num} · {service.eyebrow}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="lg:col-span-5"
      >
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-display text-7xl md:text-8xl text-[color:var(--color-light-gray)] no-select leading-none">
            {service.num}
          </span>
          <span className="eyebrow text-[color:var(--color-royal-dark)]">
            — {service.eyebrow}
          </span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl text-[color:var(--color-charcoal)] mb-6 leading-tight">
          {service.title}
        </h3>
        <p className="text-[color:var(--color-charcoal)]/70 text-lg leading-relaxed mb-8">
          {service.body}
        </p>
        <a href="#contact" className="btn btn-primary group">
          Get a Free Quote
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </div>
  );
}
