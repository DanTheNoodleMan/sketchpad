const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;

let drag = false;


function updateColor(newColor){
    color = newColor;
}

//TODO:
//      slider to change grid size (1-64) and call createGrid
//      color picker (look up how to implement one) --> need option to change color

const gridContainer = document.querySelector(".grid-container"); //select grid container

function createGrid(size = DEFAULT_SIZE){
    

    
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`; //make grid container grid with SIZE rows
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //make grid container grid with SIZE columns
    
    for(let i = 0; i < size * size; i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add('cell');
        gridContainer.appendChild(gridCell);
    }
}

let cells = document.querySelectorAll(".cell");

//Creates the default 16x16 grid
createGrid();

//grabs the divs created
cells = document.querySelectorAll(".cell");

//
cells.forEach( cell => cell.addEventListener('mouseover', function(e){
    cell.style.backgroundColor = color;
    console.log(this);
})
)

let colorPick = document.getElementById("colorPick");
colorPick.addEventListener("input", function(){
  updateColor(colorPick.value);
}, false);


//ERASE ENTIRE GRID AND MAKE IT ALL WHITE
const resetGrid = document.querySelector('.reset');
resetGrid.addEventListener('click', () => {
    cells.forEach( cell => {
        cell.style.backgroundColor = "white";
    })
})
