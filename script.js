const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function updateColor(newColor){
    color = newColor;
}

function updateSize(newSize){
    size = newSize;
}



//TODO:

const slider = document.getElementById("gridSize");
console.log(slider.value);

const gridContainer = document.querySelector(".grid-container"); //select grid container

let cells = document.querySelectorAll(".cell");

function createGrid(size = DEFAULT_SIZE){

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`; //make grid container grid with SIZE rows
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //make grid container grid with SIZE columns
    
    for(let i = 0; i < size * size; i++){
        const gridCell = document.createElement("div");
        gridCell.classList.add('cell');
        gridCell.setAttribute('draggable', 'false');
        gridCell.addEventListener('mouseover', changeColor)
        gridCell.addEventListener('mousedown', changeColor)
        gridContainer.appendChild(gridCell);
    }
}



//Creates the default 16x16 grid
createGrid();

//grabs the divs created
cells = document.querySelectorAll(".cell"); //grabs the inital default 16x16 cells to be able to erase them 

//


function changeColor(e) {
    if(e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = color;
}


function changeSize(e) {
    gridContainer.innerHTML = '';
    createGrid(slider.value);
    cells = document.querySelectorAll(".cell"); //grabs all new cells, allows to clear drawing board at every size
}


//COLORPICKER
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
