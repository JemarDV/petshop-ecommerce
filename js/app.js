const products = [
  { id: 1, name: "Collar ajustable de nylon", category: "Collares", price: 12.99, emoji: "🦮" },
  { id: 2, name: "Correa retráctil 5 m", category: "Correas", price: 24.5, emoji: "🐕" },
  { id: 3, name: "Cama acolchada mediana", category: "Camas", price: 39.9, emoji: "🛏️" },
  { id: 4, name: "Pelota de goma resistente", category: "Juguetes", price: 6.75, emoji: "🎾" },
  { id: 5, name: "Rascador para gatos", category: "Juguetes", price: 29.0, emoji: "🐈" },
  { id: 6, name: "Comedero doble de acero", category: "Comederos", price: 15.49, emoji: "🥣" },
  { id: 7, name: "Transportadora ventilada", category: "Transporte", price: 45.0, emoji: "🧳" },
  { id: 8, name: "Placa identificadora grabada", category: "Collares", price: 8.99, emoji: "🏷️" },
];

const CART_KEY = "tienda-mascotas-cart";
let cart = loadCart();
let activeCategory = "Todos";

const $ = (id) => document.getElementById(id);
const money = (n) => `$${n.toFixed(2)}`;

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {}
}

function renderFilters() {
  const categories = ["Todos", ...new Set(products.map((p) => p.category))];
  $("filters").innerHTML = categories
    .map((c) => `<button class="${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
}

function renderProducts() {
  const list = activeCategory === "Todos" ? products : products.filter((p) => p.category === activeCategory);
  $("products").innerHTML = list
    .map(
      (p) => `
      <article class="card">
        <div class="card__emoji">${p.emoji}</div>
        <span class="card__category">${p.category}</span>
        <h3>${p.name}</h3>
        <span class="card__price">${money(p.price)}</span>
        <button class="btn" data-add="${p.id}">Agregar al carrito</button>
      </article>`
    )
    .join("");
}

function renderCart() {
  $("cartItems").innerHTML = cart.length
    ? cart
        .map((item) => {
          const p = products.find((x) => x.id === item.id);
          return `<li>
            <span>${p.name} × ${item.qty}</span>
            <span>${money(p.price * item.qty)} <button data-remove="${p.id}" aria-label="Quitar">✕</button></span>
          </li>`;
        })
        .join("")
    : "<li>Tu carrito está vacío.</li>";

  const total = cart.reduce((sum, item) => sum + products.find((p) => p.id === item.id).price * item.qty, 0);
  $("cartTotal").textContent = money(total);
  $("cartCount").textContent = cart.reduce((n, item) => n + item.qty, 0);
}

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function toggleCart(open) {
  $("cart").classList.toggle("open", open);
  $("cart").setAttribute("aria-hidden", String(!open));
}

$("filters").addEventListener("click", (e) => {
  const cat = e.target.dataset.cat;
  if (!cat) return;
  activeCategory = cat;
  renderFilters();
  renderProducts();
});

$("products").addEventListener("click", (e) => {
  const id = Number(e.target.dataset.add);
  if (id) addToCart(id);
});

$("cartItems").addEventListener("click", (e) => {
  const id = Number(e.target.dataset.remove);
  if (id) removeFromCart(id);
});

$("cartBtn").addEventListener("click", () => toggleCart(true));
$("closeCart").addEventListener("click", () => toggleCart(false));
$("checkout").addEventListener("click", () => {
  if (!cart.length) return alert("Tu carrito está vacío.");
  alert("¡Gracias por tu compra! (La pasarela de pago aún no está integrada.)");
  cart = [];
  saveCart();
  renderCart();
  toggleCart(false);
});

renderFilters();
renderProducts();
renderCart();
