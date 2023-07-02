const container = document.querySelector(".container");
const create = document.querySelector("#create");
const cleanBtn = document.querySelector("#cleanBtn");
const blackInk = document.querySelector("#blackInk");
const fancyInk = document.querySelector("#fancyInk");
const easerBtn = document.querySelector("#easer");
const gridValue = document.querySelector("#gridValue");
const gridLabel = document.querySelector("#gridLabel");
gridLabel.textContent = `grid: ${document.querySelector("#gridValue").value} `;

gridValue.addEventListener("mousemove", updateValue);

//function to display the dynamically on the UI
function updateValue() {
  const gridNumber = document.querySelector("#gridValue").value;
  gridLabel.textContent = `grid: ${gridNumber} `;
}

//create div in the row
function createSubDiv() {
  window.rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i < rows.length; i++) {
      const subDiv = document.createElement("div");
      row.appendChild(subDiv);
      subDiv.setAttribute("class", "subDiv");
      subDiv.addEventListener("mouseover", () => {
        subDiv.style.backgroundColor = `black`;
      });
      blackInk.addEventListener("click", () => {
        subDiv.addEventListener("mouseover", () => {
          subDiv.style.backgroundColor = `black`;
        });
      });
      fancyInk.addEventListener("click", () => {
        subDiv.addEventListener("mouseover", () => {
          subDiv.style.backgroundColor = `rgb(${randomNumber(
            255
          )},${randomNumber(255)},${randomNumber(255)})`;
        });
      });
    }
  });
}

function randomNumber(i) {
  return Math.floor(Math.random() * i);
}

//change the background color of all the div to white
function clean() {
  const subDivs = document.querySelectorAll(".subDiv");
  subDivs.forEach((subDiv) => (subDiv.style.backgroundColor = "white"));
}

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
  rows.forEach((row) => row.remove());
}

//change the div's background color to white whenever the mouse hover
function easer() {
  const subDivs = document.querySelectorAll(".subDiv");
  subDivs.forEach((subDiv) =>
    subDiv.addEventListener(
      "mouseover",
      () => (subDiv.style.backgroundColor = "white")
    )
  );
}

function createGrid() {
  const gridNumber = document.querySelector("#gridValue").value;
  resetDivNumber();
  createRow(gridNumber);
  createSubDiv();
}

document.addEventListener("DOMContentLoaded", createGrid);
create.addEventListener("click", createGrid);

cleanBtn.addEventListener("click", clean);
easerBtn.addEventListener("click", easer);
