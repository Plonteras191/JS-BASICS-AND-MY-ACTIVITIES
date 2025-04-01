//STRING LENGTH
let str = "Hello Wo     rld";
let strLength = str.length; // .length method
console.log(strLength); // count every letter including space 11

//string indices individual char can be accessed using index
let str2 = "Hello World";
console.log(str2[4]);

//STRING METHODS
//1. toUpperCase() method
let str3 = "hello world";
let strUpper = str3.toUpperCase(); // convert to uppercase
console.log(strUpper); // HELLO WORLD
//2. toLowerCase() method
let str4 = "HELLO WORLD";
let strLower = str4.toLowerCase(); // convert to lowercase
console.log(strLower); // hello world

//TRIM()
//3. trim() method
let str5 = "   Hello World   ";
let strTrim = str5.trim(); // remove whitespace from both sides
console.log(strTrim); // Hello World

//4. trimStart() method
let str6 = "   Hello World   ";
let strTrimStart = str6.trimStart(); // remove whitespace from start
console.log(strTrimStart); // Hello World

//5. trimEnd() method
let str7 = "   Hello World   ";
let strTrimEnd = str7.trimEnd(); // remove whitespace from end
console.log(strTrimEnd.length); // Hello World // 14

//REPLACE METHODS
//6. replace() method
let str8 = "Hello World";
let strReplace = str8.replace("World", "JavaScript"); // replace World with JavaScript
console.log(strReplace); // Hello JavaScript

//7. replaceAll() method REMEBER CASE SENSITIVE
let str9 = "Hello World World";
let strReplaceAll = str9.replaceAll("World", "JavaScript"); // replace all World with JavaScript
console.log(strReplaceAll); // Hello JavaScript JavaScript

//slice() method
//8. slice() method
let str10 = "Helloo World";
let strSlice = str10.slice(0, 5); // slice from index 0 to 5 (not included)
console.log(strSlice); // Hello

//STRING TEMPLATES LITERALS
//9. template literals
let name = "john";
let age = 20;
let strTemplate = `My name is ${name} and I am ${age} years old.`; // template literals
console.log(strTemplate); // My name is john and I am 20 years old.

//challenge
let name2 = "john";
let name3 = "shandie";
let pronoun = "he";
let drink = "coffee";
let storyTemplate = `${name2}, the friendly neighbor, wave at ${name3} as 
${pronoun} walked by ${name3}'s house. ${name3} smiled back and invite ${name2}
in for a cup of ${drink}.`;
console.log(storyTemplate);