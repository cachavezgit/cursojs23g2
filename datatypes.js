let nombre = "Juan";
let direccion = 'Calle 1';
let telefono = `1234567890`;

console.log(typeof(nombre));
console.log(typeof(direccion));
console.log(typeof(telefono));

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; //decimal version would be 8
let hexNr = 0x3E8; //decimal version would be 1000
let binNr = 0b101; //decimal version would be 5
let bigNr = 900719925474099208761231n;
//let resultado = bigNr + intNr;

console.log(intNr);
console.log(decNr);
console.log(expNr);
console.log(octNr);
console.log(hexNr);
console.log(bigNr);

console.log(typeof(intNr));
console.log(typeof(decNr));
console.log(typeof(expNr));
console.log(typeof(octNr));
console.log(typeof(hexNr));
console.log(typeof(bigNr));

let bool1 = false;
let bool2 = true;
console.log(typeof(bool1));
console.log(typeof(bool2));

let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

let sindefinicion;
console.log(sindefinicion);
console.log(typeof(sindefinicion));

let ausencia = null;
console.log(ausencia);
console.log(typeof(ausencia));


