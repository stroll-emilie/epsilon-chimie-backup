# Design Specs & Handoff — Epsilon Chimie
**Projet :** Refonte du site web Epsilon Chimie
**Préparé par :** Stroll. Collectif
**Stack :** React / Vite + **Tailwind CSS v4**
**Date :** Avril 2026
**Référentiel :** WCAG 2.1 AA

> **Note de lecture :** toutes les valeurs sont exprimées en `px` pour le design Figma, avec la **classe Tailwind équivalente** pour le dev. Les valeurs sans classe native Tailwind utilisent la syntaxe arbitraire `[valeur]`. Les variables personnalisées sont à déclarer dans le fichier `@theme` de Tailwind v4.

---

## PARTIE 1 — SYSTÈME GLOBAL

### 1.1 Grille & Conteneur

| Élément | Valeur px | Classe Tailwind | Justification |
|---|---|---|---|
| Max-width conteneur | 1280px | `max-w-screen-xl` | Standard B2B desktop. Au-delà, lignes > 80 car. (WCAG 1.4.8) |
| Gutter colonnes — desktop | 32px | `gap-8` | — |
| Gutter colonnes — tablette | 24px | `gap-6` | — |
| Gutter colonnes — mobile | 16px | `gap-4` | — |
| Margin latérale — desktop | 80px | `px-20` | — |
| Margin latérale — tablette | 40px | `px-10` | — |
| Margin latérale — mobile | 24px | `px-6` | — |
| Padding section — desktop | 96px | `py-24` | Rythme vertical entre blocs |
| Padding section — tablette | 64px | `py-16` | — |
| Padding section — mobile | 48px | `py-12` | — |

### 1.2 Breakpoints Tailwind

| Préfixe Tailwind | Valeur | Cible |
|---|---|---|
| *(default, sans préfixe)* | 0px+ | Mobile-first base |
| `sm:` | 640px | Petits mobiles / paysage |
| `md:` | 768px | Tablettes |
| `lg:` | 1024px | Desktop standard |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Très grands écrans |

**Stratégie responsive :** le design Figma est **desktop-first** (1440px de frame), mais le code Tailwind est écrit **mobile-first** (classes de base = mobile, overrides à `lg:` et `xl:`). Le stagiaire doit le savoir dès le départ pour ne pas réécrire.

### 1.3 Système typographique

> **Écart important avec Tailwind natif :** `text-3xl` = 30px (pas 32px), `text-4xl` = 36px (pas 44px), `text-5xl` = 48px (pas 52px). Deux options : ajuster les tailles aux valeurs Tailwind natives (recommandé pour la cohérence du code), ou étendre le thème avec des valeurs custom.

**Option recommandée : étendre le thème dans Tailwind v4**
```css
/* Dans ton fichier CSS principal (ex: globals.css) */
@theme {
  --font-size-display: 3.25rem;   /* 52px */
  --font-size-h1: 2.75rem;        /* 44px */
  --font-size-h2: 2rem;           /* 32px */
}
```
Puis dans Figma, utiliser ces tokens nommés pour annoter tes composants.

| Token | px desktop | px mobile | Classe Tailwind | Line-height | Weight |
|---|---|---|---|---|---|
| `display` | 52px | 36px | `text-[52px]` / `text-display` (custom) | `leading-none` (1.1) | `font-extrabold` |
| `h1` | 44px | 32px | `text-[44px]` / `text-h1` (custom) | `leading-tight` (1.25) | `font-bold` |
| `h2` | 32px | 26px | `text-[32px]` / `text-h2` (custom) | `leading-snug` (1.375) | `font-bold` |
| `h3` | 24px | 20px | `text-2xl` ✅ | `leading-snug` | `font-semibold` |
| `h4` | 18px | 16px | `text-lg` ✅ | `leading-normal` (1.5) | `font-semibold` |
| `body-lg` | 18px | 18px | `text-lg` ✅ | `leading-relaxed` (1.625) | `font-normal` |
| `body` | 16px | 16px | `text-base` ✅ | `leading-relaxed` | `font-normal` |
| `small` | 14px | 14px | `text-sm` ✅ | `leading-normal` | `font-normal` |
| `caption` | 12px | 12px | `text-xs` ✅ | `leading-normal` | `font-normal` |
| `label` | 13px | 13px | `text-[13px]` | `leading-tight` | `font-semibold` |

**Règle WCAG 1.4.12 (Text Spacing) :** à intégrer dans les styles de base :
```css
/* Dans @layer base */
body {
  line-height: 1.5;
  letter-spacing: 0.01em;
  word-spacing: 0.05em;
}
```

### 1.4 Espacement — Correspondances Tailwind

| Token design | px | Classe Tailwind (margin/padding) | Usage |
|---|---|---|---|
| `space-1` | 4px | `p-1` / `m-1` | Micro (icône → texte) |
| `space-2` | 8px | `p-2` / `m-2` | Intra-composant |
| `space-3` | 12px | `p-3` / `m-3` | — |
| `space-4` | 16px | `p-4` / `m-4` | Padding interne composants |
| `space-5` | 20px | `p-5` / `m-5` | — |
| `space-6` | 24px | `p-6` / `m-6` | Entre composants proches |
| `space-8` | 32px | `p-8` / `m-8` | Entre blocs |
| `space-10` | 40px | `p-10` / `m-10` | — |
| `space-12` | 48px | `p-12` / `m-12` | Sections légères |
| `space-16` | 64px | `p-16` / `m-16` | Sections importantes |
| `space-20` | 80px | `p-20` / `m-20` | Grandes sections |
| `space-24` | 96px | `p-24` / `m-24` | Sections de page |
| `space-32` | 128px | `p-32` / `m-32` | Hero → section suivante |

### 1.5 Composants globaux

#### Header sticky

| Propriété | px | Classe Tailwind |
|---|---|---|
| Hauteur desktop | 72px | `h-[72px]` *(pas de h-18 en Tailwind v3 standard — `h-18` = 72px existe en v4)* |
| Hauteur mobile | 64px | `h-16` |
| Logo hauteur max | 40px | `h-10` |
| Logo largeur max | 160px | `max-w-[160px]` |
| Zone cliquable nav items (min) | 44px | `min-h-[44px]` `py-3` |
| CTA "Request a Quote" hauteur | 44px | `h-11` |
| CTA padding horizontal | 24px | `px-6` |
| Z-index | 100 | `z-[100]` |
| Ombre au scroll | — | `shadow-md` |

> **Note Tailwind v4 :** `h-18` = 72px est disponible nativement en v4. En v3, utiliser `h-[72px]`.

**Classes utilitaires header :**
```html
<header class="sticky top-0 z-[100] h-16 lg:h-[72px] bg-white shadow-md">
  <div class="max-w-screen-xl mx-auto px-6 lg:px-20 h-full flex items-center justify-between">
    <!-- logo | nav | cta -->
  </div>
</header>
```

#### Boutons

| Variant | Hauteur | Padding H | Font | Min-width | Classes Tailwind |
|---|---|---|---|---|---|
| Primary | 48px | 24px | 16px/600 | 160px | `h-12 px-6 text-base font-semibold min-w-[160px] rounded-lg` |
| Secondary | 48px | 24px | 16px/600 | 160px | `h-12 px-6 text-base font-semibold min-w-[160px] rounded-lg border-2` |
| Ghost | 44px | 20px | 15px/500 | 140px | `h-11 px-5 text-[15px] font-medium min-w-[140px] rounded-lg` |
| Small | 36px | 16px | 14px/500 | — | `h-9 px-4 text-sm font-medium rounded-md` |

**Focus ring (WCAG) :**
```css
/* Dans @layer base ou le composant Button */
.btn:focus-visible {
  @apply outline outline-3 outline-offset-2 outline-[--color-primary];
}
```

#### Champs de formulaire

| Propriété | px | Classe Tailwind |
|---|---|---|
| Hauteur input/select | 48px | `h-12` |
| Hauteur textarea | 120px min | `min-h-[120px]` |
| Border radius | 8px | `rounded-lg` |
| Border | 1.5px solid | `border border-[1.5px]` |
| Padding interne | 12px 16px | `py-3 px-4` |
| Font size | 16px | `text-base` |
| Label font | 14px | `text-sm` |
| Espacement label → champ | 6px | `mb-1.5` |
| Espacement champ → suivant | 24px | `mb-6` |
| Message d'erreur font | 14px | `text-sm text-red-600` |
| Espacement champ → erreur | 4px | `mt-1` |

---

## PARTIE 2 — SPECS PAR PAGE

---

### PAGE 1 — HOME

#### Conteneur et zones

| Zone | Hauteur desktop | Classes Tailwind clés |
|---|---|---|
| Hero | min 560px | `min-h-[560px] lg:min-h-[600px]` |
| Trust strip | 80px | `h-20 flex items-center` |
| Browse by application | Auto | `py-24 grid grid-cols-3 gap-4` |
| Custom synthesis teaser | Auto | `py-24 grid grid-cols-2 gap-12` |
| Our commitment | Auto | `py-16 grid grid-cols-3 gap-8` |

#### Hero section

| Élément | Valeur | Classes Tailwind |
|---|---|---|
| Padding top | 96px | `pt-24` |
| Padding bottom | 96px | `pb-24` |
| H1 | 52px desktop / 36px mobile | `text-4xl lg:text-[52px] font-extrabold` |
| Sous-tagline | 18px, max 640px | `text-lg max-w-xl text-[--color-muted]` |
| Search bar largeur max | 720px | `max-w-[720px] w-full mx-auto` |
| Search bar hauteur | 56px | `h-14` |
| Search bar border-radius | 12px | `rounded-xl` |
| Icône loupe | 24×24px | `w-6 h-6` |
| Bouton submit dans search bar | 120×56px | `w-[120px] h-14 rounded-r-xl` |
| Gap sous-tagline → search bar | 40px | `mt-10` |
| Gap search bar → CTAs | 32px | `mt-8` |

**Autocomplete dropdown :**
```html
<!-- ARIA obligatoire -->
<input role="combobox" aria-autocomplete="list" aria-controls="search-listbox" aria-expanded="true" />
<ul id="search-listbox" role="listbox">
  <li role="option" aria-selected="false">...</li>
</ul>
```

#### Trust strip

| Élément | Classes Tailwind |
|---|---|
| Conteneur | `h-20 flex items-center justify-between max-w-screen-xl mx-auto px-20` |
| Responsive (2×2 sur mobile) | `grid grid-cols-2 lg:flex lg:justify-between h-auto lg:h-20 py-4 lg:py-0` |
| Icône | `w-6 h-6 shrink-0` |
| Label | `text-[13px] font-semibold uppercase tracking-wide` |
| Gap icône → label | `gap-2` |

#### Browse by application (grille)

| Élément | Classes Tailwind |
|---|---|
| Grille | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` |
| Card hauteur | `h-[120px] lg:h-[140px]` |
| Card padding | `p-6` |
| Card border radius | `rounded-xl` |
| Card hover | `hover:-translate-y-1 hover:shadow-lg transition-all duration-200` |

---

### PAGE 2 — CATALOGUE / SEARCH

#### Layout principal

| Zone | Classes Tailwind |
|---|---|
| Wrapper principal | `flex gap-8 max-w-screen-xl mx-auto px-20 py-12` |
| Sidebar | `w-[280px] shrink-0 hidden lg:block` |
| Zone résultats | `flex-1 min-w-0` |
| Bouton "Filters" mobile | `lg:hidden h-10 px-4 text-sm font-medium rounded-lg border` |

#### Sidebar filtres

| Propriété | Classes Tailwind |
|---|---|
| Largeur | `w-[280px]` |
| Padding | `p-6` |
| Titre de groupe filtre | `text-[13px] font-semibold uppercase tracking-widest text-[--color-muted] mb-3` |
| Gap entre groupes | `space-y-6` |
| Zone cliquable checkbox | `flex items-center gap-2.5 min-h-[44px] cursor-pointer` |
| Checkbox visuelle | `w-5 h-5 rounded` *(zone cliquable = 44px via padding du label)* |
| Bouton Apply | `w-full h-11 rounded-lg font-semibold` |
| Bouton Reset | `w-full h-9 rounded-lg text-sm border mt-2` |

**Drawer mobile :**
```html
<!-- Overlay + panel full-height -->
<div class="fixed inset-0 z-50 lg:hidden">
  <div class="absolute inset-0 bg-black/40" /> <!-- overlay -->
  <div class="absolute right-0 top-0 h-full w-[320px] bg-white flex flex-col">
    <!-- header drawer -->
    <div class="flex items-center justify-between p-4 border-b h-14">
      <span class="font-semibold">Filters</span>
      <button class="h-10 w-10 flex items-center justify-center rounded-lg" aria-label="Close filters">✕</button>
    </div>
    <!-- contenu filtres — scrollable -->
    <div class="flex-1 overflow-y-auto p-6"> ... </div>
    <!-- CTA sticky bas -->
    <div class="p-4 border-t">
      <button class="w-full h-12 rounded-lg font-semibold bg-[--color-primary] text-white">Apply filters</button>
    </div>
  </div>
</div>
```

#### Tableau de résultats

| Propriété | Classes Tailwind |
|---|---|
| Ligne de résultat | `h-14 border-b hover:bg-[--color-surface] cursor-pointer transition-colors` |
| Colonne Nom (flex 3) | `flex-[3] min-w-0 truncate pr-4 font-medium` |
| Colonne CAS | `w-[140px] shrink-0 text-sm font-mono text-[--color-muted]` |
| Colonne Référence | `w-[120px] shrink-0 text-sm` |
| Colonne Conditionnements | `flex-[2] text-sm` |
| Colonne Action | `w-[160px] shrink-0 text-right` |
| Troncature noms longs | `truncate` (+ `title` en HTML pour tooltip natif) |

> **`font-mono` sur les CAS numbers** : les numéros CAS doivent s'afficher en police à chasse fixe (`font-mono`) pour un alignement parfait dans le tableau. C'est une convention forte dans les catalogues chimiques — à spécifier dans le Figma.

**Header du tableau (accessibilité) :**
```html
<table class="w-full text-sm">
  <thead>
    <tr class="h-11 border-b text-left text-[13px] font-semibold uppercase tracking-wide text-[--color-muted]">
      <th scope="col" class="flex-[3]" aria-sort="ascending">Product name</th>
      <th scope="col" class="w-[140px]">CAS number</th>
      ...
    </tr>
  </thead>
  <tbody> ... </tbody>
</table>
```

#### État "No results"

| Propriété | Classes Tailwind |
|---|---|
| Centrage | `flex flex-col items-center justify-center py-20 text-center` |
| Icône | `w-16 h-16 mb-6 text-[--color-muted]` |
| Titre | `text-2xl font-bold mb-3` |
| Description | `text-base text-[--color-muted] max-w-md mb-8` |

---

### PAGE 3 — CUSTOM SYNTHESIS

#### How it works (stepper)

| Propriété | Classes Tailwind |
|---|---|
| Layout desktop | `grid grid-cols-4 gap-8` |
| Layout mobile | `flex flex-col gap-8` |
| Numéro d'étape (cercle) | `w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold` |
| Connecteur horizontal | `hidden lg:block absolute top-6 left-[calc(50%+24px)] right-0 h-0.5 bg-[--color-border]` |
| Titre d'étape | `text-lg font-semibold mt-4 mb-2` |
| Description d'étape | `text-sm text-[--color-muted] max-w-[180px]` |

> La `<ol>` + `<li>` est obligatoire ici (liste ordonnée sémantique).

#### CTA final

| Propriété | Classes Tailwind |
|---|---|
| Section | `py-20 text-center bg-[--color-surface]` |
| Titre | `text-3xl font-bold mb-4 max-w-lg mx-auto` |
| Bouton | `h-[52px] px-10 text-base font-semibold rounded-xl min-w-[220px]` |

---

### PAGE 4 — ABOUT / EXPERTISE

#### Hero image

| Propriété | Classes Tailwind |
|---|---|
| Hauteur desktop | `h-[480px]` |
| Hauteur mobile | `h-[320px]` |
| Image | `w-full h-full object-cover` |
| Overlay si texte dessus | `bg-gradient-to-r from-black/60 to-transparent` |

#### Key figures

| Propriété | Classes Tailwind |
|---|---|
| Grille | `grid grid-cols-2 lg:grid-cols-4 gap-6` |
| Hauteur item | `h-[140px] flex flex-col items-center justify-center` |
| Chiffre | `text-[52px] font-extrabold leading-none` |
| Label | `text-sm text-[--color-muted] mt-2` |

**`prefers-reduced-motion` obligatoire sur le CountUp :**
```jsx
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Si prefersReduced === true → afficher la valeur finale directement sans animation
```

#### Cards équipe

| Propriété | Classes Tailwind |
|---|---|
| Card | `flex flex-col items-center text-center p-8 rounded-2xl` |
| Photo | `w-20 h-20 rounded-full object-cover mb-4` |
| Nom | `text-lg font-semibold` |
| Rôle | `text-sm text-[--color-muted] mt-1` |
| Bio | `text-sm mt-3 max-w-[240px] text-[--color-muted]` |

---

### PAGE 5 — QUOTE REQUEST

#### Layout

| Zone | Classes Tailwind |
|---|---|
| Wrapper | `max-w-screen-xl mx-auto px-6 lg:px-20 py-16` |
| Layout 2 colonnes | `grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12` |
| Formulaire max-width (sans aside) | `max-w-[720px]` |
| Aside | `w-[320px] hidden lg:block` |
| Aside sticky | `sticky top-[88px]` *(72px header + 16px offset)* |

#### En-tête de page

| Propriété | Classes Tailwind |
|---|---|
| H1 | `text-[44px] font-bold leading-tight` |
| Sous-titre | `text-lg text-[--color-muted] mt-3` |
| Gap titre → formulaire | `mt-12` |

#### Champs spécifiques

| Champ | Classes Tailwind notables |
|---|---|
| Input standard | `h-12 w-full rounded-lg border border-[1.5px] px-4 text-base focus:outline-none focus:ring-2 focus:ring-[--color-primary] focus:ring-offset-1` |
| Input en erreur | `border-red-500 focus:ring-red-500` |
| Textarea | `min-h-[120px] w-full rounded-lg border border-[1.5px] px-4 py-3 text-base resize-y` |
| Select/Dropdown | `h-12 w-full rounded-lg border border-[1.5px] px-4 text-base appearance-none bg-[url(...)] bg-no-repeat bg-right` |
| Label | `block text-sm font-medium mb-1.5` |
| Helper text | `text-sm text-[--color-muted] mt-1` |
| Message d'erreur | `text-sm text-red-600 mt-1 flex items-center gap-1` |
| Titre de section form | `text-[13px] font-semibold uppercase tracking-widest text-[--color-muted] mb-6 pb-2 border-b` |

#### Checkbox RGPD (accessibilité critique)

```html
<label class="flex items-start gap-3 cursor-pointer min-h-[44px]">
  <input
    type="checkbox"
    required
    aria-required="true"
    class="mt-0.5 w-5 h-5 rounded shrink-0 accent-[--color-primary]"
  />
  <span class="text-sm leading-relaxed">
    I agree that Epsilon Chimie may process my data to respond to this request.
    <a href="/privacy" class="underline">Read our privacy policy</a>
  </span>
</label>
```

> Le `min-h-[44px]` sur le `<label>` garantit la zone cliquable WCAG 2.5.5 même si la checkbox visuelle est 20×20px.

#### Bouton submit

| État | Classes Tailwind |
|---|---|
| Default actif | `h-12 w-full lg:w-auto lg:min-w-[200px] px-8 rounded-lg font-semibold bg-[--color-primary] text-white` |
| Disabled | `opacity-40 cursor-not-allowed` + `aria-disabled="true"` (pas `disabled` natif) |
| Loading | `cursor-wait` + spinner SVG 20px inline + `aria-busy="true"` |

#### Aside

| Propriété | Classes Tailwind |
|---|---|
| Conteneur | `rounded-2xl border p-6 sticky top-[88px]` |
| Item de réassurance | `flex items-start gap-3 mb-4` |
| Icône item | `w-5 h-5 shrink-0 mt-0.5 text-[--color-primary]` |
| Séparateur | `border-t my-4` |
| Contact (email/tél) | `text-sm font-medium` |

#### Confirmation post-envoi

| Propriété | Classes Tailwind |
|---|---|
| Animation entrée | `animate-[fadeInUp_300ms_ease-out]` (custom keyframe) |
| Icône check | `w-16 h-16 text-green-500 mx-auto mb-6` |
| Titre | `text-3xl font-bold text-center mb-4` |
| Description | `text-base text-[--color-muted] text-center max-w-md mx-auto mb-8` |
| Récapitulatif | `rounded-xl bg-[--color-surface] p-6 mb-8` |
| CTAs secondaires | `flex flex-col sm:flex-row gap-3 justify-center` |

---

## PARTIE 3 — ACCESSIBILITÉ WCAG 2.1 AA (AVEC TAILWIND)

### Contrastes

| Type | Ratio | À vérifier avec |
|---|---|---|
| Texte normal < 18px | **4.5:1 min** | [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) |
| Texte large ≥ 18px | **3:1 min** | Idem |
| Bordures UI (inputs, boutons) | **3:1 min** | — |

> Vérifier les combinaisons : couleur primaire sur blanc, texte sur fond coloré, placeholder sur fond blanc (les placeholders gris clair sont souvent non conformes).

### Focus ring global (Tailwind)

```css
/* Dans @layer base — remplace les styles focus par défaut du navigateur */
*:focus-visible {
  @apply outline outline-2 outline-offset-2 outline-[--color-primary];
}

/* Supprimer uniquement pour les éléments qui ont leur propre focus style */
.custom-focus:focus-visible {
  @apply outline-none ring-2 ring-[--color-primary] ring-offset-2;
}
```

### `prefers-reduced-motion`

```css
/* À placer dans @layer base */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Ou avec Tailwind : utiliser le préfixe `motion-safe:` / `motion-reduce:` sur les classes d'animation :
```html
<div class="motion-safe:animate-bounce motion-reduce:animate-none">...</div>
```

### Skip link (obligatoire, visible au focus)

```html
<a
  href="#main-content"
  class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:h-11 focus:px-6 focus:rounded-lg focus:bg-white focus:text-[--color-primary] focus:font-semibold focus:shadow-lg"
>
  Skip to main content
</a>
```

---

## PARTIE 4 — VARIABLES CSS @THEME (Tailwind v4)

```css
/* globals.css ou app.css */
@import "tailwindcss";

@theme {
  /* Couleurs — à compléter après validation DA */
  --color-primary: ;
  --color-primary-dark: ;
  --color-primary-light: ;
  --color-secondary: ;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;
  --color-error: #dc2626;
  --color-success: #16a34a;

  /* Typographie custom */
  --font-size-display: 3.25rem;   /* 52px */
  --font-size-h1: 2.75rem;        /* 44px */
  --font-size-h2: 2rem;           /* 32px */

  /* Layout */
  --header-height: 72px;
  --sidebar-width: 280px;
  --aside-width: 320px;
}
```

> **Note :** en Tailwind v4, les variables `@theme` sont automatiquement disponibles comme utilitaires CSS. `--color-primary` devient utilisable avec `bg-primary`, `text-primary`, `border-primary`, etc. — pas besoin de configuration `tailwind.config.js`.

---

## PARTIE 5 — COMPOSANTS REACT PRIORITAIRES

| Composant | Props clés | Tailwind classes à documenter |
|---|---|---|
| `<Header />` | `currentPage` | sticky, skip-link, responsive nav |
| `<SearchBar />` | `onSearch`, `suggestions`, `defaultValue` | `h-14 rounded-xl` + autocomplete ARIA |
| `<ProductRow />` | `product` (name, cas, ref, packaging) | `h-14 truncate font-mono` |
| `<FilterSidebar />` | `filters`, `activeFilters`, `onChange` | drawer mobile + `w-[280px]` |
| `<QuoteForm />` | `prefillProduct`, `mode` (catalogue/custom) | validation, aria, confirmation |
| `<Button />` | `variant`, `size`, `isLoading`, `isDisabled` | tous les états |
| `<Input />` | `label`, `error`, `hint`, `required` | `h-12`, label, error, aria |
| `<TrustStrip />` | `items` | `h-20 flex` |
| `<Footer />` | — | 4 liens légaux obligatoires |
| `<CookieBanner />` | `onAccept`, `onReject`, `onCustomize` | boutons équivalents (CNIL) |
