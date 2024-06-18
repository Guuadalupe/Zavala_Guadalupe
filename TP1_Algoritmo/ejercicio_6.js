const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
let usuario = window.prompt ("Ingrese un numero del 1 al 12");
if (usuario >= 1 && usuario <= 12 ) {
    let mes = meses[usuario - 1];
    alert ('El mes correspondiente al numero' + usuario + 'es' + mes  );
} else {
   alert ('numero invalido, porfavor, ingresar un numero del 1 al 12') 
}
