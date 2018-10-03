$(document).ready(function () {
    $("#sumbit").click(function () {
        var M; 
        var C; 
        M = parseFloat(document.getElementById("inputMonto").value);
        C= parseFloat(document.getElementById("inputCapital").value);

        var PM = isNaN(M);
        var PC = isNaN(C); 

        if (PM || PC) {
            alert("El valor introducido no es válido, recuerda llenar las casillas con números.")
            return;
        }

        var res = FunInteresComoPorcVA(M, C);
        $("#ResultadoInteresComoPorcVA").text("El interés generado de forma porcentual es: " + res);
    });


    function FunInteresComoPorcVA(M, C) {
        var InteresComoPorcVA = (M / C) - 1;
        return InteresComoPorcVA;
    }
});