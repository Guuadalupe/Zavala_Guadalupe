// Función para encontrar la posición de la primera vocal en un texto
function primer_vocal(texto) {
    // Convertir el texto a minúsculas para evitar problemas con mayúsculas
    texto = texto.toLowerCase();
    
    // Definir las vocales
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    
    // Recorrer cada carácter del texto
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            return i; // Retornar la posición de la primera vocal encontrada
        }
    }
    
    return -1; // Si no se encuentra ninguna vocal, retornar -1
}

// Solicitar al usuario que introduzca un texto
let Usuario = prompt("Introduce un texto:");

// Encontrar la posición de la primera vocal
let posicionVocal = primer_vocal(Usuario);

// Mostrar el resultado
if (posicionVocal !== -1) {
    console.log("La primera vocal está en la posición: " , posicionVocal + 1 );
} else {
    console.log("No se encontró ninguna vocal en el texto.");
}