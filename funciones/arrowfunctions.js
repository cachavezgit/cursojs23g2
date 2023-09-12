const calculo = (x, y) => x * y;

console.log(calculo(2, 3));
console.log(calculo(82, 32));

const mayorDeDosNumerosArrow = (num1, num2) => num1 >= num2? num1 : num2; // one-liner

const calculaPromedio = (arr) => arr.reduce((sumaNumeros, nuevoNumero) => sumaNumeros + nuevoNumero, 0)/arr.length;

const revisaCondicionesArreglo = (arreglo, condicion) => arreglo.every(condicion);

const funcionFlechaHolaMundo = () => {
    console.log('Hola Mundo');
};

funcionFlechaHolaMundo();

function mayorDeDosNumeros(num1, num2) {
    return num1 >= num2? num1 : num2;
}

console.log(`El mayor de los números 1000 y 456 es: ${mayorDeDosNumeros(1000, 456)}`);
console.log(`El mayor de los números 1000 y 456 es: ${mayorDeDosNumerosArrow(1000, 456)}`);

const arregloNumeros = [2, 4, 10, 40, 50, 60];
console.log(`El promedio de los números es: ${calculaPromedio(arregloNumeros)}`);

console.log(`Se cumple que todos sean multiplos de dos: ${revisaCondicionesArreglo(arregloNumeros, num=> num % 2 === 0)}`);

arregloNumeros.forEach(numero => {
    console.log(numero)
});