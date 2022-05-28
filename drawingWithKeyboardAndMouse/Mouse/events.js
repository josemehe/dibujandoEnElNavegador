'Canvas'
var square = document.getElementById("canvas");
var paper = square.getContext("2d");
var status

'Color'
var getColor = document.getElementById("idColor");
'Events'
square.addEventListener("mousemove", mouseDraw);
square.addEventListener("mousedown", mouseDrawPoint);

'framing of my drawing'
dibujarLinea("black", 1, 1, 299, 1, paper);
dibujarLinea("black", 1, 1, 1, 300, paper);
dibujarLinea("black", 299, 1, 299, 299, paper);
dibujarLinea("black", 1, 299, 299, 299, paper);

'Draw a single point'
function mouseDrawPoint(evento)
{
  x = evento.offsetX;
  y = evento.offsetY;
  drawingColor = getColor.value
  dibujarLinea(drawingColor, x-0.5, y-0.5, x+0.5, y+0.5, paper)
}

'Draw lines'
function mouseDraw(evento)
{
  var estado = evento.buttons
  if (estado == 1)
  {
    x = evento.offsetX;
    y = evento.offsetY;
    drawingColor = getColor.value
    dibujarLinea(drawingColor, x-0.5, y-0.5, x+0.5, y+0.5, paper)
  }
  else
  {
    var x = evento.offsetX;
    var y = evento.offsetY;
  }
}

'Draw action'
function dibujarLinea(color, x_i, y_i, x_f, y_f, canvas)
{
  canvas.beginPath();                           'star drawing'
  canvas.lineWidth = 2;                         'line thickness'
  canvas.strokeStyle = color;                   'line color'
  canvas.moveTo(x_i,y_i);                       'starting point'
  canvas.lineTo(x_f,y_f);                       'final point'
  canvas.stroke();                              'action of draw'
  canvas.closePath();                           'finish the drawing'
}
