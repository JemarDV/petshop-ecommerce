// Contenido provisional para páginas que se construyen en tickets posteriores.
function PagePlaceholder({ title, ticket, children }) {
  return (
    <section className="py-12 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
      {ticket && <p className="mt-4 text-sm text-fg-muted">Próximamente ({ticket})</p>}
    </section>
  )
}

export default PagePlaceholder
