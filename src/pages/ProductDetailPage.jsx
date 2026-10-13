import { useParams } from 'react-router'
import PagePlaceholder from '../components/PagePlaceholder.jsx'

function ProductDetailPage() {
  // `id` viene de la URL: en /producto/demo-1, id === 'demo-1'.
  const { id } = useParams()

  return (
    <PagePlaceholder title="Detalle de producto" ticket="PET-016">
      <p className="mt-2 text-slate-600">
        ID del producto: <code className="font-mono">{id}</code>
      </p>
    </PagePlaceholder>
  )
}

export default ProductDetailPage
