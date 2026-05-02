import React from "react";

type LogoProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  withTagline?: boolean;
  className?: string;
  /**
   * Optional override for the SR letters inside the badge. Accepts any
   * CSS length (e.g. "1.4em", "20px"). Useful when the badge needs the
   * letters to feel more prominent in a specific context.
   */
  markTextScale?: string;
};

const sizeMap = {
  sm: { mark: "h-8 w-8", text: "text-base", tag: "text-[9px]" },
  md: { mark: "h-10 w-10", text: "text-lg", tag: "text-[10px]" },
  lg: { mark: "h-14 w-14", text: "text-2xl", tag: "text-[11px]" },
  xl: { mark: "h-20 w-20", text: "text-4xl", tag: "text-xs" },
};

/**
 * SRMark — the always-blue circular SR badge.
 *
 * Color treatment is intentionally locked: blue outline + blue letters on
 * a white interior, regardless of background. Scales with parent font-size
 * when the mark is sized via em/percentage classes (great for placing
 * inline inside large headings).
 */
export function SRMark({
  className = "",
  ringed = true,
  textScale = "0.46em",
}: {
  className?: string;
  ringed?: boolean;
  textScale?: string;
}) {
  return (
    <span
      aria-label="SR Renovations logo"
      className={`relative inline-flex items-center justify-center rounded-full border-2 border-[color:var(--color-royal-dark)] bg-white text-[color:var(--color-royal-dark)] font-display font-semibold leading-none shadow-[0_8px_30px_-12px_rgba(30,58,138,0.4)] ${className}`}
      style={{ aspectRatio: "1 / 1" }}
    >
      <span
        aria-hidden="true"
        style={{
          fontSize: textScale,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        SR
      </span>
      {ringed && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border border-[color:var(--color-royal-dark)]/30 scale-[1.12]"
        />
      )}
    </span>
  );
}

export default function Logo({
  variant = "dark",
  size = "md",
  withTagline = true,
  className = "",
  markTextScale,
}: LogoProps) {
  const isLight = variant === "light";
  const text = isLight ? "text-white" : "text-[color:var(--color-charcoal)]";
  const s = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SRMark className={s.mark} textScale={markTextScale} />
      <div className="flex flex-col leading-none">
        <span className={`font-display font-medium tracking-tight ${text} ${s.text}`}>
          Renovations
        </span>
        {withTagline && (
          <span
            className={`eyebrow mt-1 ${
              isLight
                ? "text-white/60"
                : "text-[color:var(--color-charcoal)]/55"
            } ${s.tag}`}
          >
            LUXURY INTERIORS · LLC
          </span>
        )}
      </div>
    </div>
  );
}
