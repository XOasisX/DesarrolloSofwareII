//Crea una función genérica llamada crearCaja<T> que reciba un valor de cualquier tipo y lo devuelva dentro de un objeto con la propiedad contenido

const ensalada = {
  nombre: "Ensalada",
  calorias: 150,
  esVegana: true,
};

function crearCaja<T>(valor: T): { contenido: T } {
    return { contenido: valor };
}
console.log(crearCaja<string>("Hola"));
console.log(crearCaja<number>(123));
console.log(crearCaja<boolean>(true));
console.log(crearCaja<typeof ensalada>(ensalada));




