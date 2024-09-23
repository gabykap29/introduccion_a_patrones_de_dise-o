// base para todos los equipos
export interface IEquipo {
    nombre: string;
    ram: string;
    procesador: string;
    detalles(): string; // Método para mostrar detalles del equipo
}
