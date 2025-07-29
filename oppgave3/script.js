/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];
function getRandomCity() {
  return cities[Math.floor(Math.random() * cities.length)];
}
const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;

// Skriv koden for oppgave 1 her
for (let i = 0; i < people.length; i++) {
  if (people[i].name === "Otto") {
    continue;
  }
  people[i].city = getRandomCity();
  people[i].title = people[i].male ? "Mr." : "Ms.";
  people[i].age += 2;
  people[i].hobbies.unshift("coding");
  combinedAge += people[i].age;
}
let averageAge = combinedAge / (people.length - 1); // Subtract 1 for Otto
console.log(people);

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Skriv koden for oppgave 2 her
function diceRoller(numRolls, sides = 6) {
  const rolls = [];
  for (let i = 0; i < numRolls; i++) {
    rolls.push(Math.floor(Math.random() * sides) + 1);
  }
  return rolls;
}
console.log(diceRoller(4)); // Example output: [3, 1, 6, 2]
console.log(diceRoller(6, 20)); // Example output: [15, 2, 20, 7, 10, 5]
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

// Skriv koden for oppgave 3 her
function cleanTextArray(textArray) {
  const cleanedArray = [];
  for (const text of textArray) {
    cleanedArray.push(text.trim().toLowerCase());
  }
  return cleanedArray.join(" ");
}
console.log(
  cleanTextArray([
    " thIS",
    "teXt  ",
    " nEeds ",
    "to",
    "BE",
    "cleANED   ",
    " Up",
  ])
); // Output: "this text needs to be cleaned up"
/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/

function doubleSwap(string, charA, charB) {
  // Skriv koden for oppgave 4 her
  let swappedString = "";
  for (const char of string) {
    if (char === charA) {
      swappedString += charB;
    } else if (char === charB) {
      swappedString += charA;
    } else {
      swappedString += char;
    }
  }
  return swappedString;
}
console.log(doubleSwap("this is a string", "i", "s")); // Output: "thsi si a itrsng"
console.log(doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")); // Output: "maybe another approach is necessary"
console.log(doubleSwap("what is the point of this?", "o", "t")); // Output: "whao is ohe ptino tf ohis?"

/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

// Skriv koden for oppgave 5 her
function helloChecker(inputString) {
  const helloWords = {
    hello: "engelsk",
    ciao: "italiensk",
    salut: "fransk",
    hallo: "tysk",
    hola: "spansk",
    czesc: "polsk",
  };
  const words = inputString.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (helloWords[word]) {
      return `HELLO oppdaget på ${helloWords[word]}.`;
    }
  }
  return "Ingen HELLO oppdaget.";
}
console.log(helloChecker(greetings[0])); // Output: "HELLO oppdaget på engelsk."
console.log(helloChecker(greetings[1])); // Output: "HELLO oppdaget på italiensk."
console.log(helloChecker(greetings[2])); // Output: "HELLO oppdaget på fransk."
console.log(helloChecker(greetings[3])); // Output: "HELLO oppdaget på tysk."
console.log(helloChecker(greetings[4])); // Output: "Ingen HELLO oppdaget."
console.log(helloChecker(greetings[5])); // Output: "HELLO oppdaget på spansk."
console.log(helloChecker(greetings[6])); // Output: "HELLO oppdaget på polsk."
console.log(helloChecker(greetings[7])); // Output: "HELLO oppdaget på engelsk."