$(document).ready(function () {
    $("#sumbit").click(function () {

        var M;
        var d; 
        var t;

        M = parseFloat(document.getElementById("inputValorNomi").value);
        d = parseFloat(document.getElementById("inputTasaDesc").value);
        t = parseFloat(document.getElementById("Plazo").value);

        var PM = isNaN(M);
        var Pd = isNaN(d);
        var Pt = isNaN(t);

        if (PM || Pd || Pt) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoDescuento(M, d, t);
        $("#ResultadoDescuento").text("El descuento generado es: " + res);
    });


});
function ResultadoDescuento(M, d, t) {
    var ResultadoDescuento = (M * d * t);
    return ResultadoDescuento;
}