var colorBox = document.createElement("div");
colorBox.id = "colorContainer";
document.getElementById("pixelPainter").appendChild(colorBox);

var createColorBox = document.createElement("div");
createColorBox.id = "buttonContainer";
document.getElementById("colorContainer").appendChild(createColorBox);

var eraseButton = document.createElement("button");
eraseButton.className = "btn btn-2 btn-2i";
eraseButton.innerHTML = "Erase";
eraseButton.addEventListener("click", erasePixel);
document.getElementById("buttonContainer").appendChild(eraseButton);

var clearButton = document.createElement("button");
clearButton.className = "btn btn-2 btn-2j";
clearButton.innerHTML = "Clear";
clearButton.addEventListener("click", clearPixel);
document.getElementById("buttonContainer").appendChild(clearButton);

// //Starting our grid module patters
function pixelPainterBox(rows, cols){

    var newDiv = document.createElement("div");
    newDiv.id = "canvasContainer";
    document.getElementById("pixelPainter").appendChild(newDiv)

    var grid = document.createElement("table");
    grid.id = "canvas";
    document.getElementById("canvasContainer").appendChild(grid);

    for(var s = 0; s < rows; s++){
      var tr = document.createElement("tr");
      tr.className = "row";
      grid.appendChild(tr);

      for(var k = 0; k < cols; k++){
        var td = document.createElement("td");
        td.className = "cell";
        td.addEventListener("click", clickablePixel);
        tr.appendChild(td);
      }
    }
  }
pixelPainterBox(35,35);
//end grid module patters


var randomColor = null;

function chooseButton() {
  randomColor = this.style.backgroundColor;
}

//Create Color Box abuttonContainer
var colors = document.createElement("div");
colors.id = "colors";
document.getElementById("colorContainer").appendChild(colors);

var targetColorRow1 = document.createElement("div");
colors.appendChild(targetColorRow1);
targetColorRow1.id = "colorColumn1";

var targetColorRow2 = document.createElement("div");
colors.appendChild(targetColorRow2);
targetColorRow2.id = "colorColumn2";

var targetColorRow3 = document.createElement("div");
colors.appendChild(targetColorRow3);
targetColorRow3.id = "colorColumn3";

var targetColorRow4 = document.createElement("div");
colors.appendChild(targetColorRow4);
targetColorRow4.id = "colorColumn4";

var targetColorRow5 = document.createElement("div");
colors.appendChild(targetColorRow5);
targetColorRow5.id = "colorColumn5";

var targetColorRow6 = document.createElement("div");
colors.appendChild(targetColorRow6);
targetColorRow6.id = "colorColumn6";

var targetColorRow7 = document.createElement("div");
colors.appendChild(targetColorRow7);
targetColorRow7.id = "colorColumn7";

var targetColorRow8 = document.createElement("div");
colors.appendChild(targetColorRow8);
targetColorRow8.id = "colorColumn8";



var colorRow1 = ["#520101", "#840000", "#A60000", "#DC0000", "#FF0000"];
var colorRow2 = ["#D53C00", "#DB4900", "#ED5F07", "#E68700", "#FFAF00"];
var colorRow3 = ["#A98600", "#DAB600", "#E9D700", "#F8ED62", "#FFF9AE"];
var colorRow4 = ["#2F6541", "#50763D", "#5D8748", "#7CA569", "#94BB82"];
var colorRow5 = ["#00059F", "#0229BF", "#2C2CFF", "#4E91FD", "#BAC2FF"];
var colorRow6 = ["#660066", "#800080", "#BE29EC", "#D896FF", "#EFBBFF"];
var colorRow7 = ["#F20B97", "#F453AD", "#EE73C4", "#F29EC8", "#F9BBE6"];
var colorRow8 = ["#212121", "#3E3E3E", "#5C5C5C", "#787878", "#959595"];

function colorSelectorBox(rowColor, targetColorRow) {
  for(var i = 0; i < rowColor.length; i++){
    var createColorButton = document.createElement("div");
    createColorButton.className = "colorButton";
    createColorButton.style.backgroundColor = rowColor[i];
    createColorButton.addEventListener("click", chooseButton);
    targetColorRow.appendChild(createColorButton);

  }
}

colorSelectorBox(colorRow1, targetColorRow1);
colorSelectorBox(colorRow2, targetColorRow2);
colorSelectorBox(colorRow3, targetColorRow3);
colorSelectorBox(colorRow4, targetColorRow4);
colorSelectorBox(colorRow5, targetColorRow5);
colorSelectorBox(colorRow6, targetColorRow6);
colorSelectorBox(colorRow7, targetColorRow7);
colorSelectorBox(colorRow8, targetColorRow8);


//create module for Clear and Erase button
function clickablePixel(){ //make it turn black
  event.target.style.backgroundColor = randomColor;
}

function clearPixel(){ //make it turn black
  var clearCell = document.querySelectorAll(".cell")
  for(var i = 0; i < clearCell.length; i++){
    clearCell[i].style.backgroundColor = "white";
  }
}

function erasePixel(){
  randomColor = "white";
}

