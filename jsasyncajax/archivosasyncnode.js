const fs = require('fs'); // <---- Importar el modulo fs

let infoArchivo = {
    data:''
};

//const big = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\jsasyncajax\\big.txt', 'utf8'); 
//console.log(big);

fs.readFile('C:\\Users\\cachavez\\CursoJS\\jsasyncajax\\big.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error al cargar el archivo: ${err.message}`);
        return;
    }
    infoArchivo.data = data;
    console.log(infoArchivo.data);
})

/* .then(() =>{
    console.log("Archivo cargado correctamente");
    console.log(infoArchivo);
}) */
