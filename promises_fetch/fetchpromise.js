function obtenPaisesPromises() {
    fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10", {  // PENDING
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
        }
    }).then((response) => {   // FULFILLED
        response.json().then((respuesta) => {
            respuesta.data.forEach((pais) => {
                console.log(pais.name);
            });
        });
    }).catch(error => {  // REJECTED
        console.log(`El error es: ${error.message}`);
    }).finally(() => {
        console.log("Proceso concluido");
    });
}

obtenPaisesPromises();


