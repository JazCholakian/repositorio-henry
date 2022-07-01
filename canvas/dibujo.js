var d = document.getElementById ("dibujazo");
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color; 
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea ("blue", 200, 60, 25, 90);
dibujarLinea ("pink", 300, 70, 70, 90);
dibujarLinea ("red", 100, 20, 15, 10);
dibujarLinea ("yellow", 20, 50, 40, 100);
