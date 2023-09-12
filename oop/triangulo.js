const prompt = require('prompt-sync')();

class Triangulo {
    base=0;
    altura=0;

    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return (this.base * this.altura)/2;
    }

}

const base = prompt('Digite el valor de la base: ');
const altura = prompt('Digite el valor de la altura: ');

const triangulo = new Triangulo(base, altura);

console.log(`El area del triangulo con base ${triangulo.base} y altura ${triangulo.altura} es: ${triangulo.calcularArea()}`);