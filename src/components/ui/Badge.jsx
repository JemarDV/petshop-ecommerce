import { cn } from '../../utils/cn.js'

// Cada tono usa texto oscuro sobre su fondo *-soft (contraste ≥ 4,5:1).
const TONES = {
  neutral: 'border border-line bg-canvas text-fg-muted',
  primary: 'bg-primary-soft text-primary',
  secondary: 'bg-secondary-soft text-secondary',
  success: 'bg-success-soft text-success',
  warning: 'bg-warning-soft text-warning',
  danger: 'bg-danger-soft text-danger',
  info: 'bg-info-soft text-info',
}

function Badge({ tone = 'neutral', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
        TONES[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
