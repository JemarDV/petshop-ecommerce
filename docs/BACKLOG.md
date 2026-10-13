# Backlog — Petshop E-commerce

Prioridad: (A) alta · (M) media · (B) baja

## Épica 0 — Planificación y configuración

- [x] PET-001 (A) Crear repositorio, ramas `main`/`develop` y tablero Kanban en GitHub
- [x] PET-002 (A) Proyecto base React + Vite + Tailwind
- [x] PET-003 (M) ESLint, Prettier y convención de commits
- [x] PET-004 (A) Estructura de carpetas y enrutamiento (React Router)
- [ ] PET-005 (M) Historias de usuario y wireframes en el README

## Épica 1 — Sistema de diseño

- [ ] PET-006 (A) Paleta, tipografía y tokens en Tailwind
- [ ] PET-007 (A) Componentes base: Button, Input, Badge, Card
- [ ] PET-008 (A) Layout: Navbar responsive y Footer

## Épica 2 — Firebase y datos

- [ ] PET-009 (A) Configurar proyecto Firebase y variables de entorno
- [ ] PET-010 (A) Modelo de datos en Firestore (products, users, orders)
- [ ] PET-011 (M) Script para cargar productos de ejemplo

## Épica 3 — Catálogo

- [ ] PET-012 (A) Página de inicio (hero, categorías, destacados)
- [ ] PET-013 (A) Tienda: grilla de productos desde Firestore
- [ ] PET-014 (M) Filtros por categoría, precio y tipo de mascota
- [ ] PET-015 (M) Búsqueda y ordenamiento
- [ ] PET-016 (A) Detalle de producto
- [ ] PET-017 (M) Estados de carga, vacío y error (skeletons)

## Épica 4 — Carrito

- [ ] PET-018 (A) Contexto global del carrito
- [ ] PET-019 (A) Carrito lateral (drawer) y página de carrito
- [ ] PET-020 (M) Persistencia del carrito (localStorage)

## Épica 5 — Usuarios

- [ ] PET-021 (A) Registro e inicio de sesión (email y Google)
- [ ] PET-022 (M) Rutas protegidas y perfil de usuario
- [ ] PET-023 (M) Historial de pedidos

## Épica 6 — Checkout y pagos (Stripe modo prueba)

- [ ] PET-024 (A) Formulario de envío con validaciones
- [ ] PET-025 (A) Función `/api/checkout`: crear sesión de Stripe
- [ ] PET-026 (A) Páginas de pago exitoso y cancelado
- [ ] PET-027 (A) Webhook: marcar el pedido como pagado en Firestore
- [ ] PET-028 (M) Comprobante de compra

## Épica 7 — Panel de administración

- [ ] PET-029 (A) Rol de administrador y acceso protegido
- [ ] PET-030 (A) CRUD de productos
- [ ] PET-031 (M) Gestión de pedidos y estados
- [ ] PET-032 (B) Dashboard con métricas básicas

## Épica 8 — Calidad

- [ ] PET-033 (M) Pruebas con Vitest (carrito y utilidades)
- [ ] PET-034 (M) Accesibilidad y SEO básico
- [ ] PET-035 (B) Revisión de rendimiento (Lighthouse)

## Épica 9 — Entrega

- [ ] PET-036 (A) Despliegue en Vercel con variables de entorno
- [ ] PET-037 (A) README final con capturas, demo y tarjetas de prueba
