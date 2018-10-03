$(document).ready(function () {
    $("#sumbit").click(function () {

        var C;
        var I;

        C = parseFloat(document.getElementById("inputCapital").value);
        I = parseFloat(document.getElementById("inputInteres").value);


        var PC = isNaN(C); 
        var PI = isNaN(I); 

        if (PC || PI) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoMontoSinRentPlaz(C, I);
        $("#ResultadoMontoSinRentPlaz").text("El monto generado es: " + res);
    });


});
function ResultadoMontoSinRentPlaz(C, I) {
    var MontoSinRentaYPlazo = (C + I);
    return MontoSinRentaYPlazo;
}