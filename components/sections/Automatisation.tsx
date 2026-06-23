import { DossiersAnime } from "./DossiersAnime";
import { CommentCaFonctionne } from "./CommentCaFonctionne";

/**
 * Section Automatisation — la prestation signature de Céline.
 * Rupture de gabarit : "carton d'offre" encadré, fond bordeaux (territoire de Céline),
 * mené par l'emblème animé (gauche) + détail du service (droite).
 * Budget bordeaux : exception locale assumée (territoire de Céline).
 */
const TITRE = "Vos processus, enfin structurés.";
const TEXTE =
  "La plupart des entreprises accumulent les fichiers Excel : un ici, un autre là, jamais à jour, jamais au même endroit. Nous mettons en place des systèmes de gestion intégrés qui centralisent tout — comptabilité, stocks, suivi — et qui restent fiables dans le temps.";
// Le différenciateur (suivi humain in situ) — mis en avant, pas noyé dans la liste.
const DIFFERENCE = "Un accompagnement sur place, jusqu’à ce que tout tourne seul.";
const INCLUS = [
  "Moins de saisie manuelle, moins d’erreurs",
  "Des données à jour, en temps réel",
];

export function Automatisation() {
  return (
    <section id="automatisation" className="bg-bordeaux text-paper">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-24">
        {/* Carton d'offre encadré — aucune autre section n'est encadrée */}
        <div className="rounded-sm border border-bordeaux-soft/30 p-8 md:p-14">
          <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
            {/* Gauche : emblème animé, centré */}
            <div className="flex items-center justify-center">
              <DossiersAnime />
            </div>

            {/* Droite : la prestation */}
            <div>
              <span className="font-display text-[15px] font-medium italic text-bordeaux-soft">
                Notre différence
              </span>
              <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(34px,4.4vw,60px)] font-bold leading-[1.02] tracking-tighter text-paper">
                {TITRE}
              </h2>
              <p className="mt-6 max-w-[52ch] font-body text-[17px] leading-relaxed text-paper/85 md:text-[18px]">
                {TEXTE}
              </p>

              {/* Le différenciateur, mis en avant */}
              <p className="mt-8 max-w-[30ch] border-l-2 border-bordeaux-soft pl-5 font-display text-[22px] font-medium italic leading-snug text-paper md:text-[26px]">
                {DIFFERENCE}
              </p>

              <ul className="mt-8 flex flex-col gap-2.5">
                {INCLUS.map((b) => (
                  <li
                    key={b}
                    className="flex items-baseline gap-3 font-body text-[15px] text-paper/75"
                  >
                    <span className="text-bordeaux-soft" aria-hidden="true">
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <CommentCaFonctionne />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
