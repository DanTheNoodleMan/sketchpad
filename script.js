const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

//TODO: function to createGrid
//      slider to change grid size (1-64) and call createGrid
//      color picker (look up how to implement one) --> need option to change color

function createGrid(size = DEFAULT_SIZE){
    const gridCell = document.createElement("div");
    gridCell

    const gridContainer = document.querySelector(".grid-container"); //select grid container
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`; //make grid container grid with SIZE rows
    gridContainer.style.gridColumnRows = `repeat(${size}, 1fr)`; //make grid container grid with SIZE columns
    for(let i = 0; i < size * size; i++){
        gridContainer.append()
    }
}