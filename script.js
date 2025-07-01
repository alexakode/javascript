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

//1.2: converting a string to a number

const numericString = "123.45xyz";
console.log(Number(numericString)); // converts string to number; returns NaN if any part is invalid

console.log(parseInt(numericString)); //parses as an integer until an invalid character

console.log(parseFloat(numericString)); // parses as a float until an invalid character; returns 123.45

// Section 2: Array methods

const colors = ["Red", "Green", "Blue"];
console.log(colors.length); //number of elements
colors.push("Yellow"); //adds an element to the array
console.log(colors);
console.log(colors.length);
const lastColor = colors.pop(); //.pop removes and returns the last element, we can assign that to its own const
console.log(lastColor);
console.log(colors);
console.log(colors.join(" ")); //opposite of split, joins an array into a string
console.log(colors.includes("Green"));
console.log(colors.shift()); //.shift removes and returns the first element, we can assign that to its own
colors.unshift("Purple"); //adds to the beginning of the array
console.log(colors);

const newColors = colors.toSpliced(1, 1, "Orange");
console.log(colors)
console.log(newColors)
