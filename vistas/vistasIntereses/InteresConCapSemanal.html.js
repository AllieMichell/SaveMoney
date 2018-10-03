$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapSemanal(i);
        $("#ResultadoInteresConCapSemanal").text("El interés generado don capitalización semanal es: " + res);
    });


});
function ResultadoInteresConCapSemanal(i) {
    var CapitalizaciónSema = (i / 52);
    return CapitalizaciónSema;
}