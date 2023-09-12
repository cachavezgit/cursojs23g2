const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4, 'M13', 'M14', 'M15', 'M16', 'M17'];

console.log(year);

const numeros1 = [23,45];
const numeros2 = [98,71];

console.log(addwoNumbers(...numeros1));

addFourNumbers(...numeros1,...numeros2);

function addwoNumbers(a,b){
    return a+b;
}

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}

let nombre = "Parangaricutirimicuaro";

//console.log(...nombre);

[...nombre].forEach(element => {console.log(element);});

const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Negro"
};

const clonAuto = {...auto};
auto.marca = "VW";
console.log(clonAuto);
console.log(auto);