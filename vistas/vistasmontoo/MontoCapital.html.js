$(document).ready(function () {
    $("#sumbit").click(function () {
        var C;
        var i;
        var n;

        C = parseFloat(document.getElementById("inputCapital").value);
        i = parseFloat(document.getElementById("inputInteres").value);
        n = parseFloat(document.getElementById("inputPlazo").value);

        var PC = isNaN(C);
        var Pi = isNaN(i);
        var Pn = isNaN(n);

        if (PC || Pi || Pn) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoMontoCapital(C, i, n);
        $("#ResultadoMontoCapital").text("La respuesta es: " + res);
    });


});
function ResultadoMontoCapital(C, i, n) {
    var resultado = (C * i * t);  
    return ValorActual;

}