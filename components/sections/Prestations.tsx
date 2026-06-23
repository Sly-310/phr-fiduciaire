"use client";

import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Notebook,
  Percent,
  Banknote,
  Scroll,
  Stamp,
  Handshake,
  Stethoscope,
  House,
  Compass,
  type LucideIcon,
} from "lucide-react";

/**
 * Section Prestations — PHR-ARCHITECTURE. Ancre #prestations.
 * 9 cartes (picto Lucide). Clic = le détail se déplie JUSTE APRÈS la carte
 * (panneau col-span-full), un seul ouvert à la fois, sans changement de page.
 * Fonctionne en 1 colonne (mobile) comme en 3 (desktop).
 * Les pages /prestations/[slug] restent pour le SEO (lien "fiche complète").
 */

const TITRE = "Tout ce qu’une fiduciaire doit savoir faire. Et quelque chose en plus.";
const INTRO =
  "De la tenue de comptabilité à l’optimisation fiscale, nous couvrons l’ensemble des besoins d’une entreprise — avec une particularité que peu de fiduciaires maîtrisent.";

type Service = {
  slug: string;
  titre: string;
  desc: string;
  icon: LucideIcon;
  soustitre: string;
  intro: string;
  faire: string[];
};

const SERVICES: Service[] = [
  {
    slug: "comptabilite",
    titre: "Comptabilité",
    desc: "Tenue, bouclement, états financiers. Votre tableau de bord, toujours à jour.",
    icon: Notebook,
    soustitre: "Bien plus que des chiffres.",
    intro:
      "Une comptabilité bien tenue, c’est le tableau de bord de votre entreprise. Elle vous permet de décider en connaissance de cause, d’anticiper les difficultés et de saisir les bonnes opportunités. Que vous soyez indépendant, PME ou société, nous travaillons à la carte, selon vos besoins.",
    faire: [
      "Tenue complète ou partielle de votre comptabilité",
      "Bouclement et établissement des comptes annuels",
      "États financiers et analyse de bilan",
      "Décomptes TVA",
      "Gestion des débiteurs et suivi des paiements",
      "Budgets et tableaux de bord",
    ],
  },
  {
    slug: "fiscalite",
    titre: "Fiscalité",
    desc: "Déclarations, optimisation, TVA. Un guide dans la complexité fiscale suisse.",
    icon: Percent,
    soustitre: "Un guide dans la complexité du système fiscal suisse.",
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
  {
    slug: "salaires",
    titre: "Salaires & Payroll",
    desc: "La gestion des salaires et des charges sociales, sans la charge mentale.",
    icon: Banknote,
    soustitre: "La gestion des salaires, sans la charge mentale.",
    intro:
      "Dans les petites entreprises, la gestion des salaires devient vite « l’affaire du chef » — et chaque année apporte ses nouveaux règlements. Confiez-nous cette charge et concentrez-vous sur votre métier.",
    faire: [
      "Établissement des salaires mensuels et certificats annuels",
      "Décomptes aux assurances sociales (AVS, LAA, LPP, etc.)",
      "Contrats de travail et conseil en droit du travail",
      "Préparation des paiements",
      "Suivi des contrôles des caisses sociales",
    ],
  },
  {
    slug: "successions",
    titre: "Successions & Héritages",
    desc: "Affaires successorales et administration d’hoiries, avec tact et rigueur.",
    icon: Scroll,
    soustitre: "Accompagner les moments qui comptent, avec tact.",
    intro:
      "Les affaires successorales touchent autant à la technique qu’à l’humain. Nous accompagnons les familles et les héritiers avec rigueur et discrétion, pour que chaque étape se déroule sereinement.",
    faire: [
      "Affaires successorales et planification",
      "Administration d’hoiries",
      "Déclarations d’impôts sur les successions et donations",
      "Conseil en transmission de patrimoine",
    ],
  },
  {
    slug: "expertises",
    titre: "Expertises",
    desc: "Expertises comptables et judiciaires par des experts reconnus.",
    icon: Stamp,
    soustitre: "L’avis d’experts reconnus.",
    intro:
      "Certaines situations exigent un regard neutre et qualifié. Nos experts réalisent des expertises comptables et judiciaires reconnues, fondées sur des décennies de pratique.",
    faire: [
      "Expertises comptables",
      "Expertises judiciaires",
      "Rapports spéciaux",
      "Évaluations d’entreprises",
    ],
  },
  {
    slug: "transmission-entreprise",
    titre: "Transmission d’entreprise",
    desc: "Accompagner la reprise ou la cession, étape par étape.",
    icon: Handshake,
    soustitre: "Passer le relais, dans les meilleures conditions.",
    intro:
      "Reprendre ou céder une entreprise est une étape majeure. Nous vous accompagnons à chaque phase — évaluation, structuration, négociation — pour sécuriser la transition.",
    faire: [
      "Évaluation d’entreprise",
      "Structuration de la reprise ou de la cession",
      "Transformations et restructurations",
      "Accompagnement à la transition",
    ],
  },
  {
    slug: "cabinets-medicaux",
    titre: "Cabinets médicaux",
    desc: "Une spécialisation dédiée aux professions de la santé.",
    icon: Stethoscope,
    soustitre: "Une fiduciaire qui connaît votre métier.",
    intro:
      "Les professions de la santé ont des besoins comptables et fiscaux spécifiques. Forts d’une spécialisation dédiée, nous accompagnons les médecins et cabinets dans toute leur gestion.",
    faire: [
      "Comptabilité adaptée aux cabinets médicaux",
      "Fiscalité des professions libérales",
      "Gestion administrative et salaires",
      "Conseil à l’installation et à la remise de cabinet",
    ],
  },
  {
    slug: "family-office",
    titre: "Family Office",
    desc: "La gestion patrimoniale globale, pensée sur le long terme.",
    icon: House,
    soustitre: "Votre patrimoine, pensé sur le long terme.",
    intro:
      "Gérer un patrimoine familial demande une vision d’ensemble et de la constance. Nous coordonnons l’ensemble de vos intérêts financiers, fiscaux et administratifs, sur la durée.",
    faire: [
      "Gestion et administration de sociétés",
      "Coordination patrimoniale globale",
      "Suivi fiscal et financier",
      "Conseil en prévoyance",
    ],
  },
  {
    slug: "conseil-coaching",
    titre: "Conseil & Coaching",
    desc: "Un accompagnement de proximité, sur le terrain.",
    icon: Compass,
    soustitre: "Sur le terrain, à vos côtés.",
    intro:
      "Au-delà des chiffres, nous accompagnons les dirigeants dans leurs décisions. Un conseil de proximité, concret, fondé sur l’expérience — et un coaching pour mettre en œuvre les changements, pas seulement les recommander.",
    faire: [
      "Conseil en gestion et finances",
      "Analyses financières et aide à la décision",
      "Coaching de mise en œuvre sur place",
      "Accompagnement des équipes au changement",
    ],
  },
];

function Detail({ s }: { s: Service }) {
  return (
    <div className="grid scroll-mt-24 gap-10 p-8 md:grid-cols-[1fr_1fr] md:p-12">
      <div>
        <p className="font-display text-[18px] italic text-sage">{s.soustitre}</p>
        <p className="mt-4 max-w-[52ch] font-body text-[16px] leading-relaxed text-ink">
          {s.intro}
        </p>
        <a
          href={`/prestations/${s.slug}`}
          className="group mt-8 inline-flex items-baseline gap-2 font-display text-[17px] font-semibold italic text-ink transition-colors duration-300 hover:text-sage"
        >
          <span className="border-b-2 border-sage pb-[2px]">Voir la fiche complète</span>
          <span
            className="font-normal not-italic text-sage transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>
      <div>
        <h4 className="font-display text-[13px] italic text-ink-light">
          Ce que nous faisons
        </h4>
        <ul className="mt-4 border-t border-line">
          {s.faire.map((f) => (
            <li
              key={f}
              className="flex items-baseline gap-3 border-b border-line py-3 font-body text-[15px] text-ink"
            >
              <span className="text-sage" aria-hidden="true">—</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Prestations() {
  const [open, setOpen] = useState<string | null>(null);

  // Défilement DOUX vers la carte ouverte. Délai 16ms (un frame) pour laisser
  // React commettre le DOM (ancienne carte fermée, nouvelle à height:0) avant
  // de mesurer la position — sinon on scroll vers une position périmée.
  useEffect(() => {
    if (!open) return;
    let raf = 0;
    // Deux frames : layout flush + paint, puis mesure.
    const t1 = requestAnimationFrame(() => {
      const t2 = requestAnimationFrame(() => {
        const el = document.getElementById(`svc-${open}`);
        if (!el) return;
        const start = window.scrollY;
        const target = start + el.getBoundingClientRect().top - 112;
        const dist = target - start;
        if (Math.abs(dist) < 32) return;

        const duration = 560;
        const ease = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        let startTime: number | null = null;
        const step = (ts: number) => {
          if (startTime === null) startTime = ts;
          const p = Math.min((ts - startTime) / duration, 1);
          window.scrollTo(0, start + dist * ease(p));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      });
      return t2;
    });
    return () => { cancelAnimationFrame(t1); cancelAnimationFrame(raf); };
  }, [open]);

  return (
    <section id="prestations" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-20">
        <SectionLabel>Nos prestations</SectionLabel>
        <h2 className="mt-2 max-w-[24ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.06] tracking-tightish text-ink">
          {TITRE}
        </h2>
        <p className="mt-6 max-w-[64ch] font-body text-[17px] leading-relaxed text-ink-soft">
          {INTRO}
        </p>

        {/* Grille : chaque carte déplie son détail juste après (col-span-full) */}
        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const active = open === s.slug;
            return (
              <Fragment key={s.slug}>
                <button
                  id={`svc-${s.slug}`}
                  type="button"
                  onClick={() => setOpen(active ? null : s.slug)}
                  aria-expanded={active}
                  className={`group flex scroll-mt-28 flex-col border-b border-r border-line p-8 text-left transition-colors duration-300 ${
                    active ? "bg-paper-2" : "hover:bg-paper-2"
                  }`}
                >
                  <Icon size={26} strokeWidth={1.5} className="mb-6 text-ink" aria-hidden="true" />
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[20px] font-semibold tracking-tightish text-ink transition-colors duration-300 group-hover:text-sage">
                      {s.titre}
                    </h3>
                    <span
                      className={`font-display text-sage transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                        active
                          ? "rotate-90 opacity-100"
                          : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                </button>

                {active && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
                    className="col-span-full overflow-hidden border-b border-r border-line bg-paper-2"
                  >
                    <Detail s={s} />
                  </motion.div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
