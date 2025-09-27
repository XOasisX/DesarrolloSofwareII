interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion?: Direccion;
    saludar (): string;
    actualizarEmail (nuevoEmail: string): void;
}
interface Direccion {
    ciudad: string;
    pais: string;
}

const usuario1: Usuario = {
    id:1,
    nombre: "Ana Pérez",
    email: "ana@eexample.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogota",
        pais: "colombia"
    },
    saludar () {
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string){
        this.email = nuevoEmail;
    }
};

console.log(usuario1.saludar());

export {};