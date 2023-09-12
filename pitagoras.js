let cateto1 = Number(prompt("Digite el valor del cateto opuesto: "));
let cateto2 = Number(prompt("Digite el valor del cateto adyacente: "));
let hipotenusa = Number(prompt("Digite el valor de la hipotenusa: "));

if (isNaN(cateto1) | isNaN(cateto2) | isNaN(hipotenusa)) { 
    console.log("Los datos ingresados no son numeros");
} else {
    if ((cateto1 ** 2 + cateto2 ** 2) == hipotenusa ** 2) {
        console.log("Es un triangulo rectangulo");
    } else {
        console.log("No es un triangulo rectangulo");
    }
}
