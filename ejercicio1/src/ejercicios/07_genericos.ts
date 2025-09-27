/*{
    status: booblean;
    message: string;
    statusCode: number;
    result: [usuarios] 
}

usuarios = {
        nombre: string;
        apellido: string;
        edad: number;
}

estados = {
    tipo: string;
    id: number;
}*/

function verTipo<T>(argument: T): T {
    return argument;
}
interface Mamifero {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamifero = {
    tipo: "vaca",
    genero: "hembra",
    edad: 5
}

let prueba: string = verTipo("diego");
let prueba1: boolean = verTipo(true);
let prueba2: number = verTipo(1);
let prueba3: Mamifero = verTipo(vaca);

console.log(prueba.toUpperCase());
console.log(prueba1);
console.log(prueba2);
console.log(prueba3);
