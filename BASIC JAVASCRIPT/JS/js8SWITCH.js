//SWITCH 
//The switch statement is a type of conditional statement that allows you to execute different blocks of code based on the value of a variable or expression. It is often used as an alternative to multiple if-else statements when you have many conditions to check.

let difficulty = "easy";

switch (difficulty) {
    case "easy":
        console.log("You have selected easy difficulty.");
        break; // Exit the switch statement
    case "medium":
        console.log("You have selected medium difficulty.");
        break; // Exit the switch statement
    case "hard":
        console.log("You have selected hard difficulty.");
        break; // Exit the switch statement
    default:
        console.log("Invalid difficulty level selected."); // Default case if no match is found
        break; // Exit the switch statement
    }


    let letter = "z";
    switch(letter){
        case "a":
        case "A":
            console.log("The letter is A.");
            break; // Exit the switch statement
        case "b":
        case "B":
            console.log("The letter is B.");
            break; // Exit the switch statement
        case "c":
        case "C":
            console.log("The letter is C.");
            break; // Exit the switch statement
        default:
            console.log("The letter is not A, B, or C."); // Default case if no match is found
            break; // Exit the switch statement

    }

    //challenge

    let day = 1;
    switch (day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7."); // Default case if no match is found
            break; // Exit the switch statement
    }