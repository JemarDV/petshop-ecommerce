import { cn } from '../../utils/cn.js'

// Clases completas por variante: Tailwind solo genera las clases escritas literalmente.
const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover',
  outline: 'border border-line-strong bg-surface text-fg hover:border-primary hover:text-primary',
  ghost: 'text-primary hover:bg-primary-soft',
  danger: 'bg-danger text-white hover:brightness-90',
}

const SIZES = {
  sm: 'h-9 gap-1.5 px-3 text-sm',
  md: 'h-11 gap-2 px-5 text-base',
  lg: 'h-13 gap-2 px-7 text-lg',
}

function Spinner() {
  return (
    <svg className="size-[1em] animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" />
    </svg>
  )
}

// `as` permite renderizarlo como enlace manteniendo el estilo: <Button as={Link} to="/tienda">.
function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className,
  children,
  ...props
}) {
  // Sin type, un <button> dentro de un <form> lo envía: por defecto es "button".
  // Mientras carga se deshabilita para evitar dobles envíos (ej: doble clic en "Pagar").
  const buttonProps =
    Component === 'button'
      ? { type: props.type ?? 'button', disabled: props.disabled || isLoading }
      : {}

  return (
    <Component
      aria-busy={isLoading || undefined}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-50',
        VARIANTS[variant],
        SIZES[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
      {...buttonProps}
    >
      {isLoading && <Spinner />}
      {children}
    </Component>
  )
}

export default Button
