//*Realizar el pedido de 4 datos personales:
/*Nombre
Edad
Pais
Habilidad
el campo habilidad ponen si es zurda o derecha la persona
el algoritmo es una beca que solo se le dara a personas de colombia o ecuador
mayores de 18 años
y que sea zurda 
debe salir mensaje de 
"Quedas registrado al cupo de la beca"
"No cumples los requisitos"*/

let UserName = "No hay datos";
let Age = "No hay datos";
let Païs = "No hay datos";
let Habilidad = "No hay datos";

function registerData() {
  UserName = prompt("No hay datos");
  Age = prompt("No hay datos");
  País = prompt("No hay datos");
  Habilidad = prompt("No hay datos");
}
function showData() {
  alert(
    "Tu nombre es: " +
      UserName +
      " tu edad es: " +
      Age +
      "tu País es" +
      Païs +
      "Tu habilidad es" +
      Habilidad
  );
}
