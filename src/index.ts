import SingletonInventario from "./singleton/inventory";
import { Estado } from "./interfaces/Inventario";
import { EquipoFactory } from "./factory/Equipos";
import { Soporte, Equipo } from "./observer/Soporte";
import { InventarioViejo, AdaptadorInventario } from "./adaptador/Inventario";
// uso de la clase Inventario (Singleton)

const inventario = SingletonInventario.getInstance();

// agregar equipos
inventario.agregarEquipo("Impresora", "Electrónico", Estado.Disponible);
inventario.agregarEquipo("Proyector", "Electrónico", Estado.Reparacion);
inventario.agregarEquipo("Laptop", "Informática", Estado.Completado);

// listar equipos
const equipos = inventario.listarEquipos();
console.log(equipos);

//uso de method factory

const factory = new EquipoFactory();

const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(notebook.detalles());

const desktop = factory.crearEquipo("Desktop", "HP Pavilion", "32GB", "i9");
console.log(desktop.detalles());

const servidor = factory.crearEquipo("Servidor", "IBM System", "128GB", "Xeon");
console.log(servidor.detalles());

//uso del metodo Observer

const soporte = new Soporte();
const equipoUno = new Equipo("Hp Pavilion", "En proceso");
const equipoDos = new Equipo("Noblex", "En proceso");

soporte.agregarObserador(equipoUno);
soporte.agregarObserador(equipoDos);

soporte.cambiarEstadoDeUnObservador("Completado", "Noblex");

//uso del metodo adaptador
const inventarioViejo = new InventarioViejo();

const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");

console.log(adaptador.listarEquipos());
