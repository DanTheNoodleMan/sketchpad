const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "black";

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let rgbMode = false;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function updateColor(newColor){
    color = newColor;
}

function updateSize(newSize){
    size = newSize;
}



const rgb = document.querySelector('.rgbMode');
rgb.addEventListener('click', ()=>{
    rgbMode = !rgbMode;
    if(rgbMode === false){
        color = colorPick.value
    }
    console.log(rgbMode);
})

function randomColor(){
    
    let x=Math.round(0xffffff * Math.random()).toString(16);
    let y=(6-x.length);
    let z="000000";
    let z1 = z.substring(0,y);
    let color= "#" + z1 + x;
    updateColor(color); 
}

//TODO:

const slider = document.getElementById("gridSize");
const sliderValue = document.querySelector('.sliderValue');


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
    if(rgbMode === false){
        e.target.style.backgroundColor = color;
    } else if(rgbMode === true){
        randomColor();
        e.target.style.backgroundColor = color;
    }
}


function changeSize(e) {
    gridContainer.innerHTML = '';
    createGrid(slider.value);
    cells = document.querySelectorAll(".cell"); //grabs all new cells, allows to clear drawing board at every size
}


//ERASE ENTIRE GRID AND MAKE IT ALL WHITE
const resetGrid = document.querySelector('.reset');
resetGrid.addEventListener('click', () => {
    cells.forEach( cell => {
        cell.style.backgroundColor = "white";
    })
})

//COLORPICKER
let colorPick = document.getElementById("colorPick");
colorPick.addEventListener("input", function(){
    rgbMode = false;
    updateColor(colorPick.value);
}, false);

const erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    rgbMode =  false;
    updateColor("#ffffff");
});


const gridLineToggle = document.querySelector('.gridLines');
gridLineToggle.addEventListener('click', () => {
    cells.forEach( cell => {
        cell.classList.toggle("cell-border");
    })
})