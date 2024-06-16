const button = document.querySelector("button");
const container = document.querySelector(".container");

function generateGrid(n) {
  n = +prompt("Grid Size:");

  for (let rows = 0; rows < n; rows++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let cells = 0; cells < n; cells++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

button.addEventListener("click", generateGrid);
