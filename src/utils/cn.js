// Une clases de CSS ignorando los valores vacíos (false, null, undefined, '').
// Ej: cn('px-4', isActive && 'bg-primary', className)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
