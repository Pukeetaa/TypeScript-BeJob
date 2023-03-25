"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo() { return this.tipo; }
    setTipo(tipo) { this.tipo = tipo; }
    getNumero() { return this.numero; }
    setNumero(numero) { this.numero = numero; }
}
exports.Telefono = Telefono;
