$(document).ready(function () {
    $("#sumbit").click(function () {
        var i;
        var j;
        var m;

        i = parseFloat(document.getElementById("inputInteres").value);
        j = parseFloat(document.getElementById("inputPeriodo").value);
        m = parseFloat(document.getElementById("inputIgualar").value);

        var Pi = isNaN(i);
        var Pj = isNaN(j);
        var Pm = isNaN(m);

        if (Pi || Pj || Pm) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresTasasEquivalentes(i, j, m);
        $("#ResultadoInteresTasasEquivalentes").text("La respuesta es: " + res);
    });


});
function ResultadoInteresTasasEquivalentes(i, j, m) {
    var x = (1 + (i / m));
    var y = (m / j);
    var z = Math.pow(x, y) - 1;
    var Solucion = ((z) * j);
    return Solucion;
}