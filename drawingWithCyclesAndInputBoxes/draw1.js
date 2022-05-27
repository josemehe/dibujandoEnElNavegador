var d =document.getElementById("dibujito_1");   'metodo(funcion) del documento que trae un elemento mediante su ID'
var lienzo = d.getContext("2d");              'metodo del canvas que da la dimension del dibujo ya sea 2d o 3d'

'Encuadre de mi dibujo'
DibujarLinea("black", 1, 1, 299, 1);        'le puse 1 en lugar de 0, y 299 en lugar de 300 para evitar el'
DibujarLinea("black", 1, 1, 1, 300);        'efecto de "dientes de sierra" o aliasing'
DibujarLinea("black", 299, 1, 299, 299);
DibujarLinea("black", 1, 299, 299, 299);

'dibujo con ciclo for'
var lineas = 30;                              'se usa el for para evitar escribir la l dentro del ciclo'
var l = 0;
var y_i, x_f

for(l = 0; l < lineas; l++)
{
  var y_i = 10 * l;
  var x_f = 10 * (l + 1);
  DibujarLinea("black", 0, y_i, x_f, 300);
}
