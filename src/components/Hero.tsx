"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowDown,
  Star,
  Hammer,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import Marquee from "./Marquee";
import AnimatedNumber from "./AnimatedNumber";
import { SRMark } from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;

const MATERIALS = [
  "Granite",
  "Quartz",
  "Marble",
  "Travertine",
  "Hardwood",
  "Hand-Forged Hardware",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yFloat1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yFloat2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
    >
      {/* Marble background with parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-110"
        aria-hidden="true"
      >
        <Image
          src="/hero-marble.png"
          alt=""
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered overlay: cool charcoal wash + top/bottom vignette + center spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,22,26,0.25) 0%, rgba(20,22,26,0.55) 70%, rgba(20,22,26,0.75) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-charcoal-deep)]/55 via-transparent to-[color:var(--color-charcoal-deep)]/70" />
        {/* Subtle royal-blue color cast — makes white text & blue logo cohere */}
        <div className="absolute inset-0 bg-[color:var(--color-royal-dark)]/10 mix-blend-multiply" />
      </motion.div>

      {/* Decorative corner brackets */}
      <CornerBrackets />

      {/* Vertical brand rail (left) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-6"
      >
        <span className="h-16 w-px bg-white/30" />
        <div
          className="eyebrow text-white/55 text-[0.65rem]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          EST · SERGIO · ARIZONA
        </div>
        <div
          className="eyebrow text-white/40 text-[0.6rem] tabular-nums"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          ROC LICENSED · BONDED
        </div>
        <span className="h-16 w-px bg-white/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: yContent, opacity }}
        className="relative z-10 flex-1 flex flex-col"
      >
        <div className="flex-1 min-h-[80px]" />

        <div className="container-luxe pb-32 md:pb-40 pt-32 md:pt-36">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-12 bg-white/40" />
            <span className="eyebrow text-white/85">
              EST. ARIZONA · LUXURY HOME RENOVATIONS
            </span>
            <span className="h-px w-12 bg-white/40" />
          </motion.div>

          {/* Centerpiece logo wordmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease }}
            className="text-center relative"
          >
            {/* Decorative micro-stats flanking the wordmark */}
            <div className="hidden xl:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col items-end gap-3 pr-8">
              <MicroStat label="Founded by" value="Sergio" />
              <MicroStat label="Service Area" value="AZ Valley" />
            </div>
            <div className="hidden xl:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col items-start gap-3 pl-8">
              <MicroStat label="Lead Time" value="2 – 4 weeks" align="left" />
              <MicroStat label="Consult" value="Always free" align="left" />
            </div>

            <h1 className="flex items-center justify-center gap-3 md:gap-6 font-display font-medium text-white text-[clamp(2.6rem,11vw,10rem)] leading-[0.85] tracking-[-0.04em]">
              <SRMark className="h-[0.95em] w-[0.95em] shrink-0" />
              <span>Renovations</span>
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-white/50" />
              <span className="eyebrow text-white/80 text-[0.7rem] md:text-xs">
                LLC · CRAFTED IN ARIZONA
              </span>
              <span className="h-px w-16 bg-white/50" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease }}
            className="mt-12 max-w-3xl mx-auto text-center font-display text-white text-3xl md:text-5xl leading-[1.05]"
          >
            Luxury renovations,{" "}
            <em className="not-italic text-[color:var(--color-royal-glow)]">
              crafted around you.
            </em>
          </motion.h2>

          {/* Material chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {MATERIALS.map((m) => (
              <span
                key={m}
                className="px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 text-[0.7rem] tracking-wide text-white/80 hover:bg-white/15 hover:border-white/30 transition-all cursor-default"
              >
                {m}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn btn-primary group">
              Book Free Consult
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
            <a href="#work" className="btn btn-on-dark group">
              <PlayCircle className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />
              View Our Work
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto border-t border-white/15 pt-10 gap-6"
          >
            <Stat
              value={<AnimatedNumber value={200} suffix="+" />}
              label="Renovations"
              icon={<Hammer className="h-3.5 w-3.5" />}
            />
            <Stat
              value={<AnimatedNumber value={5.0} decimals={1} />}
              label="Client Rating"
              icon={<Star className="h-3.5 w-3.5 fill-current" />}
              accent
            />
            <Stat
              value={<AnimatedNumber value={15} suffix="+" />}
              label="Years Crafting"
              icon={<Sparkles className="h-3.5 w-3.5" />}
            />
            <Stat
              value={<span>AZ</span>}
              label="Valley Wide"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60"
        >
          <span className="eyebrow text-[0.65rem]">SCROLL</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* Floating bottom-left: Featured project preview card */}
      <motion.div
        style={{ y: yFloat1 }}
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.5, ease }}
        className="absolute bottom-24 left-4 lg:left-12 z-20 hidden lg:block"
      >
        <a
          href="#work"
          className="group flex items-center gap-4 p-3 pr-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all duration-500 max-w-[320px]"
        >
          <div className="relative h-16 w-16 rounded-xl overflow-hidden shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=400&q=80"
              alt="Featured project"
              fill
              sizes="64px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow text-white/55 text-[0.6rem] mb-1">
              FEATURED · SCOTTSDALE
            </div>
            <div className="text-white text-sm font-medium leading-snug truncate">
              Arcadia Granite Kitchen
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-white/60 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white shrink-0" />
        </a>
      </motion.div>

      {/* Floating bottom-right: 5.0 review card */}
      <motion.div
        style={{ y: yFloat2 }}
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.1, delay: 1.6, ease }}
        className="absolute bottom-24 right-4 lg:right-12 z-20 hidden lg:block"
      >
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 max-w-[280px]">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[color:var(--color-royal-dark)] to-[color:var(--color-royal-light)] flex items-center justify-center text-white font-medium text-xs shrink-0">
            JD
          </div>
          <div>
            <div className="flex items-center gap-0.5 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-[color:var(--color-royal-glow)] text-[color:var(--color-royal-glow)]"
                />
              ))}
            </div>
            <p className="text-white/85 text-xs leading-relaxed line-clamp-3">
              &ldquo;Flawless craftsmanship from start to finish. Truly luxury
              work.&rdquo;
            </p>
            <div className="text-white/50 text-[0.65rem] mt-2 tracking-wide">
              JAMES D. · SCOTTSDALE
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="relative z-10 mt-auto">
        <Marquee variant="light" />
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
  accent = false,
}: {
  value: React.ReactNode;
  label: string;
  icon?: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div className="text-center px-2">
      <div
        className={`font-display text-4xl md:text-5xl font-medium leading-none ${
          accent ? "text-[color:var(--color-royal-glow)]" : "text-white"
        }`}
      >
        {value}
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 eyebrow text-white/65 text-[0.65rem] md:text-[0.7rem]">
        {icon && (
          <span className={accent ? "text-[color:var(--color-royal-glow)]" : "text-white/55"}>
            {icon}
          </span>
        )}
        {label}
      </div>
    </div>
  );
}

function MicroStat({
  label,
  value,
  align = "right",
}: {
  label: string;
  value: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`flex flex-col gap-0.5 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      <span className="eyebrow text-white/45 text-[0.6rem]">{label}</span>
      <span className="text-white/90 text-sm font-medium tracking-wide">{value}</span>
    </div>
  );
}

function CornerBrackets() {
  const corner = "absolute h-8 w-8 border-white/30 z-10 hidden md:block";
  return (
    <>
      <div className={`${corner} top-20 left-4 lg:left-8 border-t border-l`} aria-hidden="true" />
      <div className={`${corner} top-20 right-4 lg:right-8 border-t border-r`} aria-hidden="true" />
      <div className={`${corner} bottom-16 left-4 lg:left-8 border-b border-l`} aria-hidden="true" />
      <div className={`${corner} bottom-16 right-4 lg:right-8 border-b border-r`} aria-hidden="true" />
    </>
  );
}
