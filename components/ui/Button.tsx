import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  /** Glyphe de flèche en accent (ex: "→", "↓"). Optionnel. */
  arrow?: string;
};

/**
 * Bouton — UI-SPEC § Composants.
 * Primaire : fond ink, texte paper, hover → sage-deep.
 * Secondaire : transparent, bordure 1.5px ink.
 * Radius 3px (jamais de pill). Flèche en accent cerise.
 */
export function Button({
  children,
  variant = "primary",
  href,
  arrow,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-sm font-display text-sm font-bold tracking-tightish transition-colors duration-300 cursor-pointer";

  const styles =
    variant === "primary"
      ? "bg-ink text-paper px-[22px] py-[15px] hover:bg-sage-deep"
      : "bg-transparent text-ink border-[1.5px] border-ink px-[22px] py-[14px] hover:bg-sage hover:text-paper hover:border-sage";

  const arrowColor =
    variant === "primary"
      ? "text-cerise-soft"
      : "text-cerise group-hover:text-paper";

  const content = (
    <>
      {children}
      {arrow && (
        <span
          className={`${arrowColor} font-display not-italic transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[5px]`}
          aria-hidden="true"
        >
          {arrow}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {content}
      </a>
    );
  }

  return <button className={`${base} ${styles}`}>{content}</button>;
}
