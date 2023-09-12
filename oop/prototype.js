class Aritmetica {
        
}

Aritmetica.prototype.num1 = 0;
Aritmetica.prototype.num2 = 0;

Aritmetica.prototype.suma = function () {
    return this.num1 + this.num2;
}

Aritmetica.prototype.resta = function () {
    return this.num1 - this.num2;
}

Aritmetica.prototype.multiplicacion = function () {
    return this.num1 * this.num2;
}

Aritmetica.prototype.division =function () {
    return this.num1 / this.num2;
}

Aritmetica.prototype.num3 = 100;

Aritmetica.prototype.mayorDeLos3 =function () {
    return Math.max(this.num1, this.num2, this.num3);
}

const aritmetica1 = new Aritmetica();
aritmetica1.num1 = 10;
aritmetica1.num2 = 20;

console.log(aritmetica1.suma());
console.log(aritmetica1.resta());
console.log(aritmetica1.multiplicacion());
console.log(aritmetica1.division());
console.log(aritmetica1.mayorDeLos3());

Array.prototype.mensaje = function () {
    return "prueba"
}

Array.prototype.primerElemento = function () { 
    return this[0];
}

Array.prototype.recorreElementos = function () { 
    this.forEach(element => console.log(element));
}

const tabla = [1, 2, 3, 4, 5, 6];

console.log(tabla.mensaje());
console.log(tabla.primerElemento());
tabla.recorreElementos();



