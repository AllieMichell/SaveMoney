﻿$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapTrimestral(i);
        $("#ResultadoInteresConCapTrimestral").text("El interés generado don capitalización trimestral es: " + res);
    });


});
function ResultadoInteresConCapTrimestral(i) {
        var CapitalizaciónTrimes = (i / 4);
        return CapitalizaciónTrimes;
    }