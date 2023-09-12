let rain = true;

if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
}
else {
    console.log("** I can leave my umbrella at home **");
}

let age = 8;
let cost = 0;
let message;
if (age < 3) {
    cost = 0;
    message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost " + cost);

let criterio1 = 100;
let mensaje = criterio1 > 100 ? "Se cumple el criterio" : "No se cumple el criterio";
console.log(mensaje);

let activity = "Drive to work";
switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}

let mes = "February";

switch(mes) {
    case "February":
        console.log("28 días");
        break;
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log("31 días");
        break;
    default:
        console.log("30 días");
    
    
}



