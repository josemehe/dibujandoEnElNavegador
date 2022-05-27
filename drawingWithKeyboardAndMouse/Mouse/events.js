var square = document.getElementById("canvas");
var paper = square.getContext("2d");
var status

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
  dibujarLinea("red", x-0.5, y-0.5, x+0.5, y+0.5, paper)
}

'Draw lines'
function mouseDraw(evento)
{
  var estado = evento.buttons
  if (estado == 1)
  {
    x = evento.offsetX;
    y = evento.offsetY;
    dibujarLinea("red", x-0.5, y-0.5, x+0.5, y+0.5, paper)
  }
  else
  {
    var x = evento.offsetX;
    var y = evento.offsetY;
  }
}

'Draw action'
function dibujarLinea(color, x_i, y_i, x_f, y_f, lienzo)
{
  lienzo.beginPath();                           'star drawing'
  lienzo.lineWidth = 2;                         'line thickness'
  lienzo.strokeStyle = color;                   'line color'
  lienzo.moveTo(x_i,y_i);                       'starting point'
  lienzo.lineTo(x_f,y_f);                       'final point'
  lienzo.stroke();                              'action of draw'
  lienzo.closePath();                           'finish the drawing'
}
