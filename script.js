let red = document.getElementById("red");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let purple = document.getElementById("purple");
let pink = document.getElementById("pink");



const gridContainer = document.getElementById("grid-container");

function makeRows(rows, cols){
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols",cols);
    for(i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item"
    }
}
makeRows(16,16);