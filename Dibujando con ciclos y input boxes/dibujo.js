var d = document.getElementById("dibujito");   'metodo(funcion) del documento que trae un elemento mediante su ID'
var ancho = d.width
var lienzo = d.getContext("2d");              'metodo del canvas que da la dimension del dibujo ya sea 2d o 3d'

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

function DibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
  lienzo.beginPath();                           'arranca el dibujo'
  lienzo.strokeStyle = color;                   'color de la linea'
  lienzo.moveTo(x_inicial,y_inicial);           'punto inicial'
  lienzo.lineTo(x_final,y_final);               'punto final'
  lienzo.stroke();                              'accion de dibujar'
  lienzo.closePath();                           'termina el dibujo'
}

function dibujoPorClick()
{
  'dibujo con ciclo while'
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas
  var l = 0;
  var y_i, x_f

  while (l < lineas)
  {
    var y_i = espacio * l;
    var x_f = espacio * (l + 1);
    DibujarLinea("black", 0, y_i, x_f, 300);
    l++;
  }
}

'Encuadre de mi dibujo'
DibujarLinea("black", 1, 1, 299, 1);        'le puse 1 en lugar de 0, y 299 en lugar de 300 para evitar el'
DibujarLinea("black", 1, 1, 1, 300);        'efecto de "dientes de sierra" o aliasing'
DibujarLinea("black", 299, 1, 299, 299);
DibujarLinea("black", 1, 299, 299, 299);
