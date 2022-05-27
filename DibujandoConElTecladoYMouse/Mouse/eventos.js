var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", pulsarMouse);
cuadrito.addEventListener("mousemove", moverMouse);
cuadrito.addEventListener("mouseup", levantarMouse);

'Encuadre de mi dibujo'
dibujarLinea("black", 1, 1, 299, 1, papel);
dibujarLinea("black", 1, 1, 1, 300, papel);
dibujarLinea("black", 299, 1, 299, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);

function pulsarMouse(evento)
{
  estado = 1
  var x = evento.offsetX;
  var y = evento.offsetY;
}

function levantarMouse(evento)
{
estado = 0
}

function moverMouse(evento)
{
  if (estado == 1)
  {
    var x = evento.offsetX;
    var y = evento.offsetY;
    dibujarLinea("red", x-1, y-1, x, y, papel)
  }
  else
  {
    var x = evento.offsetX;
    var y = evento.offsetY;
  }
}

function dibujarLinea(color, x_i, y_i, x_f, y_f, lienzo)
{
  lienzo.beginPath();                           'arranca el dibujo'
  lienzo.lineWidth = 2;                         'grosor de la linea'
  lienzo.strokeStyle = color;                   'color de la linea'
  lienzo.moveTo(x_i,y_i);                       'punto inicial'
  lienzo.lineTo(x_f,y_f);                       'punto final'
  lienzo.stroke();                              'accion de dibujar'
  lienzo.closePath();                           'termina el dibujo'
}
