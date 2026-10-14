import { cn } from '../../utils/cn.js'

// Card es el contenedor; CardHeader, CardBody y CardFooter son partes opcionales.
// `interactive` agrega la sombra de hover (útil para tarjetas de producto clicables).
export function Card({ as: Component = 'div', interactive = false, className, ...props }) {
  return (
    <Component
      className={cn(
        'overflow-hidden rounded-card border border-line bg-surface shadow-card',
        interactive && 'transition-shadow hover:shadow-card-hover',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('border-b border-line px-5 py-4', className)} {...props} />
}

export function CardBody({ className, ...props }) {
  return <div className={cn('p-5', className)} {...props} />
}

export function CardFooter({ className, ...props }) {
  return <div className={cn('border-t border-line px-5 py-4', className)} {...props} />
}

export default Card
