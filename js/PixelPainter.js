// //Starting our grid module patters
function pixelPainterBox(rows, cols){

    var ppCanvas = document.createElement("div");
    ppCanvas.id = "pp-canvas";
    document.getElementById("pixelPainter").appendChild(ppCanvas);


    var newDiv = document.createElement("div");
    newDiv.id = "canvasContainer";
    document.getElementById("pp-canvas").appendChild(newDiv)

    var colors = document.createElement("div");
    colors.id = "colors";
    document.getElementById("pp-canvas").appendChild(colors);

    var colorBox = document.createElement("div");
    colorBox.id = "colorContainer";
    document.getElementById("pp-canvas").appendChild(colorBox);

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

    var saveButton = document.createElement("button");
    saveButton.className = "btn btn-2 btn-2k";
    saveButton.innerHTML = "Save";
    saveButton.addEventListener("click", savePixel);
    document.getElementById("buttonContainer").appendChild(saveButton);
    var loadButton = document.createElement("button");
    loadButton.className = "btn btn-2 btn-2l";
    loadButton.innerHTML = "Load";
    loadButton.addEventListener("click", loadPixel);
    document.getElementById("buttonContainer").appendChild(loadButton);

    var controllerImage = document.createElement("div");
    controllerImage.id = "controller";
    document.getElementById("pp-canvas").appendChild(controllerImage);

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
pixelPainterBox(30,54);
//end grid module patters

var randomColor = null;

function chooseButton() {
  randomColor = this.style.backgroundColor;
}

//Create Color Box abuttonContainer
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

var colorRow1 = ["#520101", "#A60000", "#FF0000"];
var colorRow2 = ["#D53C00", "#ED5F07", "#FFAF00"];
var colorRow3 = ["#F5DC05", "#BAA378", "#835229", "#613916"];
var colorRow4 = ["#2F6541", "#50763D", "#94BB82", "#75B230"];
var colorRow5 = ["#00059F", "#4E91FD", "#262F56"];
var colorRow6 = ["#660066", "#522F50", "#AC4E8C"];
var colorRow7 = ["#F20B97", "#F24680", "#F05F6E", "#FFC3CE"];
var colorRow8 = ["#212121", "#3A3A38", "#9E9B96"];

function colorSelectorBox(rowColor, targetColorRow) {
  for(var i = 0; i < rowColor.length; i++){
    var createColorButton = document.createElement("div");
    createColorButton.className = "colorButton shake-slow";
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

var savedColors = [];

function savePixel(){
  var saveCell = document.querySelectorAll(".cell");
  for(var m = 0; m < saveCell.length; m++){
  console.log(saveCell[m].style.backgroundColor);
  var currentCellColor = saveCell[m].style.backgroundColor;
  savedColors.push(currentCellColor);
  // saveCell[m].style.backgroundColor = "white";
  }
}

function loadPixel(){
  var loadCell = document.querySelectorAll(".cell");
  for(var f = 0; f < loadCell.length; f++){
    console.log(loadCell[f]);
    loadCell[f].style.backgroundColor = savedColors[f];
  }
}

