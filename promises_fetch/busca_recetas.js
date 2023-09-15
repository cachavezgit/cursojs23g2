const prompt = require('prompt-sync')();

const buscarReceta = async (platillo) => {
    let buscaRecetaUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${platillo}`;
    const respuesta = await fetch(buscaRecetaUrl);

    if (respuesta.status!== 200) {
        console.log("Algo salió mal");
        return;
    }

    const jsonResponse = await respuesta.json();
    return jsonResponse.meals[0].strInstructions;

};

(async () => {
    var platillo = prompt("¿De que quieres buscar una receta?: ");
    const instrucciones = await buscarReceta(platillo);
    console.log(instrucciones);
})();




