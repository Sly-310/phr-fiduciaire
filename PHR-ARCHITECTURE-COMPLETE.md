# PHR Fiduciaire — Architecture complète du site + contenus

Document de référence pour la construction du site. Tous les textes ci-dessous sont des **textes de base** à valider par Philippe et Céline — ils sont rédigés dans le ton voulu (expert, rassurant, local) en évitant le générique IA.

---

## PRINCIPES TRANSVERSAUX

**Positionnement éditorial :**
- Le fiduciaire classique → ton droit, rassurant, sobre, expert. La confiance d'un cabinet établi depuis 1982.
- L'automatisation → ton plus direct, concret, tourné résultat. C'est l'angle moderne porté par Céline.
- Le rose = signature rare. Apparaît au hero (un mot) + sur les sections/éléments liés à l'automatisation/renouveau. Jamais décoratif.

**Ce qu'on ne met pas :** prix, formulaire de contact, photos de personnes, témoignages clients, blog, chatbot.

**Contact :** email cliquable (mailto:) + téléphone cliquable (tel:). Rien d'autre.

**Structure technique :** une page d'accueil vitrine (sections avec ancres + scroll fluide) + pages de prestations dédiées pour le SEO.

---

## SITEMAP

```
/                          → Page d'accueil (vitrine, scroll)
/prestations/comptabilite
/prestations/fiscalite
/prestations/salaires
/prestations/successions
/prestations/expertises
/prestations/transmission-entreprise
/prestations/cabinets-medicaux
/prestations/automatisation
/prestations/family-office
/prestations/conseil-coaching
```

---

# PAGE D'ACCUEIL

## HEADER (fixe)

- Gauche : logo PHR
- Droite : `Prestations` · `Approche` · `Équipe` · `Contact`
- Liens = ancres vers les sections (#prestations, #approche, #equipe, #contact), scroll fluide animé
- Mobile : menu hamburger discret, même comportement
- Le header se densifie légèrement au scroll (fond papier + fine bordure basse)

---

## HERO

**Surtitre (petit, sauge italique) :**
Fiduciaire à Fully · depuis 1982

**Titre H1 :**
La rigueur de 1982.
L'efficacité de **maintenant**.

*(le mot "maintenant" = seul mot en rose du hero)*

**Sous-titre :**
Comptabilité, conseil et automatisation des processus pour les PME, les indépendants et les particuliers du Valais.

**CTA :**
`Découvrir nos prestations ↓` (scroll vers #prestations)

**Élément signature discret :**
Une fine ligne sauge + un point rose, rien de plus. Pas d'illustration.

---

## SECTION CHIFFRES / ANCRAGE

Trois repères, sobres, alignés :

- **Depuis 1982** — Plus de quarante ans au service du tissu économique valaisan
- **Valais & Romandie** — Un ancrage local, une disponibilité réelle
- **Experts agréés ASR** — La garantie d'une expertise reconnue

---

## SECTION PRESTATIONS *(ancre #prestations)*

**Surtitre :** Nos prestations
**Titre :** Tout ce qu'une fiduciaire doit savoir faire. Et quelque chose en plus.
**Intro (1 phrase) :** De la tenue de comptabilité à l'optimisation fiscale, nous couvrons l'ensemble des besoins d'une entreprise — avec une particularité que peu de fiduciaires maîtrisent.

### Bloc 1 — Le métier fiduciaire

Grille de prestations (chaque carte = titre + une ligne + lien vers la page dédiée) :

- **Comptabilité** — Tenue, bouclement, états financiers. Votre tableau de bord, toujours à jour.
- **Fiscalité** — Déclarations, optimisation, TVA. Un guide dans la complexité fiscale suisse.
- **Salaires & Payroll** — La gestion des salaires et des charges sociales, sans la charge mentale.
- **Successions & Héritages** — Affaires successorales et administration d'hoiries, avec tact et rigueur.
- **Expertises** — Expertises comptables et judiciaires par des experts reconnus.
- **Transmission d'entreprise** — Accompagner la reprise ou la cession, étape par étape.
- **Cabinets médicaux** — Une spécialisation dédiée aux professions de la santé.
- **Family Office** — La gestion patrimoniale globale, pensée sur le long terme.
- **Conseil & Coaching** — Un accompagnement de proximité, sur le terrain.

### Bloc 2 — L'automatisation *(fond sauge foncé, ton direct, rose en accent)*

**Surtitre (rose) :** Notre différence
**Titre :** Vos processus, enfin structurés.
**Texte :**
La plupart des entreprises accumulent les fichiers Excel : un ici, un autre là, jamais à jour, jamais au même endroit. Nous mettons en place des systèmes de gestion intégrés qui centralisent tout — comptabilité, stocks, suivi — et qui restent fiables dans le temps.

**3 bénéfices (une ligne chacun) :**
- Moins de saisie manuelle, moins d'erreurs
- Des données à jour, en temps réel
- Un accompagnement sur place jusqu'à ce que tout tourne seul

**Lien :** `Comment ça fonctionne →` (vers /prestations/automatisation)

---

## SECTION APPROCHE *(ancre #approche)*

**Surtitre :** Notre approche
**Titre :** Des solutions simples, pensées pour durer.

Trois principes (grille, style sobre) :

1. **Simple et efficace** — Nous privilégions les solutions claires, sans complexité inutile. Ce qui est simple tient dans le temps.
2. **Souple et léger** — Des structures adaptées à votre réalité, jamais surdimensionnées. Vous gardez l'agilité.
3. **Toujours la meilleure option** — Nous cherchons en continu la solution la plus juste pour vous. C'est notre manière de travailler depuis quarante ans.

**Phrase de clôture (italique, sauge) :**
Disponibilité et discrétion : deux mots qui résument notre manière d'accompagner nos clients.

---

## SECTION ÉQUIPE *(ancre #equipe)*

**Surtitre :** La maison
**Titre :** Deux générations, un même exigence.

*(pas de photos — deux blocs côte à côte)*

### Philippe Roduit
**Rôle :** Fondateur · Expert-comptable diplômé
**Texte :**
Philippe a fondé PHR en 1982. Expert réviseur agréé ASR, il est très engagé dans la formation de la profession en tant qu'expert examinateur. La rigueur, le sens du détail et la fidélité à ses clients sont sa marque de fabrique.

### Céline Roduit
**Rôle :** Cheffe expert · Branche fiduciaire et immobilière
**Texte :**
Céline poursuit l'œuvre de PHR dans le même esprit, en y ajoutant sa spécialité : la mise en place de systèmes de gestion et de comptabilité automatisés. Elle accompagne les entreprises sur le terrain pour structurer durablement leurs processus internes.

**Accréditations (sous les blocs, petite typo) :**
Membre Fiduciaire Suisse · Expert Suisse · Experts réviseurs agréés ASR · CFC branche fiduciaire et immobilière

---

## FOOTER *(ancre #contact)* — fond encre foncé

**Colonne 1 — Identité**
Logo PHR (version claire)
PHR Fiduciaire SA
Rue Maison-de-Commune 20 — CP 195
1926 Fully

**Colonne 2 — Navigation**
Prestations · Approche · Équipe

**Colonne 3 — Contact**
*(titre : Parlons de votre projet)*
- Téléphone : 027 746 29 54 → lien tel:+41277462954
- info@phrfiduciaire.ch → lien mailto:
- *(optionnel : philippe.roduit@ / celine.roduit@ si on veut les contacts directs)*

**Bas de footer :**
PHR Fiduciaire SA © 2026 · Fully, Valais · Expert-réviseur agréé ASR · Mentions légales

---

# GABARIT DES PAGES PRESTATIONS

Chaque page suit la même structure (inspirée de Nofival, en mieux) :

```
[Header identique à l'accueil]

[Fil d'ariane : Accueil → Prestations → Nom de la prestation]

[Titre H1 de la prestation]
[Sous-titre à caractère — pas générique]

[3-4 lignes d'explication claire de ce que c'est et pourquoi ça compte]

[Ce que nous faisons concrètement — liste courte, 4-6 points]

[Encart : phrase de réassurance + CTA contact (tel + mail)]

[Navigation latérale : liens vers les autres prestations]

[Footer identique]
```

---

## CONTENUS DES PAGES PRESTATIONS

### /prestations/comptabilite
**Titre :** Comptabilité
**Sous-titre :** Bien plus que des chiffres.
**Intro :** Une comptabilité bien tenue, c'est le tableau de bord de votre entreprise. Elle vous permet de décider en connaissance de cause, d'anticiper les difficultés et de saisir les bonnes opportunités. Que vous soyez indépendant, PME ou société, nous travaillons à la carte, selon vos besoins.
**Ce que nous faisons :**
- Tenue complète ou partielle de votre comptabilité
- Bouclement et établissement des comptes annuels
- États financiers et analyse de bilan
- Décomptes TVA
- Gestion des débiteurs et suivi des paiements
- Budgets et tableaux de bord

### /prestations/fiscalite
**Titre :** Fiscalité
**Sous-titre :** Un guide dans la complexité du système fiscal suisse.
**Intro :** À mi-chemin entre la comptabilité et le droit, la fiscalité demande une lecture précise de chaque situation. Notre objectif : que vous payiez le juste impôt, ni plus, ni moins, en toute conformité.
**Ce que nous faisons :**
- Déclarations fiscales des particuliers et des sociétés
- Planification et optimisation fiscale
- Conseil lors de restructurations
- Réclamations et recours
- Impôts spéciaux : gains immobiliers, successions, donations, impôt à la source
- Gestion de la TVA

### /prestations/salaires
**Titre :** Salaires & Payroll
**Sous-titre :** La gestion des salaires, sans la charge mentale.
**Intro :** Dans les petites entreprises, la gestion des salaires devient vite « l'affaire du chef » — et chaque année apporte ses nouveaux règlements. Confiez-nous cette charge et concentrez-vous sur votre métier.
**Ce que nous faisons :**
- Établissement des salaires mensuels et certificats annuels
- Décomptes aux assurances sociales (AVS, LAA, LPP, etc.)
- Contrats de travail et conseil en droit du travail
- Préparation des paiements
- Suivi des contrôles des caisses sociales

### /prestations/successions
**Titre :** Successions & Héritages
**Sous-titre :** Accompagner les moments qui comptent, avec tact.
**Intro :** Les affaires successorales touchent autant à la technique qu'à l'humain. Nous accompagnons les familles et les héritiers avec rigueur et discrétion, pour que chaque étape se déroule sereinement.
**Ce que nous faisons :**
- Affaires successorales et planification
- Administration d'hoiries
- Déclarations d'impôts sur les successions et donations
- Conseil en transmission de patrimoine

### /prestations/expertises
**Titre :** Expertises
**Sous-titre :** L'avis d'experts reconnus.
**Intro :** Certaines situations exigent un regard neutre et qualifié. Nos experts réalisent des expertises comptables et judiciaires reconnues, fondées sur des décennies de pratique.
**Ce que nous faisons :**
- Expertises comptables
- Expertises judiciaires
- Rapports spéciaux
- Évaluations d'entreprises

### /prestations/transmission-entreprise
**Titre :** Transmission & Reprise d'entreprise
**Sous-titre :** Passer le relais, dans les meilleures conditions.
**Intro :** Reprendre ou céder une entreprise est une étape majeure. Nous vous accompagnons à chaque phase — évaluation, structuration, négociation — pour sécuriser la transition.
**Ce que nous faisons :**
- Évaluation d'entreprise
- Structuration de la reprise ou de la cession
- Transformations et restructurations
- Accompagnement à la transition

### /prestations/cabinets-medicaux
**Titre :** Cabinets médicaux
**Sous-titre :** Une fiduciaire qui connaît votre métier.
**Intro :** Les professions de la santé ont des besoins comptables et fiscaux spécifiques. Forts d'une spécialisation dédiée, nous accompagnons les médecins et cabinets dans toute leur gestion.
**Ce que nous faisons :**
- Comptabilité adaptée aux cabinets médicaux
- Fiscalité des professions libérales
- Gestion administrative et salaires
- Conseil à l'installation et à la remise de cabinet

### /prestations/automatisation *(page phare — ton direct, rose en accent)*
**Titre :** Automatisation des processus
**Sous-titre :** Fini les quinze fichiers Excel.
**Intro :** La plupart des entreprises gèrent leurs données dans des fichiers dispersés, rarement à jour, rarement fiables. Nous mettons en place des systèmes de gestion intégrés qui centralisent votre comptabilité, vos stocks et votre suivi — et nous restons à vos côtés jusqu'à ce que tout fonctionne sans vous.
**Ce que nous faisons :**
- Analyse de vos processus actuels et de vos besoins réels
- Mise en place d'un système de gestion centralisé
- Migration sécurisée de vos données existantes
- Formation et coaching de vos équipes sur place
- Suivi personnalisé jusqu'à l'autonomie complète
**Encart spécifique :** Ce service est notre signature. Peu de fiduciaires le proposent — parce qu'il demande à la fois la maîtrise comptable et la compréhension des outils. Nous avons les deux.

### /prestations/family-office
**Titre :** Family Office
**Sous-titre :** Votre patrimoine, pensé sur le long terme.
**Intro :** Gérer un patrimoine familial demande une vision d'ensemble et de la constance. Nous coordonnons l'ensemble de vos intérêts financiers, fiscaux et administratifs, sur la durée.
**Ce que nous faisons :**
- Gestion et administration de sociétés
- Coordination patrimoniale globale
- Suivi fiscal et financier
- Conseil en prévoyance

### /prestations/conseil-coaching
**Titre :** Conseil & Coaching
**Sous-titre :** Sur le terrain, à vos côtés.
**Intro :** Au-delà des chiffres, nous accompagnons les dirigeants dans leurs décisions. Un conseil de proximité, concret, fondé sur l'expérience — et un coaching pour mettre en œuvre les changements, pas seulement les recommander.
**Ce que nous faisons :**
- Conseil en gestion et finances
- Analyses financières et aide à la décision
- Coaching de mise en œuvre sur place
- Accompagnement des équipes au changement

---

## NOTES POUR LE DÉVELOPPEMENT

- Tous ces textes sont des **textes de base à valider** — marquer dans le CMS qu'ils sont éditables par le client.
- Schema.org : type `AccountingService` + `LocalBusiness` sur l'accueil, type `Service` sur chaque page prestation. Adresse Fully + canton Valais pour le SEO local.
- Chaque page prestation doit avoir un `<title>` et `meta description` optimisés "fiduciaire Valais + [prestation]".
- Pas de photos : illustrer par typographie, formes géométriques, le travail sur la couleur (sauge / encre / papier / rose en signature).
