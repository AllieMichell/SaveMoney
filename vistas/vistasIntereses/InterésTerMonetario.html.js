$(document).ready(function () {
    $("#sumbit").click(function () {

        var I;
        var C; 

        I = parseFloat(document.getElementById("inputInteres").value);
        C = parseFloat(document.getElementById("inputCapital").value);

        var PI = isNaN(I);
        var PC = isNaN(C);

        if (PI || PC ) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresTerMonetario(I, C);
        $("#ResultadoInteresTerMonetario").text("El interés generado don capitalización trimestral es: " + res);
    });


});
function ResultadoInteresTerMonetario(I, C) {
    var ResultadoInteresTerMonetario = (I / C);
    return ResultadoInteresTerMonetario;
}