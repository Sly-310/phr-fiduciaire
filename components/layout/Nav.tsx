"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const LINKS = [
  { label: "Prestations", href: "#prestations" },
  { label: "Approche", href: "#approche" },
  { label: "Équipe", href: "#equipe" },
  { label: "Contact", href: "#contact" },
];

/**
 * Header — PHR-ARCHITECTURE § Header.
 * Sticky, se densifie légèrement au scroll (bordure basse).
 * Liens = ancres vers les sections, scroll fluide (scroll-behavior global).
 * Mobile : menu hamburger discret.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper transition-[padding,border-color] duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-7 transition-[padding] duration-300 md:px-14 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <a href="#top" className="flex items-center" aria-label="PHR Fiduciaire — accueil">
          <Image
            src="/phr-logo.png"
            alt="PHR Fiduciaire"
            width={69}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-body text-[15px] text-ink-soft transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-[width] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Hamburger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Panneau mobile */}
      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-400 ease-[cubic-bezier(.2,.7,.2,1)] md:hidden ${
          open ? "max-h-80" : "max-h-0 border-transparent"
        }`}
      >
        <nav className="flex flex-col px-7 py-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-[22px] italic text-ink transition-colors duration-200 last:border-b-0 hover:text-sage"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
