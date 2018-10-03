$(document).ready(function () {
    $("#btnMonto").click(function () {
        $(".Cuadro").hide();
        $("#MontosConDescuento").show();
    });

    $("#btnRentaPago").click(function () {
        $(".Cuadro").hide();
        $("#ValorActual").show();
    });

    $("#btnValorActual").click(function () {
        $(".Cuadro").hide();
        $("#Monto").show();
    });
});