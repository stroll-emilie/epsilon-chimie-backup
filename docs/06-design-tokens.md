# Design Tokens — Epsilon Chimie
**Projet :** Refonte du site web Epsilon Chimie
**Préparé par :** Stroll. Collectif
**Date :** Avril 2026
**Source :** Collections Figma — fichier `YhMxgEY4basLOkAxkTqeNy`

---

## Principes de nomenclature

### Convention
Tous les tokens suivent la syntaxe **kebab-case** en trois à quatre segments :

```
{catégorie}-{groupe}-{variante}[-{modificateur}]
```

Exemples : `color-content-primary`, `color-bg-danger`, `color-border-reversed`, `spacing-large`

### Couches du système
1. **Primitives** — palette brute (ex. `primary/500`, `gray/200`) — définie dans la collection _Tailwind CSS v4.0.0_
2. **Sémantiques** — tokens nommés par usage (ce fichier) — collections _Content, Background, Surface, Border, Icons, States_
3. **Composants** — tokens spécifiques à un composant (button-bg-primary, input-border-focus) — à définir dans les specs composants

Les maquettes Figma et le code React doivent **toujours référencer la couche sémantique**, jamais directement les primitives.

---

## ⚠️ Problèmes détectés — à corriger avant production

Plusieurs variables actuelles dans Figma ont des valeurs incorrectes pour leur usage déclaré. Elles sont signalées `❌ WCAG` dans les tableaux ci-dessous.

| Token | Valeur actuelle | Problème | Correction recommandée |
|---|---|---|---|
| `color-content-primary` | gray/500 — #6a7282 | Contraste 4.0:1 sur blanc — **sous le seuil WCAG AA (4.5:1)** pour texte normal | → gray/700 (#364153) — 7.8:1 |
| `color-content-secondary` | gray/200 — #e5e7eb | Contraste 1.7:1 — **inutilisable** comme couleur de texte | → gray/500 (#6a7282) — 4.0:1 (texte large) ou gray/600 pour texte normal |
| `color-content-tertiary` | gray/200 — #e5e7eb | Même problème que Secondary | → gray/400 (#99a1af) pour placeholders (texte large uniquement) |
| `color-content-success` | green/50 — #f0fdf4 | C'est une couleur de fond, pas de texte | → green/700 (#008236) |
| `color-content-info` | cyan/300 — #53eafd | Contraste 1.3:1 sur blanc — illisible | → cyan/700 (#007595) |
| `color-content-warning` | amber/300 — #ffd230 | Contraste 1.4:1 sur blanc — illisible | → amber/700 (#bb4d00) |
| `color-content-danger` | red/300 — #ffa2a2 | Contraste 2.8:1 sur blanc — insuffisant | → red/600 (#e7000b) |
| `color-state-primary-hover` | #000087 | Identique au primaire — aucune différence visuelle au hover | → primary/400 (#33339f) ou Background dark hover (#0f0f8e) |
| `color-state-primary-pressed` | #000087 | Idem | → primary/600 (#00006c) |

---

## 1. Tokens de couleur — Contenu (texte)

**Préfixe :** `color-content-`
**Usage :** toutes les couleurs de texte, labels, valeurs, icônes inline

| Token kebab-case | Nom Figma actuel | Alias primitif | Valeur hex | Usage |
|---|---|---|---|---|
| `color-content-primary` | Content/Primary | gray/500 | #6a7282 | ❌ WCAG — Corps de texte principal. **Corriger vers gray/700 (#364153)** |
| `color-content-secondary` | Content/Secondary | gray/200 | #e5e7eb | ❌ WCAG — Texte secondaire, métadonnées, captions. **Corriger vers gray/600 (#4a5565)** |
| `color-content-tertiary` | Content/Tertiary | gray/200 | #e5e7eb | ❌ WCAG — Texte tertiaire, placeholder de champs. **Corriger vers gray/400 (#99a1af)** |
| `color-content-disabled` | Content/Disabled | gray/100 | #f3f4f6 | ✅ Intentionnel — texte dans les états désactivés (faible contraste voulu) |
| `color-content-accent` | Content/Accent | primary/500 | #000087 | ✅ Texte accentué marque : liens, tags actifs, valeurs mises en avant |
| `color-content-success` | Content/Success | green/50 | #f0fdf4 | ❌ WCAG — Texte d'état success (ex. "Quote sent"). **Corriger vers green/700 (#008236)** |
| `color-content-info` | Content/Info | cyan/300 | #53eafd | ❌ WCAG — Texte informatif. **Corriger vers cyan/700 (#007595)** |
| `color-content-warning` | Content/Warning | amber/300 | #ffd230 | ❌ WCAG — Texte d'avertissement. **Corriger vers amber/700 (#bb4d00)** |
| `color-content-danger` | Content/Danger | red/300 | #ffa2a2 | ❌ WCAG — Messages d'erreur de formulaire, alertes critiques. **Corriger vers red/600 (#e7000b)** |
| `color-content-reversed-primary` | Content/reversedPrimary | gray/50 | #f9fafb | ✅ Texte principal sur fond sombre (hero, footer, boutons primaires) |
| `color-content-reversed-secondary` | Content/reversedSecondary | gray/100 | #f3f4f6 | ✅ Texte secondaire sur fond sombre |
| `color-content-reversed-tertiary` | Content/reversedTertiary | gray/600 | #4a5565 | ⚠️ Tertiaire sur fond sombre — vérifier le contraste selon le fond exact utilisé |

**Tokens manquants à ajouter :**

| Token kebab-case | Valeur suggérée | Usage |
|---|---|---|
| `color-content-link` | primary/500 — #000087 | Hyperliens dans le corps de texte |
| `color-content-link-hover` | primary/400 — #33339f | Hyperliens au hover |
| `color-content-on-primary` | gray/50 — #f9fafb | Alias explicite de reversed-primary pour les boutons |

---

## 2. Tokens de couleur — Arrière-plans (background)

**Préfixe :** `color-bg-`
**Usage :** fond de page, fond de sections, fond d'alertes, fond de composants

| Token kebab-case | Nom Figma actuel | Alias primitif | Valeur hex | Usage |
|---|---|---|---|---|
| `color-bg-default` | Background/Neutral-soft | gray/50 | #f9fafb | Fond de page par défaut (body background) |
| `color-bg-subtle` | Background/Neutral | gray/100 | #f3f4f6 | Sections alternées, fond de tableau, sidebar |
| `color-bg-primary` | Background/Primary | primary/500 | #000087 | Fond marque fort : hero, header scrolled, boutons CTA |
| `color-bg-primary-subtle` | Background/Primary-soft | primary/100 | #cccce7 | Fond marque doux : highlights, tags de filtres actifs |
| `color-bg-secondary` | Background/Secondary | secondary/500 | #5171a5 | Fond secondaire marque : variante de section, badges |
| `color-bg-secondary-subtle` | Background/Secondary-soft | #ffffff | #ffffff | Fond secondaire très doux (blanc pur) |
| `color-bg-reversed` | Background/NeutralreversedBg | gray/600 | #4a5565 | Fond sombre alternatif : footer, sidebar dark |
| `color-bg-disabled` | Background/Disabled | gray/50 | #f9fafb | Fond des éléments désactivés (input, button disabled) |
| `color-bg-success` | Background/Success | green/50 | #f0fdf4 | ✅ Fond d'alerte success (toast, banner) |
| `color-bg-info` | Background/Info | cyan/50 | #ecfeff | ✅ Fond d'alerte informative |
| `color-bg-warning` | Background/Warning | amber/50 | #fffbeb | ✅ Fond d'alerte avertissement |
| `color-bg-danger` | Background/Danger | red/50 | #fef2f2 | ✅ Fond d'alerte erreur / danger |

**Token manquant à ajouter :**

| Token kebab-case | Valeur suggérée | Usage |
|---|---|---|
| `color-bg-overlay` | rgba(0,0,0,0.5) | Backdrop des modales / drawers |
| `color-bg-tooltip` | gray/900 — #101828 | Fond des tooltips |

---

## 3. Tokens de couleur — Surfaces (containers)

**Préfixe :** `color-surface-`
**Usage :** fond des cartes, modales, panneaux latéraux, composants conteneurs

| Token kebab-case | Nom Figma actuel | Alias primitif | Valeur hex | Usage |
|---|---|---|---|---|
| `color-surface-default` | Surface/Primary | gray/50 | #f9fafb | Cartes de produit, fiches, panneaux par défaut |
| `color-surface-raised` | Surface/Secondary | gray/100 | #f3f4f6 | Surfaces légèrement surélevées (nested cards, dropdowns) |
| `color-surface-reversed` | Surface/reversedPrimary | → primary/500 | #000087 | ⚠️ Alias ambigu dans Figma ("alias:Primary" — à clarifier). Surface sur fond sombre |
| `color-surface-reversed-subtle` | Surface/reversedSecondary | → primary/500 | #000087 | ⚠️ Même ambiguïté. Surface secondaire sur fond sombre |

> **Note :** Les variables `Surface/reversedPrimary` et `Surface/reversedSecondary` pointent toutes deux vers `alias:Primary` dans Figma, ce qui est ambigu (il existe plusieurs variables nommées "Primary"). À clarifier : pointent-elles vers `Background/Primary` (primary/500 = #000087) ou vers `primary/500` directement ?

---

## 4. Tokens de couleur — Bordures

**Préfixe :** `color-border-`
**Usage :** bordures de cartes, séparateurs, outline de champs de formulaire

| Token kebab-case | Nom Figma actuel | Alias primitif | Valeur hex | Usage |
|---|---|---|---|---|
| `color-border-default` | Border/Colors/Primary | gray/200 | #e5e7eb | Bordure standard : cartes, input au repos |
| `color-border-subtle` | Border/Colors/Secondary | gray/100 | #f3f4f6 | Bordure très discrète : séparateurs internes |
| `color-border-accent` | Border/Colors/Accent | primary/500 | #000087 | Bordure de marque : onglet actif, focus visible, input en focus |
| `color-border-danger` | Border/Colors/Danger | red/300 | #ffa2a2 | Bordure d'erreur : input invalide |
| `color-border-warning` | Border/Colors/Warning | amber/500 | #fe9a00 | Bordure d'avertissement |
| `color-border-info` | Border/Colors/Info | → ambigu | — | ⚠️ Alias ambigu dans Figma ("alias:Primary") — à corriger vers cyan/300 ou cyan/500 |
| `color-border-success` | Border/Colors/Success | → ambigu | — | ⚠️ Alias ambigu dans Figma ("alias:Primary") — à corriger vers green/300 |
| `color-border-reversed` | Border/Colors/Reversed | gray/400 | #99a1af | Bordure sur fond sombre (footer, hero) |
| `color-border-hover` | States/Border hover | — | #bebbbf | Bordure au hover (input, card interactive) |
| `color-border-focus` | States/Border active | — | #b8b5b9 | ⚠️ Focus border — devrait être `color-border-accent` (primary/500) pour WCAG visible focus |

> **Note WCAG :** Le focus visible doit utiliser `color-border-accent` (#000087) et non les valeurs grises des States, qui n'offrent pas un contraste suffisant pour satisfaire le critère 2.4.11 (Focus Appearance, WCAG 2.2).

---

## 5. Tokens de couleur — Icônes

**Préfixe :** `color-icon-`
**Usage :** couleur de remplissage des icônes SVG

| Token kebab-case | Nom Figma actuel | Alias primitif | Valeur hex | Usage |
|---|---|---|---|---|
| `color-icon-default` | Icons/Neutral | gray/600 | #4a5565 | Icône neutre standard (navigation, actions secondaires) |
| `color-icon-brand` | Icons/Primary | primary/500 | #000087 | Icône de marque : icône principale d'un CTA, flèche accent |
| `color-icon-subtle` | Icons/Tertiary | tertiary/500 | #fffaf5 | ⚠️ Cette valeur est quasi-blanche — usage sur fond sombre uniquement |
| `color-icon-reversed` | Icons/Neutralreversedicon | gray/100 | #f3f4f6 | Icône sur fond sombre (header, boutons primaires) |
| `color-icon-success` | Icons/Success | green/300 | #7bf1a8 | Icône état success |
| `color-icon-info` | Icons/Info | cyan/300 | #53eafd | Icône état info |
| `color-icon-warning` | Icons/Warning | amber/300 | #ffd230 | Icône état warning |
| `color-icon-danger` | Icons/Danger | red/200 | #ffc9c9 | ⚠️ Icône erreur — contraste faible sur fond blanc, à vérifier selon contexte d'usage |

---

## 6. Tokens de couleur — États interactifs

**Préfixe :** `color-state-`
**Usage :** déclinaisons hover / pressed / focus des composants interactifs

| Token kebab-case | Nom Figma actuel | Valeur hex | Usage |
|---|---|---|---|
| `color-state-primary-hover` | States/Primary Hover | #000087 | ❌ Identique au primaire. Suggéré : #0f0f8e (Background dark hover) |
| `color-state-primary-pressed` | States/Primary pressed | #000087 | ❌ Identique au primaire. Suggéré : #00006c (primary/600) |
| `color-state-on-primary-hover` | States/On primary Hover | #230087 | Texte/icône sur bouton primaire au hover |
| `color-state-on-primary-pressed` | States/On primary pressed | #00007a | Texte/icône sur bouton primaire pressed |
| `color-state-bg-primary-hover` | States/On background primary Hover | #020281 | Fond overlay au hover sur éléments primary |
| `color-state-bg-primary-pressed` | States/On background primary pressed | #c6d5eb | Fond overlay pressed sur éléments primary |
| `color-state-bg-neutral-hover` | States/On background neutral hover | #dedcdf | Fond hover sur éléments neutres (liste, row de tableau) |
| `color-state-bg-neutral-pressed` | States/On background neutral pressed | #d6d4d8 | Fond pressed sur éléments neutres |
| `color-state-bg-dark-hover` | States/Background dark hover | #0f0f8e | Fond hover sur bouton/section dark |
| `color-state-bg-dark-active` | States/Background dark active | #4d4dab | Fond active sur bouton/section dark |
| `color-state-bg-reversed-hover` | States/On background reversed primary hover | #d3e2f7 | Fond hover sur éléments reversed (fond sombre) |
| `color-state-bg-reversed-active` | States/On background reversed primary active | #d5e3f8 | Fond active sur éléments reversed |

**Token manquant à ajouter :**

| Token kebab-case | Valeur suggérée | Usage |
|---|---|---|
| `color-state-focus-ring` | primary/500 — #000087 | Outline de focus clavier (outline-3 + offset 2) — requis WCAG 2.4.7 |

---

## 7. Tokens d'espacement

**Préfixe :** `spacing-`
**Source :** collection _Spacing_ dans Figma

| Token kebab-case | Nom Figma | Valeur (px) | Équivalent Tailwind | Usage typique |
|---|---|---|---|---|
| `spacing-none` | none | 0px | `p-0`, `gap-0` | Reset explicite |
| `spacing-xx-small` | xx-small | 8px | `p-2`, `gap-2` | Gap interne d'un composant compact (icon + label, badge) |
| `spacing-x-small` | x-small | 12px | `p-3`, `gap-3` | Padding interne boutons small, gap liste serrée |
| `spacing-medium` | medium | 16px | `p-4`, `gap-4` | Padding standard cards, gap par défaut entre éléments |
| `spacing-large` | large | 24px | `p-6`, `gap-6` | Espacement entre sections d'un composant, padding de section |
| `spacing-x-large` | x-large | 32px | `p-8`, `gap-8` | Marge verticale entre blocs de contenu |
| `spacing-xx-large` | xx-large | 64px | `p-16`, `gap-16` | Padding de sections de page (hero, sections home) |

> **Note :** Il manque des valeurs intermédiaires utiles pour un layout web : 4px (micro), 20px, 40px, 48px. À envisager pour les composants (spacing-micro, spacing-section).

---

## 8. Tokens de bordure — Rayon et Largeur

**Source :** collection _Border_ / _Scale_ dans Figma

### Rayon (border-radius)

| Token kebab-case | Figma Border/Radius | Scale | Valeur px | Équivalent Tailwind | Usage |
|---|---|---|---|---|---|
| `border-radius-none` | Radius/none | 0 | 0px | `rounded-none` | Éléments sans arrondi |
| `border-radius-sm` | Radius/sm | 50 | 2px | `rounded-sm` | Tags, badges discrets |
| `border-radius-default` | Radius/radius | 100 | 4px | `rounded` | Boutons, inputs — arrondi standard |
| `border-radius-md` | Radius/md | 150 | 6px | `rounded-md` | Cartes, dropdown |
| `border-radius-lg` | Radius/lg | 200 | 8px | `rounded-lg` | Modales, toasts |
| `border-radius-full` | Radius/full | full | 360px | `rounded-full` | Avatars, pills, indicateurs circulaires |

### Largeur (border-width)

| Token kebab-case | Figma Border/Width | Scale | Valeur px | Équivalent Tailwind | Usage |
|---|---|---|---|---|---|
| `border-width-none` | Width/none | 0 | 0px | `border-0` | Pas de bordure |
| `border-width-sm` | Width/sm | 25 | 1px | `border` | Bordure standard (cartes, inputs) |
| `border-width-md` | Width/md | 50 | 2px | `border-2` | Focus ring, hover actif |
| `border-width-lg` | Width/lg | 100 | 4px | `border-4` | Accent fort (ligne de titre, indicateur actif) |

---

## 9. Tokens typographiques

**Source :** collection _Font_ dans Figma (deux modes : Desktop / Mobile)

### Familles

| Token kebab-case | Figma Font/Family | Valeur | Usage |
|---|---|---|---|
| `font-family-title` | Family/Title | Boldonse | Titre principal hero, tagline H1 de section |
| `font-family-heading` | Family/Headings | Inconsolata | H1, H2, H3 de page — évoque la chimie / technique |
| `font-family-body` | Family/Body | Inter | Corps de texte, labels, UI |

### Graisses

| Token kebab-case | Figma Font/Weight | Desktop/Mobile | Équivalent CSS |
|---|---|---|---|
| `font-weight-light` | Weight/Light | Light | `font-weight: 300` |
| `font-weight-regular` | Weight/Regular | Regular | `font-weight: 400` |
| `font-weight-semibold` | Weight/Semibold | Semi Bold | `font-weight: 600` |
| `font-weight-bold` | Weight/Bold | Bold | `font-weight: 700` |

### Tailles

| Token kebab-case | Figma Font/Size | Desktop | Mobile | Tailwind (si native) | Usage |
|---|---|---|---|---|---|
| `font-size-title` | Size/Title | 48px | 40px | `text-5xl` / custom | Tagline hero (Boldonse) |
| `font-size-h1` | Size/H1 | 40px | 32px | custom-40 / `text-3xl` | Titre de page (H1) |
| `font-size-h2` | Size/H2 | 32px | 24px | custom-32 / `text-2xl` | Titre de section (H2) |
| `font-size-h3` | Size/H3 | 24px | 18px | `text-2xl` / `text-lg` | Sous-titre, titre de carte (H3) |
| `font-size-body-lg` | Size/P0 | 18px | 16px | `text-lg` / `text-base` | Corps large (intro, description produit) |
| `font-size-body-md` | Size/P1 | 16px | 12px | `text-base` / `text-xs` | Corps standard |
| `font-size-body-sm` | Size/P2 | 12px | 12px | `text-xs` / `text-xs` | Captions, helper text, badges |
| `font-size-label` | Size/P3 | 10px | 10px | custom-10 | Labels de champs, footnotes, legal |

> **Note :** `text-3xl` = 30px en Tailwind native, pas 32px. `text-4xl` = 36px, pas 40px. Les tailles H1 (40px) et H2 (32px) nécessitent des valeurs custom dans `@theme`. Voir section 10.

---

## 10. Bloc `@theme` Tailwind CSS v4 — Synthèse

À placer dans le fichier CSS principal (`main.css` ou `globals.css`) :

```css
@theme {
  /* ─── Palette de marque ─── */
  --color-primary-50: #f2f2f9;
  --color-primary-100: #cccce7;
  --color-primary-200: #9f9fd2;
  --color-primary-300: #6666b7;
  --color-primary-400: #33339f;
  --color-primary-500: #000087;
  --color-primary-600: #00006c;
  --color-primary-700: #000051;
  --color-primary-800: #000036;
  --color-primary-900: #00001b;

  --color-secondary-50: #f6f8fa;
  --color-secondary-100: #dce3ed;
  --color-secondary-200: #b9c6db;
  --color-secondary-300: #97aac9;
  --color-secondary-400: #748db7;
  --color-secondary-500: #5171a5;
  --color-secondary-600: #415a84;
  --color-secondary-700: #314463;
  --color-secondary-800: #202d42;
  --color-secondary-900: #101721;

  --color-tertiary-50: #fffdfa;
  --color-tertiary-500: #fffaf5;
  --color-tertiary-600: #f2ede9;
  --color-tertiary-700: #e5e1dc;
  --color-tertiary-800: #ccc8c4;

  /* ─── Tokens sémantiques — Contenu (texte) ─── */
  /* ⚠️ Valeurs corrigées pour conformité WCAG AA */
  --color-content-primary: #364153;        /* gray/700 — corps de texte */
  --color-content-secondary: #4a5565;      /* gray/600 — texte secondaire */
  --color-content-tertiary: #99a1af;       /* gray/400 — placeholder */
  --color-content-disabled: #f3f4f6;       /* gray/100 — texte désactivé */
  --color-content-accent: #000087;         /* primary/500 — liens, accents */
  --color-content-link: #000087;
  --color-content-link-hover: #33339f;
  --color-content-on-primary: #f9fafb;     /* texte sur fond primary */
  --color-content-reversed-primary: #f9fafb;
  --color-content-reversed-secondary: #f3f4f6;
  --color-content-reversed-tertiary: #4a5565;
  --color-content-success: #008236;        /* green/700 */
  --color-content-info: #007595;           /* cyan/700 */
  --color-content-warning: #bb4d00;        /* amber/700 */
  --color-content-danger: #e7000b;         /* red/600 */

  /* ─── Tokens sémantiques — Arrière-plans ─── */
  --color-bg-default: #f9fafb;             /* gray/50 */
  --color-bg-subtle: #f3f4f6;              /* gray/100 */
  --color-bg-primary: #000087;             /* primary/500 */
  --color-bg-primary-subtle: #cccce7;      /* primary/100 */
  --color-bg-secondary: #5171a5;           /* secondary/500 */
  --color-bg-secondary-subtle: #ffffff;
  --color-bg-reversed: #4a5565;            /* gray/600 */
  --color-bg-disabled: #f9fafb;            /* gray/50 */
  --color-bg-success: #f0fdf4;             /* green/50 */
  --color-bg-info: #ecfeff;               /* cyan/50 */
  --color-bg-warning: #fffbeb;             /* amber/50 */
  --color-bg-danger: #fef2f2;              /* red/50 */
  --color-bg-overlay: rgba(0, 0, 0, 0.5);
  --color-bg-tooltip: #101828;             /* gray/900 */

  /* ─── Tokens sémantiques — Surfaces ─── */
  --color-surface-default: #f9fafb;        /* gray/50 */
  --color-surface-raised: #f3f4f6;         /* gray/100 */

  /* ─── Tokens sémantiques — Bordures ─── */
  --color-border-default: #e5e7eb;         /* gray/200 */
  --color-border-subtle: #f3f4f6;          /* gray/100 */
  --color-border-accent: #000087;          /* primary/500 — focus, actif */
  --color-border-danger: #ffa2a2;          /* red/300 */
  --color-border-warning: #fe9a00;         /* amber/500 */
  --color-border-info: #53eafd;            /* cyan/300 */
  --color-border-success: #7bf1a8;         /* green/300 */
  --color-border-reversed: #99a1af;        /* gray/400 */
  --color-border-hover: #bebbbf;
  --color-border-focus: #000087;           /* = accent — WCAG 2.4.11 */

  /* ─── Tokens sémantiques — Icônes ─── */
  --color-icon-default: #4a5565;           /* gray/600 */
  --color-icon-brand: #000087;             /* primary/500 */
  --color-icon-reversed: #f3f4f6;          /* gray/100 */
  --color-icon-success: #7bf1a8;           /* green/300 */
  --color-icon-info: #53eafd;              /* cyan/300 */
  --color-icon-warning: #ffd230;           /* amber/300 */
  --color-icon-danger: #ffc9c9;            /* red/200 */

  /* ─── Tokens d'état interactif ─── */
  --color-state-primary-hover: #0f0f8e;
  --color-state-primary-pressed: #00006c;
  --color-state-on-primary-hover: #230087;
  --color-state-on-primary-pressed: #00007a;
  --color-state-bg-primary-hover: #020281;
  --color-state-bg-primary-pressed: #c6d5eb;
  --color-state-bg-neutral-hover: #dedcdf;
  --color-state-bg-neutral-pressed: #d6d4d8;
  --color-state-bg-dark-hover: #0f0f8e;
  --color-state-bg-dark-active: #4d4dab;
  --color-state-bg-reversed-hover: #d3e2f7;
  --color-state-bg-reversed-active: #d5e3f8;
  --color-state-focus-ring: #000087;       /* primary/500 */

  /* ─── Espacement ─── */
  --spacing-none: 0px;
  --spacing-xx-small: 8px;
  --spacing-x-small: 12px;
  --spacing-medium: 16px;
  --spacing-large: 24px;
  --spacing-x-large: 32px;
  --spacing-xx-large: 64px;

  /* ─── Rayon de bordure ─── */
  --border-radius-none: 0px;
  --border-radius-sm: 2px;
  --border-radius-default: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  --border-radius-full: 360px;

  /* ─── Largeur de bordure ─── */
  --border-width-none: 0px;
  --border-width-sm: 1px;
  --border-width-md: 2px;
  --border-width-lg: 4px;

  /* ─── Typographie — Familles ─── */
  --font-family-title: 'Boldonse', serif;
  --font-family-heading: 'Inconsolata', monospace;
  --font-family-body: 'Inter', sans-serif;

  /* ─── Typographie — Graisses ─── */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* ─── Typographie — Tailles (custom — hors native Tailwind) ─── */
  --font-size-title: 48px;         /* mobile : 40px via responsive */
  --font-size-h1: 40px;            /* mobile : 32px */
  --font-size-h2: 32px;            /* mobile : 24px */
  --font-size-h3: 24px;            /* mobile : 18px */
  --font-size-body-lg: 18px;       /* mobile : 16px */
  --font-size-body-md: 16px;       /* mobile : 12px */
  --font-size-body-sm: 12px;
  --font-size-label: 10px;
}
```

---

## 11. Guide d'utilisation en React / Tailwind

### Référencer un token dans une classe Tailwind

Avec Tailwind v4, les custom properties `@theme` sont automatiquement disponibles comme utilitaires :

```jsx
// Fond primary + texte on-primary
<button className="bg-(--color-bg-primary) text-(--color-content-on-primary)">
  Request a Quote
</button>

// Message d'erreur
<p className="text-(--color-content-danger) text-xs">
  This field is required.
</p>

// Input au repos → focus
<input
  className="
    border border-(--color-border-default)
    focus:border-(--color-border-focus) focus:outline-none focus:ring-2
    focus:ring-(--color-state-focus-ring) focus:ring-offset-2
  "
/>
```

### Ne jamais faire
```jsx
// ❌ Référencer les primitives directement dans les composants
<p className="text-gray-700">...</p>

// ✅ Toujours utiliser les tokens sémantiques
<p className="text-(--color-content-primary)">...</p>
```

---

## 12. Actions prioritaires avant maquettes HD

| Priorité | Action | Responsable |
|---|---|---|
| 🔴 P0 | Corriger les 7 variables de contraste insuffisant dans Figma (voir tableau section intro) | Emilie |
| 🔴 P0 | Clarifier l'alias ambigu "Primary" dans Surface/reversed et Border/Info et Border/Success | Emilie |
| 🟡 P1 | Renommer toutes les variables Figma en kebab-case pour aligner avec ce document | Emilie |
| 🟡 P1 | Ajouter les tokens manquants : `color-content-link`, `color-bg-overlay`, `color-state-focus-ring` | Emilie |
| 🟢 P2 | Ajouter les tailles d'espacement manquantes : 4px (micro), 20px, 40px, 48px | Emilie |
| 🟢 P2 | Valider avec Pierre-Yves les couleurs de statut (success/info/warning/danger) pour cohérence avec son univers | Emilie → PY |
