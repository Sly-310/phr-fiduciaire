import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Placeholder des pages prestations (sitemap PHR-ARCHITECTURE).
 * Évite tout lien mort en attendant l'étape "Gabarit prestation" du SOP.
 * Le vrai contenu (intro + "Ce que nous faisons") sera branché ensuite.
 */
const PRESTATIONS: Record<string, string> = {
  comptabilite: "Comptabilité",
  fiscalite: "Fiscalité",
  salaires: "Salaires & Payroll",
  successions: "Successions & Héritages",
  expertises: "Expertises",
  "transmission-entreprise": "Transmission d’entreprise",
  "cabinets-medicaux": "Cabinets médicaux",
  automatisation: "Automatisation des processus",
  "family-office": "Family Office",
  "conseil-coaching": "Conseil & Coaching",
};

export function generateStaticParams() {
  return Object.keys(PRESTATIONS).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const titre = PRESTATIONS[params.slug];
  return {
    title: titre ? `${titre} — PHR Fiduciaire` : "Prestation — PHR Fiduciaire",
  };
}

export default function PrestationPage({
  params,
}: {
  params: { slug: string };
}) {
  const titre = PRESTATIONS[params.slug];
  if (!titre) notFound();

  return (
    <>
      <span id="top" />
      <Nav />
      <main className="mx-auto max-w-content px-7 md:px-14">
        <section className="flex min-h-[68vh] flex-col justify-center py-24">
          <div className="border-t border-line-strong pt-5">
            <p className="font-body text-[14px] text-ink-light">
              Accueil · Prestations · {titre}
            </p>
          </div>
          <SectionLabel>Prestation</SectionLabel>
          <h1 className="mt-2 max-w-[18ch] font-display text-[clamp(38px,4.8vw,64px)] font-bold leading-[1.05] tracking-tightish text-ink">
            {titre}
          </h1>
          <p className="mt-6 max-w-[52ch] font-body text-[18px] leading-relaxed text-ink-soft">
            Le détail de cette prestation arrive prochainement.
          </p>
          <div className="mt-10">
            <Button href="/#prestations" arrow="←">
              Retour aux prestations
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
