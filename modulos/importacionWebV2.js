import * as funciones  from './exportacionWeb.js'

funciones.saludaAlUsuario("Ivan");

console.log(funciones.PI);

const lado = prompt("Ingrese el lado del cuadrado: ");
const cuadrado = new funciones.Cuadrado(lado);

alert("El area del cuadrado es: " + cuadrado.areaDelCuadrado());