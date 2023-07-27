const comics = [
  {
  id: "comic-batman", 
  nombre:"Batman: The Dark Knight Returns", 
  precio: 10000, 
  imagen:"./images/americanos/batman.jpg", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-vdevendetta", 
  nombre:"V de Vendetta", 
  precio: 10000, 
  imagen:"./images/americanos/vdevendetta.jpg", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-hellboy", 
  nombre:"Hellboy", 
  precio: 10000, 
  imagen:"./images/americanos/hellboy.jpg", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-watchmen", 
  nombre:"Watchmen", 
  precio: 10000, 
  imagen:"./images/americanos/watchmen.jpg", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-blacksad", 
  nombre:"Blacksad", 
  precio: 10000, 
  imagen:"./images/independientes/blacksad.jpg", 
  categoria:{nombre:"Independientes", id:"independientes",}
},
{
  id: "comic-radiantblack", 
  nombre:"Radiant Black", 
  precio: 10000, 
  imagen:"./images/independientes/radiantblack.jpg", 
  categoria:{nombre:"Independientes", id:"independientes",}
},
{
  id: "comic-akira", 
  nombre:"Akira", 
  precio: 10000, 
  imagen:"./images/mangas/akira.jpg", 
  categoria:{nombre:"Mangas", id:"mangas",}
},
];

/*Elementos del DOM*/
let productos = [];

const productosIndex = document.querySelector("#productos-index");
const botonCategoria = document.querySelectorAll(".boton-categoria");
const tituloIndex = document.querySelector("#titulo-index");
let botonComprar = document.querySelectorAll(".comic-index-comprar");
const numero = document.querySelector(".numero");


function cargarComics (comicsSeleccionados) {

  productosIndex.innerHTML = "";
  comicsSeleccionados.forEach (comic => {

    const div = document.createElement ("div");
    div.classList.add("comic-index");
    div.innerHTML = `
      <img class="comic-index-imagen" src="${comic.imagen}" alt="${comic.nombre}">
      <div class="comic-index-detalles">
        <h3 class="comic-index-nombre">${comic.nombre}</h3>
        <p class="comic-index-precio">$${comic.precio}</p>
        <button id="${comic.id}" class="comic-index-comprar">Comprar</button>
      </div>
    `;
    
      productosIndex.append(div);
  })
  botonComprarActualizado();
}


botonCategoria.forEach (boton => {
  boton.addEventListener ("click", (e)=> {

    botonCategoria.forEach(boton => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const botonCategoria = comics.find(comic => comic.categoria.id === e.currentTarget.id)
      tituloIndex.innerText = comicsBoton.categoria.nombre;
      const comicsBoton = comics.filter(comic => comic.categoria.id === e.currentTarget.id)
      cargarComics (comicsBoton);
    } else {
      tituloIndex.innerText = "Todos nuestros comics:"
      cargarComics(comics);
    }

  })
});

function botonComprarUsado() {
  botonComprar = document.querySelectorAll(".comic-index-comprar");
  
  botonComprar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let comicsEnCarrito;

let comicsEnCarritoLS = localStorage.getItem("comics-en-carrito");

if(comicsEnCarritoLS) {
  comicsEnCarrito = JSON.parse(comicsEnCarritoLS);
  actualizarNumero();
} else {
const comicsEnCarrito = [];
}

function agregarAlCarrito (e) {

  const idBoton = e.currentTarget.id;
  const comicAgregado = comics.find(comic => comic.id === idBoton);
  if (comicsEnCarrito.some(comic => comic.id === idBoton)) {
    const index = comicsEnCarrito.findIndex(comic => comic.id === idBoton)
    comicsEnCarrito[index].cantidad++;
  } else {
    comicAgregado.cantidad = 1;
    comicsEnCarrito.push(comicAgregado);
  }
  actualizarNumero();

  localStorage.setItem("comics-en-carrito", JSON.stringify(comicsEnCarrito))
}

function actualizarNumero() {
  let numeroNuevo = comicsEnCarrito.reduce((acc, comic) => acc + comic.cantidad, 0);
  numero.innerText = numeroNuevo;
}

