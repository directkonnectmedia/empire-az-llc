import Logo from "./Logo";
import { BRAND } from "@/lib/brand";

const SERVICES_COL = [
  "Custom Cabinets",
  "Countertops",
];

const STUDIO_COL = [
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book Consult", href: "#contact" },
  { label: "Careers", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-charcoal)] text-white pt-20 pb-10">
      <div className="container-luxe">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Logo variant="light" size="lg" withTagline />
            <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-md">
              Elevating Arizona homes through custom craftsmanship and luxury
              interior renovations. Owned and operated by Sergio. Every detail,
              built to last.
            </p>
            <a
              href={BRAND.phoneHref}
              className="inline-block mt-8 font-display text-3xl text-white hover:text-[color:var(--color-royal-glow)] transition-colors"
            >
              {BRAND.phone}
            </a>
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <h4 className="eyebrow text-white/45 mb-6">Services</h4>
            <ul className="space-y-3">
              {SERVICES_COL.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio column */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-white/45 mb-6">The Studio</h4>
            <ul className="space-y-3">
              {STUDIO_COL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-2">
            <h4 className="eyebrow text-white/45 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={BRAND.phoneHref}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.emailHref}
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-white/60">{BRAND.hours}</li>
            </ul>
          </div>
        </div>

        {/* Service area chips */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <span className="eyebrow text-white/45 shrink-0">SERVING</span>
            <div className="flex flex-wrap gap-2">
              {BRAND.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-1.5 rounded-full border border-white/15 text-xs text-white/75 hover:border-[color:var(--color-royal-light)] hover:text-white transition-colors cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div>
            &copy; {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.{" "}
            {BRAND.rocNumber}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-royal-glow)]" />
            Crafted with care in Arizona
          </div>
        </div>
      </div>
    </footer>
  );
}
