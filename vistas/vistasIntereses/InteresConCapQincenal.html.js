$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapQuincenal(i);
        $("#ResultadoInteresConCapQuincenal").text("El interés generado don capitalización quincenal es: " + res);
    });


});
function ResultadoInteresConCapQuincenal(i) {
    var CapitalizaciónQuin = (i / 24);
    return CapitalizaciónQuin;
}