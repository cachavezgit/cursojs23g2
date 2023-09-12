let resultados = [];

for (let contador = 1; contador<11; contador++) {
    let esPar = (contador % 2 === 0);

    let resultado = {
        numero: contador,    // <------ Objeto anónimo en javascript
        esPar: esPar
    }

    resultados.push(resultado);
}

console.log(JSON.stringify(resultados));