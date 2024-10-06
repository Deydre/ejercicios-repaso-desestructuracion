
**🌟 Este repositorio contiene apuntes en el README.md y ejercicios prácticos sobre desestructuración, spread y rest en el script.js. 🌟**

------------------
## Ejercicios de Desestructuración, Spread y Rest en JavaScript

Los ejercicios se dividen en varias secciones:

1. **Desestructuración de Arrays**
   - Intercambio de valores.
   - Asignación de múltiples valores.
   - Extracción de valores en funciones.
   - Asignación de variables desde arrays anidados.
   - Extracción de colores específicos.

2. **Desestructuración de Objetos**
   - Extracción de propiedades de objetos.
   - Creación de nuevos objetos a partir de propiedades existentes.

3. **Spread Operator**
   - Combina arrays de manera efectiva.

4. **Rest Operator**
   - Crea funciones que aceptan un número variable de argumentos.

5. **Ejercicios combinados**
   - Uso de desestructuración junto con los operadores spread y rest.


<br>
<br>

## 🧩 Apuntes/ Desestructuración
### 🧩 Desestructuración de Arrays
La desestructuración de arrays permite extraer valores de un array y asignarlos a variables de manera concisa.

```javascript
const frutas = ['manzana', 'plátano', 'naranja'];

// Desestructuración
const [a, b, c] = frutas;

console.log(a); // 'manzana'
console.log(b); // 'plátano'
console.log(c); // 'naranja'
```
### 🧩 Desestructuración de Objetos

La desestructuración de objetos permite extraer propiedades de un objeto y asignarlas a variables.

```javascript
const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Madrid'
};

// Desestructuración
const { nombre, edad } = persona;

console.log(nombre); // 'Juan'
console.log(edad);   // 25
```

### 🧩 Puntos clave y diferencias entre desestructurar Arrays y Objetos:
En JavaScript, cuando desestructuras objetos, no es necesario usar comas porque las propiedades se identifican por su nombre, no por su posición. En cambio, en un array, los elementos están ordenados, y debes especificar la posición de cada uno. Por eso, en la desestructuración de arrays, se utilizan comas para omitir elementos o seleccionar elementos específicos.

- **Sintaxis**: Utiliza corchetes `[]` para arrays y llaves `{}` para objetos.
- **Órdenes**: Para arrays, el orden de las variables importa; para objetos, no.
- **Valores por defecto**: Puedes asignar valores por defecto si la propiedad o índice no existe.

```javascript
const [a, b, c = 'sin fruta'] = frutas; // c será 'sin fruta' si no hay tercer elemento
```

<br>

## 💦 Apuntes/Spread y Rest

### 💦 **Spread (`...`)**

El operador spread se utiliza para expandir elementos de un iterable (como un array) en lugares donde se esperan múltiples elementos. Se usa frecuentemente para combinar arrays, hacer copias o pasar argumentos a funciones.

**Ejemplo de Spread**:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinado = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
```
### 💦 **Rest (`...`)**

El operador rest también utiliza `...`, pero se utiliza para agrupar elementos en un array. Se usa en las definiciones de funciones o en la desestructuración para recoger el resto de los elementos.

**Ejemplo de Rest**:

```js
function suma(...numeros) {
    return numeros.reduce((acumulador, num) => acumulador + num, 0);
}

console.log(suma(1, 2, 3, 4)); // 10

```




