const fs = require('fs'); // <---- Importar el modulo fs

let registros = [];
const registros_info = fs.readFileSync('C:\\Users\\cachavez\\CursoJS\\loops\\registros.txt', 'utf8').trim(); // <---- Recupera el contenido del archivo en un string

const registros_array = registros_info.split('\r\n'); 

for (let registro of registros_array) {
    const registro_array = registro.split(','); 
    
    const registro_object = {
        id: registro_array[0],
        nombre: registro_array[1],
        ciudad: registro_array[2],
        rol: registro_array[3]
    }

    registros.push(registro_object);
}

console.log(JSON.stringify(registros));
