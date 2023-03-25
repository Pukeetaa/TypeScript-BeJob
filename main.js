"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const telefono_1 = require("./telefono");
const mail_1 = require("./mail");
const persona1 = new persona_1.Persona("Juan", "García", 30, "01234567A", new Date("1993-01-01"), "Azul", "Masculino", [new direccion_1.Direccion("Calle Nueva", 10, 2, "A", "28001", "Madrid", "Madrid")], [new mail_1.Mail("Personal", "juan.garcia@mail.com")], [new telefono_1.Telefono("Móvil", "600123456")], "Nota 1");
const persona2 = new persona_1.Persona("María", "Lorca", 28, "23456789B", new Date("1995-02-14"), "Verde", "Femenino", [new direccion_1.Direccion("Calle Vieja", 20, 3, "B", "28002", "Madrid", "Madrid")], [new mail_1.Mail("Trabajo", "maria.lorca@empresa.com")], [new telefono_1.Telefono("Fijo", "910123456")], "Nota 2");
const persona3 = new persona_1.Persona("Carlos", "Ramirez", 35, "34567890C", new Date("1988-03-23"), "Rojo", "Masculino", [new direccion_1.Direccion("Calle 3", 30, 4, "C", "28003", "Madrid", "Madrid")], [new mail_1.Mail("Personal", "carlos.ramirez@yahoo.es")], [new telefono_1.Telefono("Móvil", "600789012")], "Nota 3");
//Modificar los registros de persona
const personaAModificar = buscarPersonaPorDni("01234567A", [persona1, persona2, persona3]);
if (personaAModificar) {
    personaAModificar.añadirDireccion(new direccion_1.Direccion("Calle Cádiz", 40, 5, "D", "28004", "Madrid", "Madrid"));
    personaAModificar.añadirMail(new mail_1.Mail("Trabajo", "juan.garcia@empresa.com"));
    personaAModificar.añadirTelefono(new telefono_1.Telefono("Fijo", "910789012"));
}
//Buscar persona por DNI
function buscarPersonaPorDni(dni, personas) {
    return personas.find(persona => persona.getDni() === dni);
}
//Mostrar los registros en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);
