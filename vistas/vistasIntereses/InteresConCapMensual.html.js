﻿$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapMensual(i);
        $("#ResultadoInteresConCapMensual").text("El interés generado don capitalización mensual es: " + res);
    });


});
function ResultadoInteresConCapMensual(i) {
    var CapitalizaciónMensu = (i / 12);
    return CapitalizaciónMensu;
}