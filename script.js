// EJERCICIOS DE DESESTRUCTURACIÓN
// ------------- 1 ---------------
// Intercambio de valores en un array: 
// Dado el array const numeros = [1, 2, 3, 4, 5], usa desestructuración para intercambiar el primer y el último valor del array.

let numeros = [1, 2, 3, 4, 5];

[numeros[0], numeros[4]] = [numeros[4], numeros[0]];

console.log(numeros); // [5, 2, 3, 4, 1]

console.log("-------------------")

// ------------- 2 ---------------
// Desestructuración de múltiples valores: 
// Tienes un array const colores = ['rojo', 'verde', 'azul', 'amarillo']. Usa desestructuración para asignar los tres primeros colores a tres variables individuales, y el resto de los colores a un nuevo array.

let colores1 = ['rojo', 'verde', 'azul', 'amarillo', 'violeta', 'naranja'];

let [a1, b1, c1] = colores1;

let [, , , ...resto] = colores1;

console.log(a1, b1, c1); // rojo, verde, azul
console.log(resto); // ['amarillo', 'violeta', 'naranja']

console.log("-------------------")

// ------------- 3 ---------------
// Extraer valores en una función: 
// Crea una función que reciba un array con nombres de frutas. Usa desestructuración para devolver el primer y el último elemento del array como un nuevo array. 

//Por ejemplo, para el array ['manzana', 'plátano', 'naranja', 'kiwi'], deberías devolver ['manzana', 'kiwi'].

const frutas = ['manzana', 'plátano', 'naranja', 'kiwi'];

const [primerElemento] = frutas;
const ultimoElemento = frutas[frutas.length - 1];

const array = [primerElemento, ultimoElemento];
console.log(array); // ['manzana', 'kiwi']

console.log("-------------------")

// ------------- 4 ---------------
// Asignar variables desde un array anidado: 
// Dado el siguiente array anidado: const datos = [['Juan', 25], ['Ana', 30], ['Luis', 28]];, usa desestructuración para asignar el nombre y la edad de cada persona a variables individuales, y crea un nuevo array que contenga solo los nombres.

const datos = [['Juan', 25], ['Ana', 30], ['Luis', 28]];

let nombres= datos.map(([nombre]) => nombre);
let edades = datos.map(([ , edad]) => edad);

console.log(nombres); // ['Juan', 'Ana', 'Luis']
console.log(edades); // [25, 30, 28]

console.log("-------------------")

// ------------- 5 ---------------
// Dado el siguiente array, usa desestructuración para asignar el segundo y el cuarto color a variables llamadas color2 y color4. Luego, crea un nuevo array que contenga solo estos dos colores.

const colores2 = ['rojo', 'verde', 'azul', 'amarillo', 'morado'];

let [ , color2, , color4] = colores2;
let arrayColores = [color2,color4];

console.log(arrayColores) // ['verde', 'amarillo']
console.log("-------------------")

// ------------- 6 ---------------
// Desestructuración de Objetos
// Dado el siguiente objeto, usa desestructuración para extraer las propiedades marca y año en variables separadas. Imprime estas variables y luego crea un nuevo objeto que contenga solo modelo y color

const coche = {
    marca: 'Toyota',
    año: 2020,
    color: 'gris',
    modelo: 'Corolla'
};

// IMPORTANTE: 
// Al acceder a objetos, basta con poner el nombre, el orden da igual

let {marca, modelo} = coche;
console.log(marca, modelo) // 'Toyota Corolla'

let coche2 = {marca, modelo}
console.log(coche2) // { marca: 'Toyota', modelo: 'Corolla' }


console.log("-------------------")

// EJERCICIOS DE SPREAD Y REST
// ------------- 7 ---------------
// Ejercicio de Spread: 
// Dado el array const frutas = ['manzana', 'plátano', 'naranja'], crea un nuevo array que incluya todos los elementos de frutas y los colores ['rojo', 'verde']. Imprime el nuevo array.

const frutas2 = ['manzana', 'plátano', 'naranja'];
const colores = ['rojo', 'verde']

const arrayFrutasColores = [...frutas, ...colores]
console.log(arrayFrutasColores);  // ['manzana', 'plátano', 'naranja', 'rojo', 'verde']

console.log("-------------------")

// ------------- 8 ---------------
// Ejercicio de Rest: Crea una función llamada listaNombres que acepte un número variable de nombres y devuelva un array que contenga todos los nombres. Asegúrate de imprimir el array en la consola.

function listaNombres(...array) {
    return array;
}

const lista = listaNombres('Juan', 'Ana', 'Luis', 'María');
console.log(lista); // ['Juan', 'Ana', 'Luis', 'María']

console.log("-------------------")

// EJERCICIOS DE DESESTRUCTURACIÓN + SPREAD Y REST
// ------------- 9 ---------------
// Dado el siguiente objeto, usa desestructuración para extraer nombre y habilidades. Luego, crea un nuevo array que combine las habilidades del empleado con ['CSS', 'HTML'] usando el operador spread. Imprime el nuevo array.

const empleado = {
    nombre: 'Ana',
    puesto: 'Desarrolladora',
    habilidades: ['JavaScript', 'React', 'Node.js']
};

let {nombre, habilidades} = empleado;
const arrayHabilidades = [...habilidades, "CSS", "HTML"];

console.log(arrayHabilidades); // ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML']

console.log("-------------------")
// ------------- 10 ---------------
// Dado el siguiente array de productos, usa desestructuración para obtener el primer producto y el resto de los productos en un nuevo array utilizando el operador rest. Luego, imprime ambos resultados en la consola.

const productos = ['manzana', 'plátano', 'naranja', 'kiwi', 'mora'];

const [producto1] = productos;

const [ , ...restoProductos] = productos;

console.log(producto1, ...restoProductos);