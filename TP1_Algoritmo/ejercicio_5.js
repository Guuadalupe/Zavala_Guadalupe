//Se declaran dos variables "dato" y "resultado"//
let dato, resultado;
//Se llama a la funcion "window.prompt" para mostrar un cuadro de dialogo en pantalla, donde se solicita la usuario que introduzca un nombre.//
val1 = window.prompt("Introduce tu nombre", "...");
//Se llama a la funcion "window.prompt" para mostrar un cuadro de dialogo en pantalla, donde se solicita la usuario que introduzca un apellido.//
val2 = window.prompt("Introduce tu apellido", "...");
//En la variable resultado se guarda "val1" y "val2"//
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//Utilizando "document.write" se muestra el resultado en pantalla//
document.write(resultado);