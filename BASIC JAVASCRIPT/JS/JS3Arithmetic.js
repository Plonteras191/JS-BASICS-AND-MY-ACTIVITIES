console.log("Hello World");

//INTEGER WHOLE NUMBERS
//FLOAT DECIMAL NUMBERS

// convert string to integer
let num = parseInt("10");

// convert string to decimal
let $num = parseFloat("10.5");

let num1 = "10";
let num2 = 20;
num1 = parseInt(num1); // convert string to integer
console.log(num1 + num2);

let x =5;
let y = 10;
console.log((x+y)/x);//ans = 3

//addition
let a = 5;
let b = 10;
let c = a + b; // 15
console.log(c);
//subtraction
let d = 20;
let e = 5;
let f = d - e; // 15
console.log(f);
//multiplication
let g = 5;
let h = 10;
let i = g * h; // 50
console.log(i);
//division
let j = 20;
let k = 5;
let l = j / k; // 4
console.log(l);
//modulus
let m = 20;
let n = 3;
let o = m % n; // 2
console.log(o);
//exponentiation
let p = 2;
let q = 3;
let r = p ** q; // 8
console.log(r);
//increment
let s = 5;
s++; // 6
console.log(s);
//decrement
let t = 10;
t--; // 9
console.log(t);

//short handed operators

let num3 = 5;
num3 +=5; // num3 = num3 + 5; // 10
console.log(num3); // 10

//incerement and decrement operators
//prefix increment
let num4 = 0;
console.log(++num4); // 1
console.log(num4); // 1

//postfix increment
let num5 = 0;
console.log(num5++); // 0
console.log(num5); // 1

//challenge
let math = 95.8;
let english = 85.5;
let science = 90.0;
let history = 88.0;
let geography = 92.0;
let totalGrades = math + english + science + history + geography;
let average = totalGrades /5;
console.log("Average: "+average); // 90.26