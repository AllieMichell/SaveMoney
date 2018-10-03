$(document).ready(function () {
    $("#sumbit").click(function () {
        var i;
        var r;
        var M;

        i = parseFloat(document.getElementById("inputMonto").value);
        r = parseFloat(document.getElementById("inputRenta").value);
        M = parseFloat(document.getElementById("inputTasa").value);

        var Pi = isNaN(i);
        var Pr = isNaN(r);
        var PM = isNaN(M);

        if (Pi || Pr || PM) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoPlazo(i, r, M);
        $("#ResultadoPlazo").text("La respuesta es: " + res);
    });


});
function ResultadoPlazo(i, r, M) {
    
    //var x = (M / r);//DIVICIÓN DE MONTO ENTRE RENTA DEL NUMERADOR
    //var y = (x * i + i + 1);//DESGLOSE DEL NUMERADOR 
    //var z = (0.434 * y);//NUMERADOR DE LA OPERACIÓN
    //var w = (1 + i);//SUMA DE UNO MAS LA TASA DE INTERÉS DEN DENOMINADOR
    //var k = (0.434 * w); //DENOMINADOR DE LA OPERACIÓN
    //var resultado = (z / k);//SOLUCIÓN DEL PLAZO
    var x = (M / r);
    var y = (0.434 * (x * i + i + 1));
    var z = (0.434 * (1 + i)); 
    var resultado = (y / z); 
    return resultado;
}