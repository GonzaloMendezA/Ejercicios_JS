// Logica y algoritmos
// direccion, estado civil, cedula, celular, correo salario
// Ingles
let userName = "No hay datos";
let age = "No hay datos";
let Direccion = "No hay datos";
let EstadoCivil = "No hay datos";
let Cedula = "No hay datos";
let Celular = "No hay datos";
let CorreoElectronico = "No hay datos";
let Salarario = "No hay datos";

function registerData() {
  userName = prompt("ingresa tu nombre");
  age = prompt("ingresa tu edad");
  Direccion = prompt("ingresa tu direccion");
  EstadoCivil = prompt("ingresa tu estado civil");
  Cedula = prompt("ingresa tu número de cedula");
  Celular = prompt("ingresa tu numero de celular");
  CorreoElectronico = prompt("ingresa tu correo electronico");
  Salarario = prompt("ingresa tu salario");
}

function showData() {
  alert("Tu nombre es: " + userName + " y tu edad es: " + age);
  alert("Tu direccion es" + Direccion);
  alert("Tu estado civil es" + EstadoCivil);
  alert(" Tu cedula es" + Cedula);
  alert("Tu celular es" + Celular);
  alert("Tu correo electronico es" + CorreoElectronico);
  alert("Tu salario es" + Salarario);
}
