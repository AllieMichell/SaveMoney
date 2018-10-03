$(document).ready(function () {
    $("#sumbit").click(function () {
        var cap; 
        var i;  
        var t;

        t = parseFloat(document.getElementById("inputTiempo").value);
        i = parseFloat(document.getElementById("inputInteres").value);
        cap = parseFloat(document.getElementById("inputCapital").value);

        var Pt = isNaN(t);
        var Pi = isNaN(i);
        var PCap = isNaN(cap);

        if (Pt || Pi || PCap) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = FunInteres(cap, i, t);
        $("#ResultadoInteres").text("El interés generado es: " + res);
    });

    
}); 
function FunInteres(C, i, t) {
    var Interes = (C * i * t);
    return Interes;
}
    