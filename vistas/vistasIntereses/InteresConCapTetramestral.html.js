$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;

        i = parseFloat(document.getElementById("inputInteres").value);


        var Pi = isNaN(i);

        if (Pi) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresConCapTetramestral(i);
        $("#ResultadoInteresConCapTetramestral").text("El interés generado don capitalización tetramestral es: " + res);
    });


});
function ResultadoInteresConCapTetramestral(i) {
    var CapitalizaciónTetra = (i / 3);
    return CapitalizaciónTetra;
}