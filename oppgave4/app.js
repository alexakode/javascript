// Funksjon som håndterer brukerens kommando
function handleCommand() {
  // Henter input og output-elementer fra DOM
  const input = document.getElementById("commandInput").value.trim().toLowerCase();
  const output = document.getElementById("outputArea");

  // Bruker betingelser for å tolke kommandoer
  if (input === "add circle") {
    // Oppretter et nytt HTML-element og legger til en klasse
    const circle = document.createElement("div");
    circle.classList.add("circle");
    output.appendChild(circle);
  } else if (input === "remove last") {
    // Fjerner siste element i output-området
    const last = output.lastElementChild;
    if (last) output.removeChild(last);
  } else if (input.startsWith("change color")) {
    // Endrer farge på alle elementer basert på input
    const color = input.split(" ")[2]; // Eksempel på bruk av variabler og arrays
    output.childNodes.forEach(el => {
      if (el.style) el.style.backgroundColor = color;
    });
  } else {
    // Feilhåndtering ved ukjent kommando
    alert("Ukjent kommando");
  }

  // Tømmer input-feltet etter kommando
  document.getElementById("commandInput").value = "";
}
