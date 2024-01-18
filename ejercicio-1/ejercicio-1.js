"use strict"

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let ingresoNombre = prompt("Ingrese su nombre:");

if (students.includes(ingresoNombre)) {
    alert("Si se encuentra");
} else {
    alert("No se encuentra");
}
