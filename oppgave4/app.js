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
