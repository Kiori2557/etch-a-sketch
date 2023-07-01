const container = document.querySelector(".container");
const low = document.querySelector("#low");
const normal = document.querySelector("#normal");
const high = document.querySelector("#high");
const cleanBtn = document.querySelector("#cleanBtn");
const blackInk = document.querySelector("#blackInk");
const fancyInk = document.querySelector("#fancyInk");

function createGrid(gridSquare) {
  for (let i = 0; i < gridSquare; i++) {
    container.appendChild(div);
  }
}
function createSubDiv() {
  window.rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let i = 0; i < rows.length; i++) {
      const subDiv = document.createElement("div");
      row.appendChild(subDiv);
      subDiv.setAttribute("class", "subDiv");
      subDiv.addEventListener("mouseenter", () => {
        subDiv.style.backgroundColor = `black`;
      });
      blackInk.addEventListener("click", () => {
        subDiv.addEventListener("mouseenter", () => {
          subDiv.style.backgroundColor = `black`;
        });
      });
      fancyInk.addEventListener("click", () => {
        subDiv.addEventListener("mouseenter", () => {
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

function clean() {
  const subDivs = document.querySelectorAll(".subDiv");
  subDivs.forEach((subDiv) => (subDiv.style.backgroundColor = "white"));
}
function createRow(divNumber) {
  for (let i = 0; i < divNumber; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.setAttribute("class", "row");
  }
}

function resetDivNumber() {
  createSubDiv();
  rows.forEach((row) => row.remove());
}
let divNumber = 0;
low.addEventListener("click", () => {
  resetDivNumber();
  createRow(6);
  createSubDiv();
});
normal.addEventListener("click", () => {
  resetDivNumber();
  createRow(32);
  createSubDiv();
});
high.addEventListener("click", () => {
  resetDivNumber();
  createRow(64);
  createSubDiv();
});

cleanBtn.addEventListener("click", clean);
