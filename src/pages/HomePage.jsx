import { Link } from 'react-router'
import Logo from '../components/Logo.jsx'
import { PATHS } from '../routes/paths.js'

function HomePage() {
  return (
    <section className="flex flex-col items-center gap-4 py-16 text-center">
      <h1 className="text-5xl">
        <Logo />
      </h1>
      <p className="text-fg-muted">Todo para tu mascota, en un solo lugar 🐾</p>
      <Link
        to={PATHS.shop}
        className="rounded-lg bg-primary px-5 py-2 font-semibold text-white hover:bg-primary-hover"
      >
        Ver la tienda
      </Link>
    </section>
  )
}

export default HomePage
