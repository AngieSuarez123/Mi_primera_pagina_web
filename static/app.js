// Glitch animado para el título principal
const titulo = document.querySelector("header h1");
if (titulo) {
  setInterval(() => {
    titulo.style.textShadow = "0 0 5px #ff5252, 0 0 10px #ff0";
    titulo.style.transform = "skewX(2deg)";
    setTimeout(() => {
      titulo.style.textShadow = "";
      titulo.style.transform = "skewX(0)";
    }, 100);
  }, 3000);
}

// Hover vibrante en los h2
document.querySelectorAll("h2").forEach((titulo) => {
  titulo.addEventListener("mouseenter", () => {
    titulo.style.color = "#ff0";
    titulo.style.transform = "scale(1.1) rotate(-1deg)";
    titulo.style.textShadow = "0 0 8px #ff5252";
    titulo.style.transition = "0.3s";
  });
  titulo.addEventListener("mouseleave", () => {
    titulo.style.color = "";
    titulo.style.transform = "scale(1)";
    titulo.style.textShadow = "";
  });
});

// Sonido urbano al hacer clic en el botón
const btn = document.querySelector(".btn-primary");
if (btn) {
  btn.addEventListener("click", () => {
    const audio = new Audio("../static/sounds/graffiti-spray.mp3");
    audio.play();
    alert("🎨 Flow activado: Bienvenido al catálogo JEF.");
  });
}

// Animación al hacer scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
      sec.style.transition = "all 0.6s ease-in-out";
    }
  });
});

// Cargar productos dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("productos");
  if (!contenedor || contenedor.children.length > 0) return;

  const productos = [
    { nombre: "Camiseta Oversize", precio: "$59.900" },
    { nombre: "Hoodie JEF", precio: "$99.900" },
    { nombre: "Gorra Street", precio: "$39.900" },
    { nombre: "Pantalón Cargo", precio: "$79.900" },
    { nombre: "Chaqueta Graffiti", precio: "$119.900" }
  ];

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.textContent = producto.precio;

    card.appendChild(nombre);
    card.appendChild(precio);
    contenedor.appendChild(card);
  });
});