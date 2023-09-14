$.ajax({
    dataType: "json",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries?limit=10",
    method: "GET",
    headers: {
        "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
        "x-rapidapi-key": "05b37d25a6msh52f04c347257d2bp167eb7jsna8e4fd0f7bca"
    },
    async: true,
    success: (response) => {
        response.data.forEach(pais => {
            $("#paises").append(`<li>${pais.name}</li>`);
        });
    },
    error: (err) => {
        console.log("error");
    }
});