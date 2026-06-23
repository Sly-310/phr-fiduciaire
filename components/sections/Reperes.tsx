/**
 * Section Chiffres / Ancrage — PHR-ARCHITECTURE.
 * Trois repères sobres, alignés, séparés de filets (façon document).
 * Contenu exact de l'architecture. Aucun bordeaux (budget home consommé par le hero).
 */
const REPERES = [
  {
    cle: "Depuis 1982",
    desc: "Plus de quarante ans au service du tissu économique valaisan",
  },
  {
    cle: "10 collaborateurs",
    desc: "Une équipe compétente, à votre écoute",
  },
  {
    cle: "Valais & Romandie",
    desc: "Un ancrage local, une disponibilité réelle",
  },
  {
    cle: "Experts agréés ASR",
    desc: "La garantie d’une expertise reconnue",
  },
];

export function Reperes() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-14 md:px-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {REPERES.map((r, i) => (
            <div key={r.cle}>
              <span className="font-display text-[13px] italic text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 font-display text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.1] tracking-tightish text-ink">
                {r.cle}
              </p>
              <p className="mt-3 max-w-[30ch] font-body text-[16px] leading-relaxed text-ink-soft">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
