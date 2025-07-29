//Objects

// string, number, array, boolean, OBJECT.

// Array er en samling av verdier/data, som kan være av forskjellige typer.
const myArray = ["Paul", "John", "George", "Ringo"];

// Object er en samling av key-value par, der hver key er en streng og verdien kan være av hvilken som helst type. Husk komma etter hvert par, unntatt det siste.
const user = {
  firstName: "Ola",
  lastName: "Hansen",
  age: 24,
  hobbies: ["coding", "gaming", "reading"],
  email: "ola.hansen@example.com",
  address: {
    streetName: "Storgata",
    streetNumber: 12,
    postalCode: "1234",
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
// Kan lagre alle strengene sammen i et array, men det er vanskeligere å lese. Vi kan lagre objekt i objekt

console.log(user.lastName);
// kan hente ut verdier fra et objekt ved å bruke punktum (.) eller klammeparenteser ([]) for å referere til nøklene.
console.log(user["firstName"]);
console.log(user.age);
// kan også endre verdier i et objekt ved å bruke punktum (.) eller klammeparenteser ([]) for å referere til nøklene.
user.email = "ola.hansen@gmail.com";
console.log(user);
// kan også legge til nye nøkkel-verdi par i et objekt ved å bruke punktum (.) eller klammeparenteser ([]) for å referere til nøklene.
user.age = 25; // endrer verdien av age
console.log(user);
console.log(user.fullName()); // kaller funksjonen fullName for å få fullt navn

const people = [
  {
    firstName: "Paul",
    lastName: "McCartney",
    male: true,
    age: 81,
    hobbies: ["music", "photography"],
  },
  {
    firstName: "John",
    lastName: "Lennon",
    male: true,
    age: 40,
    hobbies: ["music", "art"],
  },
  {
    firstName: "George",
    lastName: "Harrison",
    male: true,
    age: 58,
    hobbies: ["music", "gardening"],
  },
  {
    firstName: "Ringo",
    lastName: "Starr",
    male: true,
    age: 83,
    hobbies: ["music", "drumming"],
  },
  {
    firstName: "Yoko",
    lastName: "Ono",
    male: false,
    age: 90,
    hobbies: ["music", "art"],
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(
    `${people[i].firstName} ${people[i].lastName} is ${
      people[i].age
    } years old and enjoys ${people[i].hobbies.join(" and ")}.`
  );
}
function getRandomIndex(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
for (let person of people) {
  console.log(
    `${person.firstName} ${person.lastName} is a ${person.age} year old ${
      person.male ? "man" : "woman"
    } who enjoys ${getRandomIndex(person.hobbies)} and other things.`
  );
}
let combinedAge = 0;
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  combinedAge += person.age;
  console.log(`${combinedAge} is the combined age of all people so far.`);
}
console.log(`${combinedAge} is the combined age of all people.`);

for (let i = 0; i < people.length; i++) {
  people[i].isCool = Math.random() < 0.5; // Randomly assign isCool property
}
console.log(people);
// Lag en liste med hobbier for alle som er 60+ år gamle
const hobbiesList = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 60) {
    hobbiesList.push(...people[i].hobbies);
  }
}
console.log("Hobbies of people aged 60 and above:", hobbiesList);
const seniorHobbies = people
  .filter((person) => person.age >= 60)
  .flatMap((person) => person.hobbies);
console.log("Senior hobbies:", seniorHobbies);

// Lag en liste med navn på alle som er menn
const maleNames = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].male) {
    maleNames.push(`${people[i].firstName} ${people[i].lastName}`);
  }
}
console.log("Male names:", maleNames);
// Legg til 1 til alles alder
for (let i = 0; i < people.length; i++) {
  people[i].age += 1;
}

// finn ut hvem som har flest bokstaver i hobbyene sine
let maxHobbyLength = 0;
let personWithLongestHobby = null;

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const longestHobby = person.hobbies.reduce((longest, hobby) => {
    return hobby.length > longest.length ? hobby : longest;
  }, "");
  if (longestHobby.length > maxHobbyLength) {
    maxHobbyLength = longestHobby.length;
    personWithLongestHobby = person;
  }
}
if (personWithLongestHobby) {
  console.log(
    `${personWithLongestHobby.firstName} ${
      personWithLongestHobby.lastName
    } has the longest hobby: ${personWithLongestHobby.hobbies.join(", ")}.`
  );
}
