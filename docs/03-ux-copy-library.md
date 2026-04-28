# UX Copy Library — Epsilon Chimie
**Projet :** Refonte du site web Epsilon Chimie
**Préparé par :** Stroll. Collectif
**Date :** Avril 2026
**Langue :** British English (neutre, international, plus formel que l'US English — adapté à l'image européenne d'Epsilon)

---

## Principes éditoriaux

### Ton de voix
- **Professional, not corporate** : sérieux sans être distant
- **Confident, not arrogant** : affirmer l'expertise sans se vanter
- **Clear, not simplistic** : langage accessible mais technique quand nécessaire
- **International** : éviter les idiomes, les jeux de mots, les références culturelles françaises
- **Action-oriented** : privilégier les verbes d'action aux noms abstraits

### Règles de base
- Phrases courtes (15 mots max pour les CTA, 25 mots max pour les descriptions)
- Verbes à l'impératif pour les CTA ("Request", "Browse", "Download") — pas "Click here"
- Pas de "you guys", "awesome", "amazing" — trop informel
- Préférer "please" sparingly — trop = perçu comme faible
- Éviter le jargon marketing ("best-in-class", "world-leading") — préférer des faits concrets

### Attention particulière
- **British spelling** : "catalogue" (not catalog), "organisation" (not organization), "licence" (not license as noun), "centre" (not center)
- **Dates** : format DD/MM/YYYY ou "12 April 2026" (pas 04/12/2026 qui est ambigu)
- **Nombres** : séparateur de milliers avec virgule ("1,000 molecules" not "1 000")

---

## 1. Navigation principale

### Menu header
| Label | Description / contexte |
|---|---|
| **Catalogue** | Lien vers le catalogue produit avec recherche |
| **Custom Synthesis** | Service de synthèse sur mesure |
| **About** | Page de présentation de l'entreprise |
| **Contact** | Coordonnées et formulaire de contact |

### CTA principal (header, toujours visible)
- **"Request a Quote"** — bouton primaire, toujours présent en header

### Footer
Sections du footer :
- **Products** : Catalogue / Custom Synthesis / Safety Data Sheets
- **Company** : About us / Quality & Certifications / Careers / Contact
- **Legal** : Legal notice / Privacy policy / Terms & Conditions / Cookie settings
- **Connect** : LinkedIn / Email / Phone

---

## 2. Page d'accueil (Home)

### Hero section

**Tagline principale (H1) — 3 options à tester :**
1. "European fine chemistry, engineered for pharma."
2. "Custom fine chemicals for pharma, cosmetics and biotech."
3. "30 years of fine chemistry expertise, made in Brittany."

**Sous-tagline :**
"From gram to multi-kilogram, we synthesise the molecules that power your research and products."

**Alternative plus concrète :**
"Over 1,000 molecules in our catalogue. Custom synthesis on demand. Response within 24 hours."

**CTA hero (primaire) :**
- "Browse our catalogue" — pour explorer
- "Request a quote" — pour convertir

*Recommandation : proposer les deux CTA côte à côte, primary + secondary*

### Search bar (proéminent sur la home)
**Placeholder :**
"Search by CAS number, product name or chemical family"

**Label (screen readers) :**
"Search for a molecule in our catalogue"

### Sections de la home

**Section "Why Epsilon"**
- Titre : "Specialists in fine organic chemistry"
- Sous-titre : "From our Brittany laboratory, we serve pharmaceutical, cosmetics and biotech clients worldwide with the reliability of a European manufacturer."

**Section "Our expertise" (par domaine)**
- Titre : "Our expertise"
- Items :
  - "Pharmaceutical intermediates"
  - "MRI contrast agents"
  - "Organophosphorus compounds"
  - "Building blocks for drug discovery"
  - "Fragrance & cosmetic ingredients"
- CTA : "Explore our catalogue →"

**Section "Custom synthesis"**
- Titre : "Can't find what you need?"
- Description : "Our team synthesises tailor-made molecules, from gram to multi-kilogram scale. Contract research, multi-step synthesis and structural analysis — we handle your most demanding projects."
- CTA : "Discover custom synthesis →"

**Section "Key figures" (trust signals)**
- "Since 1995" / "Over 30 years of expertise"
- "1,000+ molecules in catalogue"
- "24h response to quote requests"
- "Made in Europe"

**Section "Our commitment"**
- Titre : "Our commitment to you"
- Liste :
  - "Personalised quotes within 24 hours"
  - "Order confirmation within one business day"
  - "Weekly progress reports on your projects"
  - "Transparent shipping updates"
  - "Full confidentiality guaranteed"

---

## 3. Page Catalogue / Search

### Header de la page
**H1 :** "Product catalogue"
**Sous-titre :** "Browse our 1,000+ molecules or search by CAS number, name or chemical family."

### Search bar
**Placeholder :** "e.g. 123-45-6, phenol, organophosphorus…"

### Filtres latéraux
- **Filter by chemical family**
- **Filter by application** (Pharmaceutical / Cosmetics / Biotech / Analytical / Other)
- **Filter by package size**
- **Show only in stock** (checkbox)

### Résultats
**Nombre de résultats :**
- "Showing 48 results"
- "Showing 1–20 of 156 results"

**Tri :**
- "Sort by: Relevance / Name A-Z / CAS number"

### État recherche vide (no results)
**Titre :** "No molecule matches your search"
**Description :** "We don't have this product in our catalogue yet — but we can likely synthesise it for you."
**CTA :** "Request a custom synthesis quote"

*Note UX : le CAS tapé doit être pré-rempli dans le formulaire de devis custom*

### Loading state
"Searching our catalogue…"

---

## 4. Fiche produit

### Header de la fiche
**H1 :** Nom du produit (dynamique)
**Badges :** CAS [nombre] · Ref: [code interne]

### Sections de la fiche

**Section "Product information"**
Labels des champs :
- "CAS Number"
- "Molecular formula"
- "Molecular weight"
- "Purity"
- "Appearance"
- "Storage conditions"

**Section "Available packaging"**
- "Available packaging"
- Format : "1 g / 5 g / 25 g / 100 g / 500 g / 1 kg"
- Note : "Other quantities available on request."

**Section "Applications"**
- "Typical applications"
- Liste des applications si disponibles

**Section "Documents"**
- "Safety Data Sheet (SDS)" — bouton téléchargement
- "Technical Data Sheet" — si disponible
- "Certificate of Analysis" — disponible sur demande après commande

### CTA principal (sticky ou très visible)
- **"Request a Quote"** — primaire
- Dessous : "Typical response within 24 hours"

### CTA secondaire
- "Download Safety Data Sheet" — outline button

### Section "You might also need"
Titre : "Related products"
Description : "Other molecules our clients frequently request alongside this one."

### Messages d'aide
- "Not sure which packaging fits your needs? Contact us for advice."
- "For bulk quantities or specific purity requirements, request a personalised quote."

---

## 5. Formulaire "Request a Quote"

### Header
**H1 :** "Request a quote"
**Sous-titre :** "Tell us what you need and we'll get back to you within 24 hours."

### Champs du formulaire

**Section "About your request"**
| Label | Placeholder / helper |
|---|---|
| Product name or CAS number * | "e.g. 123-45-6 or molecule name" |
| Quantity needed * | "e.g. 100 g, 5 kg" |
| Required purity | "e.g. ≥ 98%" |
| Target delivery date | "When do you need it?" |
| Additional specifications | "Any specific requirements (isomer, stereochemistry, certifications needed…)" |

**Section "About you"**
| Label | Placeholder / helper |
|---|---|
| Full name * | "John Smith" |
| Professional email * | "john.smith@company.com" |
| Company * | "Your organisation" |
| Country * | Dropdown |
| Phone (optional) | "+33 1 23 45 67 89" |
| How did you hear about us? | Dropdown : Google / LinkedIn / Recommendation / Event / Other |

**Consentement RGPD (obligatoire) :**
☐ "I agree that Epsilon Chimie may process my data to respond to this request. [Read our privacy policy]"

**Newsletter (optionnel) :**
☐ "Keep me updated about Epsilon Chimie's new products and services." (unchecked by default)

### Bouton submit
**"Send my request"** (pas "Submit", trop sec)

### Helper texts
- "* Required fields"
- "Your request will be reviewed by our team and answered within one business day."
- "All information shared is treated with strict confidentiality."

### Messages d'erreur
| Situation | Message |
|---|---|
| Champ obligatoire vide | "This field is required." |
| Email invalide | "Please enter a valid email address." |
| Erreur serveur | "Something went wrong. Please try again or email us at pierre.cornec@epsilon-chimie.com." |

### Message de confirmation (après envoi)
**Titre :** "Thank you — we've received your request."
**Description :** "Our team will review your request and get back to you within one business day. A confirmation email has been sent to [user email]."
**CTA secondaire :** "Back to catalogue" / "Explore custom synthesis"

---

## 6. Page Custom Synthesis

### Header
**H1 :** "Custom synthesis on demand"
**Tagline :** "From your idea to the molecule you need — synthesised by our team in Brittany."

### Sections

**Section "What we do"**
- Titre : "Tailor-made molecules for your research"
- Description : "Our chemists design and produce non-commercial molecules for research and development. From gram-scale feasibility studies to multi-kilogram production, we adapt to the stage of your project."

**Section "Our capabilities"**
- "Custom synthesis (1 g to multi-kg)"
- "Contract research"
- "Multi-step syntheses"
- "Structural analysis"
- "Technology watch"

**Section "Sectors we serve"**
- "Pharmaceutical"
- "Cosmetics & fragrances"
- "Biotechnology"
- "Agrochemicals"
- "Analytical chemistry"

**Section "How it works"**
1. "Tell us what you need" — "Describe your target molecule, required quantity and timeline."
2. "We assess feasibility" — "Within 24 hours, we confirm whether we can synthesise your compound."
3. "You receive a detailed quote" — "Transparent pricing and realistic delivery timelines."
4. "We synthesise and deliver" — "Weekly progress reports, full traceability, discreet shipping."

### CTA principal
"Request a custom synthesis quote"

### Reassurance
- "Full confidentiality guaranteed"
- "All projects covered by NDA if needed"

---

## 7. Page About

### Header
**H1 :** "A European fine chemistry laboratory, since 1995"
**Tagline :** "Born from academic research, driven by industrial excellence."

### Sections

**Section "Our story"**
- Titre : "Our story"
- Texte : "Founded in 1995 from pioneering university research, Epsilon Chimie has grown into a trusted partner for pharmaceutical, cosmetics and biotech companies worldwide. Based in Brest, Brittany, we combine academic rigour with industrial reliability."

**Section "Our expertise"**
- Titre : "Our expertise"
- Texte : "We specialise in organic chemistry, with a particular focus on organophosphorus compounds. Our team delivers more than 1,000 molecules from our catalogue, and synthesises tailor-made compounds on demand."

**Section "Key figures"**
- "30+ years of expertise"
- "1,000+ molecules in catalogue"
- "Clients in [X] countries"
- "Made in Europe"

**Section "Meet the team"** (optionnel, selon ce que Pierre-Yves veut partager)
- Photo + titre + courte bio de Pierre-Yves et des chimistes principaux

**Section "Quality & certifications"**
- À compléter selon les certifications réelles d'Epsilon

---

## 8. Messages système (cookies, toast, modal, etc.)

### Bannière cookies (première visite)
**Titre :** "We use cookies"
**Description :** "Essential cookies enable basic site functionality. With your consent, we also use analytics cookies to improve your experience. You can change your preferences at any time."
**Boutons :**
- "Accept all"
- "Reject all"
- "Customise"

*Note : les deux boutons Accept/Reject doivent avoir le même poids visuel (CNIL)*

### Page settings cookies
**Titre :** "Cookie preferences"

| Catégorie | Toggle |
|---|---|
| "Essential cookies" (always on) | Disabled |
| "Analytics cookies" | On/Off |
| "Marketing cookies" | On/Off |

**Bouton :** "Save preferences"

### Toast de succès
- "Your request has been sent successfully."
- "File downloaded."
- "Your preferences have been saved."

### Toast d'erreur
- "Something went wrong. Please try again."
- "Network error. Please check your connection."

### 404 page
**Titre :** "Page not found"
**Description :** "The page you're looking for doesn't exist or has been moved."
**CTA :** "Back to home" / "Browse catalogue"

### Maintenance
**Titre :** "We'll be right back"
**Description :** "Our site is currently undergoing maintenance. Please try again in a few minutes, or contact us at pierre.cornec@epsilon-chimie.com for urgent enquiries."

---

## 9. Emails transactionnels (à prévoir pour le dev)

### Confirmation de demande de devis
**Subject :** "Your quote request has been received — Epsilon Chimie"
**Corps :**
"Dear [Name],

Thank you for your interest in Epsilon Chimie. We have received your quote request and our team is already working on it.

You can expect our response within one business day.

**Your request summary:**
- Product: [Product name / CAS]
- Quantity: [Quantity]
- Purity: [Purity]
- Target delivery: [Date]

If you need to add any information, simply reply to this email.

Best regards,
Pierre-Yves Cornec
Director, Epsilon Chimie"

---

## 10. Recommandations pour l'intégration dans Figma

### Au niveau des composants
- Créer un composant Figma "CTA Button" avec les variantes : Primary / Secondary / Ghost
- Créer un composant "Search Bar" avec états : Default / Focused / With suggestions
- Créer un composant "Form Field" avec états : Default / Focused / Error / Success
- Créer un composant "Toast" avec variantes : Success / Error / Info

### Au niveau des pages
- Utiliser cette bibliothèque comme **source de vérité** pour tout le texte des maquettes
- Ne jamais utiliser de "Lorem ipsum" — toujours du vrai contenu
- Pour les descriptions produits génériques dans les maquettes, utiliser des molécules réelles du catalogue actuel d'Epsilon comme exemple

### Points d'attention pour le dev (à inclure dans le handoff)
- Tous les textes doivent être externalisés dans un fichier de traduction (même si le site est en anglais uniquement) pour permettre une évolution future vers une version FR
- Les placeholders et helper texts doivent être accessibles (pas uniquement visuels)
- Les messages d'erreur doivent avoir un `aria-live="polite"` pour les screen readers

---

## Points ouverts à valider avec le client

1. **Tagline principale** : laquelle des trois options correspond le mieux au positionnement voulu par Pierre-Yves ?
2. **"Made in France" ou "Made in Europe" ou "Made in Brittany"** : quel niveau géographique mettre en avant selon la clientèle internationale ?
3. **Chiffres clés** : obtenir les chiffres réels (nombre de pays servis, nombre de clients, etc.)
4. **Certifications** : lister toutes les certifications réelles à afficher
5. **Ton** : est-ce qu'Epsilon veut se positionner comme un acteur **sérieux-traditionnel** (plus proche de La Mesta) ou **moderne-technique** (plus proche d'une biotech) ? Le wording doit s'ajuster en fonction
