/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$().ready(iniciar);

function iniciar() {
    $("#btnE1").click(procesarEj1);
    $("#btnE2").click(procesarEj2);
    $("#btnE3").click(procesarEj3);
    $("#btnE4").click(procesarEj4);
    $("#btnE5").click(procesarEj5);
    $("#btnE6").click(procesarEj6);
    $("#btnE7").click(procesarEj7);
    $("#btnE8").click(procesarEj8);
}

function procesarEj1() {
    var valor1 = Number($("#num1").val());
    var valor2 = Number($("#num2").val());
    if (!isNaN(valor1) || !isNaN(valor2)) {
        $("#pRes1").html("Entre los numeros " + valor1 + " y " + valor2 + " hay " + pares(valor1, valor2) + " numeros pares.");

    } else
        $("#pRes1").html("Existe algún problema con los datos.");

}

function procesarEj2() {
    var respuesta = "";
    var num1 = parseFloat($("#num3").val());
    var num2 = parseFloat($("#num4").val());
    if (!isNaN(num1) || !isNaN(num2)) {
        if (esMayor(num1, num2)) {
            respuesta = "Es mayor";
        } else {
            respuesta = "Es menor";
        }
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes2").html(respuesta);
}

function procesarEj3() {
    var num1 = parseFloat($("#num5").val());
    var respuesta = "";
    if (!isNaN(num1)) {
        if (esBisiesto(num1)) {
            respuesta = "Es bisiesto";
        } else {
            respuesta = "No es bisiesto";
        }
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes3").html(respuesta);
}

function procesarEj4() {
    var num1 = parseFloat($("#num6").val());
    var num2 = parseFloat($("#num7").val());
    var respuesta = "";
    if (!isNaN(num1) || !isNaN(num2)) {
        respuesta = areaTriangulo(num1, num2);
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes4").html(respuesta);
}

function procesarEj5() {
    var num1 = parseFloat($("#num8").val());
    var num2 = parseFloat($("#num9").val());
    var respuesta = "";
    if (!isNaN(num1) || !isNaN(num2)) {
        respuesta = areaRectangulo(num1, num2);
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes5").html(respuesta);
}

function procesarEj6() {
    var num1 = parseFloat($("#num10").val());
    var respuesta = "";
    if (!isNaN(num1)) {
        respuesta = cambiarUnidad(num1) + "Grados Fahrenheit";
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes6").html(respuesta);
}

function procesarEj7() {
    var num1 = parseFloat($("#num11").val());
    var respuesta = "";
    if (!isNaN(num1)) {
        respuesta = cambiarUnidad2(num1, parseFloat($("#select1 option:selected").val()), parseFloat($("#select2 option:selected").val()));
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes7").html(respuesta);
}

function procesarEj8() {
    var num1 = parseFloat($("#num12").val());
    var num2 = parseFloat($("#num13").val());
    var respuesta = "";
    if (!isNaN(num1) || !isNaN(num2)) {
        respuesta = calcularPotencia(num1, num2);
    } else {
        respuesta = "Intente nuevamente con números";
    }
    $("#pRes8").html(respuesta);
}