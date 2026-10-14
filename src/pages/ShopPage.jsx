import { Link } from 'react-router'
import PagePlaceholder from '../components/PagePlaceholder.jsx'
import { productPath } from '../routes/paths.js'

function ShopPage() {
  return (
    <PagePlaceholder title="Tienda" ticket="PET-013">
      {/* Enlace de prueba para comprobar la ruta dinámica /producto/:id */}
      <Link
        to={productPath('demo-1')}
        className="mt-4 inline-block text-primary underline hover:text-primary-hover"
      >
        Ver producto de ejemplo
      </Link>
    </PagePlaceholder>
  )
}

export default ShopPage
