import { BRAND } from "@/lib/brand";

type Props = {
  variant?: "dark" | "light";
};

export default function Marquee({ variant = "light" }: Props) {
  const items = [...BRAND.taglineMarquee, ...BRAND.taglineMarquee];
  const colors =
    variant === "dark"
      ? "bg-[color:var(--color-charcoal)] text-white/80 border-white/10"
      : "bg-white/5 text-white/85 border-white/15 backdrop-blur-md";

  return (
    <div
      className={`relative w-full overflow-hidden border-y ${colors} py-3 select-none`}
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {items.map((item, i) => (
          <span
            key={i}
            className="eyebrow text-xs flex items-center gap-12 shrink-0"
          >
            {item}
            <span
              className="h-1 w-1 rounded-full bg-[color:var(--color-royal-light)]"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
