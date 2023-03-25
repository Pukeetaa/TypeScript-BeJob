export class Direccion {
  constructor(
      private calle: string,
      private numero: number,
      private piso: number,
      private letra: string,
      private codigoPostal: string,
      private poblacion: string,
      private provincia: string
  ) {}

  getCalle(): string { return this.calle; }
  setCalle(calle: string): void { this.calle = calle; }

  getNumero(): number { return this.numero; }
  setNumero(numero: number): void { this.numero = numero; }

  getPiso(): number { return this.piso; }
  setPiso(piso: number): void { this.piso = piso; }

  getLetra(): string { return this.letra; }
  setLetra(letra: string): void { this.letra = letra; }

  getCodigoPostal(): string { return this.codigoPostal; }
  setCodigoPostal(codigoPostal: string): void { this.codigoPostal = codigoPostal; }

  getPoblacion(): string { return this.poblacion; }
  setPoblacion(poblacion: string): void { this.poblacion = poblacion; }

  getProvincia(): string { return this.provincia; }
  setProvincia(provincia: string): void { this.provincia = provincia; }
}
