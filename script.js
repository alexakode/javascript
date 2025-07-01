//Lesson 5: Javascript methods (strings, arrays and numbers)

const text = "   Hello, Javascript World!  ";
const trimmedText = text.trim(); // removes whitespaces.
console.log(trimmedText.toUpperCase()); //converts to uppercase
console.log(trimmedText.toLowerCase()); //guess
console.log(trimmedText.indexOf("Javascript"));
console.log(trimmedText.slice(18));
const slicedText = trimmedText.slice(7, 17); //extracts stromg. does not alter original
console.log(slicedText);
console.log(trimmedText);
console.log(trimmedText.replace("World", "Universe")); //replace first occurrence
console.log(trimmedText.replaceAll("World", "Universe"));
console.log(trimmedText.charAt(0));
console.log(trimmedText.length); // returns the length of the string
console.log(trimmedText.split(" ")); //splits the sting into array of strings by the character, space makes the most sense
console.log(trimmedText.repeat(3));
