$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapSemestral(i);
        $("#ResultadoInteresConCapSemestral").text("El interés generado don capitalización semestral es: " + res);
    });


});
function ResultadoInteresConCapSemestral(i) {
    var CapitalizaciónSemes = (i / 2);
    return CapitalizaciónSemes;
}