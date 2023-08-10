let comicsEnCarrito = localStorage.getItem("comics-en-carrito")
comicsEnCarrito = JSON.parse(comicsEnCarrito);

const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const botonesCarritoFunciones = document.querySelector("#botones-carrito-funciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-comic-eliminar")
const botonVaciarCarroDeCompras = document.querySelector("#carrito-boton-vaciar")
const carritoTotal = document.querySelector("#total")
const botonComprar = document.querySelector("botones-carrito-comprar")

function agregarAlCarrito() {
    if (agregarAlCarrito && agregarAlCarrito.length > 0) {
        
        carritoVacio.classList.add("disable");
        carritoProductos.classList.remove("disable");
        botonesCarritoFunciones.classList.remove("disable");
        carritoComprado.classList.add("disable");
        
        carritoProductos.innerHTML = "";
        
        agregarAlCarrito.forEach(comic => { 
        
            const div = document.createElement("div");
            div.classList.add("carrito-comic");
            div.innerHTML = `
                <img class="carrito-comic-imagen" src="${comic.imagen}" alt="${comic.nombre}">
                <div class="carrito-comic-nombre">
                    <small>Producto</small>
                    <h3>${comic.nombre}</h3>
                </div>
                <div class="carrito-comic-cantidad">
                    <small>Cantidad</small>
                    <p>${comic.cantidad}</p>
                </div>
                <div class="carrito-comic-precio">
                    <small>Precio</small>
                    <p>${comic.precio}</p>
                </div>
                <div class="carrrito-comic-total">
                    <small>Total</small>
                    <p>${comic.precio * comic.cantidad}</p>
                </div>
                <Button id="${comic.id}" class="carrito-comic-eliminar">Eliminar</Button>
            `;

            carritoProductos.append(div);
        })

    } else {
        carritoVacio.classList.remove("disable");
        carritoProductos.classList.add("disable");
        botonesCarritoFunciones.classList.add("disable");
        CarritoComprado.classList.add("disable");
    }

    cargarProductosEliminar();
}

cargarProductosCarrito();

function actializarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-comic-eliminar");
    
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function actializarBotonesEliminar(e) {
    const idBoton = e.currentTarget.id;
    const index = agregarAlCarrito.splice(index, 1);
    agregarAlCarrito.splice(index, 1);
    cargarProductosEliminar();
    localStorage.setItem("productos en carrito", JSON.stringify(agregarAlCarrito));

}

function vaciarCarroDeCompras() {
    agregarAlCarrito.length = 0;
    localStorage.setItem("productos en carrito", JSON.stringify(comicsEnCarrito));
    agregarAlCarrito();
}


