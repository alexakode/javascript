// Variables and operators

// Section 1: commenting our code
// Ctrl + '
// Comments are useful to test code, we can toggle snippets with Ctrl + // or Ctrl + '
// This is a single line comment, shift+alt+a can toggle multi-line comments

// Section 2: console.log
// console.log is used to print messages to the console, useful for debugging

console.log("Hello, World!");

// Section 3: variables and data types
// Variables are used to store data, we can use let, const, or var to declare them
let exampleText = "This is Joe's text";
console.log(exampleText);
// camelCase is a common naming convention for variables.
// snake_case is also used, but camelCase is more common in JavaScript.
// kebab-case is used for URLs and CSS classes.
// PascalCase is used for class names in JavaScript.

// Integer (whole number)
const myNum = 42;
console.log(myNum);

// Boolean (true or false)
const booleanOne = true;
const booleanTwo = false;

console.log(booleanOne);
console.log(booleanTwo);

// Array (list of values), indices start at 0 and mark the position of each item in an array
const exampleArray = [true, 100, "hello"];
console.log(exampleArray); //(3) indicates 3 items in the array
console.log(exampleArray[0]); // prints the first item in the array
console.log(exampleArray[1]); // prints the second item in the array
console.log(exampleArray[2]); // prints the third item in the array

// Object (key-value pairs)
exampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
console.log(exampleObject);
console.log(exampleObject.key1); // prints the value of key1
console.log(exampleObject.key2); // prints the value of key2
console.log(exampleObject.key3); // prints the value of key3
//never use var in modern JavaScript, use let or const instead. If you can use const, you should. Else use let.
const person = {
  name: "Joe",
  age: 37,
  isStudent: false,
  hobbies: ["reading", "gaming", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "Norway",
  },
};
console.log(person);
console.log(person.name); // prints the name of the person
// do not store passwords in plain text, use a secure method to store sensitive information

// Let & Const
// Let is used to declare variables that can be reassigned later.
let myVariable = "Hello";
// Const is used to declare variables that cannot be reassigned.
const myConstant = "World";
// Undefined
// Undefined is a special value that represents a variable that has been declared but has not yet been assigned a value.
let myUndefinedVariable;
console.log(myUndefinedVariable); // prints undefined
// Null
// Null is a special value that represents the absence of a value
let myNullVariable = null;
console.log(myNullVariable); // prints null
// Section 4: Declaring variables, let and const
// Let allows you to declare variables that can be reassigned later.
// Const allows you to declare variables that cannot be reassigned later.
let changeableString = "I can change";
console.log(changeableString); // prints the initial message
changeableString = "I have changed";
console.log(changeableString); // prints the changed message
const fixedString = "I cannot change";
console.log(fixedString); // prints the initial message
// fixedString = "I have changed"; // This will cause an error because fixedString is a constant

let healthPoints = 100;
console.log(healthPoints); // prints 100
healthPoints = healthPoints - 10; // We can change the value of healthPoints because it is declared with let
console.log(healthPoints); // prints 90
// When you declare a variable with const, you cannot change its value later. But if the constant holds a mutable object, properties or elements of that object can still be changed.
const myArray = [1, 2, 3];
console.log(myArray); // prints [1, 2, 3]
myArray[1] = 400; // This will NOT cause an error because myArray is a constant
console.log(myArray); // prints [1, 400, 3]

// Section 5: Operators
// Operators are used to perform operations on variables and values.

let num1 = 10;
let num2 = 5;
console.log(num1, num2); // prints 10 5
// Arithmetic Operators
// Addition
console.log(num1 + num2); // prints 15
console.log(num1 - num2); // prints 5
console.log(num1 * num2); // prints 50
console.log(num1 / num2); // prints 2
console.log(num1 % num2); // prints 0 (modulus operator, gives the remainder of the division)
console.log(num1 ** num2); // prints 100000 (exponentiation operator, raises num1 to the power of num2)

let firstName = "Joe";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenation operator, combines strings
console.log(fullName); // prints "Joe Doe"
console.log(firstName + " " + lastName); // prints "Joe Doe" directly

let counter = 0;
console.log(counter); // prints 0
counter++; // Increment operator, increases the value of counter by 1
console.log(counter); // prints 1
counter++;
counter++;
console.log(counter);
counter--;
console.log(counter);
// Decrement operator, decreases the value of counter by 1

counter = counter + 5; // Do not use this, it is not the best practice
console.log(counter); // prints 6

counter += 5; // This is the same as counter = counter + 5, use this instead
console.log(counter); // prints 11

let score = 10;
score -= 3;
console.log(score); // prints 7, this is the same as score = score - 3
//Multiplication
score *= 2; // This is the same as score = score * 2
console.log(score); // prints 14
// Division
score /= 2; // This is the same as score = score / 2
console.log(score); // prints 7
// Modulus
score %= 3; // This is the same as score = score % 3