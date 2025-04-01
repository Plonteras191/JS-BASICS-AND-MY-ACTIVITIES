// ARRAY IS A COLLECTION OF DATA VALUE INSIDE A SINGLE VARIABLE

// ARRAY OF STRINGS
let fruits = ['apple', 'banana', 'orange', 'mango'];

// ARRAY OF NUMBERS
let numbers = [1, 2, 3, 4, 5];

// ARRAY OF MIXED DATA TYPES
let mixed = ['apple', 1, true, null, undefined, { name: 'John' }, [1, 2, 3]];

// ARRAY OF OBJECTS
let users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Mike', age: 35 }
];

console.log(fruits); // ['apple', 'banana', 'orange', 'mango']

console.log(numbers.length); // 5

console.log(fruits[2]);

let names = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emily'];
console.log(names[names.length - 1]); // David
console.log(names[0]); // John

//UPDATING ARRAY
let numbers1 = [61, 32, 13, 4, 5];
numbers1[1] = 99;// updating value of the array
numbers1[5] = 70;// adding new value to the array
console.log(numbers1); // [61, 99, 13, 4, 5]

//add using length property
let cars = ['BMW', 'Mercedes', 'Toyota'];
cars[cars.length] = 'Honda'; // adding new value to the array
console.log(cars); // ['BMW', 'Mercedes', 'Toyota', 'Honda']

//add using push method
let fruits1 = ['apple', 'banana', 'orange'];
fruits1.push('mango'); // adding new value to the array
fruits1.push('bayabas'); // adding new value to the array
fruits1.push('santol'); // adding new value to the array. can add more
console.log(fruits1); // ['apple', 'banana', 'orange', 'mango']

//add using unshift method
let fruits2 = ['apple', 'banana', 'orange'];
fruits2.unshift('mango'); // adding new value to the array
fruits2.unshift('bayabas'); // adding new value to the array
fruits2.unshift('santol'); // adding new value to the array. can add more
console.log(fruits2);

//DELETING ARRAY
// using length property
let fruits3 = ['apple', 'banana', 'orange', 'mango'];
fruits3.length = 2; // deleting value of the array
console.log(fruits3); // ['apple', 'banana']

// using pop method
let fruits4 = ['apple', 'banana', 'orange', 'mango'];
fruits4.pop(); // deleting the last value of the array
console.log(fruits4); // ['apple', 'banana', 'orange']

// using shift method
let fruits5 = ['apple', 'banana', 'orange', 'mango'];
fruits5.shift(); // deleting the first value of the array
console.log(fruits5); // ['banana', 'orange', 'mango']

// using splice method
let fruits6 = ['apple', 'banana', 'orange', 'mango'];
fruits6.splice(1, 2); // deleting 2 values starting from index 1
console.log(fruits6); // ['apple', 'mango']

//challenge

let FirstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emily'];
let LastNmaes = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
let Ages = [25, 30, 35, 28, 40, 22];
id = 0;
console.log(`ID: ${id}`);
console.log(`First Name: ${FirstNames[id]}`);
console.log(`Last Name: ${LastNmaes[id]}`);
console.log(`Age: ${Ages[id]}`);