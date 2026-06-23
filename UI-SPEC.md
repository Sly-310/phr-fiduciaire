# UI-SPEC.md — PHR Fiduciaire

> Source de vérité visuelle UNIQUE. Issue du brandkit validé `phr-direction-B2-v4`.
> Claude Code n'invente aucune valeur hors de ce fichier. En cas de manque : demander.

---

## DIRECTION

**Nom :** Tech & Humanité — "l'imprimeur suisse qui fait du logiciel"
**Tension recherchée :** rigueur fiduciaire établie (rassurant, droit, sobre) + renouveau tech discret (concret, moderne). Jamais startup, jamais magazine de mode.

---

## COULEURS (tokens exacts)

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#FAFAF7` | Fond global |
| `paper-2` | `#F2F1EB` | Fond alterné, surfaces |
| `line` | `#E2DECE` | Bordures fines |
| `line-strong` | `#1F2D26` | Bordures structurantes |
| `ink` | `#15201B` | Texte principal |
| `ink-soft` | `#4A574F` | Texte secondaire |
| `ink-light` | `#7E8881` | Texte tertiaire, captions |
| `sage` | `#234E3E` | Couleur primaire, accents |
| `sage-deep` | `#143226` | Fonds sombres (section automatisation, footer) |
| `sage-soft` | `#BFD0C6` | Surfaces douces, tags |
| `logo-grey` | `#959595` | Gris du P et du h du logo |
| `bordeaux` | `#6E2347` | **SIGNATURE — usage rare. Couleur du R du logo.** |
| `bordeaux-deep` | `#511733` | Variante foncée, hover, fonds |
| `bordeaux-soft` | `#F2E1E8` | Très rare, fond prune pâle |
| `amber` | `#E8B96E` | Surligneur, mise en avant ponctuelle |

> **Couleur de marque officielle** relevée sur le logo PHR : le R est en bordeaux/prune profond `#6E2347` (et non un rose vif). C'est la signature de Céline et la couleur historique de la maison. Le P et le h du logo sont en gris `#959595`.

### Règle du bordeaux (CRITIQUE)
Maximum **2 occurrences par page** :
1. Un mot-clé fort dans un titre (ex : "maintenant" au hero)
2. Un élément signature discret (point, fine ligne, le R)
Jamais : aplat large, plusieurs mots colorés dans un titre, usage décoratif répété.
Ce bordeaux est sérieux et établi — il ancre le côté "maison de confiance depuis 1982" tout en restant la signature du renouveau porté par Céline.

---

## TYPOGRAPHIE

**Display :** `Familjen Grotesk` (Google Fonts) — titres, éléments d'accent
Poids : 400, 500, 600, 700 · italique disponible
Caractère : grotesk low-contrast, monolithique. C'est elle qui porte l'identité.

**Body :** `Atkinson Hyperlegible` (Google Fonts) — corps de texte, listes, paragraphes
Poids : 400, 700 · italique disponible
Choix par fonction : lisibilité maximale, y compris pour les clients âgés (demande explicite Philippe).

### Interdits typographiques
- Pas de serif à fort contraste pleins/déliés (registre Playfair/Cormorant) → slop IA
- Pas de monospace, pas de `//`, pas de `▸`, pas de bullets décoratifs
- Pas de `font-variation-settings` (ces polices ne sont pas variables)
- Titres : un seul accent (italique OU couleur), jamais les deux. Max 3 lignes.

---

## ÉCHELLE TYPOGRAPHIQUE (depuis B2-v4)

| Niveau | Police | Taille | Détail |
|---|---|---|---|
| Hero H1 | display 700 | clamp(58px, 7.2vw, 108px) | line-height 1.0, letter-spacing -0.022em |
| Section title | display 700 | clamp(40px, 4.4vw, 60px) | line-height 1.04, max-width 20ch |
| H2 | display 600 italic | 36px | couleur sage |
| H3 | display 700 italic | 17px | couleur sage (PAS bordeaux) |
| Body | body 400 | 17px | line-height 1.65, max-width 62ch |
| Sous-titre | body 400 | 17-19px | couleur ink-soft |
| Caption | display 400 italic | 14px | couleur ink-soft |
| Surtitre (sec-label) | display 500 italic | 15px | bordure basse sage |

---

## COMPOSANTS

**Bouton primaire :** fond `ink`, texte `paper`, padding 15px 22px, radius 3px, hover → `sage-deep`. Flèche en accent.
**Bouton secondaire :** transparent, bordure 1.5px `ink`, radius 3px.
**Tag :** fond `sage-soft`, texte `sage-deep`, radius **3px** (jamais 999px), padding 5px 12px.
**Badge :** fond `ink` ou `amber`, radius 3px.
**Lien éditorial :** display italic, bordure basse `sage` 2px, flèche.

### Radius standard
`3px` partout. Jamais de pills arrondies (999px = slop 2024).

---

## LAYOUT

- Largeur max contenu : `1380px`
- Padding latéral : 56px desktop / réduire proportionnellement mobile
- Sections : padding vertical généreux (~128px top, 144px bottom desktop)
- Séparation des sections : bordure fine `line` en haut
- Folio discret en haut à droite (numéro de section, display italic, ink-light)

---

## ANIMATIONS (Framer Motion)

Sobres uniquement. Apparitions douces au scroll (fade + léger translate). Transitions de couleur sur hover (0.4s ease). Une ligne signature qui s'étend au hover du hero (width transition, cubic-bezier).
**Interdits :** effets d'ouverture spectaculaires, parallaxe lourde, tout ce qui fait "gadget". Philippe a explicitement détesté les effets too much sur les sites concurrents.

---

## RESPONSIVE

3 breakpoints : mobile / tablet / desktop.
Priorité mobile : le site doit fonctionner "comme une petite app" sur téléphone (demande explicite Philippe). Menu hamburger discret, scroll fluide vers les ancres.

---

## CE QUI NE CHANGE PAS SANS DEMANDE EXPLICITE

Toutes les valeurs ci-dessus. Si une situation n'est pas couverte par ce fichier, Claude Code s'arrête et demande plutôt que d'inventer une valeur.
