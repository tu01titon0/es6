
function multiply(a, b) {
    return a * b;
}

let num12 = multiply(5);
console.log(num12);
let num22 = multiply(5, 8);
console.log(num22);

function multiply1(a, b = 2) {
    return a * b;
}

let num1 = multiply1(5);
console.log(num1);
let num2 = multiply1(5, 8);
console.log(num2);

class Geeks {
    constructor(a, b = 3) {
        console.log(a * b);
    }
}
let obj = new Geeks(5);
let obj1 = new Geeks(5, 4);