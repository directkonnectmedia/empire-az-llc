import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empire AZ LLC | Luxury Custom Cabinets & Countertops in Arizona",
  description:
    "Bespoke kitchens, custom cabinetry, kitchen islands, rock slabs, countertops, and custom laundry rooms — handcrafted luxury home renovations across the Arizona Valley by Empire AZ LLC.",
  keywords: [
    "custom cabinets Arizona",
    "kitchen renovation Phoenix",
    "granite countertops Scottsdale",
    "luxury home renovation",
    "custom kitchen island",
    "rock slab installation",
    "Empire AZ LLC",
  ],
  authors: [{ name: "Empire AZ LLC" }],
  openGraph: {
    title: "Empire AZ LLC — Luxury Home Renovations",
    description:
      "Bespoke kitchens, cabinetry, and stone work crafted for the Arizona Valley.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-[color:var(--color-charcoal)]">
        {children}
      </body>
    </html>
  );
}
