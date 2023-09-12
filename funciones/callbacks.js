// function
function greet(name, funciones) {
    console.log('Hi' + ' ' + name);
    for (funcion in funciones) {
        funciones[funcion]();
    }
}

// callback function
function callMe() {
    console.log('I am callback function');
}

const saludar = () => { 
    console.log('Hola');
}

const despedir = () => {
    console.log('Adios');
}

const funciones = {
    saludar,
    despedir,
    callMe
}

// passing function as an argument
greet('Peter', funciones);