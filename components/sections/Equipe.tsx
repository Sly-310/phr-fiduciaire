"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const PH_VARIANTS: Variants = {
  hidden: { x: "48%", opacity: 0 },
  visible: {
    x: ["48%", "48%", "0%"],
    opacity: [0, 1, 1],
    transition: { duration: 1.6, times: [0, 0.30, 1], ease: ["easeOut", EASE] },
  },
};

const R_VARIANTS: Variants = {
  hidden: { x: "-48%", opacity: 0 },
  visible: {
    x: ["-48%", "-48%", "0%"],
    opacity: [0, 1, 1],
    transition: { duration: 1.6, times: [0, 0.30, 1], ease: ["easeOut", EASE] },
  },
};

const TEXT_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 1.35, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
  },
};

const PHILIPPE = [
  "Fondateur PHR · 1982",
  "Expert-réviseur agréé ASR",
  "Expert examinateur fédéral",
];

const CELINE = [
  "Cheffe expert · CFC fiduciaire",
  "Spécialiste systèmes de gestion",
  "40+ restructurations PME valaisannes",
];

export function Equipe() {
  return (
    <section id="equipe" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">

        <SectionLabel>Le cabinet</SectionLabel>
        <h2 className="mt-2 max-w-[24ch] font-display text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.06] tracking-tightish text-ink">
          Deux générations, une même exigence.
        </h2>

        <div className="mt-14 grid items-start gap-0 sm:grid-cols-2 md:mt-20">

          {/* ── Philippe ── */}
          <motion.div
            className="flex flex-col sm:pr-12 md:pr-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="flex h-[200px] items-end md:h-[260px]">
              <motion.div variants={PH_VARIANTS}>
                <Image
                  src="/equipe-ph.png"
                  alt=""
                  width={989}
                  height={962}
                  unoptimized
                  className="h-[160px] w-auto md:h-[210px]"
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            <motion.div variants={TEXT_VARIANTS} className="mt-8">
              <p className="font-display text-[clamp(22px,2.4vw,30px)] font-bold leading-tight tracking-tightish text-ink">
                Philippe Roduit
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {PHILIPPE.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 font-body text-[14px] text-ink-soft">
                    <span className="text-bordeaux" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-[38ch] font-display text-[15px] italic leading-relaxed text-ink-soft">
                &ldquo;Chaque client sait pourquoi il paie ce qu&apos;il paie.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── Céline ── */}
          <motion.div
            className="flex flex-col pt-12 sm:border-l sm:border-line sm:pl-12 sm:pt-0 md:pl-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="flex h-[200px] items-end md:h-[260px]">
              <motion.div variants={R_VARIANTS}>
                <Image
                  src="/equipe-r.png"
                  alt=""
                  width={645}
                  height={962}
                  unoptimized
                  className="h-[160px] w-auto md:h-[210px]"
                  aria-hidden="true"
                />
              </motion.div>
            </div>

            <motion.div variants={TEXT_VARIANTS} className="mt-8">
              <p className="font-display text-[clamp(22px,2.4vw,30px)] font-bold leading-tight tracking-tightish text-ink">
                Céline Roduit
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {CELINE.map((item) => (
                  <li key={item} className="flex items-baseline gap-3 font-body text-[14px] text-ink-soft">
                    <span className="text-bordeaux" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 max-w-[38ch] font-display text-[15px] italic leading-relaxed text-ink-soft">
                &ldquo;Un système bien structuré, c&apos;est une entreprise qui respire.&rdquo;
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Accréditations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-body text-[12px] leading-relaxed text-ink-soft">
            Membre Fiduciaire Suisse · Expert Suisse · Experts réviseurs agréés ASR · CFC branche fiduciaire et immobilière
          </p>
        </motion.div>

      </div>
    </section>
  );
}
