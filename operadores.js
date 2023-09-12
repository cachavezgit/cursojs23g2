let nr1 = 20;
let nr2 = 4;
let str1 = "hello";
let nr3 = 3;
let nr4 = 2;
let result1 = nr1 - nr2;
let result2 = nr3 ** nr4;
console.log(result1, result2);
console.log(typeof result2);

let nr5 = 14;
let nr6 = 3;
let result3 = nr5 % nr6;
console.log(result3);

let nr7 = 4;
//nr7++;
console.log(++nr7);
console.log(nr7);
let nr8 = 4;
//nr8--;
console.log(--nr8);
console.log(nr8);

let nr9 = 4;
let nr10 = 5;
let nr11 = 2;
console.log(nr9++ + ++nr10 * nr11++);
            4     +    6   *     2
            4 + 12
            16
            5          6         3
console.log(nr9, nr10, nr11);
             