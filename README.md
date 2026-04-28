# Epsilon Chimie — Site Web

Site vitrine + catalogue du laboratoire de chimie pharmaceutique **Epsilon Chimie** (Brest, France).

**Stack :** React 19 · Vite 6 · Tailwind CSS v4  
**Chef de projet :** Emilie Cornec — Stroll. Collectif · emilie@stroll-collectif.com  
**Client :** Epsilon Chimie (Pierre-Yves Cornec)  
**Audience :** B2B internationale — acheteurs pharma, chercheurs, laboratoires industriels

---

## Démarrage rapide

```bash
git clone <repo-url>
cd epsilon-chimie
npm install
npm run dev
# → http://localhost:5173
```

```bash
npm run build    # Production build → dist/
npm run preview  # Prévisualiser le build
```

---

## Liens essentiels

| Ressource | Lien |
|---|---|
| Maquettes Figma HD (wireframes + DS) | https://www.figma.com/design/YhMxgEY4basLOkAxkTqeNy/ |
| Site actuel à refaire | https://www.epsilon-chimie.com |
| Chef de projet | emilie@stroll-collectif.com |

---

## Contexte du projet

Epsilon Chimie commercialise **+1 000 molécules de synthèse pharmaceutique**, dont **99 % à l'international** (USA, Europe, Asie). La clientèle est exclusivement B2B.

### Objectifs
- Moderniser l'image (site actuel daté, peu crédible à l'international)
- Améliorer le référencement naturel (SEO)
- Générer des demandes de devis qualifiées

### Hors scope — ne pas implémenter
- Espace client / authentification
- Paiement en ligne / e-commerce
- Chatbot
- Visualiseur 3D de molécules
- Site multilingue (anglais uniquement)

---

## Architecture du site

```
/                        → Page d'accueil (Hero + Search + Valeurs)
/catalogue               → Catalogue + Recherche par CAS / famille
/catalogue/:slug         → Fiche Produit (données structurées)
/quote?cas=...           → Formulaire de devis (pré-rempli depuis fiche)
/custom-synthesis        → Synthèse sur mesure
/about                   → À propos + Contact
/legal/cookies           → Politique cookies (CNIL)
/legal/privacy           → Politique de confidentialité (RGPD)
/legal/terms             → Conditions générales
```

---

## Structure du projet

```
src/
├── components/
│   ├── Button/        Button.jsx          ← ✅ Livré
│   ├── Input/         Input.jsx           ← ✅ Livré
│   ├── Header/        Header.jsx          ← ✅ Livré
│   ├── SearchBar/                         ← ✅ Livré
│   ├── ProductCard/                       ← ✅ Livré
│   ├── QuoteForm/                         ← 🔲 À développer
│   ├── Footer/                            ← ✅ Livré
│   └── CookieBanner/                      ← 🔲 À développer
├── pages/
│   ├── HomePage.jsx                       ← ✅ Livré
│   ├── CataloguePage.jsx                  ← ✅ Livré
│   ├── ProductPage.jsx                    ← ✅ Livré
│   ├── QuotePage.jsx                      ← ✅ Livré
│   └── AboutPage.jsx                      ← ✅ Livré
└── styles/
    └── globals.css    ← Design tokens @theme — NE PAS MODIFIER sans Emilie
```

---

## Design System

### Règle d'or : toujours les tokens, jamais les primitives

```jsx
// ✅ Correct — utilise le token sémantique
<div className="bg-(--color-bg-primary) text-(--color-content-on-primary)">

// ❌ Interdit — primitives en dur
<div className="bg-[#000087] text-white">
```

Tous les tokens sont définis dans `src/styles/globals.css`. La référence complète est dans `docs/06-design-tokens.md`.

### Typographies

| Variable CSS | Police | Usage |
|---|---|---|
| `--font-family-title` | Boldonse | Hero tagline (H1 page d'accueil uniquement) |
| `--font-family-heading` | Inconsolata | H1, H2, H3 de toutes les pages |
| `--font-family-body` | Inter | Corps, labels, UI, navigation |

```jsx
// Appliquer une typo
<h1 style={{ fontFamily: 'var(--font-family-heading)', fontSize: 'var(--font-size-h1)' }}>
  Our Catalogue
</h1>
```

### Couleurs principales

| Token | Hex | Usage |
|---|---|---|
| `--color-bg-primary` | #000087 | Fond bouton Primary, Header scrollé, Hero |
| `--color-content-on-primary` | #f9fafb | Texte sur fond Primary |
| `--color-content-accent` | #000087 | Liens, texte accentué |
| `--color-content-primary` | #364153 | Corps de texte par défaut |
| `--color-bg-default` | #f9fafb | Fond de page |
| `--color-border-default` | #e5e7eb | Bordure standard (inputs, cartes) |
| `--color-state-focus-ring` | #000087 | Outline de focus clavier |

---

## Composants disponibles

### `<Button>`

```jsx
import { Button } from './components/Button/Button.jsx'

<Button variant="primary" size="lg">Request a Quote</Button>
<Button variant="secondary" size="md">Browse Products</Button>
<Button variant="ghost" size="sm">Learn More</Button>

// Disabled (reste focusable — WCAG)
<Button variant="primary" disabled>Unavailable</Button>

// Loading state
<Button variant="primary" loading>Sending…</Button>

// Rendu comme lien <a>
<Button as="a" href="/quote" variant="primary">Request a Quote</Button>
```

| Prop | Valeurs | Défaut |
|---|---|---|
| `variant` | `primary` `secondary` `ghost` | `primary` |
| `size` | `lg` (48px) · `md` (40px) · `sm` (32px) | `md` |
| `disabled` | boolean | `false` |
| `loading` | boolean | `false` |
| `as` | `'button'` `'a'` | `'button'` |

### `<Input>`

```jsx
import { Input } from './components/Input/Input.jsx'

// Standard
<Input label="Company name" placeholder="Pharmaceutical Corp Ltd" required />

// Recherche CAS (depuis la page catalogue)
<Input
  label="Search by CAS number"
  type="search"
  placeholder="e.g. 64-17-5"
  helper="Enter a CAS number, molecule name, or chemical family"
/>

// Avec erreur
<Input
  label="Email"
  type="email"
  error="Please enter a valid email address."
  required
/>
```

| Prop | Type | Description |
|---|---|---|
| `label` | string | Label visible |
| `error` | string | Message d'erreur (active `aria-invalid`) |
| `helper` | string | Texte d'aide sous le champ |
| `required` | boolean | Marque visuellement + `aria-required` |
| `disabled` | boolean | Grise le champ |

### `<Header>`

```jsx
import { Header } from './components/Header/Header.jsx'

// Passer le path courant pour aria-current (avec React Router)
<Header currentPath={location.pathname} />
```

---

## Accessibilité — règles obligatoires (WCAG 2.1 AA)

- **Focus visible** : tous les éléments interactifs doivent afficher le ring `focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-(--color-state-focus-ring)` — ne jamais faire `outline: none` sans alternative
- **Boutons désactivés** : utiliser `aria-disabled="true"` plutôt que l'attribut `disabled` natif, pour maintenir la focusabilité clavier
- **Images** : attribut `alt` descriptif obligatoire. Si l'image est décorative : `alt=""`
- **Icônes seules** : `aria-label` ou `aria-hidden="true"` + texte adjacent
- **Formulaire de devis** : chaque champ doit avoir un `<label>` avec `htmlFor` correct
- **Contrastes** : ne jamais modifier les tokens de couleur `content-*` — ils sont calibrés WCAG AA
- **Langue** : `<html lang="en">` est déjà en place dans `index.html`

---

## RGPD / CNIL (à implémenter)

- Banner cookies avec boutons "Accept" et "Decline" de **taille identique** (obligation CNIL)
- Consentement stocké 13 mois maximum
- Voir `docs/03-ux-copy-library.md` section "Cookie Banner" pour les textes

---

## Convention de commits

```
feat: add product card component
fix: correct focus ring on mobile nav
style: apply design tokens to quote form
docs: update handoff specs
refactor: extract search logic to hook
```

Une branche par feature, pull request sur `main` avant de merger.

---

## Documentation

| Fichier | Contenu |
|---|---|
| `docs/02-benchmark-concurrentiel.md` | Analyse des 5 concurrents, insights UX |
| `docs/03-ux-copy-library.md` | Tous les textes du site en anglais |
| `docs/05-design-specs-handoff.md` | Dimensions, breakpoints, specs Tailwind |
| `docs/06-design-tokens.md` | Référence complète des tokens (usage + hex) |
