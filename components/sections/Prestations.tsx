import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Section Prestations — PHR-ARCHITECTURE. Ancre #prestations.
 * Bloc 1 : 9 cartes métier (fond papier, aucun bordeaux).
 * Bloc 2 : automatisation (fond sage-deep, surtitre "Notre différence" en signature).
 * Textes exacts de l'architecture, liens vers /prestations/[slug].
 */

const TITRE = "Tout ce qu’une fiduciaire doit savoir faire. Et quelque chose en plus.";
const INTRO =
  "De la tenue de comptabilité à l’optimisation fiscale, nous couvrons l’ensemble des besoins d’une entreprise — avec une particularité que peu de fiduciaires maîtrisent.";

const CARTES = [
  { titre: "Comptabilité", desc: "Tenue, bouclement, états financiers. Votre tableau de bord, toujours à jour.", slug: "comptabilite" },
  { titre: "Fiscalité", desc: "Déclarations, optimisation, TVA. Un guide dans la complexité fiscale suisse.", slug: "fiscalite" },
  { titre: "Salaires & Payroll", desc: "La gestion des salaires et des charges sociales, sans la charge mentale.", slug: "salaires" },
  { titre: "Successions & Héritages", desc: "Affaires successorales et administration d’hoiries, avec tact et rigueur.", slug: "successions" },
  { titre: "Expertises", desc: "Expertises comptables et judiciaires par des experts reconnus.", slug: "expertises" },
  { titre: "Transmission d’entreprise", desc: "Accompagner la reprise ou la cession, étape par étape.", slug: "transmission-entreprise" },
  { titre: "Cabinets médicaux", desc: "Une spécialisation dédiée aux professions de la santé.", slug: "cabinets-medicaux" },
  { titre: "Family Office", desc: "La gestion patrimoniale globale, pensée sur le long terme.", slug: "family-office" },
  { titre: "Conseil & Coaching", desc: "Un accompagnement de proximité, sur le terrain.", slug: "conseil-coaching" },
];

const AUTO_TITRE = "Vos processus, enfin structurés.";
const AUTO_TEXTE =
  "La plupart des entreprises accumulent les fichiers Excel : un ici, un autre là, jamais à jour, jamais au même endroit. Nous mettons en place des systèmes de gestion intégrés qui centralisent tout — comptabilité, stocks, suivi — et qui restent fiables dans le temps.";
const AUTO_BENEFICES = [
  "Moins de saisie manuelle, moins d’erreurs",
  "Des données à jour, en temps réel",
  "Un accompagnement sur place jusqu’à ce que tout tourne seul",
];

export function Prestations() {
  return (
    <section id="prestations" className="border-t border-line">
      {/* BLOC 1 — métier fiduciaire */}
      <div className="mx-auto max-w-content px-7 py-20 md:px-14 md:py-28">
        <SectionLabel>Nos prestations</SectionLabel>
        <h2 className="mt-2 max-w-[24ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.06] tracking-tightish text-ink">
          {TITRE}
        </h2>
        <p className="mt-6 max-w-[64ch] font-body text-[17px] leading-relaxed text-ink-soft">
          {INTRO}
        </p>

        {/* Grille de cartes — filets, sans icône, sans bordeaux */}
        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {CARTES.map((c) => (
            <a
              key={c.slug}
              href={`/prestations/${c.slug}`}
              className="group flex flex-col border-b border-r border-line p-8 transition-colors duration-300 hover:bg-paper-2"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-[20px] font-semibold tracking-tightish text-ink transition-colors duration-300 group-hover:text-sage">
                  {c.titre}
                </h3>
                <span
                  className="font-display text-sage opacity-0 transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-1 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ink-soft">
                {c.desc}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* BLOC 2 — automatisation (palier sombre avant le footer) */}
      <div className="bg-sage-deep text-paper">
        <div className="mx-auto grid max-w-content gap-12 px-7 py-20 md:grid-cols-2 md:gap-20 md:px-14 md:py-28">
          {/* Colonne gauche : surtitre signature + titre + texte */}
          <div>
            <span className="font-display text-[15px] font-medium italic text-bordeaux-soft">
              Notre différence
            </span>
            <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.08] tracking-tightish text-paper">
              {AUTO_TITRE}
            </h2>
            <p className="mt-6 max-w-[52ch] font-body text-[17px] leading-relaxed text-paper/85">
              {AUTO_TEXTE}
            </p>
          </div>

          {/* Colonne droite : bénéfices + lien */}
          <div className="flex flex-col justify-center">
            <ul className="border-t border-paper/15">
              {AUTO_BENEFICES.map((b) => (
                <li
                  key={b}
                  className="border-b border-paper/15 py-4 font-body text-[17px] text-paper/90"
                >
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="/prestations/automatisation"
              className="group mt-8 inline-flex items-baseline gap-2 font-display text-[20px] font-semibold italic text-paper transition-colors duration-300 hover:text-sage-soft"
            >
              <span className="border-b-2 border-sage-soft pb-1">
                Comment ça fonctionne
              </span>
              <span
                className="font-normal not-italic transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
