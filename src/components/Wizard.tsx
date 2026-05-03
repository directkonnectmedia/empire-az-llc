"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Phone,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";
import { BRAND } from "@/lib/brand";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const SERVICE_OPTIONS = [
  "Custom glass shower enclosure",
  "Glass doors",
];

const TIMELINE_OPTIONS = ["ASAP", "1 Month", "3 Months+"];

const STEP_LABELS = ["Services", "Project", "Contact", "Done"];

type FormData = {
  services: string[];
  budget: string;
  timeline: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

export default function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    services: [],
    budget: "",
    timeline: "",
    notes: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const toggleService = (s: string) =>
    setData((d) => ({
      ...d,
      services: d.services.includes(s)
        ? d.services.filter((x) => x !== s)
        : [...d.services, s],
    }));

  const canProceedFromStep = (): boolean => {
    if (step === 0) return data.services.length > 0;
    if (step === 1) return Boolean(data.budget && data.timeline);
    if (step === 2) return Boolean(data.name && data.email && data.phone);
    return true;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceedFromStep()) return;
    setStep(3);
  };

  return (
    <section id="contact" className="relative bg-white py-28 md:py-40">
      <div className="container-luxe">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[color:var(--color-royal-dark)]" />
              <span className="eyebrow text-[color:var(--color-royal-dark)]">
                START YOUR PROJECT
              </span>
              <span className="h-px w-10 bg-[color:var(--color-royal-dark)]" />
            </div>
            <p className="mt-6 text-[color:var(--color-charcoal)]/65 text-lg leading-relaxed">
              Tell us about your project. An Empire AZ LLC design specialist
              will reach out within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Side info panel */}
          <Reveal className="lg:col-span-4">
            <div className="bg-[color:var(--color-charcoal-deep)] text-white rounded-3xl p-8 md:p-10 h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[color:var(--color-royal-dark)] opacity-30 blur-3xl" />

              <div className="relative">
                <Sparkles className="h-7 w-7 text-[color:var(--color-royal-glow)] mb-6" />
                <h3 className="font-display text-3xl mb-3 leading-tight">
                  Talk to {BRAND.owner} directly.
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-10">
                  Skip the form — call or email us anytime. Every consult is
                  free, no obligation.
                </p>

                <div className="space-y-6">
                  <InfoRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={BRAND.phone}
                    href={BRAND.phoneHref}
                  />
                  <InfoRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={BRAND.email}
                    href={BRAND.emailHref}
                  />
                  <InfoRow
                    icon={<Clock className="h-4 w-4" />}
                    label="Hours"
                    value={BRAND.hours}
                  />
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-royal-glow)] animate-pulse" />
                    Booking March – June projects
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Licensed, bonded, and fully insured across the Arizona
                    Valley.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Wizard panel */}
          <Reveal className="lg:col-span-8" delay={0.1}>
            <form
              onSubmit={submit}
              className="bg-[color:var(--color-pearl)] rounded-3xl p-8 md:p-10 ring-luxe relative overflow-hidden"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-10">
                {STEP_LABELS.map((label, i) => {
                  const active = i === step;
                  const done = i < step;
                  return (
                    <div key={label} className="flex items-center gap-3 flex-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <motion.div
                          animate={{
                            backgroundColor: done || active
                              ? "var(--color-royal-dark)"
                              : "rgba(31,34,38,0.08)",
                            color: done || active ? "#fff" : "rgba(31,34,38,0.5)",
                            scale: active ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.4, ease }}
                          className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium tabular-nums shrink-0"
                        >
                          {done ? <Check className="h-4 w-4" /> : i + 1}
                        </motion.div>
                        <span
                          className={`text-xs font-medium tracking-wide hidden sm:block transition-colors duration-300 ${
                            active || done
                              ? "text-[color:var(--color-charcoal)]"
                              : "text-[color:var(--color-charcoal)]/40"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                      {i < STEP_LABELS.length - 1 && (
                        <div className="flex-1 h-px bg-[color:var(--color-charcoal)]/10 relative overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: i < step ? 1 : 0 }}
                            transition={{ duration: 0.6, ease }}
                            style={{ transformOrigin: "left" }}
                            className="absolute inset-0 bg-[color:var(--color-royal-dark)]"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Steps */}
              <div className="min-h-[380px]">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <h3 className="font-display text-3xl mb-2">
                        What services are you interested in?
                      </h3>
                      <p className="text-sm text-[color:var(--color-charcoal)]/55 mb-8">
                        Select all that apply.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICE_OPTIONS.map((s) => {
                          const sel = data.services.includes(s);
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggleService(s)}
                              className={`group relative px-5 py-4 rounded-xl text-left text-sm font-medium transition-all duration-400 border-2 ${
                                sel
                                  ? "bg-[color:var(--color-royal-dark)] text-white border-[color:var(--color-royal-dark)]"
                                  : "bg-white text-[color:var(--color-charcoal)] border-transparent hover:border-[color:var(--color-royal-light)]/40"
                              }`}
                            >
                              <span className="flex items-center justify-between">
                                {s}
                                <motion.span
                                  animate={{ scale: sel ? 1 : 0, opacity: sel ? 1 : 0 }}
                                  transition={{ duration: 0.3, ease }}
                                  className="h-5 w-5 rounded-full bg-white text-[color:var(--color-royal-dark)] flex items-center justify-center"
                                >
                                  <Check className="h-3 w-3" />
                                </motion.span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <h3 className="font-display text-3xl mb-2">
                        Project details
                      </h3>
                      <p className="text-sm text-[color:var(--color-charcoal)]/55 mb-8">
                        Help us scope your project so we can prepare a detailed
                        consult.
                      </p>

                      <div className="mb-8">
                        <label className="eyebrow text-[color:var(--color-charcoal)]/60 mb-3 block">
                          Estimated Budget
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-charcoal)]/55 text-sm font-medium pointer-events-none">
                            $
                          </span>
                          <input
                            type="text"
                            inputMode="decimal"
                            value={data.budget}
                            onChange={(e) =>
                              setData((d) => ({ ...d, budget: e.target.value }))
                            }
                            placeholder="e.g. 25,000 or 10k – 30k"
                            className="w-full pl-8 pr-4 py-3 rounded-xl bg-white border border-black/5 focus:border-[color:var(--color-royal-light)] focus:ring-4 focus:ring-[color:var(--color-royal-light)]/15 outline-none transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="mb-8">
                        <label className="eyebrow text-[color:var(--color-charcoal)]/60 mb-3 block">
                          Timeline
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {TIMELINE_OPTIONS.map((t) => {
                            const sel = data.timeline === t;
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() =>
                                  setData((d) => ({ ...d, timeline: t }))
                                }
                                className={`px-3 py-3 rounded-xl text-xs font-medium transition-all duration-400 border-2 ${
                                  sel
                                    ? "bg-[color:var(--color-royal-dark)] text-white border-[color:var(--color-royal-dark)]"
                                    : "bg-white text-[color:var(--color-charcoal)] border-transparent hover:border-[color:var(--color-royal-light)]/40"
                                }`}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="eyebrow text-[color:var(--color-charcoal)]/60 mb-3 block">
                          Notes (optional)
                        </label>
                        <textarea
                          rows={4}
                          value={data.notes}
                          onChange={(e) =>
                            setData((d) => ({ ...d, notes: e.target.value }))
                          }
                          placeholder="Tell us a bit about your vision, room, or materials you have in mind..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-black/5 focus:border-[color:var(--color-royal-light)] focus:ring-4 focus:ring-[color:var(--color-royal-light)]/15 outline-none transition-all text-sm resize-none"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, ease }}
                    >
                      <h3 className="font-display text-3xl mb-2">
                        Contact information
                      </h3>
                      <p className="text-sm text-[color:var(--color-charcoal)]/55 mb-8">
                        We&rsquo;ll only use this to schedule your consult.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          label="Full Name"
                          value={data.name}
                          onChange={(v) =>
                            setData((d) => ({ ...d, name: v }))
                          }
                          placeholder="Your name"
                          required
                        />
                        <Field
                          label="Phone"
                          value={data.phone}
                          onChange={(v) =>
                            setData((d) => ({ ...d, phone: v }))
                          }
                          placeholder="602-614-2187"
                          required
                          type="tel"
                        />
                        <Field
                          label="Email"
                          value={data.email}
                          onChange={(v) =>
                            setData((d) => ({ ...d, email: v }))
                          }
                          placeholder="you@example.com"
                          required
                          type="email"
                          className="sm:col-span-2"
                        />
                        <Field
                          label="Project Address"
                          value={data.address}
                          onChange={(v) =>
                            setData((d) => ({ ...d, address: v }))
                          }
                          placeholder="123 Desert Vista Dr, Scottsdale, AZ"
                          className="sm:col-span-2"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2,
                          ease,
                        }}
                        className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-[color:var(--color-royal-dark)] to-[color:var(--color-royal-light)] flex items-center justify-center mb-8"
                      >
                        <Check className="h-10 w-10 text-white" strokeWidth={2.5} />
                      </motion.div>
                      <h3 className="font-display text-4xl mb-4">
                        Request received.
                      </h3>
                      <p className="text-[color:var(--color-charcoal)]/65 text-lg max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. An Empire AZ LLC design
                        specialist will contact you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Controls */}
              {step < 3 && (
                <div className="mt-10 pt-8 border-t border-black/5 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 0}
                    className={`btn btn-ghost ${
                      step === 0 ? "opacity-0 pointer-events-none" : ""
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canProceedFromStep()}
                      className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canProceedFromStep()}
                      className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      Submit Request
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3 group">
      <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-[color:var(--color-royal-glow)] shrink-0 group-hover:bg-white/20 transition-colors">
        {icon}
      </div>
      <div>
        <div className="eyebrow text-white/45 text-[0.65rem]">{label}</div>
        <div className="text-white text-base mt-0.5 group-hover:text-[color:var(--color-royal-glow)] transition-colors">
          {value}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="eyebrow text-[color:var(--color-charcoal)]/60 mb-2 block text-[0.65rem]">
        {label}
        {required && <span className="text-[color:var(--color-royal-dark)] ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white border border-black/5 focus:border-[color:var(--color-royal-light)] focus:ring-4 focus:ring-[color:var(--color-royal-light)]/15 outline-none transition-all text-sm"
      />
    </div>
  );
}
