"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PreFooterCTA() {
  return (
    <section className="relative bg-[color:var(--color-charcoal-deep)] text-white py-28 md:py-40 overflow-hidden">
      {/* Animated glow background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[color:var(--color-royal-dark)] blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[color:var(--color-royal-light)] blur-3xl"
      />

      <div className="container-luxe relative text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-white/40" />
            <span className="eyebrow text-white/70">READY WHEN YOU ARE</span>
            <span className="h-px w-10 bg-white/40" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.95] max-w-5xl mx-auto">
            Ready to elevate your{" "}
            <em className="not-italic text-[color:var(--color-royal-glow)]">
              home
            </em>{" "}
            ?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Bring your vision to life with custom craftsmanship. One free
            consult is all it takes.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn btn-primary group">
              Book Your Consult
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/55">
            <Badge icon={<ShieldCheck className="h-4 w-4" />} label="Licensed & Bonded" />
            <Badge icon={<Award className="h-4 w-4" />} label="Fully Insured" />
            <Badge icon={<MapPin className="h-4 w-4" />} label="AZ Valley Wide" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, color: "#fff" }}
      transition={{ duration: 0.3, ease }}
      className="flex items-center gap-2 text-sm tracking-wide cursor-default"
    >
      <span className="text-[color:var(--color-royal-glow)]">{icon}</span>
      {label}
    </motion.div>
  );
}
