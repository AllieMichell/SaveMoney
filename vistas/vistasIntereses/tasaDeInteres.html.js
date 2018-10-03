$(document).ready(function () {
    $("#sumbit").click(function () {
        var M;
        var C;
        var n;

        M = parseFloat(document.getElementById("inputMonto").value);
        C = parseFloat(document.getElementById("inputCapital").value);
        n = parseFloat(document.getElementById("inputPlazo").value);

        var PM = isNaN(M);
        var PC = isNaN(C);
        var Pn = isNaN(n);

        if (PM || PC || Pn) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoTasaDeInteres(M, C, n);
        $("#ResultadoTasaDeInteres").text("La respuesta es: " + res);
    });


});
function ResultadoTasaDeInteres(M, C, n) {
    
    var MentreC = (M / C);
    var UnoEntreN = (1 / n);
    var Exp = Math.pow(MentreC, UnoEntreN);
    var TasaInt = (Exp - 1); 
    return TasaInt;
}