const dato = 0;

uno();
dos();
tres();
console.log(dato);

let Este_Es_Un_BuenNombreDeVariable = 1000;

function uno() {
    dato = 1000;
    var otrodato = 5000;
    console.log(dato);
    console.log(otrodato);
}

function dos() {
    dato = 2000;
    console.log(dato);
}

function tres() {
    if (true) {
        let tercerdato = 10000;
        console.log(tercerdato);
    }  
    console.log(tercerdato);
}
