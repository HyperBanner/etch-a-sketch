function main(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      document.querySelector(".container").appendChild(pixel);

      pixel.addEventListener("mouseenter", () => {
        pixel.setAttribute("style", "background-color: black");
      });
    }
  }
}

main(16);
