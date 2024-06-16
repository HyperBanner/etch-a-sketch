const button = document.querySelector("button");
const container = document.querySelector(".container");

function generateGrid(n) {
  if (container.children.length !== 0) {
    container.innerHTML = "";
  }
  n = Math.floor(
    +prompt("Type in grid size: (Only works with positive integers, max 100)")
  );
  if (n > 100) {
    alert("Max size exceeded.");
  } else {
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
}

function hover(cell) {
  cell.addEventListener("mouseover", function () {
    cell.style.backgroundColor = "black";
  });
}

button.addEventListener("click", generateGrid);
