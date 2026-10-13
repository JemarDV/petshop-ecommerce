// Rutas de la app en un solo lugar: si una URL cambia, se edita solo aquí
// y no en cada <Link> repartido por el proyecto.
export const PATHS = {
  home: '/',
  shop: '/tienda',
  product: '/producto/:id',
  cart: '/carrito',
  login: '/login',
}

// Construye la URL de un producto concreto, ej: productPath('42') → '/producto/42'.
export const productPath = (id) => `/producto/${id}`
