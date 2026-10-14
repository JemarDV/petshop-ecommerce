import { useState } from 'react'
import Logo from '../components/Logo.jsx'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Input } from '../components/ui'

// Las clases se escriben completas (no 'bg-' + nombre) porque Tailwind solo genera
// las clases que encuentra escritas literalmente en el código.
const PALETTES = [
  {
    name: 'brand',
    swatches: [
      ['50', 'bg-brand-50'],
      ['100', 'bg-brand-100'],
      ['200', 'bg-brand-200'],
      ['300', 'bg-brand-300'],
      ['400', 'bg-brand-400'],
      ['500', 'bg-brand-500'],
      ['600', 'bg-brand-600'],
      ['700', 'bg-brand-700'],
      ['800', 'bg-brand-800'],
      ['900', 'bg-brand-900'],
    ],
  },
  {
    name: 'accent',
    swatches: [
      ['50', 'bg-accent-50'],
      ['100', 'bg-accent-100'],
      ['500', 'bg-accent-500'],
      ['700', 'bg-accent-700'],
      ['800', 'bg-accent-800'],
    ],
  },
  {
    name: 'ink',
    swatches: [
      ['50', 'bg-ink-50'],
      ['100', 'bg-ink-100'],
      ['200', 'bg-ink-200'],
      ['300', 'bg-ink-300'],
      ['400', 'bg-ink-400'],
      ['500', 'bg-ink-500'],
      ['600', 'bg-ink-600'],
      ['700', 'bg-ink-700'],
      ['800', 'bg-ink-800'],
      ['900', 'bg-ink-900'],
    ],
  },
]

const SEMANTIC = [
  {
    token: 'primary',
    use: 'Botones y enlaces',
    className: 'bg-primary text-white',
    ratio: '5,2:1',
  },
  {
    token: 'secondary',
    use: 'Acciones secundarias',
    className: 'bg-secondary text-white',
    ratio: '5,5:1',
  },
  { token: 'fg', use: 'Texto principal', className: 'bg-fg text-white', ratio: '17:1' },
  {
    token: 'fg-muted',
    use: 'Texto secundario',
    className: 'bg-fg-muted text-white',
    ratio: '7,4:1',
  },
  { token: 'canvas', use: 'Fondo de página', className: 'bg-canvas text-fg', ratio: '—' },
  { token: 'surface', use: 'Tarjetas y navbar', className: 'bg-surface text-fg', ratio: '—' },
  { token: 'line', use: 'Bordes decorativos', className: 'bg-line text-fg', ratio: '—' },
  {
    token: 'line-strong',
    use: 'Bordes de inputs (≥ 3:1)',
    className: 'bg-line-strong text-white',
    ratio: '4,8:1',
  },
]

const STATES = [
  { token: 'success', label: 'Pedido pagado', className: 'bg-success-soft text-success' },
  { token: 'warning', label: 'Quedan pocas unidades', className: 'bg-warning-soft text-warning' },
  { token: 'danger', label: 'Sin stock', className: 'bg-danger-soft text-danger' },
  { token: 'info', label: 'Envío en 48 h', className: 'bg-info-soft text-info' },
]

function Section({ title, children }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl">{title}</h2>
      {children}
    </section>
  )
}

// Muestra de los componentes de src/components/ui con sus variantes (PET-007).
function ComponentsDemo() {
  const [isLoading, setIsLoading] = useState(false)

  function simulateLoading() {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <>
      <Section title="Button">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Agregar al carrito</Button>
          <Button variant="secondary">Ver detalles</Button>
          <Button variant="outline">Seguir comprando</Button>
          <Button variant="ghost">Cancelar</Button>
          <Button variant="danger">Eliminar</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Pequeño</Button>
          <Button size="md">Mediano</Button>
          <Button size="lg">Grande</Button>
          <Button disabled>Deshabilitado</Button>
          <Button isLoading={isLoading} onClick={simulateLoading}>
            {isLoading ? 'Procesando…' : 'Probar carga'}
          </Button>
        </div>
        <Button as="a" href="#" variant="outline">
          Soy un enlace con estilo de botón
        </Button>
      </Section>

      <Section title="Input">
        <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
          <Input label="Nombre" placeholder="Ej: Ana Pérez" required />
          <Input
            label="Correo electrónico"
            type="email"
            placeholder="tu@correo.com"
            hint="Te enviaremos el comprobante a este correo."
          />
          <Input label="Código postal" defaultValue="12" error="Debe tener al menos 4 dígitos." />
          <Input label="País" defaultValue="Chile" disabled />
        </div>
      </Section>

      <Section title="Badge">
        <div className="flex flex-wrap gap-2">
          <Badge>Neutro</Badge>
          <Badge tone="primary">Oferta</Badge>
          <Badge tone="secondary">Nuevo</Badge>
          <Badge tone="success">Pagado</Badge>
          <Badge tone="warning">Pocas unidades</Badge>
          <Badge tone="danger">Sin stock</Badge>
          <Badge tone="info">Envío gratis</Badge>
        </div>
      </Section>

      <Section title="Card">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card interactive>
            <div className="flex h-40 items-center justify-center bg-primary-soft text-6xl">
              <Logo showText={false} />
            </div>
            <CardBody className="space-y-2">
              <div className="flex gap-2">
                <Badge tone="primary">Oferta</Badge>
                <Badge tone="secondary">Perros</Badge>
              </div>
              <h3 className="text-lg">Pelota de goma resistente</h3>
              <p className="text-xl font-semibold tabular-nums">$ 12.990</p>
            </CardBody>
            <CardFooter>
              <Button fullWidth>Agregar al carrito</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg">Resumen del pedido</h3>
            </CardHeader>
            <CardBody className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-fg-muted">Subtotal</span>
                <span className="tabular-nums">$ 25.980</span>
              </div>
              <div className="flex justify-between">
                <span className="text-fg-muted">Envío</span>
                <Badge tone="success">Gratis</Badge>
              </div>
            </CardBody>
            <CardFooter className="flex justify-between font-semibold">
              <span>Total</span>
              <span className="tabular-nums">$ 25.980</span>
            </CardFooter>
          </Card>

          <Card>
            <CardBody className="space-y-1">
              <p className="font-semibold">Card simple</p>
              <p className="text-sm text-fg-muted">
                Solo CardBody: para avisos o bloques de contenido.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </>
  )
}

function StyleGuidePage() {
  return (
    <div className="space-y-12 py-6">
      <header className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Sistema de diseño
        </p>
        <h1 className="text-4xl">Guía de estilos</h1>
        <p className="max-w-2xl text-fg-muted">
          Tokens de diseño definidos en <code className="font-mono">src/index.css</code>. Los
          componentes usan los tokens semánticos; la paleta solo se usa para definirlos.
        </p>
      </header>

      <Section title="Paleta">
        {PALETTES.map(({ name, swatches }) => (
          <div key={name}>
            <p className="mb-2 font-mono text-sm text-fg-muted">{name}</p>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {swatches.map(([step, className]) => (
                <div key={step}>
                  <div className={`h-12 rounded-lg border border-line ${className}`} />
                  <p className="mt-1 text-center font-mono text-xs text-fg-muted">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Colores semánticos">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SEMANTIC.map(({ token, use, className, ratio }) => (
            <div key={token} className="overflow-hidden rounded-card border border-line">
              <div className={`px-4 py-6 font-semibold ${className}`}>Aa · {token}</div>
              <div className="flex justify-between bg-surface px-4 py-2 text-sm">
                <span className="text-fg-muted">{use}</span>
                <span className="font-mono text-fg-muted">{ratio}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-fg-muted">
          El número es el contraste del texto según WCAG (mínimo AA: 4,5:1 para texto normal).
        </p>
      </Section>

      <Section title="Estados">
        <div className="flex flex-wrap gap-3">
          {STATES.map(({ token, label, className }) => (
            <span
              key={token}
              className={`rounded-full px-3 py-1 text-sm font-semibold ${className}`}
            >
              {label}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Tipografía">
        <div className="space-y-3 rounded-card bg-surface p-6 shadow-card">
          <p className="font-mono text-xs text-fg-muted">font-display · Nunito</p>
          <p className="font-display text-5xl font-extrabold">Todo para tu mascota</p>
          <p className="font-display text-3xl font-extrabold">Juguetes y accesorios</p>
          <p className="font-display text-xl font-bold">Pelota de goma resistente</p>
          <p className="pt-4 font-mono text-xs text-fg-muted">font-sans · Inter</p>
          <p className="text-base">
            Texto de párrafo para descripciones de productos, formularios y mensajes.
          </p>
          <p className="text-sm text-fg-muted">Texto secundario: categorías, ayudas y notas.</p>
          <p className="text-2xl font-semibold tabular-nums">$ 12.990</p>
        </div>
      </Section>

      <Section title="Formas y profundidad">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-card bg-surface p-6 shadow-card">
            <p className="font-semibold">shadow-card</p>
            <p className="text-sm text-fg-muted">Tarjetas en reposo · rounded-card (1rem)</p>
          </div>
          <div className="rounded-card bg-surface p-6 shadow-card-hover">
            <p className="font-semibold">shadow-card-hover</p>
            <p className="text-sm text-fg-muted">Tarjetas al pasar el mouse</p>
          </div>
        </div>
      </Section>

      <ComponentsDemo />

      <p className="text-sm text-fg-muted">
        Prueba pulsar <kbd className="rounded border border-line px-1 font-mono">Tab</kbd> para ver
        el anillo de foco en botones y campos.
      </p>
    </div>
  )
}

export default StyleGuidePage
