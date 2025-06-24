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

const day = "saturday"; // Invalid, it's case-sensitive
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend!");
} else if (["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day)) {
  console.log("It's a weekday.");
} else {
  console.log("Invalid day.");
}
