import type { Metadata } from "next";
import { Familjen_Grotesk, Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

// Display — grotesk low-contrast, monolithique. Porte l'identité.
const display = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body — lisibilité maximale (demande explicite Philippe : clients âgés).
const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHR Fiduciaire — Cabinet fiduciaire à Fully, Valais",
  description:
    "Comptabilité, conseil et automatisation des processus pour les PME, indépendants et particuliers du Valais. Cabinet fiduciaire établi à Fully depuis 1982.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} bg-paper font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
