$(document).ready(function () {
    $("#sumbit").click(function () {

        var i;
   
        i = parseFloat(document.getElementById("inputInteres").value);
        
        
        var Pi = isNaN(i);
       
        if ( Pi ) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.");
            return;
        }

        var res = FunCapitalizaciónAnual( i);
        $("#ResultadoInteresConCapAnual").text("El interés generado don capitalización anual es: " + res);
    });


});
function FunCapitalizaciónAnual(i) {
    var CapitalizaciónAnual = (i / 1);
    return CapitalizaciónAnual;
}