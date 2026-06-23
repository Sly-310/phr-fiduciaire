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

const BASE_URL = "https://www.phrfiduciaire.ch";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PHR Fiduciaire — Cabinet fiduciaire à Fully, Valais",
    template: "%s — PHR Fiduciaire",
  },
  description:
    "Comptabilité, conseil et automatisation des processus pour les PME, indépendants et particuliers du Valais. Cabinet fiduciaire établi à Fully depuis 1982. Expert-réviseur agréé ASR.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    url: BASE_URL,
    siteName: "PHR Fiduciaire",
    title: "PHR Fiduciaire — Cabinet fiduciaire à Fully, Valais",
    description:
      "Comptabilité, conseil et automatisation des processus pour les PME et indépendants du Valais. Établi à Fully depuis 1982.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
