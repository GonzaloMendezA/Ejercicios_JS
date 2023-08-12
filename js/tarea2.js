/**
 * 1- ingresar un departamento (cundinamarca, quindio, antioquia, valle)
 * alert ("opcion ono valida")
 * Dependiendo de que departamento es debe mostrar cual es la captital
 *
 */
// funciones

let Departamento = prompt(
  "Ingrese un departamento: cundinamarca, quindio, antioquia, valle"
);

if (Departamento === null || Departamento === "") {
  alert(Departamento + "opcion invalida");
} else {
  Departamento = Departamento.toLowerCase();
}
if (
    Departamento === Cundinamarca
) {
    alert("Bogotá")
} else {
    
    
}