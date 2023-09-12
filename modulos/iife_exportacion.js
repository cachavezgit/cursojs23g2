// IIFE
const estadisticas = (function() {

    const suma = (num1, num2) => num1 + num2;
    const elevaAlCuadrado = (num1, num2) => num1 * num2;

    function promedioNumeros (arreglo) {
        return arreglo.reduce(suma) / arreglo.length;
    }

    return {
        promedioNumeros, suma
    }

}());

const tableDeNumeros = [198,234,342,123,456,789];
console.log(estadisticas.promedioNumeros(tableDeNumeros));
console.log(estadisticas.suma(200, 100));