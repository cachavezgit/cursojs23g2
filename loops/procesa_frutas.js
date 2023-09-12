const fs = require('fs'); // <---- Importar el modulo fs

const frutas_info = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\loops\\frutas.txt', 'utf8'); // <---- Recupera el contenido del archivo en un string

console.log(frutas_info); 
console.log(typeof frutas_info);

let frutas_array = frutas_info.split('\r\n'); // separado por los ASCII 13 y 10 CRLF

console.log(frutas_array);
console.log(typeof frutas_array);

for (let fruta of frutas_array) {
    console.log(fruta);
}

const persona = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 25,
    altura: 1.80,
    peso: 80,
}

for(let key in persona) {
    console.log(`${key}: ${persona[key]}`);
}
