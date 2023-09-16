"use strict";
class Cuadrado {
    calculaArea() {
        return 10;
    }
    perimetro() {
        return 15;
    }
}
class Triangulo {
    calculaArea() {
        return 100;
    }
    perimetro() {
        return 200;
    }
}
class Circulo {
    calculaArea() {
        return 1;
    }
    perimetro() {
        return 2;
    }
}
let figura1 = new Cuadrado();
let figura2 = new Triangulo();
figura1 = new Circulo();
