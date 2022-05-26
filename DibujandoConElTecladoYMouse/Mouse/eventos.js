var cuadrito = document.getElementById("canvas");
var papel = cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", dibujarMouse);

'Encuadre de mi dibujo'
dibujarLinea("black", 1, 1, 299, 1, papel);
dibujarLinea("black", 1, 1, 1, 300, papel);
dibujarLinea("black", 299, 1, 299, 299, papel);
dibujarLinea("black", 1, 299, 299, 299, papel);

function dibujarMouse(evento)
{
console.log("funciona")
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
