$(document).ready(function () {
    $("#sumbit").click(function () {
        var i;
        var R;
        var VA;

        i = parseFloat(document.getElementById("inputMonto").value);
        R = parseFloat(document.getElementById("inputCapital").value);
        VA = parseFloat(document.getElementById("inputPlazo").value);

        var Pi = isNaN(i);
        var PR = isNaN(R);
        var PVA = isNaN(VA);

        if (Pi || PR || PVA) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoTasaDeInteres(i, R, VA);
        $("#ResultadoTasaDeInteres").text("La respuesta es: " + res);
    });


});
function ResultadoTasaDeInteres(i, R, VA) {

    var x = (VA / R);
    var y = (1 + i - (i * x));
    var z = (0.434 * (y));
    var k = (1 + i);
    var p = (0.434 * (k));
    var resultado = (z / p);
    return resultado;
}