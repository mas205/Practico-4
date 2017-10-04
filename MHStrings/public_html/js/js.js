$().ready(iniciar);
function iniciar(){
    $("#btnE1").click(pEjercicio1);
    $("#btnE2").click(pEjercicio2);
    $("#btnE3").click(pEjercicio3);
    $("#btnE4").click(pEjercicio4);
    $("#btnE5").click(pEjercicio5);
    $("#btnE6").click(pEjercicio6);
    $("#btnE7").click(pEjercicio7);
    $("#btnE8").click(pEjercicio8);
    $("#btnE9").click(pEjercicio9);
    $("#btnE10").click(pEjercicio10);
    $("#btnE11").click(pEjercicio11);
    $("#btnE12").click(pEjercicio12);
    $("#btnE13").click(pEjercicio13);
}

function pEjercicio1(){
    var str1=$("#txt1").val();
    var str2="";
    //alert(str1);
    for (i=str1.length-1; i>=0; i--){
        str2+=str1.charAt(i);
    }
    //alert(str2);
    $("#pRes1").html(str2);
}
function pEjercicio2(){
    var str1=$("#txt2").val();
    var str2=$("#txt3").val();
    var num = 0;
    for (i=0;i<=str1.length-1;i++){
        if(str1.charAt(i)===str2){
            num++;
        }
    }
    $("#pRes2").html("Hay "+num+" veces la letra "+str2+" en "+str1);
}

function pEjercicio3(){
    var str1=$("#txt4").val();
    var num = 0;
    var str2 = "aeiouAEIOU";
    for(i=0;i<=str1.length-1;i++){
        for (j=0;j<=str2.length-1;j++){
            if (str2.charAt(j)===str1.charAt(i)){
                num++;
            }
        }
    }
    $("#pRes3").html("hay "+num+" vocales en "+str1);
}
function pEjercicio4(){
    var str1=$("#txt5").val();
    var str2=str1.toLowerCase();
    $("#pRes4").html(str2);
}
function pEjercicio5(){
    var str1=$("#txt6").val();
    var str2=str1.toUpperCase();
    $("#pRes5").html(str2);
}
function pEjercicio6(){
    var str1=$("#txt7").val();
    var str2=$("#txt8").val();
    var num=0;
    if (str1.indexOf(str2)!==-1){
        $("#pRes6").html(str2 + " está contenida en "+str1);
    } else {
        $("#pRes6").html(str2 + " no está contenida en "+str1);
    }
}
function pEjercicio7(){
    var str1=$("#txt9").val();
    var num=1;
    for (i=0;i<=str1.length-1;i++){
        if(str1.charAt(i)===" "){
            num++;
        }
    }
    $("#pRes7").html(num+" palabras");
}
function pEjercicio8(){
    var str1=$("#txt10").val();
    var ini=str1.charAt(0).toLowerCase();
    var fin=str1.charAt(str1.length-1).toLowerCase();
    alert (ini);
    alert (fin);
    if (ini===fin){
        $("#pRes8").html("Inicia y termina con la misma letra");
    } else {
        $("#pRes8").html("No inicia y termina con la misma letra");
    }
}
function pEjercicio9(){
    var str1=$("#txt11").val();
    var str2=str1.charAt(0).toUpperCase();
    var str3="";
     switch (str2) {
        case "A":
            str3="Montevideo";
            break;
        case "B":
            str3="Maldonado";
            break;
        case "C":
            str3="Rocha";
            break;
        case "D":
            str3="Treinta y tres";
            break;
        case "E":
            str3="Cerro largo";
            break;
        case "F":
            str3="Rivera";
            break;
        case "G":
            str3="Artigas";
            break;
        default:
            str3="Un departamento no enlistado por el alumno mal aprendido o una letra a partir de la S (No hay departamento)";
            break;
    }
    $("#pRes9").html(str3);
}
function remplazarPalabra(p1, p2){
    var str1="";
    for (i=0;i<=p1.length-1;i++){
        //alert(p1);
        //alert(p2);
        if(p1.charAt(i)!==p2){
            str1+=p1.charAt(i);
        } else {
            str1+="*";
        }
    }
    //alert (str1);
    return str1;
}
function pEjercicio10(){
    var str1=$("#txt12").val();
    var str2=$("#txt13").val();
    $("#pRes10").html(remplazarPalabra(str1, str2));
}
function textoLindo(p1){
    var str1="";
    for (i=0;i<=p1.length-1;i++){
        if(i === 0 && p1.charCodeAt(i)=== 32){
            str1="Asegurate de empezar el texto sin espacios";
            break;
        } else if(i===0){
            str1+=p1.charAt(i).toUpperCase();
        } else {
            str1+=p1.charAt(i).toLowerCase();
        }
    }
    //alert(str1);
    return str1;
}
function pEjercicio11(){
    var txt1=$("#txt14").val();
    $("#pRes11").html(textoLindo(txt1));
}
function contadorMayMin(p1){
    var mayus=0;
    var minus=0;
    for (i=0;i<=p1.length-1;i++){
        if(p1.charCodeAt(i)>64 && p1.charCodeAt(i)<91){
            mayus++;
        } else if (p1.charCodeAt(i)>96 && p1.charCodeAt(i)<123){
            minus++;
        }
    }
    //alert(minus);
    //alert(mayus);
    var resp="Hay "+mayus+" mayúsculas y "+minus+" minúsculas";
    return resp;
}
function pEjercicio12(){
    var txt1=$("#txt15").val();
    //alert(5);
    $("#pRes12").html(contadorMayMin(txt1));
}
function sacarEspaciosComas(p1){
    var str1="";
    for(i=0;i<=p1.length-1;i++){
        if(p1.charCodeAt(i)!==32 || p1.charCodeAt(i)!== 44){
            str1+=p1.charAt(i);
        }
    }
    return str1;
    alert(str1);
}
function sacarAcentos(p1){
    var str1="";
    for(i=0;i<p1.length;i++){
        if(p1.charCodeAt(i)===130){
            str1+="e";
        } else if(p1.charCodeAt(i)===160){
            str1+="a";
        } else if(p1.charCodeAt(i)===161){
            str1+="i";
        } else if(p1.charCodeAt(i)===162){
            str1+="o";
        } else if(p1.charCodeAt(i)===163){
            str1+="u";
        } else {
            str1+=p1.charAt(i);
        }        
    }
    //alert(str1);
    return str1;
}
function darVuelta(p1){
    var str2="";
    for (i=p1.length-1; i>=0; i--){
        str2+=p1.charAt(i);
    }
    //alert(str2);
    return str2;
}
function buscarPalindromo(p1){
    //alert("existo");
    var str1=sacarAcentos(p1).toLowerCase();
    var str2=sacarEspaciosComas(str1).toLowerCase();
    if(str2===darVuelta(str1)){
        resultado="Es palindomo";
    } else {
        resultado="No es palindromo";
    }
    return resultado;
}
function pEjercicio13(){
    //alert("Existo");
    var txt1=$("#txt16").val();
    $("#pRes13").html(buscarPalindromo(txt1));
}