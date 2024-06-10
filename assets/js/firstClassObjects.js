/*
    Debe ser posible retornarlo
    Debe ser posible asignarlo a un variable
    Debe ser posible enviarlo como argumento
*/

// return 2;
// let number = 2;
// hola(2);

function ejecutar(funcion) {
    funcion();
}

function saludo() {
    console.log('Hola');
}

ejecutar(saludo);