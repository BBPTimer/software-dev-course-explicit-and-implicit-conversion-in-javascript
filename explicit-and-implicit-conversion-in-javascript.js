/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);
//Converted result from String to Number

let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}
//Removed quotation marks to make isValid falsy rather than truthy

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);
//Converted age from String to Number to make age evaluate as a Number

//My own example of implicit type conversion
let implicitTypeConversion
if (!implicitTypeConversion) {
    console.log("This is invalid!");
}

//My own example of explicit type conversion
let explicitTypeConversion
if (!Boolean(explicitTypeConversion)) {
    console.log("This is invalid!");
}