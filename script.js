"use strict";

const box = document.querySelector(".container");

function createGrid(n) {
  doRows(n);
  doCells(n);
}

function doRows(n) {
  for (let i = 0; i < n; i++) {
    const row = document.createElement("div");
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
      rows[j].appendChild(cell);
    }
  }
}

createGrid(16);
