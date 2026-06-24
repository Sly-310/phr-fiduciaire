"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const NAV = [
  { label: "Prestations", href: "#prestations" },
  { label: "Approche", href: "#approche" },
  { label: "Le cabinet", href: "#equipe" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  return (
    <footer className="bg-sage-deep text-paper">
      <div className="mx-auto max-w-content px-7 py-20 md:px-14 md:py-24">
        <div className="grid gap-12 border-t border-paper/15 pt-12 md:grid-cols-[1.4fr_1fr_1.3fr] md:gap-16">

          {/* Identité */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <Image
              src="/phr-logo-light.png"
              alt="PHR Fiduciaire"
              width={82}
              height={48}
              className="h-12 w-auto"
            />
            <p className="mt-6 font-body text-[15px] leading-relaxed text-sage-soft">
              <span className="font-semibold text-paper">PHR Fiduciaire SA</span>
              <br />
              Rue Maison-de-Commune 20 — CP 195
              <br />
              1926 Fully, Valais
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            aria-label="Pied de page"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
          >
            <p className="mb-5 font-display text-[13px] italic text-sage-soft">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-[16px] text-paper/90 transition-colors duration-300 hover:text-sage-soft"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.16, ease: EASE }}
          >
            <p className="mb-5 font-display text-[24px] font-semibold tracking-tightish text-paper">
              Parlons de votre projet
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+41277462954"
                className="font-display text-[20px] font-semibold text-paper transition-colors duration-300 hover:text-sage-soft"
              >
                027 746 29 54
              </a>
              <a
                href="mailto:info@phrfiduciaire.ch"
                className="font-display text-[20px] font-semibold text-paper transition-colors duration-300 hover:text-sage-soft"
              >
                info@phrfiduciaire.ch
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bas de footer */}
        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 font-body text-[13px] text-sage-soft sm:flex-row sm:items-center sm:justify-between">
          <span>
            PHR Fiduciaire SA © 2026 · Fully, Valais · Expert-réviseur agréé ASR
          </span>
          <span aria-hidden="true">Mentions légales</span>
        </div>
      </div>
    </footer>
  );
}
