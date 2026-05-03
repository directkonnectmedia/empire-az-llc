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
  title:
    "Empire AZ LLC | Custom Glass Shower Enclosures & Glass Doors in Arizona",
  description:
    "Custom glass shower enclosures, glass shower doors, and fast, specialist installation across the Arizona Valley by Empire AZ LLC.",
  keywords: [
    "glass shower enclosure Arizona",
    "frameless shower doors Phoenix",
    "custom glass showers Scottsdale",
    "shower glass installation",
    "glass doors Arizona",
    "Empire AZ LLC",
  ],
  authors: [{ name: "Empire AZ LLC" }],
  openGraph: {
    title: "Empire AZ LLC — Custom Glass Showers & Enclosures",
    description:
      "Custom glass shower enclosures and doors crafted for the Arizona Valley.",
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
