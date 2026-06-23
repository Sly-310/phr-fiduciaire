"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Section Équipe — esprit poétique, hors-norme.
 * Pas de cartes, pas de listes : les lettres du logo PHR reconstruites en SVG
 * servent d'identité visuelle. Ph (encre, gauche) · R (bordeaux, droite).
 * Texte court, prose, air généreux. Apparition au scroll.
 */

// "Ph" — reconstruction fidèle du logo PHR :
// P avec panse D ouverte + h avec voûte. Traits fins géométriques.
function LogoPh() {
  return (
    <svg
      viewBox="0 0 620 370"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full"
    >
      {/* P — jambage vertical pleine hauteur */}
      <line x1="52" y1="22" x2="52" y2="348" />
      {/* P — panse (D géométrique, arc ouvert) */}
      <path d="M 52,22 L 196,22 Q 328,22 328,108 Q 328,194 196,194 L 52,194" />
      {/* h — jambage gauche */}
      <line x1="370" y1="22" x2="370" y2="348" />
      {/* h — voûte : part du mi-corps, arrondit à droite, descend */}
      <path d="M 370,186 Q 370,124 438,124 Q 502,124 502,186 L 502,348" />
    </svg>
  );
}

// "R" — reconstruction du R bordeaux du logo.
// Panse + jambe diagonale qui déborde légèrement à droite.
function LogoR() {
  return (
    <svg
      viewBox="0 0 460 370"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full"
      style={{ overflow: "visible" }}
    >
      {/* R — jambage vertical pleine hauteur */}
      <line x1="52" y1="22" x2="52" y2="348" />
      {/* R — panse (arc allant du jambage au mi-corps) */}
      <path d="M 52,22 L 210,22 Q 380,22 380,128 Q 380,234 210,234 L 52,234" />
      {/* R — jambe diagonale (déborde au-delà du cadre) */}
      <line x1="218" y1="234" x2="488" y2="348" />
    </svg>
  );
}

export function Equipe() {
  return (
    <section id="equipe" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">

        {/* En-tête de section */}
        <SectionLabel>L&apos;équipe</SectionLabel>
        <h2 className="mt-2 max-w-[24ch] font-display text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.06] tracking-tightish text-ink">
          Deux générations, une même exigence.
        </h2>

        {/* Diptyque — deux colonnes ouvertes, pas de cartes */}
        <div className="mt-16 grid items-start gap-16 sm:grid-cols-2 sm:gap-0 md:mt-20">

          {/* ── Gauche : Philippe · Ph encre ── */}
          <div className="sm:pr-14 md:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-ink"
            >
              <LogoPh />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10"
            >
              <p className="font-display text-[clamp(26px,2.8vw,36px)] font-bold leading-tight tracking-tightish text-ink">
                Philippe Roduit
              </p>
              <p className="mt-2 font-display text-[14px] italic text-ink-soft">
                Fondateur · Expert-réviseur agréé ASR
              </p>
              <p className="mt-6 max-w-[40ch] font-body text-[16px] leading-relaxed text-ink-soft">
                Philippe a fondé PHR en 1982. Expert réviseur agréé ASR, il est très engagé dans la formation de la profession en tant qu&apos;expert examinateur. La rigueur, le sens du détail et la fidélité à ses clients sont sa marque de fabrique.
              </p>
            </motion.div>
          </div>

          {/* ── Droite : Céline · R bordeaux ── */}
          <div className="overflow-hidden sm:border-l sm:border-line sm:pl-14 md:pl-20">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-bordeaux"
            >
              <LogoR />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-10"
            >
              <p className="font-display text-[clamp(26px,2.8vw,36px)] font-bold leading-tight tracking-tightish text-ink">
                Céline Roduit
              </p>
              <p className="mt-2 font-display text-[14px] italic text-ink-soft">
                Cheffe expert · Branche fiduciaire et immobilière
              </p>
              <p className="mt-6 max-w-[40ch] font-body text-[16px] leading-relaxed text-ink-soft">
                Céline poursuit l&apos;œuvre de PHR dans le même esprit, en y ajoutant sa spécialité : la mise en place de systèmes de gestion et de comptabilité automatisés. Elle accompagne les entreprises sur le terrain pour structurer durablement leurs processus internes.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Accréditations — sous les deux colonnes, petite typo discrète */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-14 border-t border-line pt-6 font-body text-[13px] leading-relaxed text-ink-light"
        >
          Membre Fiduciaire Suisse · Expert Suisse · Experts réviseurs agréés ASR · CFC branche fiduciaire et immobilière
        </motion.p>

      </div>
    </section>
  );
}
