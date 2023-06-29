/*
Proyecto de JavaScript
Inicio de codigo
*/

let edad = 18

let nombreDeUsuario = prompt ("¡Bienvenido a COMICLOUD! Por favor ingresa tu nombre y apellido:")
let = alert ("Bienvenido " + nombreDeUsuario)

edadDeUsuario = prompt ("¡COMICLOUD es un sitio para mayores de edad! ¡Por favor ingresa tu edad!")

if (edadDeUsuario >= edad) { 
  alert ("¡Disfruta de nuestro contenido!")
}else{
  alert ("¡No tenes la edad para acceder!")
  location.href = location.href
}

const listaDeComics = [
  {nombre:"Batman: The Dark Knight Returns", numeros:4, precioPorNumero: 2500, precioTotal: 10000},
  {nombre:"Watchmen", numeros:12, precioPorNumero: 1500, precioTotal: 18000},
  {nombre:"Daredevil: Born Again", numeros:7, precioPorNumero: 1000, precioTotal: 7000},
  {nombre:"The Incal", numeros:6, precioPorNumero: 2500, precioTotal: 15000},
  {nombre:"V de Vendetta", numeros:10, precioPorNumero: 2000, precioTotal: 20000},
  {nombre:"Akira", numeros:1, precioPorNumero: 10000, precioTotal: 10000},
  {nombre:"Sin City", numeros:2, precioPorNumero: 4000, precioTotal: 8000},
  {nombre:"Hellboy", numeros:20, precioPorNumero: 1000, precioTotal: 20000},
  {nombre:"Batman: Year One", numeros:4, precioPorNumero: 2000, precioTotal: 8000},
  {nombre:"Batman: The Long Halloween", numeros:12, precioPorNumero: 1000, precioTotal: 12000},
  {nombre:"Superman All Stars", numeros:12, precioPorNumero: 1000, precioTotal: 12000},
  {nombre:"Blacksad", numeros:1, precioPorNumero: 5000, precioTotal: 5000},
  {nombre:"Bedlam", numeros:1, precioPorNumero: 4000, precioTotal: 4000},
  {nombre:"The Walking Dead", numeros:50, precioPorNumero: 1000, precioTotal: 50000},
  {nombre:"Radiant Black", numeros:2, precioPorNumero: 2000, precioTotal: 4000},
  {nombre:"Your Name", numeros:1, precioPorNumero: 5000, precioTotal: 5000},
  {nombre:"Koe no Katachi", numeros:7, precioPorNumero: 1000, precioTotal: 14000}
]

const busquedaPorPrecioTotal = listaDeComics.filter ((elem)=> {
  return elem.precioTotal >= 10000
})
console.log(busquedaPorPrecioTotal)


const busquedaPorSome = listaDeComics.some ((elem)=> {
  return elem.nombre === "La historia de Martita"
})

console.log (busquedaPorSome)

const busquedaPorSome2 = listaDeComics.some ((elem)=> {
  return elem.nombre === "Akira"
})

console.log (busquedaPorSome2)

const busquedaPorFind = listaDeComics.find ((elem)=> {
  return elem.nombre === "Batman: The Long Halloween"
})
console.log (busquedaPorFind)

const resultadoPorReduce = listaDeComics.reduce ((prev, current)=> prev + current.precioTotal,0)
console.log (resultadoPorReduce)

const resultadoPorReduce2 = listaDeComics.reduce ((prev, current)=> prev + current.numeros,0)
console.log (resultadoPorReduce2)
