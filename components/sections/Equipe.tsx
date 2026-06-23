"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Section Équipe — esprit poétique, hors-norme.
 * Les lettres du logo PHR découpées directement depuis phr-logo.png :
 * phr-logo-ph.png (encre, gauche) · phr-logo-r.png (bordeaux, droite).
 * Fond transparent (RGBA). Texte court, prose, air généreux.
 */

export function Equipe() {
  return (
    <section id="equipe" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">

        {/* En-tête */}
        <SectionLabel>L&apos;équipe</SectionLabel>
        <h2 className="mt-2 max-w-[24ch] font-display text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.06] tracking-tightish text-ink">
          Deux générations, une même exigence.
        </h2>

        {/* Diptyque — deux colonnes ouvertes, pas de cartes */}
        <div className="mt-16 grid items-start gap-16 sm:grid-cols-2 sm:gap-0 md:mt-20">

          {/* ── Gauche : Philippe · Ph ── */}
          <div className="sm:pr-14 md:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <Image
                src="/phr-logo-ph.png"
                alt=""
                width={452}
                height={492}
                className="w-full"
                aria-hidden="true"
              />
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
                Philippe a fondé PHR en 1982. Expert réviseur agréé ASR, il est
                très engagé dans la formation de la profession en tant
                qu&apos;expert examinateur. La rigueur, le sens du détail et la
                fidélité à ses clients sont sa marque de fabrique.
              </p>
            </motion.div>
          </div>

          {/* ── Droite : Céline · R ── */}
          <div className="sm:border-l sm:border-line sm:pl-14 md:pl-20">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <Image
                src="/phr-logo-r.png"
                alt=""
                width={370}
                height={492}
                className="w-full"
                aria-hidden="true"
              />
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
                Céline poursuit l&apos;œuvre de PHR dans le même esprit, en y
                ajoutant sa spécialité : la mise en place de systèmes de gestion
                et de comptabilité automatisés. Elle accompagne les entreprises
                sur le terrain pour structurer durablement leurs processus
                internes.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Accréditations */}
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
