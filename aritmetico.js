let dato1 = prompt("Ingrese el primer dato");
let dato2 = prompt("Ingrese el segundo dato");

dato1 = Number(dato1);
dato2 = Number(dato2);

if (isNaN(dato1) || isNaN(dato2)) {
    alert("Ingrese solo numeros");
} else {
    console.log("Suma: ", dato1 + dato2);
    console.log("Resta: ", dato1 - dato2);
    console.log("Multiplicacion: ", dato1 * dato2);
    console.log("Division: ", dato1 / dato2);
}   

