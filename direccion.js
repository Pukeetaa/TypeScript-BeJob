"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigoPostal = codigoPostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    getCalle() { return this.calle; }
    setCalle(calle) { this.calle = calle; }
    getNumero() { return this.numero; }
    setNumero(numero) { this.numero = numero; }
    getPiso() { return this.piso; }
    setPiso(piso) { this.piso = piso; }
    getLetra() { return this.letra; }
    setLetra(letra) { this.letra = letra; }
    getCodigoPostal() { return this.codigoPostal; }
    setCodigoPostal(codigoPostal) { this.codigoPostal = codigoPostal; }
    getPoblacion() { return this.poblacion; }
    setPoblacion(poblacion) { this.poblacion = poblacion; }
    getProvincia() { return this.provincia; }
    setProvincia(provincia) { this.provincia = provincia; }
}
exports.Direccion = Direccion;
