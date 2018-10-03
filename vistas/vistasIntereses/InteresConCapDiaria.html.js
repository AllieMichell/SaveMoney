$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapDiaria(i);
        $("#ResultadoInteresConCapDiaria").text("El interés generado don capitalización diaria es: " + res);
    });


});
function ResultadoInteresConCapDiaria(i) {
    var CapitalizaciónDia = (1 / 365);
    return CapitalizaciónDia;
}