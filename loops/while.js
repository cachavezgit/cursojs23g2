let numeral = 10;

while (numeral <= 20) {
    console.log(numeral++);
    //numeral++;
}

//numeral = 47;
do {
    console.log(numeral++);
    //numeral++;
} while (numeral <= 30);

let nombres = ['Juan', 'Pedro', 'Maria'];  // Array de tipo de tipo string con 3 elementos

let indice = 0;
while (indice < nombres.length) {   // <---- length cuantos elementos hay en el array
    console.log(nombres[indice++]);
}

indice = 0;
do {
    console.log(nombres[indice++]);
} while (indice < nombres.length);


