


function createGrid(size) {
  const container = document.querySelector(".container");
  for(let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";
        e.target.style.transitionDuration = ".1s";
        })
    
    container.appendChild(square);
    }
    container.setAttribute("style", `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr)`);
}


const clear = document.querySelector("#clear-grid");
clear.addEventListener("click", clearGrid)
function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(elem => elem.style.backgroundColor = "rgb(168, 194, 168)")

}


createGrid(100);