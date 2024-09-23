/*
Crear una clase Inventario que siga el patrón Singleton.
Esta clase debe permitir registrar equipos con las propiedades nombre, tipo y estado (Ej.: "disponible", "en reparación").
Agregar un método agregarEquipo para añadir equipos y un método listarEquipos para devolver la lista completa de equipos registrados.
*/

import { IInventario } from "../interfaces/Inventario";
import { Estado } from "../interfaces/Inventario";
// clase Inventario con el patrón Singleton
class Inventario {
  // Instancia única de la clase
  private static instance: Inventario | null = null;

  // Lista para almacenar los equipos
  private equipos: IInventario[] = [];

  // Constructor privado para evitar instanciación directa
  private constructor() {}

  // Método estático para obtener la instancia única del Singleton
  public static getInstance(): Inventario {
    if (Inventario.instance === null) {
      Inventario.instance = new Inventario();
    }
    return Inventario.instance;
  }

  // Método para agregar equipos al inventario
  public agregarEquipo(nombre: string, tipo: string, estado: Estado): void {
    const nuevoEquipo: IInventario = { nombre, tipo, estado };
    this.equipos.push(nuevoEquipo);
  }

  // Método para listar todos los equipos registrados
  public listarEquipos(): IInventario[] {
    return this.equipos;
  }
}

export default Inventario;
