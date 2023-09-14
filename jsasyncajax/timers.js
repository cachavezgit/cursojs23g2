//Configurar el callback
let gancho = setInterval(revisaSiHayActualizaciones, 2000);
let contador = 0;

function revisaSiHayActualizaciones() {
    contador++;
    
    if (contador == 10) {
        clearInterval(gancho);
    }

    console.log("Revisando si hay actualizaciones...");
}