"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const PRINCIPES = [
  {
    num: "01",
    titre: "Simple et efficace",
    texte: "Nous privilégions les solutions claires, sans complexité inutile. Ce qui est simple tient dans le temps.",
  },
  {
    num: "02",
    titre: "Souple et léger",
    texte: "Des structures adaptées à votre réalité, jamais surdimensionnées. Vous gardez l'agilité.",
  },
  {
    num: "03",
    titre: "Toujours la meilleure option",
    texte: "Nous cherchons en continu la solution la plus juste pour vous. C'est notre manière de travailler depuis quarante ans.",
  },
];

export function Approche() {
  return (
    <section id="approche" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:gap-20">

          {/* Colonne gauche — titre avec reveal */}
          <div className="md:w-[36%] md:shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <SectionLabel>Notre approche</SectionLabel>
              <h2 className="mt-2 max-w-[18ch] font-display text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.06] tracking-tightish text-ink">
                Des solutions simples, pensées pour durer.
              </h2>
            </motion.div>
          </div>

          {/* Colonne droite — trois principes */}
          <div className="flex-1 border-t border-line">
            {PRINCIPES.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="flex gap-8 border-b border-line py-8"
              >
                <span className="shrink-0 font-display text-[13px] italic text-sage">{p.num}</span>
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tightish text-ink">
                    {p.titre}
                  </h3>
                  <p className="mt-2 max-w-[48ch] font-body text-[15px] leading-relaxed text-ink-soft">
                    {p.texte}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="pt-8 font-display text-[17px] italic leading-relaxed text-sage"
            >
              Disponibilité et discrétion : deux mots qui résument notre manière
              d&apos;accompagner nos clients.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
