/*export class Persona {
    public nombre?: string;
    public direccion: string;

    constructor(nombre: string, direccion: string) {
        this. nombre = nombre;
        this.direccion = direccion;
    }

}*/

export class Persona {
    constructor(
        public nombre: string,
        public direccion: string = 'Sin direccion'
    ) {
    }
}

//const persona:Persona = new Persona('Juan');  

export class Trabajador {
    constructor(
        public persona: Persona,
        public cargo: string,
        public empresa: string,
        public direccion: string
    ) {
        
    }

}

const personaUno = new Persona('diego');
const trabajador:Trabajador = new Trabajador(personaUno, 'Dev', 'Unillanos', 'San Antonio');

console.log(trabajador);
console.log(personaUno);