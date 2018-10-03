$(document).ready(function () {
    $("#sumbit").click(function () {
        var R;
        var i;
        var n;

        R = parseFloat(document.getElementById("inputRenta").value);
        i = parseFloat(document.getElementById("inputInteres").value);
        n = parseFloat(document.getElementById("inputPlazo").value);

        var PR = isNaN(R);
        var Pi = isNaN(i);
        var Pn = isNaN(n);

        if (PR || Pi || Pn) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoTasaDeInteres(R, i, n);
        $("#ResultadoTasaDeInteres").text("La respuesta es: " + res);
    });


});
function ResultadoTasaDeInteres(R, i, n) {
    var x = (n + 1);
    var y = (1 + i);
    var z = Math.pow(y, z);
    var w = (z - 1);
    var k = ((w / i) - 1);
    var respuesta = (R * k); 
    return respuesta;
}