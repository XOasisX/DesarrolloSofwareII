export interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1:Pasajero={
    nombre: 'Fernando',
    hijos: ['Natalia', 'Gabriel']
}

const pasajero2:Pasajero={
    nombre: 'Melissa',
}

const mostrarHijos: (pasajero: Pasajero) => void = (pasajero: Pasajero): void => {
    const cuantosHijos = pasajero.hijos?.length ?? 0;
    console.log(cuantosHijos);
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

// || OR

/*const valorPrueba = "" ?? 10;
console.log(valorPrueba);*/