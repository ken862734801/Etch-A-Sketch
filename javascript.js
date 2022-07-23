//Function to title project. 

let title = document.getElementById("name");
title.addEventListener("click", nameProject);

function nameProject(){
    const defaultTitle = title.textContent;
    title.textContent = prompt("Name your project.")
    if(title.textContent === "") title.textContent = defaultTitle;
}

//Function to create grid.

const gridContainer = document.getElementById("grid-container");

function createGrid(size){
    gridContainer.style.setProperty("--grid-rows", size);
    gridContainer.style.setProperty("--grid-cols", size);
    for(i = 0; i < (size * size); i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    }
}
document.addEventListener("DOMContentLoaded", createGrid(16));

//Function to empty grid.

let slider = document.getElementById("range");

function clearGrid(){
    gridContainer.textContent = "";
}

//Function to create new grid.

function newGrid(){
    let newSize = slider.value;
    clearGrid();
    createGrid(newSize);
    let sizeDisplay = document.getElementById("size-display");
    sizeDisplay.textContent = `${newSize} x ${newSize}`;
}

slider.addEventListener("input", newGrid);

//Function to change color.

function colorChanger(color){
    
    switch(color){
        case red:
            document.getElementById("color-selector").value = "#ff0000";
            console.log("The color is red.");
            break;

        case blue:
            document.getElementById("color-selector").value = "#0000ff";
            console.log("The color is blue.");
            break;

        case yellow:
            document.getElementById("color-selector").value = "#ffff00";
            console.log("The color is yellow.");
            break;

        case orange:
            document.getElementById("color-selector").value = "#FFA500";
            console.log("The color is orange.");
            break; 

        case green:
            document.getElementById("color-selector").value = "#008000";
            console.log("The color is green.");
            break;

        case purple:
            document.getElementById("color-selector").value = "#800080";
            console.log("The color is purple.");
            break;

        case gray:
            document.getElementById("color-selector").value = "#808080";
            console.log("The color is gray.");
            break;

        case darkred:
            document.getElementById("color-selector").value = "#8b0000";
            console.log("The color is dark red.");
            break;

        case darkblue:
            document.getElementById("color-selector").value = "#00008b";
            console.log("The color is dark blue.");
            break;

        case darkyellow:
            document.getElementById("color-selector").value = "#caca14";
            console.log("The color is dark yellow.");
            break;

        case darkorange:
        document.getElementById("color-selector").value = "#d17504";
        console.log("The color is dark orange.");
        break;

        case darkgreen:
            document.getElementById("color-selector").value = "#006400";
            console.log("The color is dark green.");
            break;

        case darkpurple:
            document.getElementById("color-selector").value = "#570157";
            console.log("The color is dark purple.");
            break;

        case black:
            document.getElementById("color-selector").value = "#000000";
            console.log("The color is black.");
            break;

        default: 
            break;
    }
};

// Button variables.
const drawBtn = document.getElementById("draw");
const rainbowBtn = document.getElementById("rainbow");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");

//Coloring function.
function draw(){
    gridContainer.addEventListener("mousedown",function(e){
        down = true;
        let color = document.getElementById("color-selector").value;
        if(e.target.className === "grid-item"){
            e.target.style.backgroundColor = color;
        }
        e.preventDefault();
        console.log(down);
    });
    gridContainer.addEventListener("mouseup",function(e){
        down = false;
        console.log(down);
    });
    gridContainer.addEventListener("mouseover", function(e){
        let color = document.getElementById("color-selector").value;
        if (down && e.target.className === "grid-item") {
            e.target.style.backgroundColor = color;
          }
    });
       gridContainer.addEventListener("touchmove",function(e){
        e.preventDefault();
        let pointerLocation = e.changedTouches[0];
        let pointerTarget = document.elementFromPoint(
          pointerLocation.clientX,
          pointerLocation.clientY
        );
        let color = document.getElementById("color-selector").value;
        if (pointerTarget.className === "grid-item"){
            pointerTarget.style.backgroundColor = color;
        }
    });
}
drawBtn.addEventListener("click", draw);

//Erasing function.
function erase(){
    gridContainer.addEventListener("mousedown",function(e){
        down = true;
        if(e.target.className === "grid-item"){
            e.target.style.backgroundColor = "white";
        }
        e.preventDefault();
        console.log(down);
    });
    gridContainer.addEventListener("mouseup",function(e){
        down = false;
        console.log(down);
    });
    gridContainer.addEventListener("mouseover", function(e){
        if (down && e.target.className === "grid-item") {
            e.target.style.backgroundColor = "white";
          }
    });
     gridContainer.addEventListener("touchmove",function(e){
        e.preventDefault();
        let pointerLocation = e.changedTouches[0];
        let pointerTarget = document.elementFromPoint(
          pointerLocation.clientX,
          pointerLocation.clientY
        );
        if (pointerTarget.className === "grid-item"){
            pointerTarget.style.backgroundColor = "white";
        }
    });
}
eraserBtn.addEventListener("click", erase);

//Rainbow color function

function rainbow(){
    gridContainer.addEventListener("mousedown",function(e){
        let rainbowColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        down = true;
        if(e.target.className === "grid-item"){
            e.target.style.backgroundColor = rainbowColor;
        }
        e.preventDefault();
        console.log(down);
    });
    gridContainer.addEventListener("mouseup",function(e){
        down = false;
        console.log(down);
    });
    gridContainer.addEventListener("mouseover", function(e){
        let rainbowColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        if (down && e.target.className === "grid-item") {
            e.target.style.backgroundColor = rainbowColor;
          }
    });
     gridContainer.addEventListener("touchmove",function(e){
        e.preventDefault();
        let pointerLocation = e.changedTouches[0];
        let pointerTarget = document.elementFromPoint(
          pointerLocation.clientX,
          pointerLocation.clientY
        );
        let rainbowColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        if (pointerTarget.className === "grid-item"){
            pointerTarget.style.backgroundColor = rainbowColor;
        }
    });
}
rainbowBtn.addEventListener("click", rainbow);
