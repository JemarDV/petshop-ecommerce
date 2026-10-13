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
  Tipos permitidos: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `test`.

## Scripts

| Comando                | Qué hace                                    |
| ---------------------- | ------------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                      |
| `npm run build`        | Build de producción en `dist/`              |
| `npm run lint`         | Revisa el código con ESLint                 |
| `npm run lint:fix`     | Corrige automáticamente lo que ESLint pueda |
| `npm run format`       | Formatea todo el proyecto con Prettier      |
| `npm run format:check` | Verifica el formato sin modificar archivos  |

## Calidad automática (Git hooks)

Con Husky, al hacer `git commit` se ejecutan dos revisiones:

1. **pre-commit:** lint-staged pasa ESLint y Prettier solo sobre los archivos en stage.
2. **commit-msg:** commitlint rechaza mensajes que no sigan `tipo: descripción (PET-XXX)`.

Los hooks se instalan solos al ejecutar `npm install`.

## Backlog

Ver [docs/BACKLOG.md](docs/BACKLOG.md) y el [tablero Kanban](https://github.com/users/JemarDV/projects/1).
