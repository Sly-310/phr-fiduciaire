import { ReactNode } from "react";

type EditorialLinkProps = {
  children: ReactNode;
  href: string;
  arrow?: string;
};

/**
 * Lien éditorial — UI-SPEC § Composants.
 * Display italic, bordure basse sage 2px, flèche en accent.
 * L'underline se rétracte/déploie au hover (sobre).
 */
export function EditorialLink({
  children,
  href,
  arrow = "→",
}: EditorialLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-baseline gap-2 font-display text-[22px] font-semibold italic text-ink transition-colors duration-300 hover:text-sage"
    >
      <span className="border-b-2 border-sage pb-[3px]">{children}</span>
      <span
        className="font-normal not-italic text-bordeaux transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[5px]"
        aria-hidden="true"
      >
        {arrow}
      </span>
    </a>
  );
}
