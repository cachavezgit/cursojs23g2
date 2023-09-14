const fs = require('fs').promises; 

const frutas_info = fs.readFile('C:\\Users\\cachavez\\CursoJS\\jsasyncajax\\big.txt', 'utf8')
    .then((data => console.log(data)))
    .catch((err) => console.log(`error!!!!: ${err.message}`));

