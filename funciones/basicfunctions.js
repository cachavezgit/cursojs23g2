"use strict";
let numero = 8;

const elevaAlCubo = function(num) {
    return num * num * num;
}

imprimeMensaje();
console.log(`El cuadrado de ${numero} es: ${elevaAlCuadrado(numero)}`);
console.log(`El cubo de ${numero} es: ${elevaAlCubo(numero)}`);
console.log(`El mayor de 5 y 3 es: ${mayorDeDosNumeros(5,3)}`);

mensajeDinamico();
console.log(`La suma de 5,4,3 es: ${sumaNumeros(5,4,3)}`);
console.log(`La suma de 5,4,3 es: ${sumaNumeros()}`);

function imprimeMensaje() {
    console.log("Mensaje");
}

function mensajeDinamico(mensaje='') {
    console.log(`El mensaje es: ${mensaje}`);
}

function elevaAlCuadrado(num) {
    return num * num;
}

function sumaNumeros(num1=0, num2=0, num3=0) {
    return num1 + num2 + num3;
}