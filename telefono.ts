export class Telefono {
  constructor(private tipo: string, private numero: string) {}

  getTipo(): string { return this.tipo; }
  setTipo(tipo: string): void { this.tipo = tipo; }

  getNumero(): string { return this.numero; }
  setNumero(numero: string): void { this.numero = numero; }
}
