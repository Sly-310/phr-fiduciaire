"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Users, MapPin, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  {
    id: "annee",
    start: 1970,
    valeur: 1982,
    suffix: "",
    label: "Année de fondation",
    icon: Calendar,
    description: "Quarante ans de continuité dans le même bureau.",
  },
  {
    id: "collaborateurs",
    start: 0,
    valeur: 10,
    suffix: "+",
    label: "Collaborateurs",
    icon: Users,
    description: "Une équipe à taille humaine, stable depuis des années.",
  },
  {
    id: "restructurations",
    start: 0,
    valeur: 40,
    suffix: "+",
    label: "Restructurations PME",
    icon: MapPin,
    description: "Mise en place de systèmes de gestion sur le terrain.",
  },
  {
    id: "asr",
    start: 0,
    valeur: 100,
    suffix: "%",
    label: "Agréé ASR",
    icon: Shield,
    description: "Expert-réviseur agréé par l'Autorité fédérale de surveillance.",
  },
];

function useCountUp(
  start: number,
  target: number,
  duration: number,
  active: boolean,
  reduced: boolean
) {
  const [value, setValue] = useState(reduced ? target : start);

  useEffect(() => {
    if (!active || reduced) { setValue(target); return; }
    const t0 = performance.now();
    const ms = duration * 1000;

    function tick(now: number) {
      const elapsed = now - t0;
      const p = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(start + (target - start) * eased));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, target, start, duration, reduced]);

  return value;
}

function StatCard({
  stat,
  index,
  active,
}: {
  stat: (typeof STATS)[0];
  index: number;
  active: boolean;
}) {
  const reduced = useReducedMotion() ?? false;
  const Icon = stat.icon;
  const count = useCountUp(
    stat.start,
    stat.valeur,
    stat.id === "annee" ? 1.4 : 1.2,
    active,
    reduced
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
      className="group flex flex-col border-b border-r border-line p-8"
    >
      <Icon
        size={20}
        strokeWidth={1.5}
        className="mb-6 text-ink-light transition-colors duration-300 group-hover:text-sage"
        aria-hidden="true"
      />
      <div className="font-display text-[clamp(36px,4vw,54px)] font-bold leading-none tracking-tighter text-ink tabular-nums">
        {count}
        {stat.suffix}
      </div>
      <div className="mt-3 font-display text-[14px] font-semibold tracking-tightish text-ink">
        {stat.label}
      </div>
      <p className="mt-2 font-body text-[13px] leading-relaxed text-ink-light">
        {stat.description}
      </p>
    </motion.div>
  );
}

export function Reperes() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section aria-label="Chiffres clés" className="border-t border-line">
      <div className="mx-auto max-w-content px-7 py-16 md:px-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="mb-12"
        >
          <SectionLabel>En chiffres</SectionLabel>
        </motion.div>

        <div
          ref={ref}
          className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} active={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
