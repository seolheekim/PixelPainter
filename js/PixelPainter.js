// //Starting our module patters
function pixelPainterBox(rows, cols){

    var grid = document.createElement("table");
    grid.id = "canvas";
    var pathToGrid = document.getElementsByClassName("container")

    document.getElementById("pixelPainter").appendChild(grid);

    for(var s = 0; s < rows; s++){
    var tr = document.createElement("tr");
    tr.className = "row";
    var pathToTr = document.getElementsByClassName("container")[s];
    grid.appendChild(tr);

      for(var k = 0; k < cols; k++){
      var td = document.createElement("td");
      td.className = "column";
      var pathToCells = document.getElementsByClassName("container")[k];
      tr.appendChild(td);
      }
    }
  }
pixelPainterBox(15,15);
