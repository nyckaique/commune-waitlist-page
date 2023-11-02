const hamburguer = document.querySelector("#navIcon");
const nav = document.querySelector("#navMenu");
hamburguer.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
});
