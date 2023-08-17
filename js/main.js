const nav = document.querySelector("#nav");
const abrirNav =document.querySelector("#abrirNav");
const cerrarNav = document.querySelector("#cerrarNav");

abrirNav.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrarNav.addEventListener("click", () => {
    nav.classList.remove("visible");
})
