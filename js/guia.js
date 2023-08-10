
//Sebastian Manuel Molina Moneff

//GUIA JAVASCRIPT PARA TONTOS-----------------------------------------------------------------------------

//Este documento es una guia rapida y sencilla del curso. Su uso es exclusivo para tomar notas, como tal,
//no esta enlazado al archivo html y el codigo no afecta al proyecto ni al archivo main.js.

// === es igual a: "="
// || es igual a: "o"
// && es igual a: "y"

//--------------------------------------------------------------------------------------------------------
//VARIABLES:
//--------------------------------------------------------------------------------------------------------

//Las variables son espacios en la memoria que contienen datos. Los principales son "let" y "const".
//Se podria decir que son cajas que contienen informacion en forma de un cierto tipo de dato.
//Hay varios tipos de datos por ejemplo: Numbers, Strings, Booleanos, etc.


//NUMBERS: Son datos mumericos.
//Por ejemplo:
let = 33
let = 676
let = 3980


//STRINGS: Son datos conformados por cadenas de caracteres, estos siempre se escriben entre comillas.
//De esta forma pueden ser cualquier tipo de palabra. 
//Por ejemplo:
let = "Mariano"
let = "Delfin"
let = "Av. San Martin 264"
let = "cursojs@gmail.com"


//BOOLEANOS: Son datos con 2 valores, verdadero o falso. 
//Estos son datos usados para darle condiciones a las variables o a las funciones. 
//Por ejemplo:
let = false
let = true


//LET: Se usa en variables que pueden cambiar su valor a lo largo del codigo.
let = 99


//CONST: Se usa para variables que no van a cambiar durante el codigo. Se suelen usar en los Arrays.
const mascotas = ["Nina","Kuro","Catalina"]

//--------------------------------------------------------------------------------------------------------
//ARRAYS:
//--------------------------------------------------------------------------------------------------------

//Los arrays son variables que contienen muchas variables en forma de lista.
//Una caja con muchos datos, estos pueden ser numeros, strings, boleeanos, objetos o funciones.
//Normalmente se ordenan con el valor 0 hacia arriba para poder acceder a los datos mas adelante.
//Si son varios de agrupan dentro de [], y se separan por comas. 
//Por ejemplo:

//Array con numeros:
const arrayA = [2,65,82]

//Array con Strings:
const arrayB = ["Juan","Eduardo","Lucas"]

//Array con Booleanos:
const arrayC = [false,true,false,false]

//Array con valores mixtos:
const arrayD = [23,"Cristian", true]

//En todos estos casos, los datos al ser 3 en cada ejemplo, se ordenan de 0 a 2. (0,1,2)

//METODOS Y PROPIEDADES DE LOS ARRAY----------------------------------------------------------------------

//Los metodos y propiedades son porpiedades que se usan para interactuar con los array y trabajar con sus 
//datos. 
//Algunos son: length, push, pop, shift, unshift, splice, slice, etc.

//LENGTH: Se usa para obtener el largo de un array, es decir; obtener la camtidad de datos que contiene,
//sin importar el largo que pueda tener el array. Ejemplo:

const array1 = [1,2,3,4,5,6,7,8,9,10]
console.log (array1.length)

//Este codigo va a imprimir en el console.log la cantidad de datos, osea 10.

//PUSH: Se usa para agregar elementos a un Array que ya existe, pasando como parametro el valor o variable
//a agregar. 
//Ejemplo:

const array2 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]
array2.push ("Cristina")
console.log (array2.length)
//Imprime: "Marta","Paola","Desire","Fernanda","Macarena","Belen","Cristina"
//En este ejemplo se agrega el dato "Cristina" al array. Al pedir la camtidad de valores con el length la
//consola nos va a dar como valor "Marta","Paola","Desire","Fernanda","Macarena","Belen","Cristina". Ya que
//se agrego el volor con push.

//UNSHIFT: Se usa para agregar elementos al igual que el PUSH, pero agrega el elementos al comienzo de la
//array. Ejemplo:

const array3 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]
array3.unshift ("Cristina")
console.log (array3.length)
// La consola imprime "Cristina","Marta","Paola","Desire","Fernanda","Macarena","Belen"
// En este elemplo se agrega el dato "Cristina" se agrega al principio del Array.


/*
SHIFT y POP: Se usan para quitar y eliminar elementos del Array. SHIFT elimina el primero de la lista
y POP el ultimo. Ejemplo:
*/
const array4 = ["Rodrigo","Lucas","Alejandro","Ignacio"]
array4.pop ()
console.log (array4)
//La consola imprime "Rodrigo","Lucas","Alejandro"

const array5 = ["Rodrigo","Lucas","Alejandro","Ignacio"]
array5.shift ()
console.log (array5)
//La consola imprime "Lucas","Alejandro","Ignacio"

/*
SPLICE: Se usa para eliminar varios elementos a partir de un lugar en el indice. Funciona con 2
parametros; el primero el lugar del indice desde donde se posiciona y el segundo la cantidad de valores
que va a eliminar. Es IMPORTANTE aclarar que esta propiedad modifica la Array sobre la que se
elimino los elementos. Ejemplo:
*/

const array6 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]
array6.splice (1,3)
console.log (array6)
/*La consola imprime "Marta","Macarena","Belen" Ya que 1 es la posicion de "Paola" y 3 es la cantidad 
de datos que borra a partir de "Paola" osea "Paola","Desire","Fernanda"
*/

/*
SLICE: Se usa para copiar una parte del Array en un Array nuevo. Funciona exactamente igual que el SPLICE
solo que crea una nueva lista de objetos. Ejemplo:
*/

const array9 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]
const array92 = array9.slice (1,4)
console.log (array92)
//La consola imprime: "Marta","Belen". La Array9, la cual era la original esta exactamente igual.

/*
JOIN: Se usa para generar un String con todos los elementos de un Array separado por los valores que 
pasemos como parametros. Ejemplo:
*/

const array7 = ["Hamter","Perro","Loro","Gato","Tortuga"]
console.log (array7.join (","))
//La consola imprime: Hamter,Perro,Loro,Gato,Tortuga
console.log (array7.join ("*"))
//La consola imprime: Hamter*Perro*Loro*Gato*Tortuga

/*
CONCAT: Se usa para comvinar dos o varios Arrays en uno. Ejemplo:
*/

const arrayL = ["Laura","Luciano","Liliana"]
const arrayM = ["Martin","Mirian","Monica"]
const arrayLM = arrayL.concat (arrayM)
console.log (arrayLM)
//La consola imprime: "Laura","Luciano","Liliana","Martin","Mirian","Monica"

/*
INDEXOF: Se usa para obtener el indice de un elemento del Array. Necesitamos saber el elemento que
buscamos. En casa de existir nos va a dar su posicion en el indice, en caso de no existir nos va a dar
un valor -1. Ejemplo:
*/

const array10 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]

console.log (array10.indexOf ("Marta"))
//La consola imprime: 0

console.log (array10.indexOf ("Belen"))
//La consola imprime: 5

console.log (array10.indexOf ("Hector"))
//La consola imprime: -1

/*
INCLUDES: Se usa para saber si un elemento dentro de un Array existe o no. Si existe te da un valor
booleano "true", si no existe te da un valor booleano "false". Ejemplo:
*/

const array11 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]

console.log (array11.includes ("Marta"))
//La consola imprime: true

console.log (array11.includes ("Belen"))
//La consola imprime: true

console.log (array11.includes ("Hector"))
//La consola imprime: false

/*
REVERSE: Se usa para invertir el orden de los elementos de un Array. Es IMPORTANTE aclarar que al igual
que el SPLICE esta propiadad modifica la Array original. Ejemplo:
*/

const array12 = ["Marta","Paola","Desire","Fernanda","Macarena","Belen"]
array11.reverse ()
console.log (array12)
//La consola imprime: "Belen","Macarena","Fernanda","Desire","Paola","Marta"

//////////////////////////////////////FUNCIONES DE ORDEN SUPERIOR///////////////////////////////////



/*
FOREACH: Es usa para iterar sobre el Array y por cada elemento ejecuta la funcion que emviemos por
parametro, la cual recive a su vez el elemento del Array que se esta recorriendo. Ejemplo:
*/

const numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.forEach ((num)=>{
    console.log (num)
})
//La consola imprime: 1,2,3,4,5,6,7,8,9,10

/*
FIND: Se usa para recibir una funcion de comparacion como parametro. Captura el elemento que se esta
recoriendo y retorna un "true" o "false" segun la comparacion ejecutada. Esta funcion siempre retorna
el primer elemento que cumpla con esa condicion, sino debuelve un "indefined". Ejemplo:
*/

const alumnos = [
    {nombre:"Eduardo", apellido:"Schneider"},
    {nombre:"Alejandro", apellido:"Pate"},
    {nombre:"Cristian", apellido:"Leguiza"},
    {nombre:"Daniel", apellido:"Maldonado"},
    {nombre:"Lucas", apellido:"Amaya"},
    {nombre:"Leonardo", apellido:"Aguirre"}
]
const busqueda1 = alumnos.find ((elem)=> {
    return elem.nombre === "Alejandro"
})
//La consola va a imprimir: el elemento que cumpla con el valor, osea, "Alejandro" "Pate"

const busqueda2 = alumnos.find ((elem)=> {
    return elem.apellido === "Minutello"
})
//La consola va a imprimir: el elemento que cumpla con el valor, osea, "undefined"

//FILTER: Se usa para recibir una funcion de comparacion como parametro y devuelve un nueva Array con todos
//los elementos que cumplan con esa condicion. Si no hay elementos que cumplan con la condicion retornara
//un Array vacio.
//Ejemplo:

const alumnosNota = [
    {alumno:"Eduardo Schneider", nota:8},
    {alumno:"Alejandro Pate", nota:7},
    {alumno:"Cristian Leguiza", nota:6},
    {alumno:"Daniel Maldonado", not:5},
    {alumno:"Lucas Amaya", nota:9},
    {alumno:"Leonardo Aguirre", nota:6}
]
const busqueda3 = alumnosNota.filter ((elem)=> {
    return elem.nota >= 7
})
//La consola va a imprimir: "Eduardo Schneider","Alejandro Pate","Lucas Amaya" con notas mayor o igual a 7

//SOME: Se usa al igual que el filter, pero en vez de retornar los elementos que coincidan con el parametro
//que pedimos, returna "true" o "false"
//Ejemplo:

const alumnosActivos = [
    {alumno:"Eduardo Schneider"},
    {alumno:"Alejandro Pate"},
    {alumno:"Cristian Leguiza"},
    {alumno:"Daniel Maldonado"},
    {alumno:"Lucas Amaya"},
    {alumno:"Leonardo Aguirre"}
]
const busqueda4 = alumnosActivos.some ((elem)=> {
    return elem.nombre === "Daniel Maldonado"
})
//La consola imprime: "true" ya que "Daniel Maldonado" existe.

//MAP: Se usa para mapear un array, y si queremos, agregarle mas elementos. Sirve si queremos actualizar
//una lista con nuevos elementos o modificarlos.
//Ejemplo:

const alumnosPromedio = [
    {alumno:"Eduardo Schneider", nota1:4, nota2:6},
    {alumno:"Alejandro Pate", nota1:6, nota2:7},
    {alumno:"Cristian Leguiza", nota1:7, nota2:6},
    {alumno:"Daniel Maldonado", nota1:4, nota2:5},
    {alumno:"Lucas Amaya", nota1:4, nota2:6},
    {alumno:"Leonardo Aguirre", nota1:5, nota2:6}
]
const resultado = alumnosPromedio.map ((elem)=> {
    if (elem.nota1 >= 6){
        return {
            alumno: elem.alumno,
            nota1: elem.nota1,
            promedio: "Aprovado"
        }
    } else {
        return{
            alumno: elem.alumno,
            nota1: elem.nota1,
            promedio: "Desaprovado"
        }

    }
})
console.log (alumnosPromedio, "Alumnos cursando")
console.log (resultado, "Alumnos aprobados")
//La consola imprime: 2 Array, uno con los datos originales y otra con el valor Promedio, y dependiendo
//del valor de nota1 va a tener un valor "Aprovado" o "Desaprovado"

//REDUCE: El metodo reduce nos permite acumular todos los valores de una variable. Sirve cuando queremos 
//tener un valor general de todos los valores de varias variables.
//Ejemplo:

const alumnosSumaNota = [
    {alumno:"Eduardo Schneider", nota1:4, nota2:6},
    {alumno:"Alejandro Pate", nota1:6, nota2:7},
    {alumno:"Cristian Leguiza", nota1:7, nota2:6},
    {alumno:"Daniel Maldonado", nota1:4, nota2:5},
    {alumno:"Lucas Amaya", nota1:4, nota2:6},
    {alumno:"Leonardo Aguirre", nota1:5, nota2:6}
]

const resultado2 = alumnosSumaNota.reduce ((prev, current)=> prev + current.nota1,0)
console.log (resultado)
//La consola imprime: 36 (Que es el valor de todos los valores de nota1 sumados)

//SORT: 
//


//Lista const por si json falla
/*
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

*/
