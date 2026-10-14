import { useId } from 'react'
import { cn } from '../../utils/cn.js'

// Campo con etiqueta, ayuda y error conectados por id, para que los lectores de
// pantalla anuncien todo junto. En React 19 `ref` llega como prop normal (sin forwardRef).
function Input({ label, hint, error, id, required, className, ...props }) {
  const autoId = useId()
  const inputId = id ?? autoId
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ')

  return (
    <div className={cn('space-y-1.5', className)}>
      <label htmlFor={inputId} className="block text-sm font-semibold text-fg">
        {label}
        {required && (
          <span className="text-danger" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      <input
        id={inputId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy || undefined}
        className={cn(
          'block h-11 w-full rounded-lg border bg-surface px-3 text-fg transition-colors',
          'placeholder:text-fg-muted disabled:cursor-not-allowed disabled:opacity-50',
          error ? 'border-danger' : 'border-line-strong focus:border-primary',
        )}
        {...props}
      />
      {hint && (
        <p id={hintId} className="text-sm text-fg-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
