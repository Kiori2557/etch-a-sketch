// const div = document.createElement("div");
const container = document.querySelector(".container");

function createGrid(gridSquare) {
  for (let i = 0; i < gridSquare; i++) {
    container.appendChild(div);
  }
}
function createDiv(divNumber) {
  for (let i = 0; i < divNumber; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.style.border = "1px black solid";
  }
}
createDiv(3);
