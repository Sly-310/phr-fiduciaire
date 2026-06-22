# CLAUDE.md — Projet PHR Fiduciaire

> Fichier de contraintes permanentes. Claude Code lit ce fichier au début de chaque session et s'y conforme sans exception.

---

## CONTEXTE PROJET

Site vitrine pour **PHR Fiduciaire SA**, cabinet fiduciaire à Fully (Valais), fondé en 1982.
Client : Philippe Roduit (fondateur) et Céline Roduit (relève).
Agence : ENCORE.EUX.

**Positionnement :** fiduciaire classique rassurante + différenciateur unique sur l'automatisation des processus comptables (porté par Céline).

---

## RÈGLES ABSOLUES — NON NÉGOCIABLES

### 1. Aucune décision visuelle autonome
Claude Code ne choisit JAMAIS une couleur, une police, une taille, un espacement ou un parti pris esthétique de lui-même. Tout est défini dans `UI-SPEC.md`. En cas de doute ou de manque : **s'arrêter et demander**, ne jamais inventer.

### 2. Jamais une page entière d'un coup
On construit **section par section**. Une section = un livrable. Après chaque section validée : commit atomique, puis section suivante. Ne jamais enchaîner plusieurs sections sans validation intermédiaire.

### 3. Respect strict de la charte
Les tokens de `UI-SPEC.md` sont la seule source de vérité visuelle. Ils proviennent du brandkit validé `phr-direction-B2-v4`. Ne pas dériver, ne pas "améliorer" sans demande explicite.

### 4. Le cerise est une signature, pas une couleur d'usage
Le cerise (#AE0060, la couleur du R du logo) apparaît dans deux contextes maximum par page : un mot-clé de titre fort + un élément signature discret. JAMAIS décoratif, jamais en aplat de fond large, jamais sur plusieurs mots d'un même titre.

### 5. Zéro slop typographique
Interdits formels : eyebrows en `//` ou `▸`, tags monospace style terminal, serif à fort contraste pleins/déliés, titres colorés sur plusieurs mots, pills `border-radius: 999px`, lorem ipsum. Le radius standard est 3px.

---

## STACK TECHNIQUE

- Next.js 14 (App Router)
- Tailwind CSS (tokens issus de UI-SPEC.md)
- TypeScript
- Sanity CMS (studio en français, labels métier)
- Framer Motion (animations sobres uniquement)

---

## PÉRIMÈTRE DU SITE

**Une page d'accueil vitrine** (sections + ancres + scroll fluide) + **10 pages de prestations** dédiées (SEO).

Voir `PHR-ARCHITECTURE-COMPLETE.md` pour la structure et tous les textes.

### Ce qu'on NE met PAS
- Pas de prix
- Pas de formulaire de contact (email mailto + téléphone tel: uniquement)
- Pas de photos de personnes
- Pas de témoignages, pas de blog, pas de chatbot

---

## ORDRE DE CONSTRUCTION

1. **Setup** — structure projet, ce fichier + UI-SPEC.md, config Tailwind
2. **Design System** — page `/design-system`, composants de base validés en réel AVANT les vraies pages
3. **Vibecoding accueil** — Nav → Footer → Hero → Chiffres → Prestations → Approche → Équipe (un commit par section)
4. **Gabarit prestation** — un template validé, puis les 10 pages
5. **Branchement Sanity** — schémas + remontée des textes (le contenu entre en CMS APRÈS validation de la structure)
6. **QA** — Lighthouse > 90, responsive 3 breakpoints, SEO + Schema.org
7. **Livraison** — déploiement + guide client Sanity en français

---

## CONTENU & CMS

- Tous les textes de l'architecture sont des **textes de base à valider** par le client.
- Une fois la structure validée, tout le contenu éditorial remonte dans Sanity pour que Céline puisse éditer sans toucher au code.
- On ne câble pas Sanity sur du vide : structure d'abord, CMS ensuite.

---

## SEO

- Schema.org : `AccountingService` + `LocalBusiness` (accueil), `Service` (pages prestations)
- Ancrage local fort : Fully, Valais, Romandie
- `<title>` + meta description par page, optimisés "fiduciaire Valais + [prestation]"

---

## COMMITS

Commits atomiques, un par section/composant validé. Messages clairs en français : `feat(hero): section hero accueil`, `feat(prestations): bloc automatisation`, etc.
