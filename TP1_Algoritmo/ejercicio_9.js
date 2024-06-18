function numero_valido(numero) {
    return !isNaN(numero) && numero >= 0 && numero < 11;
}


function obtener_promedio(notas) {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    return suma / notas.length;
}


let notas = [];
for (let i = 0; i < 5; i++) {
    let nota = parseInt(window.prompt("Ingrese la nota " + (i + 1) + ":"));
    while (!numero_valido(nota)) {
        nota = parseInt(window.prompt("La nota debe ser un número natural menor que 11. Por favor, ingrese nuevamente la nota " + (i + 1) + ":"));
    }
    notas.push(nota);
}


let promedio = obtener_promedio(notas);


let estado = "";
if (promedio < 5) {
    estado = "Reprobado";
} else if (promedio >= 6 && promedio <= 8) {
    estado = "Aprobado";
} else {
    estado = "Sobresaliente";
}


console.log("El promedio del alumno es: " + promedio.toFixed(2));
console.log("El alumno está " + estado);