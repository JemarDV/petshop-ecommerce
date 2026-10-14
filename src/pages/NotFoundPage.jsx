import { Link } from 'react-router'
import { PATHS } from '../routes/paths.js'

function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="font-display text-6xl font-extrabold text-brand-600">404</p>
      <h1 className="mt-2 text-2xl font-bold">Página no encontrada</h1>
      <p className="mt-2 text-fg-muted">Parece que esta página se escapó a perseguir una pelota.</p>
      <Link
        to={PATHS.home}
        className="mt-6 inline-block text-primary underline hover:text-primary-hover"
      >
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
