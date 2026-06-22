import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col justify-center px-7 md:px-14">
      <SectionLabel>PHR Fiduciaire · setup en cours</SectionLabel>
      <h1 className="max-w-[18ch] font-display text-[clamp(48px,7vw,96px)] font-bold leading-[1.0] tracking-tighter text-ink">
        La rigueur de 1982.<br />
        L&rsquo;efficacité de <span className="italic text-bordeaux">maintenant</span>.
      </h1>
      <p className="mt-7 max-w-[46ch] font-body text-[19px] leading-snug text-ink-soft">
        Le site est en construction. La charte est validée en réel sur la page Design System.
      </p>
      <div className="mt-10">
        <Button href="/design-system" arrow="→">
          Voir le Design System
        </Button>
      </div>
    </main>
  );
}
