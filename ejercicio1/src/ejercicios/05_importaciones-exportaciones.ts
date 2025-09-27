import { type Producto, calcularISV } from "./04_desectructurador";

const carrito: Producto[] = [
    {
        descrpcion: 'Iphone 14',
        precio: 100,
    },
    {
        descrpcion: 'MSI',
        precio: 300,
    }
]

const [total, totalImpuesto] = calcularISV({
    impuesto: 100,
    productos: carrito,
    propina: 0,  
})

console.log(total, totalImpuesto);


