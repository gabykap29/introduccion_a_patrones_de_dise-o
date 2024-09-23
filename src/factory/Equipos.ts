import { IEquipo } from "../interfaces/IEquipo";

// clase Notebook
class Notebook implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

// clase Desktop
class Desktop implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

// clase Servidor
class Servidor implements IEquipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

// fabrica de equipos
export class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): IEquipo {
    if (tipo === "Notebook") {
      return new Notebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    } else {
      throw new Error("Tipo de equipo no válido");
    }
  }
}
