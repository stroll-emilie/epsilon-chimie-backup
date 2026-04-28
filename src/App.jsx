/**
 * App.jsx — Point d'entrée de l'application
 *
 * TODO : ajouter React Router (npm install react-router-dom)
 * pour la navigation entre les pages.
 *
 * Structure de navigation :
 *   /                → HomePage
 *   /catalogue       → CataloguePage
 *   /catalogue/:slug → ProductPage
 *   /quote           → QuotePage
 *   /about           → AboutPage
 */

import { Header } from './components/Header/Header.jsx'
import { Button } from './components/Button/Button.jsx'
import { Input }  from './components/Input/Input.jsx'

export default function App() {
  return (
    <>
      <Header currentPath="/" />

      <main id="main-content" className="pt-[72px]">

        {/* ── Design System Preview ──────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 gap-12 bg-(--color-bg-default)">

          <header className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest text-(--color-content-secondary) mb-3"
            >
              Design System Preview
            </p>
            <h1
              className="text-(--color-content-accent) mb-4"
              style={{
                fontFamily: 'var(--font-family-heading)',
                fontSize: 'var(--font-size-title)',
                fontWeight: 'var(--font-weight-bold)',
              }}
            >
              Epsilon Chimie
            </h1>
            <p className="text-(--color-content-secondary) max-w-md mx-auto">
              Pharmaceutical Chemistry Laboratory — React/Vite + Tailwind CSS v4 starter
            </p>
          </header>

          {/* Buttons preview */}
          <div className="flex flex-col gap-6 w-full max-w-lg">
            <h2
              className="text-xs font-semibold uppercase tracking-widest text-(--color-content-tertiary)"
            >
              Buttons
            </h2>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="lg">Request a Quote</Button>
              <Button variant="secondary" size="lg">Browse Products</Button>
              <Button variant="ghost" size="lg">Learn More</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Request a Quote</Button>
              <Button variant="secondary">Browse Products</Button>
              <Button variant="ghost">Learn More</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" size="sm">Request a Quote</Button>
              <Button variant="secondary" size="sm">Browse Products</Button>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="primary" loading>Loading…</Button>
            </div>
          </div>

          {/* Inputs preview */}
          <div className="flex flex-col gap-4 w-full max-w-lg">
            <h2
              className="text-xs font-semibold uppercase tracking-widest text-(--color-content-tertiary)"
            >
              Inputs
            </h2>

            <Input
              label="Search by CAS number"
              type="search"
              placeholder="e.g. 64-17-5"
              helper="Enter a CAS number, molecule name, or chemical family"
            />

            <Input
              label="Company name"
              placeholder="Pharmaceutical Corp Ltd"
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="contact@pharmcorp.com"
              error="Please enter a valid email address."
              required
            />

            <Input
              label="Field disabled"
              placeholder="Not available"
              disabled
            />
          </div>

        </section>

      </main>
    </>
  )
}
