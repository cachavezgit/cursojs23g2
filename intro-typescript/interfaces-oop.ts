interface IFiguraGeometrica {
    calculaArea(): number;
    perimetro(): number;
}

class Cuadrado implements IFiguraGeometrica {
    calculaArea() {
        return 10;
    }

    perimetro(): number {
        return 15;
    }
}

class Triangulo implements IFiguraGeometrica {
    calculaArea () {
        return 100;
    }

    perimetro(): number {
        return 200;
    }
}

class Circulo implements IFiguraGeometrica { 
    calculaArea(): number {
        return 1;
    }

    perimetro(): number {
        return 2;
    }
}

let figura1:IFiguraGeometrica = new Cuadrado();
let figura2:IFiguraGeometrica = new Triangulo();
figura1 = new Circulo();
