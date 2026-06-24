"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

function MountainFiligrane() {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 2.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="pointer-events-none absolute right-[2%] top-1/2 hidden w-[58%] -translate-y-[52%] select-none md:block"
      style={{ opacity: 0.85 }}
    >
      <Image
        src="/chart-mountain-transparent.png"
        alt=""
        aria-hidden="true"
        width={1400}
        height={620}
        priority
        unoptimized
        className="w-full"
      />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[72vh] flex-col overflow-hidden pt-8 pb-16 md:min-h-[78vh] md:pt-12 md:pb-24">

      <MountainFiligrane />

      {/* Brand */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative font-display text-[clamp(20px,2.2vw,28px)] font-bold tracking-tightish text-ink"
      >
        PHR Fiduciaire
      </motion.p>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
        className="relative mt-3 flex flex-wrap items-baseline justify-between gap-4 border-t border-line-strong pt-4"
      >
        <p className="font-display text-[13px] tracking-tightish text-ink-light md:text-[14px]">
          Fully, Valais
        </p>
        <span className="font-display text-[13px] italic text-ink-light sm:text-[14px]">
          Expert-réviseur agréé ASR
        </span>
      </motion.div>

      {/* H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        className="relative mt-10 max-w-[18ch] font-display text-[clamp(34px,4.8vw,68px)] font-bold leading-[1.05] tracking-tightish text-ink md:mt-20"
      >
        Votre fiduciaire en Valais.<br />
        Solide, humaine,{" "}
        <span className="italic text-bordeaux">automatisée</span>.
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22, ease: EASE }}
        className="relative mt-6 max-w-[46ch] font-body text-[16px] leading-relaxed text-ink-soft md:text-[18px]"
      >
        Comptabilité, conseil et automatisation des processus pour les PME,
        les indépendants et les particuliers du Valais.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.36, ease: EASE }}
        className="relative mt-8 md:mt-10"
      >
        <Button href="#prestations" arrow="↓">
          Découvrir nos prestations
        </Button>
      </motion.div>
    </section>
  );
}
