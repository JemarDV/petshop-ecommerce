import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout.jsx'
import CartPage from '../pages/CartPage.jsx'
import ErrorPage from '../pages/ErrorPage.jsx'
import HomePage from '../pages/HomePage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'
import ProductDetailPage from '../pages/ProductDetailPage.jsx'
import ShopPage from '../pages/ShopPage.jsx'
import { PATHS } from './paths.js'

// Todas las páginas cuelgan de MainLayout, que pinta la navegación y el footer
// y muestra la página actual en su <Outlet />.
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // Si una página lanza un error inesperado, se muestra ErrorPage en vez de una pantalla en blanco.
    errorElement: <ErrorPage />,
    children: [
      { path: PATHS.home, element: <HomePage /> },
      { path: PATHS.shop, element: <ShopPage /> },
      { path: PATHS.product, element: <ProductDetailPage /> },
      { path: PATHS.cart, element: <CartPage /> },
      { path: PATHS.login, element: <LoginPage /> },
      // `*` atrapa cualquier URL que no coincida con las anteriores.
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
