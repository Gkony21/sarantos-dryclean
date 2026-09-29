import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const commissioner = Commissioner({
  subsets: ["latin", "greek"],
  variable: "--font-commissioner",
});

export const metadata: Metadata = {
  title: "Σαράντος Dry Clean | Ταπητοκαθαριστήριο & Πλυντήριο στη Σπάρτη",
  description:
    "Καθαρισμός χαλιών, ρούχων, παπλωμάτων και σαλονιών στη Σπάρτη. 25 χρόνια εμπειρία, δωρεάν παραλαβή και παράδοση.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={commissioner.variable}>
      <body className="bg-white font-sans text-brand-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
