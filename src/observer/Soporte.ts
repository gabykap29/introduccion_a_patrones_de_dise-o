/* 
Objetivo: Utilizar el patrón Observer para notificar a un departamento de soporte cuando un equipo cambia de estado.

Crear una clase Soporte que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
Implementar la clase Equipo que permita agregar observadores y notifique a los observadores cuando su estado cambie.
*/
import { IObservador } from "../interfaces/IObservador";

export class Equipo implements IObservador {
  constructor(private nombre: string, private estado: string) {}
  cambiarEstado(NuevoEstado: string): void {
    this.estado = NuevoEstado;
    console.log(
      "el estado del equipo " +
        this.nombre +
        " a cambiado: Estado: " +
        this.estado
    );
  }
  getNombre() {
    return this.nombre;
  }
}
//clase admin
export class Soporte {
  private observadores: IObservador[] = [];
  private estado: string = "";

  agregarObserador(observador: IObservador): void {
    this.observadores.push(observador);
  }
  eliminarObservador(observador: IObservador): void {
    this.observadores = this.observadores.filter((obs) => obs !== observador);
  }

  cambiarEstadoDeUnObservador(NuevoEstado: string, nombreObservador: string) {
    const observador = this.observadores.find(
      (obs) => (obs as Equipo).getNombre() === nombreObservador
    );
    if (observador) {
      (observador as Equipo).cambiarEstado(NuevoEstado);
    }
    this.notificarObservadores();
  }
  private notificarObservadores(): void {
    if (this.estado !== null) {
      this.observadores.forEach((obs) => obs.cambiarEstado(this.estado));
    }
  }
}
