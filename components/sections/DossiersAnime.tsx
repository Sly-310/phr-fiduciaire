"use client";

import { motion } from "framer-motion";

/**
 * Emblème "dossiers qui se rangent" — métaphore désordre → ordre, animée au scroll.
 * Trois feuilles dispersées/tournées s'assemblent en pile nette (une seule fois).
 * Trait fin bordeaux-soft sur fond bordeaux. Décoratif (aria-hidden).
 */
const SHEET = (
  <svg
    viewBox="0 0 110 140"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[108px]"
  >
    <rect x="2" y="2" width="106" height="136" rx="3" />
    <line x1="18" y1="28" x2="78" y2="28" />
    <line x1="18" y1="44" x2="78" y2="44" />
    <line x1="18" y1="60" x2="58" y2="60" />
  </svg>
);

const SHEETS = [
  { final: { x: 0, y: 30 }, init: { x: -36, y: 50, rotate: -13 } },
  { final: { x: 20, y: 15 }, init: { x: 32, y: -8, rotate: 11 } },
  { final: { x: 40, y: 0 }, init: { x: 6, y: 44, rotate: -7 } },
];

export function DossiersAnime() {
  return (
    <div
      className="relative h-[180px] w-[150px] text-bordeaux-soft"
      aria-hidden="true"
    >
      {SHEETS.map((s, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0"
          initial={{ x: s.init.x, y: s.init.y, rotate: s.init.rotate, opacity: 0 }}
          whileInView={{ x: s.final.x, y: s.final.y, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.6, delay: i * 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {SHEET}
        </motion.div>
      ))}
    </div>
  );
}
