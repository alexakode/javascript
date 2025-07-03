// Section 1: Check if a list includes an item (funtion, ternary, array)

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = ["mario kart", "GTA6", "hello kitty island"];

function checkItem(item, itemArray) {
  let included = "";
  if (itemArray.includes(item)) {
    included = "does";
  } else {
    included = "doesn't";
  }
  return `The array ${included} include ${item}`;
}

console.log(checkItem("bread", shoppingList));
console.log(checkItem("milk", shoppingList));
console.log(checkItem("mario kart", gamesList));
