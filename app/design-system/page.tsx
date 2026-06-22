import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { EditorialLink } from "@/components/ui/EditorialLink";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata = {
  title: "Design System — PHR Fiduciaire",
  robots: { index: false, follow: false },
};

const PALETTE = [
  { name: "Paper", hex: "#FAFAF7", chip: "bg-paper border border-line", use: "Fond global" },
  { name: "Paper 2", hex: "#F2F1EB", chip: "bg-paper-2 border border-line", use: "Fond alterné, surfaces" },
  { name: "Line", hex: "#E2DECE", chip: "bg-line", use: "Bordures fines" },
  { name: "Line strong", hex: "#1F2D26", chip: "bg-line-strong", use: "Bordures structurantes" },
  { name: "Ink", hex: "#15201B", chip: "bg-ink", use: "Texte principal" },
  { name: "Ink soft", hex: "#4A574F", chip: "bg-ink-soft", use: "Texte secondaire" },
  { name: "Ink light", hex: "#7E8881", chip: "bg-ink-light", use: "Captions, tertiaire" },
  { name: "Sage", hex: "#234E3E", chip: "bg-sage", use: "Primaire, accents" },
  { name: "Sage deep", hex: "#143226", chip: "bg-sage-deep", use: "Fonds sombres, footer" },
  { name: "Sage soft", hex: "#BFD0C6", chip: "bg-sage-soft", use: "Surfaces douces, tags" },
  { name: "Bordeaux", hex: "#6E2347", chip: "bg-bordeaux", use: "SIGNATURE — usage rare (R du logo)" },
  { name: "Bordeaux deep", hex: "#511733", chip: "bg-bordeaux-deep", use: "Hover, contraste" },
  { name: "Bordeaux soft", hex: "#F2E1E8", chip: "bg-bordeaux-soft border border-line", use: "Texte clair sur fond sage" },
  { name: "Amber", hex: "#E8B96E", chip: "bg-amber", use: "Surligneur, filigrane" },
  { name: "Logo grey", hex: "#959595", chip: "bg-[#959595]", use: "P et h du logo" },
];

function Folio({ n }: { n: string }) {
  return (
    <span className="absolute right-14 top-12 font-display text-sm italic text-ink-light">
      {n}
    </span>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto max-w-content px-7 md:px-14">
      {/* En-tête */}
      <header className="border-b border-line py-14">
        <SectionLabel>Design System · validation des tokens</SectionLabel>
        <h1 className="font-display text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-tighter text-ink">
          PHR Fiduciaire — <span className="italic text-bordeaux">charte</span> en réel.
        </h1>
        <p className="mt-5 max-w-[60ch] font-body text-[17px] leading-relaxed text-ink-soft">
          Rendu des tokens issus de <code className="text-ink">UI-SPEC.md</code>{" "}
          (brandkit <code className="text-ink">phr-direction-B2-v4</code>) en Next.js + Tailwind.
          Aucune valeur hors charte. On valide ceci avant de construire les sections.
        </p>
      </header>

      {/* PALETTE */}
      <section className="relative border-b border-line py-28">
        <Folio n="i" />
        <SectionLabel>Palette · 15 tokens</SectionLabel>
        <h2 className="mb-14 max-w-[20ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-tightish text-ink">
          Vert empire pour la rigueur, <span className="italic text-bordeaux">bordeaux</span> pour la signature.
        </h2>
        <div className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-5">
          {PALETTE.map((c) => (
            <div key={c.name} className="border-b border-r border-line p-5">
              <div className={`mb-5 h-24 w-full rounded-sm ${c.chip}`} />
              <div className="font-display text-[17px] font-semibold text-ink">{c.name}</div>
              <div className="mt-1 font-body text-xs tracking-wide text-ink-soft">{c.hex}</div>
              <div className="mt-2 font-display text-[13px] italic leading-snug text-ink-light">{c.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHIE */}
      <section className="relative border-b border-line py-28">
        <Folio n="ii" />
        <SectionLabel>Typographies · deux familles</SectionLabel>
        <h2 className="mb-14 max-w-[22ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-tightish text-ink">
          Familjen Grotesk porte, <span className="italic text-sage">Atkinson</span> tient.
        </h2>

        <div className="grid gap-0 border-t border-line-strong md:grid-cols-2">
          <div className="border-b border-line py-12 md:border-r md:pr-12">
            <div className="mb-5 font-display text-sm italic text-ink-soft">Display · Familjen Grotesk</div>
            <div className="font-display text-[120px] font-bold leading-none tracking-tightest text-ink">
              Aa <span className="italic text-bordeaux">Rr</span>
            </div>
            <p className="mt-6 max-w-[44ch] font-display text-[19px] leading-snug text-ink">
              Grotesk low-contrast, monolithique. L&rsquo;italique du R porte la signature.
            </p>
          </div>
          <div className="border-b border-line py-12 md:pl-12">
            <div className="mb-5 font-display text-sm italic text-ink-soft">Body · Atkinson Hyperlegible</div>
            <div className="font-body text-[100px] font-bold leading-none tracking-tightest text-ink">
              Aa Rr 123
            </div>
            <p className="mt-6 max-w-[44ch] font-body text-[17px] leading-relaxed text-ink-soft">
              Lisibilité maximale, y compris pour les clients âgés. Distinctions claires 1 / I / l, 0 / O.
            </p>
          </div>
        </div>

        {/* Échelle */}
        <div className="mt-16 border-t border-line-strong">
          {[
            { tag: "Hero H1", el: <span className="font-display text-[clamp(48px,7vw,88px)] font-bold leading-none tracking-tighter text-ink">La rigueur de 1982.</span> },
            { tag: "Section title", el: <span className="font-display text-[clamp(32px,4vw,52px)] font-bold leading-tight tracking-tightish text-ink">Nos prestations</span> },
            { tag: "H2", el: <span className="font-display text-[36px] font-semibold italic text-sage">La maison</span> },
            { tag: "H3", el: <span className="font-display text-[17px] font-bold italic text-sage">Comptabilité</span> },
            { tag: "Body", el: <span className="font-body text-[17px] leading-relaxed text-ink">Une comptabilité bien tenue, c&rsquo;est le tableau de bord de votre entreprise.</span> },
            { tag: "Sous-titre", el: <span className="font-body text-[19px] text-ink-soft">L&rsquo;efficacité de maintenant.</span> },
            { tag: "Caption", el: <span className="font-display text-[14px] italic text-ink-soft">Expert-réviseur agréé ASR</span> },
          ].map((row) => (
            <div key={row.tag} className="grid grid-cols-[120px_1fr] items-baseline gap-8 border-b border-line py-7">
              <span className="font-display text-sm italic text-ink-light">{row.tag}</span>
              <span>{row.el}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMPOSANTS */}
      <section className="relative border-b border-line py-28">
        <Folio n="iii" />
        <SectionLabel>Composants · jeu de base</SectionLabel>
        <h2 className="mb-14 max-w-[20ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-tightish text-ink">
          Cinq pièces, <span className="italic text-sage">aucun gadget.</span>
        </h2>

        <div className="grid grid-cols-1 border-l border-t border-line-strong md:grid-cols-2">
          <div className="border-b border-r border-line p-12">
            <div className="mb-7 font-display text-sm italic text-ink-soft">Boutons</div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" arrow="→">Découvrir nos prestations</Button>
              <Button variant="secondary" arrow="→">Nous contacter</Button>
            </div>
          </div>
          <div className="border-b border-r border-line p-12">
            <div className="mb-7 font-display text-sm italic text-ink-soft">Tags &amp; badges</div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Tag>PME</Tag>
              <Tag>Indépendants</Tag>
              <Tag variant="outline">Cabinets médicaux</Tag>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>Depuis 1982</Badge>
              <Badge variant="amber">Agréé ASR</Badge>
            </div>
          </div>
          <div className="border-b border-r border-line p-12">
            <div className="mb-7 font-display text-sm italic text-ink-soft">Lien éditorial</div>
            <EditorialLink href="#">Comment ça fonctionne</EditorialLink>
          </div>
          <div className="border-b border-r border-line p-12">
            <div className="mb-7 font-display text-sm italic text-ink-soft">Surtitre de section</div>
            <SectionLabel>Notre approche</SectionLabel>
          </div>
        </div>
      </section>

      {/* RÈGLE BORDEAUX */}
      <section className="relative py-28">
        <Folio n="iv" />
        <SectionLabel>Règle du bordeaux</SectionLabel>
        <h2 className="mb-8 max-w-[24ch] font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.04] tracking-tightish text-ink">
          Maximum <span className="italic text-bordeaux">deux</span> occurrences par page.
        </h2>
        <div className="grid gap-6 border-t border-line-strong pt-10 md:grid-cols-2">
          <p className="font-body text-[17px] leading-relaxed text-ink">
            Le bordeaux <span className="text-bordeaux">#6E2347</span> est une signature, pas une couleur d&rsquo;usage.
            Il apparaît dans deux contextes maximum : un mot-clé fort dans un titre,
            et un élément signature discret (point, fine ligne, le R du logo).
          </p>
          <p className="font-body text-[17px] leading-relaxed text-ink-soft">
            Jamais d&rsquo;aplat large, jamais plusieurs mots colorés dans un même titre, jamais décoratif.
            Profond et rare : c&rsquo;est parce qu&rsquo;il apparaît peu qu&rsquo;il fonctionne comme signature.
          </p>
        </div>
      </section>
    </main>
  );
}
