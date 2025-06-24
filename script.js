// Lesson 2: Conditionals and related operators in JavaScript

// Section 1: The typeof operator
// The typeof operator is used to determine the type of a variable or value.
let myVariable = 42;
console.log(typeof myVariable); // prints "number"
let myString = "Hello, World!";
console.log(typeof myString); // prints "string"
let myBoolean = true;
console.log(typeof myBoolean); // prints "boolean"
let myArray = [1, 2, 3];
console.log(typeof myArray); // prints "object", arrays are objects in JavaScript

// Section 2: Comparison Operators
// Comparison operators are used to compare two values and return a boolean result.
let a = 5;
let b = 10;
console.log(a < b); // prints "true",   < less than
console.log(a > b); // prints "false"   > greater than
console.log(a == b); // prints "false"  == equal to
console.log(a != b); // prints "true"   != not equal to
console.log(a <= b); // prints "true"   <= less than or equal to
console.log(a >= b); // prints "false"  >= greater than or equal to
console.log(10 == 10); // prints "true"   == equal to (checks value only, type coercion may occur)
console.log(10 == "10"); // prints "true"   == equal to (type coercion occurs, string is converted to number)
console.log(10 === "10"); // prints "false"  === strict equal to (checks value and type, no type coercion)
// Strict equality and inequality
console.log(a === b); // prints "false"  === strict equal to (checks value and type)
console.log(a !== b); // prints "true"   !== strict not equal to (checks value and type)
// = assign, ==check, ===strict check
console.log(5 === 5.0); // prints "true"  === strict equal to (both are numbers, same value)

console.log(15 != 15); // prints "false"  != not equal to (both are equal, so false)
console.log(15 != "15"); // prints "false"  != not equal to (type coercion occurs, string is converted to number)
console.log(15 !== 15); // prints "false"  !== strict not equal to
console.log(15 !== "15"); // prints "true"  !== strict not equal to (different types, number vs string)

// Section 3: Conditional Statements
// Conditional statements allow you to execute different code based on certain conditions.
if (a < b) {
  console.log("a is less than b");
} else if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is equal to b");
}
let temperature = -5;
if (temperature > 20) {
  console.log("It's hot outside.");
} else if (temperature >= 10) {
  console.log("It's mid outside.");
} else if (temperature >= 0) {
  console.log("It's cold outside.");
} else {
  console.log("It's freezing!.");
}

// Section 4: Logical operators: AND (&&) and OR (||)

// AND (&&) requires both conditions to be true.

const age = 22;
const hasLicence = true;
const disqualified = false;

if (age >= 18 && hasLicence && !disqualified) {
  console.log("You can drive.");
}
if (hasLicence === true) {
  console.log("You can drive.");
}
if (age >= 18 && hasLicence === true) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

// OR (||) requires at least one condition to be true.
if (age < 18 || !hasLicence) {
  console.log("You cannot drive.");
}
if (age < 18 || hasLicence === false) {
  console.log("You cannot drive.");
}
if (age < 18 || hasLicence === false || disqualified) {
  console.log("You cannot drive.");
}

const day = "Saturday"; // Valid, it's case-sensitive
if (["Saturday", "Sunday"].includes(day)) {
  console.log("It's the weekend!");
} else if (
  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day)
) {
  console.log("It's a weekday.");
} else {
  console.log("Invalid day.");
}

// Section 5: Ternary Operator
// The ternary operator is a shorthand way to write an if-else statement.

// DRY (Don't Repeat Yourself) principle
// The ternary operator is a shorthand way to write an if-else statement.
const isMember = false; // Change this to true or false to test
const fee = isMember ? "5" : "10";
console.log(`Fee: £${fee}`); // prints "You pay £10" if isMember is false, "You pay £5" if isMember is true
// if (isMember === true) {
//   console.log("You pay £5");
// } else {
//   console.log("You pay £10");
// }

// Section 6: Switch Statement
// The switch statement is used to execute one block of code among many options based on the value of a variable.
const fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("You chose a banana.");
    break;
  case "orange":
    console.log("You chose an orange.");
    break;
  case "apple":
    console.log("You chose an apple.");
    break;
  default:
    console.log("Unknown fruit.");
    break;
}

// Section 7: Truthy and Falsy Values
// In JavaScript, certain values are considered "falsy" (evaluates to false in a boolean context) and others are "truthy" (evaluates to true).
if (10) {
  console.log("is true");
} else {
  console.log("is false");
}
// Truthy values:
// - string with content
// - positive number
// - negative number
// - empty array
// - empty object

// Falsy values:
// - empty string
// - zero
// - null
// - undefined
// - NaN (Not a Number)

// Section 8: Template literal/string
const firstName = "Ola";
const lastName = "Nordmann";
// Template literals allow for multi-line strings and string interpolation.
const fullName = `Your full name is ${firstName} ${lastName}`; // Using template literals for string
//const fullName = firstName + " " + lastName;
console.log(fullName); // prints "Your full name is Ola Nordmann"
