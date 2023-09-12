function doingStuff() {
    if (true) {
        var x = "local";
        console.log(x);
    }
}

function proceso() {
    dato = 40;  // <----- hoisting (elevar) JS eleva la variable a global scope
}

doingStuff();
proceso();
console.log(dato);
