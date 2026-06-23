import type { Config } from "tailwindcss";

/**
 * Tokens issus de UI-SPEC.md (brandkit validé phr-direction-B2-v4).
 * Source de vérité visuelle UNIQUE. Ne pas dériver sans demande explicite.
 */
const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#FAFAF7",
          2: "#F2F1EB",
        },
        line: {
          DEFAULT: "#E2DECE",
          strong: "#1F2D26",
        },
        ink: {
          DEFAULT: "#15201B",
          soft: "#4A574F",
          light: "#7E8881",
        },
        sage: {
          DEFAULT: "#234E3E",
          deep: "#143226",
          soft: "#BFD0C6",
        },
        // SIGNATURE — usage rare (max 2 occurrences / page). Couleur du R du logo.
        bordeaux: {
          DEFAULT: "#6E2347",
          deep: "#511733",
          soft: "#F2E1E8",
        },
        amber: "#E8B96E",
        "logo-grey": "#959595",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1380px",
      },
      borderRadius: {
        // Radius standard du projet. Jamais de pills (999px = slop 2024).
        DEFAULT: "3px",
        sm: "3px",
      },
      letterSpacing: {
        tightest: "-0.025em",
        tighter: "-0.022em",
        tightish: "-0.012em",
      },
    },
  },
  plugins: [],
};
export default config;
