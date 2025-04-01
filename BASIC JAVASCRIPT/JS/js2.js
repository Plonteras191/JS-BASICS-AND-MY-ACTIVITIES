console.log("hello world");

let l =5; // let or variable can be changed
let m =12.9;
let n="hello world";
console.log(l+m+n);

const x =5; // const or constant variable connat be changed
const y =12.9;
const z="hello world";
console.log(x+y+z);

// DATA TYPES
// 1. String
let name ="JOHN";
// 2. Number
let number = 5;
// 3. Boolean
let handsome = true; // true or false
// 4. Undefined
let nickname; // undefined
// 5. Null
let age = null; // null
// 6. Symbol
let sym = Symbol("symbol"); // symbol
// 7. BigInt
let bigInt = BigInt(1234567890123456789012345678901234567890); // big int
// 8. Object
let person = { // object
    name: "John",
    age: 30,
    city: "New York"
};
// 9. Array
let fruits = ["apple", "banana", "orange"]; // array


let $firstname = "john";
alert($firstname); // alert box
console.log($firstname); // console log
$name = "john kris"; // variable name can be changed only when u use let or var
alert($name);

// CONCATENATION
let _name = "john kristoffer";
let _age = 20;
console.log("Hi my name is: "+_name+" i am : "+_age+" years old"); // concatenation
alert("Hi my name is: "+_name+" i am : "+_age+" years old"); // alert box

//EXAMPLE
let name1 = "John";
let name2 = "Shandie";
let pronoun = "he";
let drink = "Coffee";

console.log(name1 + ", the friendly neighbor, wave at " + name2 + " as " + pronoun +
     " walked by " + name2 + "'s house. " + name2 + " smailed back and invite " +
    name1 + " in for a cup of " + drink);