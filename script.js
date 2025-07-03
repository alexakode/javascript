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
