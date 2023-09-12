import {PI, saludaAlUsuario as GreetUser, Cuadrado} from './exportacionWeb.js'

GreetUser("Ivan");

console.log(PI);

const lado = prompt("Ingrese el lado del cuadrado: ");
const cuadrado = new Cuadrado(lado);

alert("El area del cuadrado es: " + cuadrado.areaDelCuadrado());