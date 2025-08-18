// Funksjon som håndterer brukerens kommando
function handleCommand() {
  // Henter input og output-elementer fra DOM
  const input = document
    .getElementById("commandInput")
    .value.trim()
    .toLowerCase();
  const output = document.getElementById("outputArea");

  // Bruker betingelser for å tolke kommandoer
  if (input === "add circle") {
    addCircle();
  } else if (input === "remove last") {
    removeLast();
  } else if (input.startsWith("change color")) {
    const color = input.split(" ")[2];
    changeColor(color);
  } else if (input === "add square") {
    addSquare();
  } else if (input === "make squares") {
    makeSquares();
  } else {
    // Feilhåndtering ved ukjent kommando
    alert("Ukjent kommando");
  }

  // Tømmer input-feltet etter kommando
  document.getElementById("commandInput").value = "";
}

// Legg til funksjoner for hver knapp
function addCircle() {
  const output = document.getElementById("outputArea");
  const circle = document.createElement("div");
  circle.classList.add("circle");
  output.appendChild(circle);
}

function removeLast() {
  const output = document.getElementById("outputArea");
  const last = output.lastElementChild;
  if (last) output.removeChild(last);
}

function changeColor(color) {
  const output = document.getElementById("outputArea");
  output.childNodes.forEach((el) => {
    if (el.style) el.style.backgroundColor = color;
  });
}

function addSquare() {
  const output = document.getElementById("outputArea");
  const square = document.createElement("div");
  square.classList.add("circle"); // reuse styling
  square.style.borderRadius = "0";
  output.appendChild(square);
}

function makeSquares() {
  const output = document.getElementById("outputArea");
  output.childNodes.forEach((el) => {
    if (el.style) el.style.borderRadius = "0";
  });
}

function makeCircles() {
  const output = document.getElementById("outputArea");
  output.childNodes.forEach((el) => {
    if (el.style) el.style.borderRadius = "50%";
  });
}
