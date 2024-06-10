// HOISTING
// Funciona solo en la declaración (usando var), no en la asginación

// Don't work
console.log(saludo);
var saludo = 'Hola';

// Work
var saludo;
console.log(saludo);
saludo = 'Hola';

// Using function
console.log("\nLa suma es: " + suma(10, 10));

function suma(a, b) { return a + b }