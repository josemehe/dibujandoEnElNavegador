'Canvas'
var square = document.getElementById("idCanvas");
var paper = square.getContext("2d");
var status
'Color'
var getColor = document.getElementById("idColor");
'Eraser'
var getEraser = document.getElementById("idEraser");
'getEraser.addEventListener("click", eraser);'
function eraser(evento)
{
eraser = 1
}

'Events'
square.addEventListener("mousemove", mouseDraw);
square.addEventListener("mousedown", mouseDrawPoint);
'line thickness'
var lThickness = document.getElementById("idLineThickness");
'framing of my drawing'
dibujarLinea("black", 1, 1, 299, 1, paper, 3);
dibujarLinea("black", 1, 1, 1, 300, paper, 3);
dibujarLinea("black", 299, 1, 299, 299, paper, 3);
dibujarLinea("black", 1, 299, 299, 299, paper, 3);
'Draw a single point'
function mouseDrawPoint(evento)
{
  x = evento.offsetX;
  y = evento.offsetY;
  thickness = lThickness.value
  drawingColor = getColor.value
  'circle point approximation'
    'vertical and horizontal lines'
        dibujarLinea(drawingColor, x, y-0.5, x, y+0.5, paper, thickness)
        dibujarLinea(drawingColor, x-0.5, y, x+0.5, y, paper, thickness)
    'diagonal lines'
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y+0.1*i, x+0.5, y-0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y+0.5, x+0.1*i, y-0.5, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y-0.1*i, x+0.5, y+0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y-0.5, x+0.1*i, y+0.5, paper, thickness)
      }
}

'Draw lines'
function mouseDraw(evento)
{
  var estado = evento.buttons
  if (estado == 1)
  {
    x = evento.offsetX;
    y = evento.offsetY;
    thickness = lThickness.value
    if (eraser == 1)
    {
      drawingColor = "#FFFFFF"
      'circle point approximation'
      'vertical and horizontal lines'
      dibujarLinea(drawingColor, x, y-0.5, x, y+0.5, paper, thickness)
      dibujarLinea(drawingColor, x-0.5, y, x+0.5, y, paper, thickness)
      'diagonal lines'
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y+0.1*i, x+0.5, y-0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y+0.5, x+0.1*i, y-0.5, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y-0.1*i, x+0.5, y+0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y-0.5, x+0.1*i, y+0.5, paper, thickness)
      }
    }
    else
    {
      drawingColor = getColor.value
      eraser = 0
      'circle point approximation'
      'vertical and horizontal lines'
      dibujarLinea(drawingColor, x, y-0.5, x, y+0.5, paper, thickness)
      dibujarLinea(drawingColor, x-0.5, y, x+0.5, y, paper, thickness)
      'diagonal lines'
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y+0.1*i, x+0.5, y-0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y+0.5, x+0.1*i, y-0.5, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.5, y-0.1*i, x+0.5, y+0.1*i, paper, thickness)
      }
      for (var i = 1; i < 5; i++)
      {
        dibujarLinea(drawingColor, x-0.1*i, y-0.5, x+0.1*i, y+0.5, paper, thickness)
      }
    }
  }
  else
  {
    var x = evento.offsetX;
    var y = evento.offsetY;
  }
}

'Draw action'
function dibujarLinea(color, x_i, y_i, x_f, y_f, canvas, lineThickness)
{
  canvas.beginPath();                           'star drawing'
  canvas.lineWidth = lineThickness;             'line thickness'
  canvas.strokeStyle = color;                   'line color'
  canvas.moveTo(x_i,y_i);                       'starting point'
  canvas.lineTo(x_f,y_f);                       'final point'
  canvas.stroke();                              'action of draw'
  canvas.closePath();                           'finish the drawing'
}
