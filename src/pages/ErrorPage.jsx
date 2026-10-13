import { isRouteErrorResponse, Link, useRouteError } from 'react-router'
import { PATHS } from '../routes/paths.js'

// Se muestra cuando una página lanza un error. Reemplaza al layout completo,
// por eso no depende de la navegación y trae su propio enlace de vuelta.
function ErrorPage() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Ocurrió un error inesperado.'

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-50 p-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900">Algo salió mal</h1>
      <p className="text-slate-600">{message}</p>
      <Link to={PATHS.home} className="text-orange-500 underline">
        Volver al inicio
      </Link>
    </main>
  )
}

export default ErrorPage
