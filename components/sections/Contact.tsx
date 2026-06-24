"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">

        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">

          {/* ── Gauche : info + carte ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <SectionLabel>Nous contacter</SectionLabel>
            <h2 className="mt-2 max-w-[20ch] font-display text-[clamp(30px,3.6vw,50px)] font-bold leading-[1.05] tracking-tightish text-ink">
              Parlons de votre situation.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-relaxed text-ink-soft">
              Réponse sous 24h ouvrables.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:+41277462954"
                className="group inline-flex items-baseline gap-2 font-display text-[22px] font-bold tracking-tightish text-ink transition-colors duration-300 hover:text-sage"
              >
                027 746 29 54
                <span className="font-normal not-italic text-ink-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true">→</span>
              </a>
              <a
                href="mailto:info@phrfiduciaire.ch"
                className="group inline-flex items-baseline gap-2 font-display text-[18px] text-ink-soft transition-colors duration-300 hover:text-ink"
              >
                info@phrfiduciaire.ch
              </a>
            </div>

            <div className="mt-6 font-body text-[14px] leading-relaxed text-ink-soft">
              <p className="font-semibold text-ink">PHR Fiduciaire SA</p>
              <p>Rue Maison-de-Commune 20</p>
              <p>1926 Fully, Valais</p>
            </div>

            {/* Google Maps embed */}
            <div className="mt-6 overflow-hidden border border-line">
              <iframe
                title="PHR Fiduciaire — Fully, Valais"
                src="https://maps.google.com/maps?q=Rue+Maison-de-Commune+20,+1926+Fully,+Valais,+Switzerland&output=embed&hl=fr&z=15"
                width="100%"
                height="200"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ── Droite : formulaire ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex h-full flex-col items-start justify-center py-12"
              >
                <span className="font-display text-[42px] font-bold text-sage" aria-hidden="true">✓</span>
                <p className="mt-4 font-display text-[22px] font-semibold text-ink">Message envoyé.</p>
                <p className="mt-2 font-body text-[15px] text-ink-soft">
                  Nous reviendrons vers vous sous 24h ouvrables.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-display text-[12px] font-semibold uppercase tracking-widest text-ink-light">Prénom</span>
                    <input
                      type="text"
                      name="prenom"
                      required
                      autoComplete="given-name"
                      className="border border-line bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder-ink-light/50 outline-none transition-colors duration-200 focus:border-ink"
                      placeholder="Votre prénom"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-display text-[12px] font-semibold uppercase tracking-widest text-ink-light">Téléphone</span>
                    <input
                      type="tel"
                      name="tel"
                      autoComplete="tel"
                      className="border border-line bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder-ink-light/50 outline-none transition-colors duration-200 focus:border-ink"
                      placeholder="079 000 00 00"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="font-display text-[12px] font-semibold uppercase tracking-widest text-ink-light">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="border border-line bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder-ink-light/50 outline-none transition-colors duration-200 focus:border-ink"
                    placeholder="votre@email.ch"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-display text-[12px] font-semibold uppercase tracking-widest text-ink-light">Votre situation</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="resize-none border border-line bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder-ink-light/50 outline-none transition-colors duration-200 focus:border-ink"
                    placeholder="Décrivez votre situation en 2 lignes…"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-2 flex items-center justify-between border border-ink bg-ink px-6 py-4 font-display text-[16px] font-semibold text-paper transition-colors duration-300 hover:bg-transparent hover:text-ink disabled:opacity-60"
                >
                  <span>{loading ? "Envoi en cours…" : "Envoyer le message"}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </button>

                <p className="font-body text-[12px] text-ink-light">
                  Réponse sous 24h ouvrables. Données strictement confidentielles.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
