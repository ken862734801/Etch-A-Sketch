

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
}


let project_name = document.getElementById("name");

project_name.addEventListener("click", nameProject);

function nameProject(){
    const default_name = project_name.textContent;
    project_name.textContent = prompt("Name your project.")
    if(project_name.textContent === "") project_name.textContent = default_name;
}







const gridContainer = document.getElementById("grid-container");

function createGrid(rows, cols){
    gridContainer.style.setProperty("--grid-rows", rows);
    gridContainer.style.setProperty("--grid-cols",cols);
    for(i = 0; i < (rows * cols); i++){
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    }
}
createGrid(16,16);



function newGrid(){
    let val = document.getElementById("range").value;
    let output = document.getElementById("size-display");
    output.textContent = `${val} x ${val}`;
}

