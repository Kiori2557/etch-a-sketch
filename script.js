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
    div = div.setAttribute("class", "row");
  }
}

createDiv(10);
const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  for (let i = 0; i < rows.length; i++) {
    let subDiv = document.createElement("div");
    row.appendChild(subDiv);
    subDiv - subDiv.setAttribute("class", "subDiv");
  }
});
