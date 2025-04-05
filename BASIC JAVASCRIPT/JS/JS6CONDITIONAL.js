// CONDITIONAL STATEMENTS
// == EQUALS
// === STRICT EQUALS
// != NOT EQUALS
// !== STRICT NOT EQUALS

// COMPARISON OPERATORS
// > GREATER THAN
// < LESS THAN
// >= GREATER THAN OR EQUAL TO
// <= LESS THAN OR EQUAL TO
// ? TERNARY OPERATOR
// && AND
// || OR
// ! NOT

let x = 10;
let y = 12;

// IF/ELSE STATEMENTS
let age = 16;
if (age >= 18){
    console.log("Adult");
    console.log("You can vote");
} else{
    console.log("Minor");
    console.log("You cannot vote");
}

console.log("thanks");

// ELSE IF STATEMENTS
let age2 = -1;
if (age2 >= 18){
    console.log("Adult");
} else if (age2 <= 0){
    console.log("Invalid age");
} else if (age2 > 0){
    console.log("Minor");
}
     console.log("thanksss");

     //challenge

     let grade = 73;

     if (grade > 100){
        console.log("Invalid Grade");
     } else if (grade >= 98){
        console.log("With Highest Honors");
     } else if (grade >= 95){
        console.log("With High Honors");
     } else if (grade >= 90){
        console.log("With Honors");
     } else if (grade >= 75){
        console.log("Passed");
     } else if (grade <= 74){
        console.log("Failed");
     }