# 🐾 Petshop E-commerce

E-commerce moderno de accesorios para mascotas. Proyecto académico con estándar profesional.

## Stack

- **Frontend:** React + Vite + Tailwind CSS + React Router
- **Backend:** Firebase (Authentication y Firestore, plan Spark)
- **Pagos:** Stripe en modo prueba, mediante funciones serverless de Vercel (`/api`)
- **Despliegue:** Vercel

## Historias de usuario

Formato: _Como [rol], quiero [acción], para [beneficio]_. Cada historia incluye sus
criterios de aceptación (cuándo se considera terminada) y los tickets que la implementan.

### Roles

| Rol               | Descripción                                                  |
| ----------------- | ------------------------------------------------------------ |
| **Visitante**     | Navega la tienda sin cuenta. Puede explorar y armar carrito. |
| **Cliente**       | Usuario registrado. Puede comprar y ver sus pedidos.         |
| **Administrador** | Gestiona productos y pedidos desde un panel protegido.       |

### Visitante

**HU-01 · Conocer la tienda** — Como visitante, quiero una página de inicio clara, para
entender rápidamente qué vende la tienda y llegar a lo que busco.

- Muestra un banner principal, las categorías y una selección de productos destacados.
- Desde el inicio se llega al catálogo en un clic.
- Tickets: PET-012

**HU-02 · Explorar el catálogo** — Como visitante, quiero ver todos los productos en una
grilla, para comparar opciones de un vistazo.

- Cada producto muestra imagen, nombre, precio y botón "Agregar".
- Mientras carga se ven _skeletons_; si falla, un mensaje de error con opción de reintentar.
- Tickets: PET-013, PET-017

**HU-03 · Filtrar productos** — Como visitante, quiero filtrar por categoría, tipo de
mascota y rango de precio, para encontrar solo lo que le sirve a mi mascota.

- Los filtros se pueden combinar y el resultado se actualiza al instante.
- Un botón "Limpiar filtros" vuelve al catálogo completo.
- Tickets: PET-014

**HU-04 · Buscar y ordenar** — Como visitante, quiero buscar por nombre y ordenar los
resultados, para llegar más rápido al producto que quiero.

- La búsqueda no distingue mayúsculas ni tildes.
- Se puede ordenar por precio (menor/mayor) y por nombre.
- Si no hay resultados, se muestra un mensaje amable en lugar de una grilla vacía.
- Tickets: PET-015, PET-017

**HU-05 · Ver el detalle de un producto** — Como visitante, quiero ver la información
completa de un producto, para decidir si lo compro.

- Muestra imágenes, descripción, precio, stock disponible y selector de cantidad.
- Un producto inexistente muestra un mensaje "Producto no encontrado".
- Tickets: PET-016

**HU-06 · Armar mi carrito** — Como visitante, quiero agregar productos a un carrito,
para comprar varios a la vez.

- Se puede agregar desde la grilla y desde el detalle; el ícono del carrito muestra la cantidad.
- En el carrito se cambia la cantidad, se elimina un producto y se ve el total actualizado.
- La cantidad no puede superar el stock disponible.
- El carrito se conserva al recargar la página o cerrar el navegador.
- Tickets: PET-018, PET-019, PET-020

### Cliente

**HU-07 · Crear cuenta e iniciar sesión** — Como cliente, quiero registrarme con mi email
o con Google, para comprar y guardar mis pedidos.

- Registro e inicio de sesión con email/contraseña y con Google.
- Los errores (contraseña incorrecta, email ya registrado) se muestran en español.
- Se puede cerrar sesión desde la navegación.
- Tickets: PET-021

**HU-08 · Proteger mi cuenta** — Como cliente, quiero que mi perfil y mis pedidos solo
sean visibles para mí, para proteger mis datos.

- Si un visitante entra a una ruta privada, se le envía al login y, al ingresar, vuelve a
  la página que quería ver.
- Tickets: PET-022

**HU-09 · Ingresar mis datos de envío** — Como cliente, quiero completar un formulario de
envío, para recibir mi pedido en casa.

- Campos obligatorios: nombre, teléfono, dirección, ciudad y código postal.
- Los errores se indican junto a cada campo antes de continuar al pago.
- Tickets: PET-024

**HU-10 · Pagar de forma segura** — Como cliente, quiero pagar con tarjeta en una página
segura, para completar mi compra con confianza.

- Al confirmar, se redirige a Stripe Checkout en **modo prueba** (nunca dinero real).
- Tras pagar se muestra la página de éxito; si cancela, la de pago cancelado con el
  carrito intacto.
- El pedido se marca como pagado solo cuando Stripe lo confirma (webhook), no desde el
  navegador.
- Tickets: PET-025, PET-026, PET-027

**HU-11 · Recibir un comprobante** — Como cliente, quiero un comprobante de mi compra,
para tener constancia de lo que pagué.

- Incluye número de pedido, fecha, productos, cantidades, total y datos de envío.
- Tickets: PET-028

**HU-12 · Consultar mis pedidos** — Como cliente, quiero ver el historial de mis pedidos,
para saber en qué estado está cada uno.

- Lista con fecha, total y estado (pendiente, pagado, enviado, entregado).
- Cada cliente ve solo sus propios pedidos.
- Tickets: PET-023

### Administrador

**HU-13 · Acceder al panel** — Como administrador, quiero un panel al que solo yo pueda
entrar, para gestionar la tienda sin riesgos.

- Un usuario sin rol de administrador que entra a `/admin` es redirigido al inicio.
- Las reglas de Firestore también impiden escribir productos o pedidos sin ese rol.
- Tickets: PET-029

**HU-14 · Gestionar productos** — Como administrador, quiero crear, editar y eliminar
productos, para mantener el catálogo al día.

- El formulario valida nombre, precio, stock, categoría, tipo de mascota e imagen.
- Eliminar pide confirmación. Los cambios se ven en la tienda sin redesplegar.
- Tickets: PET-030

**HU-15 · Gestionar pedidos y ver métricas** — Como administrador, quiero ver todos los
pedidos, cambiar su estado y consultar métricas básicas, para organizar los envíos y
saber cómo va el negocio.

- Lista de pedidos filtrable por estado; el estado se cambia desde la lista.
- El dashboard muestra ventas totales, cantidad de pedidos y productos más vendidos.
- Tickets: PET-031, PET-032

### Requisitos no funcionales

- **Responsive:** se usa cómodamente desde 360 px (móvil) hasta escritorio.
- **Accesibilidad:** navegable con teclado, textos alternativos y contraste suficiente (PET-034).
- **Seguridad:** la clave secreta de Stripe vive solo en `/api`; reglas de Firestore por rol.
- **Rendimiento:** Lighthouse ≥ 90 en rendimiento y accesibilidad (PET-035).

## Wireframes

Bocetos de baja fidelidad: definen **qué va en cada pantalla y dónde**, no colores ni
estilos (eso se decide en la Épica 1). Haz clic en cada pantalla para desplegarla.

<details>
<summary><b>Inicio</b> (<code>/</code>) — HU-01</summary>

```
+------------------------------------------------------------------+
| [Logo] PetShop   Inicio  Tienda   [ Buscar...      ]  Cuenta [3] |
+------------------------------------------------------------------+
|                                                                  |
|   Todo para tu mascota,                     +----------------+   |
|   en un solo lugar                          |                |   |
|   Juguetes, camas, correas y más.           |    [ imagen ]  |   |
|   ( Ver la tienda )                         |                |   |
|                                             +----------------+   |
+------------------------------------------------------------------+
|  Categorías                                                      |
|  +----------+  +----------+  +----------+  +----------+          |
|  |  Perros  |  |  Gatos   |  |   Aves   |  | Roedores |          |
|  +----------+  +----------+  +----------+  +----------+          |
+------------------------------------------------------------------+
|  Destacados                                        Ver todos >   |
|  +----------+  +----------+  +----------+  +----------+          |
|  | [ img ]  |  | [ img ]  |  | [ img ]  |  | [ img ]  |          |
|  | Nombre   |  | Nombre   |  | Nombre   |  | Nombre   |          |
|  | $ 00.00  |  | $ 00.00  |  | $ 00.00  |  | $ 00.00  |          |
|  | (Agregar)|  | (Agregar)|  | (Agregar)|  | (Agregar)|          |
|  +----------+  +----------+  +----------+  +----------+          |
+------------------------------------------------------------------+
|  PetShop · Contacto · Envíos · Redes sociales            © 2026  |
+------------------------------------------------------------------+
```

</details>

<details>
<summary><b>Tienda</b> (<code>/tienda</code>) — HU-02, HU-03, HU-04</summary>

```
+------------------------------------------------------------------+
| [Logo] PetShop   Inicio  Tienda   [ Buscar...      ]  Cuenta [3] |
+------------------------------------------------------------------+
| Tienda                                24 productos               |
|                                       Ordenar: [ Precio: menor v]|
| +---------------+  +----------+  +----------+  +----------+      |
| | FILTROS       |  | [ img ]  |  | [ img ]  |  | [ img ]  |      |
| |               |  | Nombre   |  | Nombre   |  | Nombre   |      |
| | Mascota       |  | $ 00.00  |  | $ 00.00  |  | $ 00.00  |      |
| | [x] Perro     |  | (Agregar)|  | (Agregar)|  | (Agregar)|      |
| | [ ] Gato      |  +----------+  +----------+  +----------+      |
| | [ ] Ave       |                                                |
| |               |  +----------+  +----------+  +----------+      |
| | Categoría     |  | [ img ]  |  | [ img ]  |  | [ img ]  |      |
| | [ ] Juguetes  |  | Nombre   |  | Nombre   |  | Nombre   |      |
| | [ ] Camas     |  | $ 00.00  |  | $ 00.00  |  | $ 00.00  |      |
| | [ ] Correas   |  | (Agregar)|  | (Agregar)|  | (Agregar)|      |
| |               |  +----------+  +----------+  +----------+      |
| | Precio        |                                                |
| | $0 ---o--- $99|          < Anterior   1  2  3   Siguiente >    |
| |               |                                                |
| | (Limpiar)     |                                                |
| +---------------+                                                |
+------------------------------------------------------------------+
```

</details>

<details>
<summary><b>Detalle de producto</b> (<code>/producto/:id</code>) — HU-05, HU-06</summary>

```
+------------------------------------------------------------------+
| [Logo] PetShop   Inicio  Tienda   [ Buscar...      ]  Cuenta [3] |
+------------------------------------------------------------------+
| Inicio > Tienda > Perros > Pelota de goma                        |
|                                                                  |
| +--------------------------+   Pelota de goma resistente         |
| |                          |   [Perro] [Juguetes]                |
| |                          |                                     |
| |      [ imagen grande ]   |   $ 00.00                           |
| |                          |   En stock: 12 unidades             |
| |                          |                                     |
| +--------------------------+   Cantidad:  ( - )  1  ( + )        |
| [img] [img] [img]                                                |
|                                ( Agregar al carrito )            |
|                                                                  |
|  Descripción                                                     |
|  Texto con materiales, medidas y recomendaciones de uso.         |
+------------------------------------------------------------------+
```

</details>

<details>
<summary><b>Carrito lateral y página de carrito</b> (<code>/carrito</code>) — HU-06</summary>

```
     Carrito lateral (drawer)              Página /carrito
+------------------------------+   +-----------------------------------+
| Tu carrito (3)           [X] |   | Tu carrito                        |
|------------------------------|   |                                   |
| [img] Pelota      $ 00.00    |   | Producto      Cant.     Subtotal  |
|       ( - ) 1 ( + )  Quitar  |   | --------------------------------- |
|------------------------------|   | [img] Pelota  (-) 1 (+) $ 00.00 X |
| [img] Cama        $ 00.00    |   | [img] Cama    (-) 2 (+) $ 00.00 X |
|       ( - ) 2 ( + )  Quitar  |   |                                   |
|------------------------------|   |              +------------------+ |
| Subtotal          $ 00.00    |   |              | Subtotal $ 00.00 | |
|                              |   |              | Envío    $ 00.00 | |
| ( Ver carrito )              |   |              | Total    $ 00.00 | |
| ( Ir a pagar  )              |   |              | ( Ir a pagar )   | |
+------------------------------+   |              +------------------+ |
                                   +-----------------------------------+

 Carrito vacío: "Tu carrito está vacío" + ( Ver la tienda )
```

</details>

<details>
<summary><b>Checkout</b> (<code>/checkout</code>) — HU-09, HU-10</summary>

```
+------------------------------------------------------------------+
| [Logo] PetShop                                       Pago seguro |
+------------------------------------------------------------------+
|  Datos de envío                       Resumen del pedido         |
|                                      +------------------------+  |
|  Nombre completo                     | Pelota x1     $ 00.00  |  |
|  [______________________________]    | Cama   x2     $ 00.00  |  |
|  Teléfono                            |------------------------|  |
|  [______________________________]    | Envío         $ 00.00  |  |
|  Dirección                           | Total         $ 00.00  |  |
|  [______________________________]    +------------------------+  |
|  ! La dirección es obligatoria                                   |
|  Ciudad               Código postal                              |
|  [______________]     [__________]                               |
|                                                                  |
|  ( Continuar al pago )  -> redirige a Stripe Checkout (prueba)   |
+------------------------------------------------------------------+
   Luego: /pago/exito (con n.º de pedido)  ó  /pago/cancelado
```

</details>

<details>
<summary><b>Panel de administración</b> (<code>/admin</code>) — HU-13, HU-14, HU-15</summary>

```
+------------------------------------------------------------------+
| [Logo] PetShop · Admin                            admin@... Salir|
+---------------+--------------------------------------------------+
| Dashboard     |  Productos                     ( + Nuevo )       |
| > Productos   |  [ Buscar producto...    ]                       |
| Pedidos       |                                                  |
|               |  Imagen  Nombre      Precio   Stock  Acciones    |
|               |  ----------------------------------------------- |
|               |  [img]   Pelota      $ 00.00  12   Editar Borrar |
|               |  [img]   Cama        $ 00.00   4   Editar Borrar |
|               |  [img]   Correa      $ 00.00   0   Editar Borrar |
|               |                                                  |
+---------------+--------------------------------------------------+
  Dashboard: tarjetas con Ventas totales · N.º de pedidos · Más vendidos
  Pedidos: tabla con estado editable (pendiente > pagado > enviado > entregado)
```

</details>

<details>
<summary><b>Vista móvil</b> (navegación y tienda) — requisito responsive</summary>

```
+----------------------+   +----------------------+
| [=]  PetShop     [3] |   | [X]  Menú            |
+----------------------+   +----------------------+
| [ Buscar...        ] |   | Inicio               |
| (Filtros) [Ordenar v]|   | Tienda               |
|                      |   | Mi cuenta            |
| +--------+ +--------+|   | Mis pedidos          |
| | [img]  | | [img]  ||   | Carrito (3)          |
| | Nombre | | Nombre ||   |                      |
| | $00.00 | | $00.00 ||   | ( Cerrar sesión )    |
| |(Agreg.)| |(Agreg.)||   |                      |
| +--------+ +--------+|   |                      |
+----------------------+   +----------------------+
   Tienda (2 columnas)         Menú desplegado
```

</details>

## Flujo de trabajo

- Ramas: `main` (estable/entrega) y `develop` (integración).
- Una rama por ticket desde `develop`: `feature/PET-XXX-descripcion-corta`.
- Pull request hacia `develop`; al cerrar una épica, `develop` → `main`.
- Commits convencionales con el ID del ticket, ej.: `feat: grilla de productos (PET-013)`.
  Tipos permitidos: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `test`.

## Estructura de carpetas

```
src/
├── components/   Piezas de UI reutilizables (Logo, botones, tarjetas…)
├── context/      Estado global con React Context (carrito, sesión)
├── hooks/        Hooks personalizados (useCart, useAuth…)
├── layouts/      Estructura común de las páginas (navbar + contenido + footer)
├── pages/        Una página por ruta (HomePage, ShopPage…)
├── routes/       Definición de rutas (router.jsx) y URLs centralizadas (paths.js)
├── services/     Comunicación externa (Firebase, Stripe)
├── utils/        Funciones puras de ayuda (formato de precios, etc.)
├── index.css     Estilos globales y Tailwind
└── main.jsx      Punto de entrada: monta el router
```

## Rutas

| URL             | Página              |
| --------------- | ------------------- |
| `/`             | Inicio              |
| `/tienda`       | Catálogo            |
| `/producto/:id` | Detalle de producto |
| `/carrito`      | Carrito             |
| `/login`        | Iniciar sesión      |
| cualquier otra  | 404                 |

`vercel.json` redirige todas las rutas (excepto `/api`) a `index.html` para que
recargar una página como `/tienda` no dé 404 en producción.

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
