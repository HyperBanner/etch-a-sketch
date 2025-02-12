"use strict";

const box = document.querySelector(".container");
const setGridBtn = document.querySelector(".set-grid");
let newGridSize = 0;

function createGrid(n) {
  doRows(n);
  doCells(n);
}

function doRows(n) {
  for (let i = 0; i < n; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    box.appendChild(row);
  }
}

function doCells(n) {
  let rows = document.querySelectorAll(".row");
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < n; j++) {
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "black";
      });
      rows[j].appendChild(cell);
    }
  }
}

function clearGrid() {
  while (box.childElementCount > 0) {
    box.firstChild.remove();
  }
}

function getInput() {
  newGridSize = prompt(
    "Please enter number for the new grid size (min: 16; max: 100):",
  );
  if (newGridSize === null) {
    alert("Please input something.");
    getInput();
  } else if (newGridSize === "") {
    alert("Please input something.");
    getInput();
  } else if (isNaN(newGridSize)) {
    alert("Input must be an integer.");
    getInput();
  } else if (newGridSize % 1 !== 0) {
    alert("Input must be an integer.");
    getInput();
  } else if (newGridSize > 100) {
    alert("Input must not be larger than 100.");
    getInput();
  } else if (newGridSize < 16) {
    alert("Input must not be smaller than 16.");
    getInput();
  }
  return newGridSize;
}

setGridBtn.addEventListener("click", () => {
  clearGrid();
  let n = getInput();
  createGrid(n);
});

createGrid(16);
