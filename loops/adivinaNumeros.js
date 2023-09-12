const prompt = require('prompt-sync')();

const max = 5;

const numAleatorio = Math.floor(Math.random() * max) + 1;

let adivino = false;

while (!adivino) {

    let intento = prompt(`Introduzca un numero entre 1 y ${max} : `);
    intento = Number(intento);

    if (intento === numAleatorio) {
        adivino = true;
        console.log(`Has adivinado el numero ${numAleatorio}`);
    } else if (intento > numAleatorio) {
        console.log('El numero introducido es mayor');
    } else if (intento < numAleatorio) {
        console.log('El numero introducido es menor');
    }
}
