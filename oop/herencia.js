class Flor {
    constructor(nombre) {
        this.nombre = nombre;
    }

    fotosintesis () {
        console.log('Realizando fotosintesis...');
    }
}

class Girasol extends Flor {  // extends es el conector de herencia. "Girasol es una flor"
    seguirAlSol() {
        console.log('Siguiendo al sol...');
    }
}

class Tulipan extends Flor { 
    fotosintesis() {
        super.fotosintesis();
        console.log('Realizando fotosintesis en el tulipán...');
    }
}

const flor1 = new Flor('Flor 1');
console.log(`El nombre de la flor es: ${flor1.nombre}`);
flor1.fotosintesis();

const girasol1 = new Girasol('Girasol 1');
console.log(`El nombre del girasol es ${girasol1.nombre}`);
girasol1.fotosintesis();
girasol1.seguirAlSol();

const tulipan1 = new Tulipan('Tulipan 1');
console.log(`El nombre del tulipan es ${tulipan1.nombre}`);
tulipan1.fotosintesis();
