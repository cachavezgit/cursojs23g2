const cadenas = (() => {
    const cuentacadenas = (cad) => cad.length;
    const invierteCadena = (cad) => [...cad].reverse().join('');
    return {    
        cuentacadenas,  //"se exportan las funciones"
        invierteCadena
    }
})();

let cadena="Este es un texto de ejemplo";
console.log(cadenas.cuentacadenas(cadena));
console.log(cadenas.invierteCadena(cadena));