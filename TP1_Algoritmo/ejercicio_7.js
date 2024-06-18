//Encontrar el texto con mas letras//
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var texto_mayor = "";
for ( var i = 0; i< valores.length; i++){
    if (valores[i]== "hola" || valores[i == "mundo" || valores[i]== "char"]){
        if (valores[i].length > texto_mayor.length) {
            texto_mayor = valores[i]

        }
    }
}
console.log ("El elemento de texto mayor es:", texto_mayor);

//Imprimir los textos de menor a mayor cantidad de letras//
 var orden_textos = [];
 for (var i = 0; i < valores.length; i++){

    if (valores[i] == "hola" || valores[i] == "hola mundo" || valores[i] == "char"){
      orden_textos.push(valores[i]);
    }
 }
if (orden_textos[0].length > orden_textos[1].length){
    var may = orden_textos[0];
    orden_textos[0] = orden_textos[1];
    orden_textos[1] = may
}
if (orden_textos[1].length > orden_textos[2]) {
    var may = orden_textos[1];
    orden_textos[1] = orden_textos[2];
    orden_textos[2] = may
}
if (orden_textos[0]. length > orden_textos[1]. length){
    var may= orden_textos[0];
    orden_textos[0] = orden_textos[1];
    orden_textos[1] = may
}
console.log ("Textos de mayor a menor cantidad de letras", orden_textos);

var num1 = valores[2];
var num2 = valores[5];

console.log("suma", num1 + num2);
console.log("resta", num1 - num2);
console.log("multiplicaciones", num1 * num2);
console.log("divisiones", num1 / num2);
