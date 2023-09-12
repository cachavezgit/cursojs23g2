for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = [];
let arr2 = [];
for (let i = 0, j=98; i < 100; i=i+2,j-=2) {
    arr.push(i);
    arr2.push(j);
}

console.log(arr);
console.log(arr2);