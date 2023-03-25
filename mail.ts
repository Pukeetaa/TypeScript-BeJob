export class Mail {
  constructor(private tipo: string, private direccion: string) {}

  getTipo(): string { return this.tipo; }
  setTipo(tipo: string): void { this.tipo = tipo; }

  getDireccion(): string { return this.direccion; }
  setDireccion(direccion: string): void { this.direccion = direccion; }
}
