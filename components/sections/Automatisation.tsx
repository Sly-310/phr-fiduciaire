"use client";

import { motion } from "framer-motion";
import { DossiersAnime } from "./DossiersAnime";
import { CommentCaFonctionne } from "./CommentCaFonctionne";

const EASE = [0.16, 1, 0.3, 1] as const;

const TITRE = "Vos processus, enfin structurés.";
const TEXTE =
  "Les fichiers Excel éparpillés, jamais à jour, jamais au même endroit — c'est fini. Nous centralisons tout dans un système fiable, taillé pour durer.";
const DIFFERENCE = "Un accompagnement sur place, jusqu'à ce que tout tourne seul.";

export function Automatisation() {
  return (
    <section id="automatisation" className="bg-bordeaux text-paper">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">
        <div className="rounded-sm border border-bordeaux-soft/30 p-8 md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">

            {/* Gauche : emblème animé */}
            <div className="flex items-center justify-center">
              <DossiersAnime />
            </div>

            {/* Droite : texte avec reveals */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.span
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
                className="font-display text-[15px] font-medium italic text-bordeaux-soft"
              >
                Notre différence
              </motion.span>

              <motion.h2
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                className="mt-4 max-w-[16ch] font-display text-[clamp(34px,4.4vw,60px)] font-bold leading-[1.02] tracking-tighter text-paper"
              >
                {TITRE}
              </motion.h2>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
                className="mt-6 max-w-[52ch] font-body text-[17px] leading-relaxed text-paper/85 md:text-[18px]"
              >
                {TEXTE}
              </motion.p>

              <motion.p
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: EASE } } }}
                className="mt-8 max-w-[30ch] border-l-2 border-bordeaux-soft pl-5 font-display text-[22px] font-medium italic leading-snug text-paper md:text-[26px]"
              >
                {DIFFERENCE}
              </motion.p>

              <CommentCaFonctionne />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
