function obtenPaises () {
    let request = new XMLHttpRequest(); // <--- Chrome V8, Edge. NOTA: Node.js hay que instalarlo con npm
    
    request.open('GET', 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries');

    request.setRequestHeader('x-rapidapi-host', 'wft-geo-db.p.rapidapi.com');
    request.setRequestHeader('x-rapidapi-key', '05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca');

    request.send();

    request.onload = function () { 
        if (request.status >= 200 && request.status < 400) {
            let respuesta = JSON.parse(request.responseText);
            //console.log(respuesta)
            respuesta.data.forEach(pais => {
                console.log(pais.name);
            });
        }
    };

    request.onerror = function (err) {
        console.log(`Ocurrió un error: ${err.message} ${err.type}`);
    };
}

obtenPaises();
console.log("Listo!!!!");