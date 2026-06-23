import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Reperes } from "@/components/sections/Reperes";
import { Prestations } from "@/components/sections/Prestations";
import { Automatisation } from "@/components/sections/Automatisation";
import { Approche } from "@/components/sections/Approche";
import { Equipe } from "@/components/sections/Equipe";

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
      <span id="top" />
      <Nav />
      <main className="mx-auto max-w-content px-7 md:px-14">
        {/* HERO — composition "document fiduciaire" */}
        <section className="flex min-h-[78vh] flex-col justify-center py-12 md:py-16">
          {/* En-tête de document : filet + émetteur (eyebrow) + crédit */}
          <div className="flex items-baseline justify-between gap-6 border-t border-line-strong pt-5">
            <p className="font-display text-[15px] tracking-tightish text-ink md:text-[16px]">
              <span className="font-semibold">PHR Fiduciaire</span>
              <span className="text-ink-light"> · Fully, Valais · depuis 1982</span>
            </p>
            <span className="hidden font-display text-[14px] italic text-ink-light sm:inline">
              Expert-réviseur agréé ASR
            </span>
          </div>

          {/* Titre mesuré */}
          <h1 className="mt-14 max-w-[20ch] font-display text-[clamp(38px,4.8vw,68px)] font-bold leading-[1.05] tracking-tightish text-ink md:mt-20">
            Votre fiduciaire en Valais.<br />
            Solide, humaine, <span className="italic text-bordeaux">automatisée</span>.
          </h1>

          {/* Sous-titre */}
          <p className="mt-7 max-w-[54ch] font-body text-[18px] leading-relaxed text-ink-soft md:text-[19px]">
            Comptabilité, conseil et automatisation des processus pour les PME,
            les indépendants et les particuliers du Valais.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button href="#prestations" arrow="↓">
              Découvrir nos prestations
            </Button>
          </div>
        </section>
      </main>
      <Reperes />
      <Prestations />
      <Automatisation />
      <Approche />
      <Equipe />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
    </>
  );
}
