/**
 * Button — Epsilon Chimie Design System
 *
 * Props
 * ─────
 * variant  : 'primary' | 'secondary' | 'ghost'   (default: 'primary')
 * size     : 'lg' | 'md' | 'sm'                  (default: 'md')
 * disabled : boolean                              (default: false)
 * loading  : boolean                              (default: false)
 * as       : 'button' | 'a'                       (default: 'button')
 *
 * WCAG note:
 * When disabled=true we use aria-disabled instead of the native disabled
 * attribute so the button remains keyboard-focusable and screen-reader
 * visible. Pointer events are blocked via CSS instead.
 *
 * Token usage (all declared in globals.css @theme)
 * ─────────────────────────────────────────────────
 * Primary   bg   → --color-bg-primary
 *           text → --color-content-on-primary
 *           hover bg → --color-state-primary-hover
 *           pressed bg → --color-state-primary-pressed
 *
 * Secondary bg   → transparent → --color-bg-primary-subtle (hover)
 *           text → --color-content-accent
 *           border → --color-border-accent
 *
 * Ghost     bg   → transparent → --color-bg-subtle (hover)
 *           text → --color-content-accent
 */

const BASE = [
  'inline-flex items-center justify-center gap-2',
  'rounded font-semibold cursor-pointer',
  'transition-colors duration-150',
  // Focus ring — WCAG 2.4.7 + 2.4.11
  'focus-visible:outline-3 focus-visible:outline-offset-2',
  'focus-visible:outline-(--color-state-focus-ring)',
  // Disabled state
  'aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none',
].join(' ')

const VARIANTS = {
  primary: [
    'bg-(--color-bg-primary)',
    'text-(--color-content-on-primary)',
    'hover:bg-(--color-state-primary-hover)',
    'active:bg-(--color-state-primary-pressed)',
  ].join(' '),

  secondary: [
    'bg-transparent',
    'text-(--color-content-accent)',
    'border border-(--color-border-accent)',
    'hover:bg-(--color-bg-primary-subtle)',
    'active:bg-[#cccce7]',
  ].join(' '),

  ghost: [
    'bg-transparent',
    'text-(--color-content-accent)',
    'hover:bg-(--color-bg-subtle)',
    'active:bg-[#e5e7eb]',
  ].join(' '),
}

const SIZES = {
  lg: 'h-12 px-6 text-base',   // 48px height
  md: 'h-10 px-5 text-base',   // 40px height
  sm: 'h-8  px-4 text-xs',     // 32px height
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  as: Tag = 'button',
  className = '',
  children,
  ...props
}) {
  const isDisabled = disabled || loading

  return (
    <Tag
      className={[BASE, VARIANTS[variant], SIZES[size], className].join(' ')}
      // Use aria-disabled so the element stays focusable (WCAG 2.1)
      aria-disabled={isDisabled || undefined}
      // For native <button> only — keep disabled for non-interactive contexts
      {...(Tag === 'button' ? { type: props.type ?? 'button' } : {})}
      {...props}
    >
      {loading && (
        <span
          className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin"
          aria-hidden="true"
        />
      )}
      {children}
    </Tag>
  )
}
