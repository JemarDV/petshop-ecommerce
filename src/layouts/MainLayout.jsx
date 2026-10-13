import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'
import Logo from '../components/Logo.jsx'
import { PATHS } from '../routes/paths.js'

const NAV_LINKS = [
  { to: PATHS.home, label: 'Inicio' },
  { to: PATHS.shop, label: 'Tienda' },
  { to: PATHS.cart, label: 'Carrito' },
  { to: PATHS.login, label: 'Ingresar' },
]

// Navegación provisional: la Navbar responsive definitiva se construye en PET-008.
function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 p-4">
          <Link to={PATHS.home} className="text-2xl">
            <Logo />
          </Link>
          <ul className="flex gap-4 text-sm font-medium">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  // `end` evita que "Inicio" quede activo en todas las rutas (todas empiezan con "/").
                  end={to === PATHS.home}
                  className={({ isActive }) =>
                    isActive ? 'text-orange-500' : 'text-slate-600 hover:text-slate-900'
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 p-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white p-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PetShop
      </footer>

      {/* Al cambiar de página vuelve arriba, y al usar "atrás" recupera la posición previa. */}
      <ScrollRestoration />
    </div>
  )
}

export default MainLayout
