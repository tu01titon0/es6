
let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

let [firstName1, secondName1] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName1);//"alpha"
console.log(secondName1);//"beta

let [firstName4,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstNam4);//"alpha"
console.log(thirdName);//"gamma"

let [firstNameg,,...lastNameg] = ["alpha", "beta", "gamma", "delta"];

console.log(firstNameg);//"alpha"
console.log(lastNameg);//"gamma, delta"

let [firstNamef, secondNamef] = ["alpha", "beta", "gamma", "delta"];

console.log(firstNamef);//"alpha"
console.log(secondNamef);//"beta"

//After swapping
[firstNamef, secondNamef] = [secondNamef, firstNamef]

console.log(firstNamef);//"beta"
console.log(secondNamef);//"alpha"

/*
function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [firstName, secondName] = NamesList();

console.log(firstName);//"alpha"
console.log(secondName);//"beta"
*/

/*
let marks = {x: 21, y: -34, z: 47 };

let x = marks.x; // x = 21
let y = marks.y; // y = -34
let z = marks.z; // z = 47

console.log(x);
console.log(y);
console.log(z);
*/

/*
let marks = {x: 21, y: -34, z: 47 };

const { x, y, z } = marks; // x = 21, y = -34, z = 47

console.log(x);
console.log(y);
console.log(z);
*/

const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1); // 15, 16