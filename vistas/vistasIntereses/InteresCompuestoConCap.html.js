$(document).ready(function () {
    $("#sumbit").click(function () {
        var C;
        var i;
        var r;
        var n;

        C = parseFloat(document.getElementById("inputCapital").value);
        i = parseFloat(document.getElementById("inputInteres").value);
        r = parseFloat(document.getElementById("inputNumero").value);
        n = parseFloat(document.getElementById("inputPlazo").value); 

        var PC = isNaN(C);
        var Pi = isNaN(i);
        var Pr = isNaN(r);
        var Pn = isNaN(n); 

        if (PC || Pi || Pr || Pn) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = ResultadoInteresCompuestoConCap(C, i, r, n);
        $("ResultadoInteresCompuestoConCap").text("El monto obtenido al realizar este cálculo es de:" + res); 

    });


});
//FALTA CHECAR QUE ONDA CON LA FORMULA LO DE LAS POTENCIAS, EL MATH.POW NO FUNCIONA
function ResultadoInteresCompuestoConCap(C, i, r, n) {
    var x = (i / r);  
    var y = (1 + x);
    var z = (C * y);
    var w = (n * r);
    var resultado = Math.pow(z, w); 
    return resultado;
}