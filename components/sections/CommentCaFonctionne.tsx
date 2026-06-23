"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * "Comment ça fonctionne" — se déplie en place (sans changement de page).
 * Étapes exactes de l'architecture (page /prestations/automatisation).
 * Sur fond bordeaux : texte clair, accents bordeaux-soft.
 */
const ETAPES = [
  "Analyse de vos processus actuels et de vos besoins réels",
  "Mise en place d’un système de gestion centralisé",
  "Migration sécurisée de vos données existantes",
  "Formation et coaching de vos équipes sur place",
  "Suivi personnalisé jusqu’à l’autonomie complète",
];

export function CommentCaFonctionne() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group inline-flex items-baseline gap-2 font-display text-[20px] font-semibold italic text-paper transition-colors duration-300 hover:text-bordeaux-soft"
      >
        <span className="border-b-2 border-bordeaux-soft pb-1">
          Comment ça fonctionne
        </span>
        <span
          className={`font-normal not-italic transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
            open ? "rotate-90" : "group-hover:translate-x-1"
          }`}
          aria-hidden="true"
        >
          →
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="overflow-hidden"
          >
            {/* Parcours : étapes reliées par un filet (pas une simple liste) */}
            <ol className="mt-8">
              {ETAPES.map((e, i) => (
                <li key={e} className="relative flex gap-5 pb-7 last:pb-0">
                  {i < ETAPES.length - 1 && (
                    <span
                      className="absolute left-[13px] top-7 bottom-0 w-px bg-bordeaux-soft/30"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full border border-bordeaux-soft font-display text-[12px] text-bordeaux-soft">
                    {i + 1}
                  </span>
                  <span className="pt-1 font-body text-[16px] leading-snug text-paper">
                    {e}
                  </span>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
