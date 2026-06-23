import { Button } from "@/components/ui/Button";
import { Nav } from "@/components/layout/Nav";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Nav />
      <main className="mx-auto max-w-content px-7 md:px-14">
        {/* HERO — composition "document fiduciaire" */}
        <section className="flex min-h-[80vh] flex-col justify-center py-16 md:py-24">
          {/* En-tête de document : filet + émetteur (eyebrow) + crédit */}
          <div className="flex items-baseline justify-between gap-6 border-t border-line-strong pt-5">
            <p className="font-display text-[15px] tracking-tightish text-ink md:text-[16px]">
              <span className="font-semibold">PHR Fiduciaire</span>
              <span className="text-ink-light"> · Fully, Valais · depuis 1982</span>
            </p>
            <span className="hidden font-display text-[14px] italic text-ink-light sm:inline">
              Expert-réviseur agréé ASR
            </span>
          </div>

          {/* Titre mesuré */}
          <h1 className="mt-14 max-w-[20ch] font-display text-[clamp(38px,4.8vw,68px)] font-bold leading-[1.05] tracking-tightish text-ink md:mt-20">
            Votre fiduciaire en Valais.<br />
            Solide, humaine, <span className="italic text-bordeaux">automatisée</span>.
          </h1>

          {/* Sous-titre */}
          <p className="mt-7 max-w-[54ch] font-body text-[18px] leading-relaxed text-ink-soft md:text-[19px]">
            Comptabilité, conseil et automatisation des processus pour les PME,
            les indépendants et les particuliers du Valais.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Button href="#prestations" arrow="↓">
              Découvrir nos prestations
            </Button>
          </div>

          {/* Filet de clôture : services + repère signature (point bordeaux) */}
          <div className="mt-16 flex items-center justify-between gap-6 border-t border-line pt-4">
            <span className="font-display text-[13px] italic text-ink-light">
              Comptabilité · Fiscalité · Automatisation des processus
            </span>
            <span className="flex items-center gap-2" aria-hidden="true">
              <span className="h-px w-10 bg-sage" />
              <span className="h-[6px] w-[6px] rounded-sm bg-bordeaux" />
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
