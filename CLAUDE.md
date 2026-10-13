# Petshop E-commerce — Contexto del proyecto

## Qué es

E-commerce moderno de accesorios para mascotas para un petshop. Proyecto académico,
pero debe verse y funcionar como un producto profesional. Nombre de la tienda: PetShop.

## Stack y arquitectura (decisiones tomadas)

- Frontend: React + Vite + Tailwind CSS, React Router.
- Firebase (plan gratuito Spark): Authentication (email y Google) + Firestore.
- Pagos: Stripe en MODO PRUEBA, nunca dinero real. La clave secreta de Stripe
  vive solo en funciones serverless de Vercel (carpeta `/api`), jamás en el frontend.
  - `/api/checkout`: crea la sesión de Stripe Checkout.
  - `/api/webhook`: recibe la confirmación y marca el pedido como pagado en Firestore.
- No usar Cloud Functions de Firebase (exigen plan Blaze).
- Despliegue: Vercel. Variables de entorno en `.env.local` (nunca se suben a Git).
- Plan B si Stripe no permite registrar la cuenta: simulación de pago propia.

## Forma de trabajo (obligatorio)

- Se avanza UN ticket a la vez, en el orden de `docs/BACKLOG.md`.
- Soy estudiante: antes de escribir código, explica brevemente el porqué de cada
  decisión. Teoría breve + código + qué verificar. Responde siempre en español.
- No avances al siguiente ticket sin que yo lo confirme.
- Al cerrar un ticket: marca su casilla en `docs/BACKLOG.md` y actualiza
  "Estado actual" en este archivo.

## Git

- Ramas fijas: `main` (estable/entrega) y `develop` (integración).
- Una rama por ticket desde `develop`: `feature/PET-XXX-descripcion-corta`.
- Pull request hacia `develop`. Al terminar una épica, `develop` → `main`.
- Commits convencionales: `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`,
  `test:`, con el ID del ticket. Ej: `feat: grilla de productos (PET-013)`.
- Issues y tablero en GitHub Projects (Backlog, To Do, In Progress, In Review, Done).

## Estado actual

- Último ticket cerrado: PET-005 (historias de usuario HU-01 a HU-15 y wireframes en el README).
- Épica 0 completa: pendiente fusionar `develop` → `main` (PR #39).
- Siguiente: PET-006 (paleta, tipografía y tokens en Tailwind).
- Al implementar un ticket, revisar los criterios de aceptación de su HU en el README.
- Router: `createBrowserRouter` en `src/routes/router.jsx`; URLs en `src/routes/paths.js`.
  `RouterProvider` se importa de `react-router/dom`, el resto de `react-router`.
- Calidad: `npm run lint` y `npm run format:check` deben pasar; los hooks de Husky
  validan formato y mensaje de commit (`tipo: descripción (PET-XXX)`).

## Backlog

@docs/BACKLOG.md
