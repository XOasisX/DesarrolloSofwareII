/* Crear un archivo con 2 interfacez, otro archivo con una funcion que reciba por parametro un objeto de tipo de una interfaz 
y retornar un string con un datos del objeto, y otro archivo que haga el llamado de la funcion*/

export interface Director {
    nombre: string;
    edad: number;
    peliculasDirigidas: Peliculas[];
}

export interface Peliculas {
    titulo: string;
    anio: number;
    genero: string;
    duracion: number; 
    director: Director;
}


