/**
 * Input — Epsilon Chimie Design System
 *
 * Props
 * ─────
 * label    : string              Label visible above the field
 * id       : string              Falls back to slugified label
 * type     : string              HTML input type (default: 'text')
 * placeholder : string
 * error    : string | null       Error message — sets aria-invalid
 * helper   : string | null       Helper text below the field
 * required : boolean
 * disabled : boolean
 *
 * Token usage
 * ────────────
 * Surface bg        → --color-surface-default
 * Text              → --color-content-primary
 * Placeholder       → --color-content-tertiary
 * Border (rest)     → --color-border-default
 * Border (focus)    → --color-border-accent
 * Border (error)    → --color-border-danger
 * Focus ring        → --color-state-focus-ring
 * Error text        → --color-content-danger
 * Helper text       → --color-content-secondary
 * Disabled bg       → --color-bg-disabled
 */

function slugify(str = '') {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

const INPUT_BASE = [
  'h-12 w-full px-4',
  'rounded border',
  'bg-(--color-surface-default)',
  'text-(--color-content-primary)',
  'placeholder:text-(--color-content-tertiary)',
  'transition-colors duration-150',
  // Focus
  'focus:outline-none',
  'focus:ring-2 focus:ring-(--color-state-focus-ring) focus:ring-offset-2',
  'focus:border-(--color-border-accent)',
].join(' ')

export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  error,
  helper,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const inputId = id ?? slugify(label)

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wide text-(--color-content-primary)"
        >
          {label}
          {required && (
            <span className="ml-1 text-(--color-content-danger)" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-required={required || undefined}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={
          error   ? `${inputId}-error`  :
          helper  ? `${inputId}-helper` :
          undefined
        }
        className={[
          INPUT_BASE,
          error
            ? 'border-(--color-border-danger) focus:ring-(--color-border-danger)'
            : 'border-(--color-border-default)',
          disabled
            ? 'bg-(--color-bg-disabled) text-(--color-content-disabled) cursor-not-allowed opacity-60'
            : '',
          className,
        ].join(' ')}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="text-xs text-(--color-content-danger)"
        >
          {error}
        </p>
      )}

      {!error && helper && (
        <p
          id={`${inputId}-helper`}
          className="text-xs text-(--color-content-secondary)"
        >
          {helper}
        </p>
      )}
    </div>
  )
}
