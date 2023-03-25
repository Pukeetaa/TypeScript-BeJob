import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";


const persona1 = new Persona(
  "Juan",
  "García",
  30,
  "01234567A",
  new Date("1993-01-01"),
  "Azul",
  "Masculino",
  [new Direccion("Calle Nueva", 10, 2, "A", "28001", "Madrid", "Madrid")],
  [new Mail("Personal", "juan.garcia@mail.com")],
  [new Telefono("Móvil", "600123456")],
  "Nota 1"
);

const persona2 = new Persona(
  "María",
  "Lorca",
  28,
  "23456789B",
  new Date("1995-02-14"),
  "Verde",
  "Femenino",
  [new Direccion("Calle Vieja", 20, 3, "B", "28002", "Madrid", "Madrid")],
  [new Mail("Trabajo", "maria.lorca@empresa.com")],
  [new Telefono("Fijo", "910123456")],
  "Nota 2"
);

const persona3 = new Persona(
  "Carlos",
  "Ramirez",
  35,
  "34567890C",
  new Date("1988-03-23"),
  "Rojo",
  "Masculino",
  [new Direccion("Calle 3", 30, 4, "C", "28003", "Madrid", "Madrid")],
  [new Mail("Personal", "carlos.ramirez@yahoo.es")],
  [new Telefono("Móvil", "600789012")],
  "Nota 3"
);


//Modificar los registros de persona
const personaAModificar = buscarPersonaPorDni("01234567A", [persona1, persona2, persona3]);
if (personaAModificar) {
    personaAModificar.añadirDireccion(new Direccion("Calle Cádiz", 40, 5, "D", "28004", "Madrid", "Madrid"));
    personaAModificar.añadirMail(new Mail("Trabajo", "juan.garcia@empresa.com"));
    personaAModificar.añadirTelefono(new Telefono("Fijo", "910789012"));
}

//Buscar persona por DNI
function buscarPersonaPorDni(dni: string, personas: Persona[]): Persona | undefined {
    return personas.find(persona => persona.getDni() === dni);
}

//Mostrar los registros en la consola
console.log(persona1);
console.log(persona2);
console.log(persona3);
