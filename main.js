const button = document.querySelector("button");
const container = document.querySelector(".container");

function generateGrid(n) {
  n = +prompt("Grid Size:");

  for (let rows = 0; rows < n; rows++) {
    let row = document.createElement("div");
    row.className = "row";
    row.id = "row" + rows;

    for (let cells = 0; cells < n; cells++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.id = "cell" + rows + cells;
      hover(cell);
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function hover(cell) {
  cell.addEventListener("mouseover", function () {
    cell.style.backgroundColor = "black";
  });
}

button.addEventListener("click", generateGrid);
