// Logo de PetShop: símbolo (huella) + nombre. El símbolo es SVG en línea
// para que escale con el tamaño de letra (h-[1.6em]) y no requiera una petición extra.
function Logo({ className = '', showText = true }) {
  return (
    <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight ${className}`}>
      <svg viewBox="0 0 64 64" className="h-[1.6em] w-[1.6em] shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="16" className="fill-orange-500" />
        <g className="fill-white">
          <ellipse cx="18.5" cy="28" rx="4.6" ry="6" transform="rotate(-25 18.5 28)" />
          <ellipse cx="26.5" cy="18.5" rx="4.8" ry="6.4" transform="rotate(-8 26.5 18.5)" />
          <ellipse cx="37.5" cy="18.5" rx="4.8" ry="6.4" transform="rotate(8 37.5 18.5)" />
          <ellipse cx="45.5" cy="28" rx="4.6" ry="6" transform="rotate(25 45.5 28)" />
          <path d="M32 31c-6.5 0-14 7.4-14 13.6 0 4.2 3.1 6.4 7.2 6.4 2.6 0 4.6-1.3 6.8-1.3s4.2 1.3 6.8 1.3c4.1 0 7.2-2.2 7.2-6.4C46 38.4 38.5 31 32 31z" />
        </g>
      </svg>
      {showText && (
        <span>
          <span className="text-slate-900">Pet</span>
          <span className="text-orange-500">Shop</span>
        </span>
      )}
      {!showText && <span className="sr-only">PetShop</span>}
    </span>
  )
}

export default Logo
