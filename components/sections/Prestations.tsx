"use client";

import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Notebook, Percent, Banknote, Scroll, Stamp,
  Handshake, Stethoscope, House, Compass,
  type LucideIcon,
} from "lucide-react";

const TITRE = "Un accompagnement personnalisé pour tous vos projets.";

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
    intro: "Décidez en connaissance de cause, anticipez les difficultés. À la carte, selon vos besoins.",
    faire: [
      "Tenue et bouclement des comptes annuels",
      "États financiers et analyse de bilan",
      "Décomptes TVA",
      "Budgets et tableaux de bord",
    ],
  },
  {
    slug: "fiscalite",
    titre: "Fiscalité",
    desc: "Déclarations, optimisation, TVA. Un guide dans la complexité fiscale suisse.",
    icon: Percent,
    soustitre: "Le juste impôt, ni plus, ni moins.",
    intro: "Fiscalité des particuliers et des sociétés, en toute conformité avec une lecture précise de chaque situation.",
    faire: [
      "Déclarations fiscales des particuliers et sociétés",
      "Planification et optimisation fiscale",
      "Gains immobiliers, successions, impôt à la source",
      "Réclamations et recours",
    ],
  },
  {
    slug: "salaires",
    titre: "Salaires & Payroll",
    desc: "La gestion des salaires et des charges sociales, sans la charge mentale.",
    icon: Banknote,
    soustitre: "Concentrez-vous sur votre métier.",
    intro: "Chaque année apporte ses nouveaux règlements. Confiez-nous cette charge.",
    faire: [
      "Salaires mensuels et certificats annuels",
      "Décomptes AVS, LAA, LPP",
      "Contrats de travail et droit du travail",
      "Suivi des contrôles des caisses sociales",
    ],
  },
  {
    slug: "successions",
    titre: "Successions & Héritages",
    desc: "Affaires successorales et administration d'hoiries, avec tact et rigueur.",
    icon: Scroll,
    soustitre: "Accompagner les moments qui comptent.",
    intro: "Rigueur et discrétion pour que chaque étape se déroule sereinement.",
    faire: [
      "Affaires successorales et planification",
      "Administration d'hoiries",
      "Déclarations d'impôts sur successions et donations",
      "Transmission de patrimoine",
    ],
  },
  {
    slug: "expertises",
    titre: "Expertises",
    desc: "Expertises comptables et judiciaires par des experts reconnus.",
    icon: Stamp,
    soustitre: "Un regard neutre, des décennies de pratique.",
    intro: "Expertises reconnues pour les situations qui exigent une opinion indépendante.",
    faire: [
      "Expertises comptables et judiciaires",
      "Rapports spéciaux",
      "Évaluations d'entreprises",
    ],
  },
  {
    slug: "transmission-entreprise",
    titre: "Transmission d'entreprise",
    desc: "Accompagner la reprise ou la cession, étape par étape.",
    icon: Handshake,
    soustitre: "Passer le relais, dans les meilleures conditions.",
    intro: "Évaluation, structuration, négociation — chaque phase sécurisée.",
    faire: [
      "Évaluation et structuration de l'opération",
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
    intro: "Besoins spécifiques des médecins et professions libérales de la santé.",
    faire: [
      "Comptabilité adaptée aux cabinets",
      "Fiscalité des professions libérales",
      "Conseil à l'installation et à la remise",
    ],
  },
  {
    slug: "family-office",
    titre: "Family Office",
    desc: "La gestion patrimoniale globale, pensée sur le long terme.",
    icon: House,
    soustitre: "Votre patrimoine, pensé sur le long terme.",
    intro: "Coordination globale de vos intérêts financiers, fiscaux et administratifs.",
    faire: [
      "Gestion et administration de sociétés",
      "Coordination patrimoniale globale",
      "Suivi fiscal et conseil en prévoyance",
    ],
  },
  {
    slug: "conseil-coaching",
    titre: "Conseil & Coaching",
    desc: "Un accompagnement de proximité, sur le terrain.",
    icon: Compass,
    soustitre: "Sur le terrain, à vos côtés.",
    intro: "Pas seulement recommander — mettre en œuvre, avec vous.",
    faire: [
      "Conseil en gestion et finances",
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
        <p className="mt-4 max-w-[48ch] font-body text-[16px] leading-relaxed text-ink">
          {s.intro}
        </p>
      </div>
      <div>
        <h4 className="font-display text-[13px] italic text-ink-light">Ce que nous faisons</h4>
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

  useEffect(() => {
    if (!open) return;
    let raf = 0;
    const t1 = requestAnimationFrame(() => {
      const t2 = requestAnimationFrame(() => {
        const el = document.getElementById("svc-" + open);
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

        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const active = open === s.slug;
            return (
              <Fragment key={s.slug}>
                <button
                  id={"svc-" + s.slug}
                  type="button"
                  onClick={() => setOpen(active ? null : s.slug)}
                  aria-expanded={active}
                  className={
                    "group flex scroll-mt-28 flex-col border-b border-r border-line p-8 text-left transition-colors duration-300 " +
                    (active ? "bg-paper-2" : "hover:bg-paper-2")
                  }
                >
                  <Icon size={26} strokeWidth={1.5} className="mb-6 text-ink" aria-hidden="true" />
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-[20px] font-semibold tracking-tightish text-ink transition-colors duration-300 group-hover:text-sage">
                      {s.titre}
                    </h3>
                    <span
                      className={
                        "font-display text-sage transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] " +
                        (active
                          ? "rotate-90 opacity-100"
                          : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100")
                      }
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
