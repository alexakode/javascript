// Section 1: Check if a list includes an item (funtion, ternary, array)

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = ["mario kart", "GTA6", "hello kitty island"];

const checkItem = (item, itemArray) =>
  `The array does ${itemArray.includes(item) ? "" : "n't"} include ${item}`;

console.log(checkItem("bread", shoppingList));
console.log(checkItem("milk", shoppingList));
console.log(checkItem("mario kart", gamesList));

// Section 2: Convert a sentence into kebab case (function, methods)

function toKebabCase(string) {
  return string.trim().replaceAll(" ", "-");
}
console.log(toKebabCase("   hello javascript how are you  "));

// Section 3: Checking if a word is a palindrome (function, methods)
function isPalindrome(word) {
  reversedWord = word.toLowerCase().split("").toReversed().join("");
  return `${word} is ${
    word.toLowerCase() === reversedWord ? "" : "not "
  }a palindrome`;
}
//How can we return a lowercase word with an uppercase first letter
console.log(isPalindrome("Racecar")); // racecar is a palindrome
console.log(isPalindrome("Banana")); // banana is not a palindrome

//How can we return a fully lowercase word but with an uppercase first letter?
function Titlecase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
console.log(Titlecase("smoothie"));
console.log(Titlecase("buIlDinG"));

//Section 4: introduction to Math.random

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magicarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive)
// 0.00-0.99
console.log(Math.random());
// 0-9
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
const randomOneToTen = Math.floor(Math.random() * 10) + 1; //math.ceil has a bug at 0.
console.log(randomOneToTen);
console.log(`Your starter pokemon is ${pokemon[randomNumber]}`);

//Section 5: remove the middle element from an arra

const myArray = ["A", "B", "C", "D", "E"];
function removeMiddle(array) {
  const mid = Math.floor(array.length / 2);
  const copy = array.toSpliced(mid, 1);
  return copy;
}
console.log(removeMiddle(myArray));
console.log(removeMiddle(pokemon));

// Section 6: Rock, paper, scissors (function, switch case, math, random)
function rockPaperScissors(userInput, aiInput) {
  switch (userInput + aiInput) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "It's a draw!";
    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "User wins!";
    default:
      return "AI wins!";
  }
}
console.log(rockPaperScissors("rock", "rock"));
console.log(rockPaperScissors("paper", "paper"));
console.log(rockPaperScissors("scissors", "scissors"));
const possibleAnswers = ["rock", "paper", "scissors"];
const randomNum = Math.floor(Math.random() * possibleAnswers.length);
const aiAnswer = possibleAnswers[randomNum];
console.log(rockPaperScissors("rock", aiAnswer));