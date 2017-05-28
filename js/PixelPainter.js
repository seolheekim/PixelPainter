var createColorBox = document.createElement("div");
createColorBox.id = "colorBoxContainer";
document.getElementById("pixelPainter").appendChild(createColorBox);

var eraseButton = document.createElement("button");
eraseButton.id = "erase";
eraseButton.innerHTML = "Erase";
document.getElementById("colorBoxContainer").appendChild(eraseButton);

var clearButton = document.createElement("button");
clearButton.id = "clear";
clearButton.innerHTML = "Clear";
document.getElementById("colorBoxContainer").appendChild(clearButton);

//create module for Clear and Erase button


// //Starting our module patters
function pixelPainterBox(rows, cols){

    function clickablePixel(event){ //make it turn black
      event.target.style.backgroundColor = "black";
    }

    var grid = document.createElement("table");
    grid.id = "canvas";
    document.getElementById("pixelPainter").appendChild(grid);

    for(var s = 0; s < rows; s++){
      var tr = document.createElement("tr");
      tr.className = "row";
      grid.appendChild(tr);

      for(var k = 0; k < cols; k++){
        var td = document.createElement("td");
        td.className = "column";
        td.addEventListener("click", clickablePixel);
        tr.appendChild(td);
      }
    }
  }
pixelPainterBox(15,15);

//Create Color Box and Color Bottons


var targetColorRow1 = document.createElement("div");
colorBoxContainer.appendChild(targetColorRow1);
targetColorRow1.id = "colorColumn1";

var colorRow1 = ["#028482", "#F57466", "#663399", "#4CBB17", "#F97834"];

function colorSelectorBox(rowColor, targetColorRow) {
  for(var i = 0; i < rowColor.length; i++){
    var createColorButton = document.createElement("button");
    createColorButton.className = "colorButton";
    createColorButton.style.backgroundColor = rowColor[i];
    targetColorRow.appendChild(createColorButton);

  }
}

colorSelectorBox(colorRow1, targetColorRow1);




