const container = document.querySelector(".container");
const low = document.querySelector("#low");
const normal = document.querySelector("#normal");
const high = document.querySelector("#high");

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
function createSubDiv() {
  window.rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i < rows.length; i++) {
      let subDiv = document.createElement("div");
      row.appendChild(subDiv);
      subDiv - subDiv.setAttribute("class", "subDiv");
      subDiv.addEventListener("mouseenter", () => {
        subDiv.style.backgroundColor = "black";
      });
    }
  });
}
function resetDivNumber() {
  createDiv(0);
  createSubDiv();
  rows.forEach((row) => row.remove());
}
let divNumber = 0;
low.addEventListener("click", () => {
  resetDivNumber();
  createDiv(6);
  createSubDiv();
});
normal.addEventListener("click", () => {
  resetDivNumber();
  createDiv(32);
  createSubDiv();
});
high.addEventListener("click", () => {
  resetDivNumber();
  createDiv(64);
  createSubDiv();
});
