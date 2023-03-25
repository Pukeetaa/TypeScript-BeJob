"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    getNombre() { return this.nombre; }
    setNombre(nombre) { this.nombre = nombre; }
    getApellidos() { return this.apellidos; }
    setApellidos(apellidos) { this.apellidos = apellidos; }
    getEdad() { return this.edad; }
    setEdad(edad) { this.edad = edad; }
    getDni() { return this.dni; }
    setDni(dni) { this.dni = dni; }
    getCumpleaños() { return this.cumpleaños; }
    setCumpleaños(cumpleaños) { this.cumpleaños = cumpleaños; }
    getColorFavorito() { return this.colorFavorito; }
    setColorFavorito(colorFavorito) { this.colorFavorito = colorFavorito; }
    getSexo() { return this.sexo; }
    setSexo(sexo) { this.sexo = sexo; }
    getDirecciones() { return this.direcciones; }
    setDirecciones(direcciones) { this.direcciones = direcciones; }
    getMails() { return this.mails; }
    setMails(mails) { this.mails = mails; }
    getTelefonos() { return this.telefonos; }
    setTelefonos(telefonos) { this.telefonos = telefonos; }
    getNotas() { return this.notas; }
    setNotas(notas) { this.notas = notas; }
    añadirDireccion(direccion) {
        this.direcciones.push(direccion);
    }
    añadirMail(mail) {
        this.mails.push(mail);
    }
    añadirTelefono(telefono) {
        this.telefonos.push(telefono);
    }
}
exports.Persona = Persona;
