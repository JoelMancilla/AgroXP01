// Seleccionamos todos los productos y la modal
const productos = document.querySelectorAll(".producto");
const modal = document.getElementById("miModal");
const cerrar = document.querySelector(".cerrar");

// Elementos dentro de la modal
const modalImg = document.getElementById("modal-img");
const modalTitulo = document.getElementById("modal-titulo");
const modalDescripcion = document.getElementById("modal-descripcion");

// Evento para abrir modal con datos del producto
productos.forEach(producto => {
    producto.addEventListener("click", () => {
        modalImg.src = producto.dataset.img;
        modalTitulo.textContent = producto.dataset.titulo;
        modalDescripcion.textContent = producto.dataset.descripcion;

        modal.style.display = "block";
    });
});

// Cerrar modal
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar si se hace clic fuera del contenido
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});