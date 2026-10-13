import { Link } from 'react-router'
import { PATHS } from '../routes/paths.js'

function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="text-6xl font-extrabold text-orange-500">404</p>
      <h1 className="mt-2 text-2xl font-bold">Página no encontrada</h1>
      <p className="mt-2 text-slate-600">
        Parece que esta página se escapó a perseguir una pelota.
      </p>
      <Link to={PATHS.home} className="mt-6 inline-block text-orange-500 underline">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
