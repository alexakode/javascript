//Lesson 4: Functions in JavaScript

//Section 1: Function Declarations and hoisting
//Hoisting is running a function before it's declared

function sayHello() {
  console.log("Hello");
}

sayHello();

//Section 2: Arrow Funcions (Introduced in JS6, great for short, inline functions

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// Section 3: Return statements and scope
function one() {
  console.log("This function logs a message without returning a value");
  const sum = 1 + 1;
}
one();

function two() {
  const myMessage = "This message is returned from the function";
  return myMessage; //Console.log'ing does not work outside the scope of the function
  return myMessage; //This does not work, nothing is read from a function after return
}

console.log(two());

const myArray = [1, 2, 3];

function changeArray() {
  myArray[2] = 100;
}
changeArray();
console.log(myArray);

// Section 4: Functions with pararmeters

function add() {
  return 3 + 4;
}
console.log(add());

// Soft coded function with argument and parameters
function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(3, 4));
console.log(subtract(10, 5));
console.log(subtract(345, 34));
console.log(subtract(631, 1));

//Example 3 - a greeter function that uses parameters and template literals.

// const greeter = (time, name) => {
//   return "Good" + " " + time + " " + name;
// };

const greeter = (time, name) => {
  return `Good ${time} ${name}`;
};

// console.log(greeter("Morning", "Joe"));
// console.log(greeter("Evening", "Ole"));
// console.log(greeter("Afternoon", "Bill"));

const userData = {
  userName: "Joe",
  address: "123 wherever",
  tel: 49348349,
};
console.log(greeter("Morning", userData.userName));

//Section 5: Implicit Return in arrow functions
const adder = (num1, num2) => num1 + num2;
console.log(adder(10, 5));

// Section 6: calculator using switch statement

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(5, 6, "+"));
console.log(calculator(5, 6, "-"));
console.log(calculator(5, 6, "*"));
console.log(calculator(5, 6, "/"));

// Section 7: Updating a global variable via a function

let hp = 100;

const updateHP = (amount, direction) => {
  if (direction === "down") {
    hp -= amount;
  } else if (direction === "up") {
    hp += amount;
  }
};

updateHP(50, "down");
console.log(hp);

updateHP(25, "up");
console.log(hp);

//Example 2
const newArray = []
function updateArray() {
    newArray.push(1)
}
updateArray()
console.log(newArray);