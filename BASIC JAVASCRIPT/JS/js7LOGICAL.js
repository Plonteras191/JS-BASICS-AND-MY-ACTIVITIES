console.log("hello");

//LOGICAL OPERATORS are used in combination with conditional statements to evaluate multiple conditions at once.
// They are used to combine two or more conditions in a single statement.
// They are used to evaluate multiple conditions in a single statement.
// && AND operator
// || OR operator
// ! NOT operator

// AND operator (&&) returns true if both conditions are true
let age = 18;
let experience = 3;
let language = "java";
console.log(age >= 18 && experience >1 && language === "java");

console.log(age >= 18 && experience >3); // if one condition is false, the whole statement is false

if (age >= 18 && experience >1 && language === "java"){
    console.log("you are qualified for the job");
} else {
    console.log("you are not qualified for the job");
}

// || OR operator (||) returns true if at least one condition is true
let hasDegree = true;
let experience2 = 3;
let language2 = "java";

console.log (hasDegree || experience2 >3);
console.log(experience2 >3 || language2 === "c#");

// NOT operator (!) reverses the result of a condition

let isTrue = true;
let experience3 = 3;
let language3 = "java";
console.log(!isTrue); // false
console.log(!(experience3 > 3)); // true
console.log(!(language3 === "java")); // false


// NESTED CONDITIONAL STATEMENTS
// Nested conditional statements are conditional statements inside another conditional statement.

let age2 = 18;
let experience4 = 4;

if (age2>=18){
    if (experience4 >3){
        console.log("you are qualified for the job");
    } else {
        console.log("you dont have enough experience");
    } 
}     else {
        console.log("your a minor");
    }
//challenge

let age5 = 18;
let isRegistered = true;

if (isRegistered && age5 > 18) {
    console.log("Valid Voter");
} else if (isRegistered && age5 > 18) {
    console.log("Register First");
} else if (isRegistered && age5 < 18) {
    console.log("Not Eligible to Vote");
} else if (isRegistered  && age5 < 18) {
    console.log("Non Registered Voter");
}
 
