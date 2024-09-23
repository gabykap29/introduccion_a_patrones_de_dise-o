// interfaz que espera el sistema nuevo
interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): any[];
}

// clase antigua InventarioViejo
export class InventarioViejo {
  private items: any[] = [];

  agregarItem(item: { nombre: string; tipo: string; estado: string }): void {
    this.items.push(item);
  }

  obtenerItems(): any[] {
    return this.items;
  }
}

// adaptador que conecta la clase InventarioViejo con la nueva interfaz Inventario
export class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    // formato que espera InventarioViejo
    const item = { nombre, tipo, estado };
    this.inventarioViejo.agregarItem(item);
  }

  listarEquipos(): any[] {
    return this.inventarioViejo.obtenerItems();
  }
}
