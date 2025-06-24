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
