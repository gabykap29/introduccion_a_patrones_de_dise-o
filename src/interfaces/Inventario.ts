//Esta clase debe permitir registrar equipos con las propiedades nombre, tipo y estado (Ej.: "disponible", "en reparación").
export enum Estado{
    Disponible = "disponible",
    Reparacion = "en reparacion",
    Completado = "completado",
}
export interface IInventario{
    nombre: string;
    tipo: string;
    estado: Estado;
}