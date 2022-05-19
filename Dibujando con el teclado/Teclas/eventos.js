var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};
console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
var x = 150, y = 150;

'punto en el que se empieza a dibujar'
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);
'Encuadre de mi dibujo'
dibujarLinea("black", 1, 1, 299, 1, papel);        'le puse 1 en lugar de 0, y 299 en lugar de 300 para evitar el'
dibujarLinea("black", 1, 1, 1, 300, papel);        'efecto de "dientes de sierra" o aliasing'
dibujarLinea("black", 299, 1, 299, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);

function dibujarTeclado(evento)
{
  var colorPintura = "blue";
  var movimiento = 1;
  switch (evento.keyCode)
  {
    case teclas.UP:
    dibujarLinea(colorPintura, x, y, x , y - movimiento, papel)
    y = y - movimiento
    break;

    case teclas.DOWN:
    dibujarLinea(colorPintura, x, y, x , y + movimiento, papel)
    y = y + movimiento
    break;

    case teclas.LEFT:
    dibujarLinea(colorPintura, x, y, x - movimiento, y, papel)
    x = x - movimiento
    break;

    case teclas.RIGHT:
    dibujarLinea(colorPintura, x, y, x + movimiento, y, papel)
    x = x + movimiento
    break;

    default:
    console.log("otra tecla");
    break;
  }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
  lienzo.beginPath();                           'arranca el dibujo'
  lienzo.lineWidth = 2;                         'grosor de la linea'
  lienzo.strokeStyle = color;                   'color de la linea'
  lienzo.moveTo(x_inicial,y_inicial);           'punto inicial'
  lienzo.lineTo(x_final,y_final);               'punto final'
  lienzo.stroke();                              'accion de dibujar'
  lienzo.closePath();                           'termina el dibujo'
}
