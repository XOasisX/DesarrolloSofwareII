// 1. Definición de la interfaz Comida
interface Comida {
  nombre: string;
  calorias: number;
  esVegana: boolean;
}

// 2. Creación de objetos que implementan la interfaz Comida
const pizza: Comida = {
  nombre: "Pizza",
  calorias: 800,
  esVegana: false,
};

const ensalada: Comida = {
  nombre: "Ensalada",
  calorias: 150,
  esVegana: true,
};

const hamburguesa: Comida = {
  nombre: "Hamburguesa",
  calorias: 600,
  esVegana: false,
};

// 3. Implementación de la clase ComidaService
class ComidaService {

  public mostrarInfo(comida: Comida): void {
    const { nombre, calorias, esVegana } = comida;
    console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana?: ${esVegana}`);
  }

  public modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
  const nuevaComida: Comida = {
    nombre: comida.nombre,
    calorias: nuevasCalorias,
    esVegana: comida.esVegana
  };
  return nuevaComida;
}
}

// 4. Implementación de la clase NotificadorComida
class NotificadorComida {

  constructor(private comidaService: ComidaService) {}

  public notificar(comida: Comida): void {
    console.log("\nNotificando comida...");
    this.comidaService.mostrarInfo(comida);
  }
}

// 5. Prueba del sistema
const comidaService = new ComidaService();
const notificadorComida = new NotificadorComida(comidaService);

// Notifica todas las comidas originales
notificadorComida.notificar(pizza);
notificadorComida.notificar(ensalada);
notificadorComida.notificar(hamburguesa);

// Modifica las calorías de la pizza y notifica la comida modificada
const pizzaModificada = comidaService.modificarCalorias(pizza, 500);
notificadorComida.notificar(pizzaModificada);