//Loops/løkker

const names = ["Joe", "Ole", "Bill", "Jane", "Mary"];

// 1.
// "Hei Joe!"
// 2.
console.log("Hei " + names[0] + "!");
// 3.
console.log(`Hei ${names[0]}!`);

console.log(`Hei ${names[1]}!`);

console.log(`Hei ${names[2]}!`);

console.log(`Hei ${names[3]}!`);

console.log(`Hei ${names[4]}!`);

// 4. for-loops
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}!`);
}
for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}!`);
}
for (let i = 0; i < names.length; i += 2) {
  console.log(`Hei ${names[i]}!`);
}
// 5. for of loop, ferdigkonfigurerte løkker
for (let name of names) {
  console.log(`Hei ${name}!`);
}
// 6. while loop
// while kan brukes når vi ikke vet hvor mange ganger vi skal kjøre løkken. Vi spesifiserer parameter i ()
const secretNumber = 7;
const randomNumber = Math.ceil(Math.random() * 10); // Random number between 1 and 10, floor rounds down, ceil up and round nearest
let guess = 0;
while (guess !== randomNumber) {
  guess++; // guess = guess + 1;
  console.log("Guessing " + guess);
}
console.log("The secret number was " + guess);
