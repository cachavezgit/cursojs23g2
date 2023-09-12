let someArray = ["Mike", "Antal", "Marc", "Emir", "Loiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
    console.log(someArray);
    if (someArray[0] === "Louiza") {
        console.log("Found her!");
        notFound = false;
    } else {
        console.log("Not found");
        someArray.shift();
    }
}