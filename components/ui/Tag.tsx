import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
};

/**
 * Tag — UI-SPEC § Composants.
 * Solid : fond sage-soft, texte sage-deep. Outline : bordure ink.
 * Radius 3px (jamais 999px).
 */
export function Tag({ children, variant = "solid" }: TagProps) {
  const styles =
    variant === "solid"
      ? "bg-sage-soft text-sage-deep"
      : "bg-transparent text-ink border border-ink";

  return (
    <span
      className={`inline-block rounded-sm px-3 py-[5px] font-display text-[13px] font-semibold transition-colors duration-300 ${styles}`}
    >
      {children}
    </span>
  );
}
