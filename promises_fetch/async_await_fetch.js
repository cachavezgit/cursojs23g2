const getPaises = async () => {
    // La palabra await es para poder llamar una función que devuelve un Promise
    const response = await fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10", {  // PENDING
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
        }
    });

    console.log(response.status); 

    const jsonResponse = await response.json();

    return jsonResponse.data
}

/*
const muestraPaises = async () => {
    const info_paises = await getPaises();
    console.log(info_paises);
};*/
function muestraPaises() {
    getPaises().then(paises => {
        console.log(paises);
    });
}

(async () => {
    await muestraPaises();
})();