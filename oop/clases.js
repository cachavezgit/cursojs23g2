function DogAntiguo (nombre, peso, color, raza) {  // <----- formato antiguo para crear una clase en JavaScript
    this.nombre = nombre;
    this.peso = peso;
    this.color = color;
    this.raza = raza;
}

class Dog {                  // <----- formato ES6 para crear una clase en JavaScript
    constructor(n='', p=0, c='', r='') {
        this.nombre = n;
        this.peso = p;       // this -> "este objeto"
        this.color = c;
        this.raza = r;
    }

    ladra() {
        console.log(`El perro ${this.nombre} dice guau, guau, guau`);
    }

    saltar(altura) {
        console.log(`El salto fue de ${altura} metros`);
    }
}

const perro1 = new Dog('Firulais', 100, 'Gris', 'Chihuahua');
const perro2 = new Dog('Muñeca', 70);
//perro2.color="Café";
console.log(JSON.stringify(perro1));
console.log(JSON.stringify(perro2));
perro1.ladra();
perro1.saltar(2);
perro2.ladra();





