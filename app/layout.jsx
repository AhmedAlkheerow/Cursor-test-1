import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  title: "Signalframe - SaaS Growth and Conversion Agency",
  description:
    "Signalframe helps growth-stage B2B SaaS teams fix positioning and conversion with clarity-first UX and high-performance design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="bg-ink text-white">{children}</body>
    </html>
  );
}
