const container = document.querySelector(".container");
const cleanBtn = document.querySelector("#cleanBtn");
const fancyInk = document.querySelector("#fancyInk");
const easerBtn = document.querySelector("#easer");
const gridValue = document.querySelector("#gridValue");
const gridLine = document.querySelector("#gridLine");
const gridLabel = document.querySelector("#gridLabel");
const inputColor = document.querySelector("#inputColor");
gridLabel.textContent = `Grid: ${document.querySelector("#gridValue").value}x${
  document.querySelector("#gridValue").value
} `;
const DEFAULT_COLOR = "black";
let currentColor = DEFAULT_COLOR;

function setCurrentColor() {
  fancyInk.addEventListener("click", () => {
    currentColor = "fancy";
  });
  inputColor.addEventListener("input", () => {
    currentColor = inputColor.value;
  });
  easerBtn.addEventListener("click", () => {
    currentColor = "white";
  });
}

setCurrentColor();
function colorChange(e) {
  if (currentColor === "fancy") {
    e.target.style.backgroundColor = `rgb(${randomNumber(256)},${randomNumber(
      256
    )},${randomNumber(256)})`;
  }
  e.target.style.backgroundColor = currentColor;
}

//function to display the value of the input range dynamically on the UI
function updateValue() {
  const gridNumber = document.querySelector("#gridValue").value;
  gridLabel.textContent = `Grid: ${gridNumber}x${gridNumber} `;
}
gridValue.addEventListener("mousemove", updateValue);

//create div in the row div
function createSubDiv() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i < rows.length; i++) {
      const subDiv = document.createElement("div");
      row.appendChild(subDiv);
      subDiv.setAttribute("class", "subDiv");
      subDiv.addEventListener("mouseover", colorChange);
    }
  });
}

function randomNumber(i) {
  return Math.floor(Math.random() * i);
}
document.addEventListener("DOMContentLoaded", createGrid);

//Create the row div which subDiv will reside in
function createRow(divNumber) {
  for (let i = 0; i < divNumber; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("class", "row");
  }
}

//remove all the div
function resetDivNumber() {
  createSubDiv();
  container.innerHTML = "";
}

function createGrid() {
  const gridNumber = document.querySelector("#gridValue").value;
  resetDivNumber();
  createRow(gridNumber);
  createSubDiv();
}
gridValue.addEventListener("input", createGrid);

cleanBtn.addEventListener("click", createGrid);

gridLine.addEventListener("click", () => {
  const subDivs = document.querySelectorAll(".subDiv");
  subDivs.forEach(
    (subDiv) => (subDiv.style.border = "0.2px rgb(93, 99, 96) solid")
  );
});
