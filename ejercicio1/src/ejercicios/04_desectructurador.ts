interface Detalle {
    autor: string;
    anio: number;
}

interface ReproductorAudio {
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle
}

const ReproductorAudio: ReproductorAudio = {
    volumen: 50,
    duracion: 10,
    cancion: "Cancion de prueba",
    detalle: {
        autor: "Diego",
        anio: 2025
    }
}

const cancion = ReproductorAudio.cancion;
console.log({cancion});
const autor = ReproductorAudio.detalle.autor;
console.log({autor});

//desectructuracion
const { cancion: nombreCancion, duracion } = ReproductorAudio;
console.log(nombreCancion);
console.log(duracion);

//desectructuracion anidada
//forma crota
const { detalle: { autor: autorCancion } } = ReproductorAudio;
console.log(autorCancion);
//forma clarga
const { detalle } = ReproductorAudio;
const { autor: nombreAutor2 } = detalle;
console.log({ nombreAutor2 });

//arreglos
const frutas: string[] = ['peras', 'manzana', 'fresas'];
console.log("Frutas: " + (frutas [1] || 'No hay frutas'));
//const [,,p3 = 'No hay mas frutas'] = frutas;
//console.log(p3);
const [p1, p2, p3 = 'No hay mas frutas'] = frutas;
console.log(p3);


//Desectructuracion en parametros de funciones

export interface Producto {
    descrpcion: string;
    precio: number;
}
const celualar: Producto = {
    descrpcion: 'Iphone 14',
    precio: 100,
}

const computadora: Producto = {
    descrpcion: 'MSI',
    precio: 300,
}

const carrito: Producto[] = [celualar, computadora];
const impuesto: number = 0.19;
const propina: number = 0.10;

interface ImpuestosOptions {
    impuesto: number;
    productos: Producto[];
    propina: number;
}

export function calcularISV(options: ImpuestosOptions): [number, number, number] {
    const {impuesto, productos, propina} = options;
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * impuesto, total * impuesto * propina];
} 

//forma sin desectructuracion
const options: ImpuestosOptions = {
    impuesto,
    productos: carrito,
    propina,
};
const resultadoCompra: number[] = calcularISV(options);

console.log('Total: ' + resultadoCompra[0]);
console.log('Total Impuesto: ' + resultadoCompra[1]);
console.log('Total Propina: ' + resultadoCompra[2]);

//forma con desectructuracion
const [totalCompra, totalImpuesto, totalPropina] = calcularISV({
    impuesto, 
    productos: carrito,
    propina,
});
console.log('Total: ' + totalCompra);
console.log('Total Impuesto: ' + totalImpuesto);
console.log('Total Propina: ' + totalPropina);
