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
for (let person of people) {
  console.log(
    `${person.firstName} ${person.lastName} is a ${person.age} year old ${
      person.male ? "man" : "woman"
    } and enjoys ${person.hobbies.join(" and ")}.`
  );
}
