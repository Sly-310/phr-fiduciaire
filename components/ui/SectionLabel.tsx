import { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

/**
 * Surtitre de section (sec-label) — UI-SPEC échelle typographique.
 * Display 500 italic, 15px, bordure basse sage, ink-soft.
 */
export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="mb-[14px] inline-block border-b-[1.5px] border-sage pb-[5px] font-display text-[15px] font-medium italic text-ink-soft">
      {children}
    </span>
  );
}
