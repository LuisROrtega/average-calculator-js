let arreglo = ["a", "b", "c", "d", "e"];

/*
Ejercicio 1: push()
Agrega un elemento al final del arreglo.
*/

arreglo.push("f");
console.log("Ejercicio 1: push()" + "\n" + arreglo + "\n");

/*
Ejercicio 2: pop()
Elimina el último elemento del arreglo.
*/

arreglo.pop();
console.log("Ejercicio 2: pop()" + "\n" + arreglo + "\n");

/*
Ejercicio 3: shift()
Elimina el primer elemento del arreglo.
*/

arreglo.shift();
console.log("Ejercicio 3: shift()" + "\n" + arreglo + "\n");

/*
Ejercicio 4: unshift()
Agrega un elemento al inicio del arreglo.
*/

arreglo.unshift("a");
console.log("Ejercicio 4: unshift()" + "\n" + arreglo + "\n");

/*
Ejercicio 5: splice()
Elimina elementos del arreglo.
*/

arreglo.splice(1, 2); // [a, d, e] -> [b, c]
console.log("Ejercicio 5: splice()" + "\n" + arreglo + "\n");

// Using splice to add
arreglo.splice(1, 4, "b", "c", "d", "e"); // position, length
console.log("Ejercicio 5: splice() - add" + "\n" + arreglo + "\n");

/*
Ejercicio 6: slice()
Extrae elementos del arreglo.
*/

let copy = arreglo.slice(1, 4); // position, length value
console.log("Ejercicio 6: slice()" + "\n" + copy + "\n");

/*
Ejercicio 7: concat()
Une dos arreglos.
*/

let arreglo2 = ["f", "g", "h", "i", "j"];
let concat = arreglo.concat(arreglo2);
console.log("Ejercicio 7: concat()" + "\n" + concat + "\n");

/*
Ejercicio 8: indexOf()
Busca un elemento en el arreglo.
*/

console.log(
  "Ejercicio 8: indexOf()" + "\n" + "Array: " + concat +  "\n" + "Position: " + concat.indexOf("h") + "\n"
);

/*
Ejercicio 9: includes()
Comprueba un elemento en el arreglo
*/

let letter = "e";

console.log(
    "Ejercicio 9: includes()" + "\n" + "Array: " + concat +  
    "\n" + "Letter: " + letter +
    "\n" + "Exist: " + concat.includes(letter)
);

/*
Ejercicio 10: reverse()
Invierte el orden de los elementos del arreglo.
*/

console.log(
    "\nEjercicio 10: reverse()" + "\n" + "Array: " + concat +  
    "\n" + "Reverse: " + concat.reverse()
)

concat.reverse();

/*
Ejercicio 11: join()
Convierte todos los elementos del arreglo en una cadena de texto, separados por un delimitador
*/

console.log(
    "\nEjercicio 11: join()" + "\n" + "Array: " + concat +  
    "\n" + "Join: " + concat.join("|") + "\n"
)

/*
Ejercicio 12: forEach()
Ejecuta una función para cada elemento del arreglo.
*/

console.log("Ejercicio 12: forEach():");
concat.forEach((index, element) => {
    console.log("Position: " + element + "\nElement: " + index + "\n")
})

/*
Ejercicio 13: map()
 Ejecuta una función para cada elemento del arreglo y devuelve un nuevo arreglo con los resultados.
*/

let upperCaseArray = concat.map(element => element.toUpperCase());

console.log(
    "Ejercicio 13: map(): \n" + "Array: \n" + concat + "\n" +"Map: \n" + upperCaseArray + "\n"
);

/*
Ejercicio 14: filter()
Ejecuta una función para cada elemento del arreglo y devuelve un nuevo arreglo con los elementos que cumplan la condición.
*/

let filteredArray  = concat.filter(element => element > "g"); // a, b, d, e, f, g

console.log(
    "Ejercicio 14: filter(): \n" + "Array: \n" + concat + "\n" +"Filter: " + filteredArray
);

/*
Ejercicio 15: reduce()
Aplica una función contra un acumulador y cada elemento del arreglo (de izquierda a derecha) para reducirlo a un solo valor.
*/
let numbers = ["h", "o", "l", "a"];
let sumArray = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, "");

console.log(
    "\nEjercicio 15: reduce(): \n" + "Array: \n" + numbers + "\n" +"Reduce: " + sumArray
);

/*
Ejercicio 16: find()
Devuelve el primer elemento del arreglo que cumpla con la función de prueba.
*/

let firstElement = concat.find((element) => element > "g");

console.log(
    "\nEjercicio 16: find(): \n" + "Array: \n" + concat + "\n" +"Find: " + firstElement
);

/*
Ejercicio 17: findIndex()
Devuelve el índice del primer elemento del arreglo que cumpla con la función de prueba.
*/

let firstElementIndex = concat.findIndex((element) => element > "g");

console.log(
    "\nEjercicio 17: findIndex(): \n" + "Array: \n" + concat + "\n" +"Index: " + firstElementIndex
);

/*
Ejercicio 18: some()
Devuelve true si al menos un elemento del arreglo cumple con la función de prueba.
*/

console.log(
    "\nEjercicio 18: some(): g \n" + "Array: \n" + concat + "\n" +"Some: " + concat.some((element) => element > "g")
);

/*
Ejercicio 19: every()
Devuelve true si todos los elementos del arreglo cumplen con la función de prueba.
*/

console.log(
    "\nEjercicio 19: every(): g \n" + "Array: \n" + concat + "\n" +"Every: " + concat.every((element) => element > "g")
);

/*
Ejercicio 20: sort()
Ordena los elementos del arreglo.
*/

let disorderArray = ["f", "a", "j", "h", "b", "i", "d"];

console.log(
    "\nEjercicio 20: sort(): \n" + "Array: \n" + disorderArray + "\n" +"Sort: " + disorderArray.sort() + "\n\n"
);

// Recorriendo arreglos

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Ciclo For");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Genera un nuevo arreglo
console.log("\n\nMap");
array.map((element) => console.log(element*element));

console.log("\n\nCiclo For of");
for (let element of array) {
    console.log(element);
}

console.log("\n\nCiclo For in");
let objeto = { a: 1, b: 2, c: 3 };

for (let clave in objeto) {
    console.log(clave); // "a", "b", "c"
    console.log(objeto[clave]); // 1, 2, 3
}

console.log("\n\nCiclo For Each");
array.forEach((element) => console.log(element));

let testArray = [1, 2, 3];
console.log("\n\n" + testArray); 
console.log(...testArray); // operador de expansión - spread syntax

// Rest Syntax
function avg(name,...array) {
    console.log("Name: " + name + "\n" + "Grades: " + array);
}

avg("Luis", 9,10,8,10,9);

// let arregloNumeros = [2, 4, 5, 3, 6, 9, 8];

// let resultado = arregloNumeros.filter((element) => {
//     return element % 2; // residuo = 1
// })

// console.log("\n\n" + resultado);

// let operacion = 6 % 2;
// console.log(operacion);