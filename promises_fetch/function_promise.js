function MakePromise(partyPromise) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (partyPromise) {
                resolve("I am giving a party to my friends");
            } else {
                reject("I am not giving party to my friends");
            }
        }, 5 * 1000);
    });
}

const MakePromise2 = (partyPromise) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (partyPromise) {
                resolve("I am giving a party to my friends");
            } else {
                reject("I am not giving party to my friends");
            }
        }, 5 * 1000);
    });
}

const promesa = MakePromise(true);
const promesa2 = MakePromise2(false);

promesa.then(exito => console.log(exito)).catch(error => console.log(`Ocurrió un error: ${error}`)).finally(() => console.log("Finalizado"));
promesa2.then(exito => console.log(exito)).catch(error => console.log(`Ocurrió un error: ${error}`)).finally(() => console.log("Finalizado"));


