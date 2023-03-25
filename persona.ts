import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

export class Persona {
    constructor(
        private nombre: string,
        private apellidos: string,
        private edad: number,
        private dni: string,
        private cumpleaños: Date,
        private colorFavorito: string,
        private sexo: string,
        private direcciones: Direccion[],
        private mails: Mail[],
        private telefonos: Telefono[],
        private notas: string
    ) {}

    getNombre(): string { return this.nombre; }
    setNombre(nombre: string): void { this.nombre = nombre; }

    getApellidos(): string { return this.apellidos; }
    setApellidos(apellidos: string): void { this.apellidos = apellidos; }

    getEdad(): number { return this.edad; }
    setEdad(edad: number): void { this.edad = edad; }

    getDni(): string { return this.dni; }
    setDni(dni: string): void { this.dni = dni; }

    getCumpleaños(): Date { return this.cumpleaños; }
    setCumpleaños(cumpleaños: Date): void { this.cumpleaños = cumpleaños; }

    getColorFavorito(): string { return this.colorFavorito; }
    setColorFavorito(colorFavorito: string): void { this.colorFavorito = colorFavorito; }

    getSexo(): string { return this.sexo; }
    setSexo(sexo: string): void { this.sexo = sexo; }

    getDirecciones(): Direccion[] { return this.direcciones; }
    setDirecciones(direcciones: Direccion[]): void { this.direcciones = direcciones; }

    getMails(): Mail[] { return this.mails; }
    setMails(mails: Mail[]): void { this.mails = mails; }

    getTelefonos(): Telefono[] { return this.telefonos; }
    setTelefonos(telefonos: Telefono[]): void { this.telefonos = telefonos; }

    getNotas(): string { return this.notas; }
    setNotas(notas: string): void { this.notas = notas; }


    
    añadirDireccion(direccion: Direccion): void {
        this.direcciones.push(direccion);
    }

    añadirMail(mail: Mail): void {
        this.mails.push(mail);
    }

    añadirTelefono(telefono: Telefono): void {
        this.telefonos.push(telefono);
    }
}
