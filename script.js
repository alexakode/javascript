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
