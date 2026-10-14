import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
// Fuentes autoalojadas: el navegador descarga solo los alfabetos que la página usa.
import '@fontsource-variable/inter'
import '@fontsource-variable/nunito'
import './index.css'
import { router } from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
