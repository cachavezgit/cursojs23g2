promedioNumeros = (array) => array.reduce((a, b) => a + b, 0) / array.length

saludaAlUsuario = () => console.log('Hola Usuario');

PI = Math.PI;

module.exports = { promedioNumeros, saludaAlUsuario, PI };