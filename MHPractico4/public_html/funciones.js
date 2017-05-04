/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function pares(_n1, _n2){
    var contador = 0;
    
    for(var j=_n1; j<=_n2; j++) if(j % 2 ===0) contador++;
    return contador;
}

function esMayor(edad, tope) {
    if (edad > tope) {
        return true;
    } else {
        return false;
    }
}

function esBisiesto(año) {
    if (año % 4 === 0 && año % 100 !== 0) {
        return true;
    } else {
        if (año % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }
}

function areaTriangulo (base, altura) {
    var res = 0;
    if (base >= 0 && altura >= 0){
        res = (base*altura)/2;
    } else {
        res = -1;
    }
    return res;
}

function areaRectangulo (ancho, alto) {
    var res = 0;
    if (ancho >= 0 && alto >= 0){
        res = ancho*alto;
    } else {
        res = -1;
    }
    return res;
}

function cambiarUnidad (celsius) {
    var res = celsius*1.8+32;
    return res;
}

function cambiarUnidad2 (grad, unidad, unidad2) {
    var res = 0;
    if (unidad === unidad2) {
        res = grad;
    } else if (unidad === 1 && unidad2 === 2) {
        res = 9*grad+32;
    } else if (unidad === 1 && unidad2 === 3) {
        res = 5*grad/4;
    } else if (unidad === 1 && unidad2 === 4) {
        res = 4*(grad-491.67)/4;
    } else if (unidad === 2 && unidad2 === 1) {
        res = 4*(grad-32)/9;
    } else if (unidad === 2 && unidad2 === 3) {
        res = 5*(grad-32)/9;
    } else if (unidad === 2 && unidad2 === 4) {
        res = grad+459.67;
    } else if (unidad === 3 && unidad2 === 1) {
        res = 4*grad/5;
    } else if (unidad === 3 && unidad2 === 2) {
        res = 9*grad/5+32;
    } else if (unidad === 3 && unidad2 === 4) {
        res = 9*grad/5+491.67;
    } else if (unidad === 4 && unidad2 === 1) {
        res = 4*(grad-491.67)/9;
    } else if (unidad === 4 && unidad2 === 2) {
        res = grad-459.67;
    } else {
        res = 5*(grad-491.67)/9;
    }
    return res;
}

function calcularPotencia (num, exp) {
    var res = 1;
    for (i = 1; i <= exp; i++) {
        res*=num;
    }
    return res;
}