import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Reperes } from "@/components/sections/Reperes";
import { Prestations } from "@/components/sections/Prestations";
import { Automatisation } from "@/components/sections/Automatisation";
import { Approche } from "@/components/sections/Approche";
import { Equipe } from "@/components/sections/Equipe";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "PHR Fiduciaire — Cabinet fiduciaire à Fully, Valais",
  description:
    "Comptabilité, fiscalité, salaires et automatisation des processus pour PME, indépendants et particuliers en Valais. Expert-réviseur agréé ASR depuis 1982.",
  alternates: { canonical: "https://www.phrfiduciaire.ch" },
  openGraph: {
    url: "https://www.phrfiduciaire.ch",
    title: "PHR Fiduciaire — Votre fiduciaire en Valais depuis 1982",
    description:
      "Comptabilité, conseil et automatisation des processus. Experts réviseurs agréés ASR à Fully, Valais.",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "PHR Fiduciaire SA",
  url: "https://www.phrfiduciaire.ch",
  telephone: "+41277462954",
  email: "info@phrfiduciaire.ch",
  foundingDate: "1982",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue Maison-de-Commune 20",
    postalCode: "1926",
    addressLocality: "Fully",
    addressRegion: "Valais",
    addressCountry: "CH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.1333,
    longitude: 7.1167,
  },
  areaServed: [
    { "@type": "State", name: "Valais" },
    { "@type": "Country", name: "Suisse romande" },
  ],
  hasCredential: "Expert-réviseur agréé ASR",
  employee: [
    { "@type": "Person", name: "Philippe Roduit", jobTitle: "Fondateur, Expert-réviseur agréé ASR" },
    { "@type": "Person", name: "Céline Roduit", jobTitle: "Cheffe expert, Branche fiduciaire et immobilière" },
  ],
};

export default function Home() {
  return (
    <>
      <span id="top" aria-hidden="true" />
      <Nav />
      <main>
        <div className="mx-auto max-w-content px-7 md:px-14">
          <HeroSection />
        </div>
        <Reperes />
        <Prestations />
        <Automatisation />
        <Approche />
        <Equipe />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
    </>
  );
}
