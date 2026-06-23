import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const BASE = "https://www.phrfiduciaire.ch";

type Prestation = {
  titre: string;
  sousTitre: string;
  intro: string;
  faire: string[];
  encart?: string;
  bordeaux?: boolean;
};

const PRESTATIONS: Record<string, Prestation> = {
  comptabilite: {
    titre: "Comptabilité",
    sousTitre: "Bien plus que des chiffres.",
    intro:
      "Une comptabilité bien tenue, c'est le tableau de bord de votre entreprise. Elle vous permet de décider en connaissance de cause, d'anticiper les difficultés et de saisir les bonnes opportunités. Que vous soyez indépendant, PME ou société, nous travaillons à la carte, selon vos besoins.",
    faire: [
      "Tenue complète ou partielle de votre comptabilité",
      "Bouclement et établissement des comptes annuels",
      "États financiers et analyse de bilan",
      "Décomptes TVA",
      "Gestion des débiteurs et suivi des paiements",
      "Budgets et tableaux de bord",
    ],
  },
  fiscalite: {
    titre: "Fiscalité",
    sousTitre: "Un guide dans la complexité du système fiscal suisse.",
    intro:
      "À mi-chemin entre la comptabilité et le droit, la fiscalité demande une lecture précise de chaque situation. Notre objectif : que vous payiez le juste impôt, ni plus, ni moins, en toute conformité.",
    faire: [
      "Déclarations fiscales des particuliers et des sociétés",
      "Planification et optimisation fiscale",
      "Conseil lors de restructurations",
      "Réclamations et recours",
      "Impôts spéciaux : gains immobiliers, successions, donations, impôt à la source",
      "Gestion de la TVA",
    ],
  },
  salaires: {
    titre: "Salaires & Payroll",
    sousTitre: "La gestion des salaires, sans la charge mentale.",
    intro:
      "Dans les petites entreprises, la gestion des salaires devient vite « l'affaire du chef » — et chaque année apporte ses nouveaux règlements. Confiez-nous cette charge et concentrez-vous sur votre métier.",
    faire: [
      "Établissement des salaires mensuels et certificats annuels",
      "Décomptes aux assurances sociales (AVS, LAA, LPP, etc.)",
      "Contrats de travail et conseil en droit du travail",
      "Préparation des paiements",
      "Suivi des contrôles des caisses sociales",
    ],
  },
  successions: {
    titre: "Successions & Héritages",
    sousTitre: "Accompagner les moments qui comptent, avec tact.",
    intro:
      "Les affaires successorales touchent autant à la technique qu'à l'humain. Nous accompagnons les familles et les héritiers avec rigueur et discrétion, pour que chaque étape se déroule sereinement.",
    faire: [
      "Affaires successorales et planification",
      "Administration d'hoiries",
      "Déclarations d'impôts sur les successions et donations",
      "Conseil en transmission de patrimoine",
    ],
  },
  expertises: {
    titre: "Expertises",
    sousTitre: "L'avis d'experts reconnus.",
    intro:
      "Certaines situations exigent un regard neutre et qualifié. Nos experts réalisent des expertises comptables et judiciaires reconnues, fondées sur des décennies de pratique.",
    faire: [
      "Expertises comptables",
      "Expertises judiciaires",
      "Rapports spéciaux",
      "Évaluations d'entreprises",
    ],
  },
  "transmission-entreprise": {
    titre: "Transmission d'entreprise",
    sousTitre: "Passer le relais, dans les meilleures conditions.",
    intro:
      "Reprendre ou céder une entreprise est une étape majeure. Nous vous accompagnons à chaque phase — évaluation, structuration, négociation — pour sécuriser la transition.",
    faire: [
      "Évaluation d'entreprise",
      "Structuration de la reprise ou de la cession",
      "Transformations et restructurations",
      "Accompagnement à la transition",
    ],
  },
  "cabinets-medicaux": {
    titre: "Cabinets médicaux",
    sousTitre: "Une fiduciaire qui connaît votre métier.",
    intro:
      "Les professions de la santé ont des besoins comptables et fiscaux spécifiques. Forts d'une spécialisation dédiée, nous accompagnons les médecins et cabinets dans toute leur gestion.",
    faire: [
      "Comptabilité adaptée aux cabinets médicaux",
      "Fiscalité des professions libérales",
      "Gestion administrative et salaires",
      "Conseil à l'installation et à la remise de cabinet",
    ],
  },
  automatisation: {
    titre: "Automatisation des processus",
    sousTitre: "Fini les quinze fichiers Excel.",
    intro:
      "La plupart des entreprises gèrent leurs données dans des fichiers dispersés, rarement à jour, rarement fiables. Nous mettons en place des systèmes de gestion intégrés qui centralisent votre comptabilité, vos stocks et votre suivi — et nous restons à vos côtés jusqu'à ce que tout fonctionne sans vous.",
    faire: [
      "Analyse de vos processus actuels et de vos besoins réels",
      "Mise en place d'un système de gestion centralisé",
      "Migration sécurisée de vos données existantes",
      "Formation et coaching de vos équipes sur place",
      "Suivi personnalisé jusqu'à l'autonomie complète",
    ],
    encart:
      "Ce service est notre signature. Peu de fiduciaires le proposent — parce qu'il demande à la fois la maîtrise comptable et la compréhension des outils. Nous avons les deux.",
    bordeaux: true,
  },
  "family-office": {
    titre: "Family Office",
    sousTitre: "Votre patrimoine, pensé sur le long terme.",
    intro:
      "Gérer un patrimoine familial demande une vision d'ensemble et de la constance. Nous coordonnons l'ensemble de vos intérêts financiers, fiscaux et administratifs, sur la durée.",
    faire: [
      "Gestion et administration de sociétés",
      "Coordination patrimoniale globale",
      "Suivi fiscal et financier",
      "Conseil en prévoyance",
    ],
  },
  "conseil-coaching": {
    titre: "Conseil & Coaching",
    sousTitre: "Sur le terrain, à vos côtés.",
    intro:
      "Au-delà des chiffres, nous accompagnons les dirigeants dans leurs décisions. Un conseil de proximité, concret, fondé sur l'expérience — et un coaching pour mettre en œuvre les changements, pas seulement les recommander.",
    faire: [
      "Conseil en gestion et finances",
      "Analyses financières et aide à la décision",
      "Coaching de mise en œuvre sur place",
      "Accompagnement des équipes au changement",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PRESTATIONS).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const p = PRESTATIONS[params.slug];
  if (!p) return { title: "Prestation — PHR Fiduciaire" };
  const url = `${BASE}/prestations/${params.slug}`;
  return {
    title: `${p.titre} — PHR Fiduciaire Valais`,
    description: p.intro.slice(0, 158),
    alternates: { canonical: url },
    openGraph: { url, title: `${p.titre} — PHR Fiduciaire`, description: p.intro.slice(0, 158) },
  };
}

export default function PrestationPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = PRESTATIONS[params.slug];
  if (!p) notFound();

  return (
    <>
      <span id="top" />
      <Nav />
      <main>
        {/* Hero prestation */}
        <div className="mx-auto max-w-content px-7 md:px-14">
          <section className="flex min-h-[62vh] flex-col justify-center py-20">
            {/* Fil d'ariane */}
            <div className="border-t border-line-strong pt-5">
              <p className="font-body text-[13px] text-ink-light">
                <a href="/" className="hover:text-ink">Accueil</a>
                {" · "}
                <a href="/#prestations" className="hover:text-ink">Prestations</a>
                {" · "}
                {p.titre}
              </p>
            </div>

            <SectionLabel>Prestation</SectionLabel>
            <h1 className="mt-2 max-w-[20ch] font-display text-[clamp(36px,4.6vw,64px)] font-bold leading-[1.05] tracking-tightish text-ink">
              {p.titre}
            </h1>
            <p className="mt-4 font-display text-[20px] italic text-sage">
              {p.sousTitre}
            </p>
            <p className="mt-6 max-w-[58ch] font-body text-[18px] leading-relaxed text-ink-soft">
              {p.intro}
            </p>
          </section>
        </div>

        {/* Ce que nous faisons */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-20">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 className="font-display text-[clamp(24px,2.8vw,36px)] font-bold leading-tight tracking-tightish text-ink">
                  Ce que nous faisons
                </h2>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft">
                  Une liste concrète, sans formules génériques.
                </p>
              </div>
              <ul className="border-t border-line">
                {p.faire.map((f) => (
                  <li
                    key={f}
                    className="flex items-baseline gap-4 border-b border-line py-4 font-body text-[16px] text-ink"
                  >
                    <span className="shrink-0 text-sage" aria-hidden="true">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Encart signature — uniquement pour Automatisation */}
        {p.encart && (
          <section className={p.bordeaux ? "bg-bordeaux text-paper" : "border-t border-line"}>
            <div className="mx-auto max-w-content px-7 py-14 md:px-14 md:py-20">
              <p className="max-w-[54ch] font-display text-[clamp(20px,2.4vw,30px)] font-medium italic leading-snug text-paper">
                {p.encart}
              </p>
            </div>
          </section>
        )}

        {/* CTA contact */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-content px-7 py-14 md:px-14 md:py-20">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-[22px] font-bold text-ink">
                  Parlons de votre situation.
                </p>
                <p className="mt-1 font-body text-[15px] text-ink-soft">
                  Un premier échange, sans engagement.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="tel:+41277462954"
                  className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-body text-[15px] font-bold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                >
                  027 746 29 54
                </a>
                <a
                  href="mailto:info@phrfiduciaire.ch"
                  className="inline-flex items-center gap-2 font-body text-[15px] text-ink-soft underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                >
                  info@phrfiduciaire.ch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation entre prestations */}
        <section className="border-t border-line bg-paper-2">
          <div className="mx-auto max-w-content px-7 py-10 md:px-14">
            <div className="flex items-center justify-between gap-6">
              <Button href="/#prestations" arrow="←">
                Toutes les prestations
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Schema.org Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: p.titre,
            description: p.intro,
            provider: {
              "@type": "AccountingService",
              name: "PHR Fiduciaire SA",
              url: BASE,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rue Maison-de-Commune 20",
                postalCode: "1926",
                addressLocality: "Fully",
                addressRegion: "Valais",
                addressCountry: "CH",
              },
            },
            areaServed: { "@type": "State", name: "Valais" },
          }),
        }}
      />
    </>
  );
}
