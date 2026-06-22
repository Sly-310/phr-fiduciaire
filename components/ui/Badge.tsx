import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "ink" | "amber";
};

/**
 * Badge — UI-SPEC § Composants.
 * Fond ink (texte paper) ou amber (texte ink). Radius 3px.
 */
export function Badge({ children, variant = "ink" }: BadgeProps) {
  const styles =
    variant === "ink" ? "bg-ink text-paper" : "bg-amber text-ink";

  return (
    <span
      className={`inline-block rounded-sm px-3 py-[5px] font-display text-[13px] font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}
