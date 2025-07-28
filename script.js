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

// 4.
for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}!`);
}
