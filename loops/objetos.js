var automovil = {
    marca: "Ford",
    modelo: "Mustang",
    color: "Negro",
    año: 2016,
};

for (let key in automovil) {
    console.log(`${key}: ${automovil[key]}`);
}

var llaves = Object.keys(automovil);
var valores = Object.values(automovil);
var entradas = Object.entries(automovil);

console.log(llaves);
console.log(valores);
console.log(entradas);

