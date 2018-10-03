$(document).ready(function () {
    $("#sumbit").click(function () {

        var M;
        var D; 

        M = parseFloat(document.getElementById("inputValor").value);
        D = parseFloat(document.getElementById("inputTasa").value);

        var PM = isNaN(M);
        var PD = isNaN(D);

        if (PM || PD) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = FunValorAnticipado(M, D);
        $("#ResultadoValorAnticipado").text("El interés generado don capitalización trimestral es: " + res);
    });


});
function FunValorAnticipado(M, D) {
    var ValorAnticipado = (M - D);
    return ValorAnticipado;
}