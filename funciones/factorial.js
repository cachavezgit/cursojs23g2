const prompt = require('prompt-sync')();

const fac = (num) =>num>0 ? num * fac(num-1) : 1;

const factorial  = (num) => {
    if (isNaN(num) || num < 0 || num>100) return;

    if (num === 0) return 1;
    if (num === 1) return 1;

    return num * factorial(num-1);
}

const numero = prompt("Enter a number: ");
console.log(`The factorial of ${numero} es ${factorial(numero)} ` );
console.log(`The factorial of ${numero} es ${fac(numero)} ` );