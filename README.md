# 🐾 Petshop E-commerce

E-commerce moderno de accesorios para mascotas. Proyecto académico con estándar profesional.

## Stack

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Firebase (Authentication y Firestore, plan Spark)
- **Pagos:** Stripe en modo prueba, mediante funciones serverless de Vercel (`/api`)
- **Despliegue:** Vercel

## Flujo de trabajo

- Ramas: `main` (estable/entrega) y `develop` (integración).
- Una rama por ticket desde `develop`: `feature/PET-XXX-descripcion-corta`.
- Pull request hacia `develop`; al cerrar una épica, `develop` → `main`.
- Commits convencionales con el ID del ticket, ej.: `feat: grilla de productos (PET-013)`.

## Backlog

Ver [docs/BACKLOG.md](docs/BACKLOG.md) y el [tablero Kanban](https://github.com/users/JemarDV/projects/1).
