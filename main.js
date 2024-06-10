function createGrid(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      document.querySelector(".container").appendChild(pixel);
    }
  }
}

createGrid(16);
