/*
Proyecto de JavaScript
Inicio de codigo
*/


const comics = [
  {
  id: "comic-batman", 
  nombre:"Batman: The Dark Knight Returns", 
  precio: 10000, 
  imagen:"./images/americanos/batman", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-vdevendetta", 
  nombre:"V de Vendetta", 
  precio: 10000, 
  imagen:"./images/americanos/batman", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-hellboy", 
  nombre:"Hellboy", 
  precio: 10000, 
  imagen:"./images/americanos/batman", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-watchmen", 
  nombre:"Watchmen", 
  precio: 10000, 
  imagen:"./images/americanos/watchmen", 
  categoria:{nombre:"Americanos", id:"americanos",}
},
{
  id: "comic-blacksad", 
  nombre:"Blacksad", 
  precio: 10000, 
  imagen:"./images/independientes/blacksad", 
  categoria:{nombre:"Independientes", id:"independientes",}
},
{
  id: "comic-radiantblack", 
  nombre:"Radiant Black", 
  precio: 10000, 
  imagen:"./images/independientes/radiantblack", 
  categoria:{nombre:"Independientes", id:"independientes",}
},
{
  id: "comic-akira", 
  nombre:"Akira", 
  precio: 10000, 
  imagen:"./images/mangas/akira", 
  categoria:{nombre:"Mangas", id:"mangas",}
},
];

const productosIndex = document.querySelector("#productos-index");

function cargarComics () {
  comics.forEach (producto => {
    const div = document.createElement("div");
    div.classList.add("producto-index");
    div.innerHTML = `
    <images class="producto-index-imagen" src="${producto.imagen}" alt="${producto.nombre}">
    <div class="producto-index-detalles">
        <h3 class="producto-index-nombre">${producto.nombre}</h3>
        <p class="producto-index-precio">$${producto.precio}</p>
        <button id="${producto.id}" class="producto-index-comprar">Comprar</button>
    </div>
    `;
    productosIndex.append(div);
  })
}
cargarComics ();

