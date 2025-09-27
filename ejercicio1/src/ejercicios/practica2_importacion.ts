import type { Peliculas, Director } from "./practica2_interfaces";

const director: Director = {
    nombre: "Christopher Nolan",
    edad: 50,
    peliculasDirigidas: []
};

export const pelicula: Peliculas = {
    titulo: "Inception",
    anio: 2010,
    genero: "Ciencia Ficción",
    duracion: 148,
    director: director
}; 
director.peliculasDirigidas.push(pelicula);

interface respuesta {
    titulo: string;
    anio: number;
    genero: string;
    duracion: number;
    director: Director;
};

export function mostrarDetallesPelicula(pelicula: Peliculas): respuesta  {
    const { titulo, anio, genero, duracion, director } = pelicula;
    const rest: respuesta = { titulo, anio, genero, duracion, director };
    console.log('Título:' + titulo);
    console.log('Año:' + anio);
    console.log('Género:' + genero);
    console.log('Duración:' + duracion + 'minutos');
    console.log('Director: ' + director.nombre + 'Edad: ' + director.edad);
    //console.log(´irector:  + director.nombre Edad:  ${director.edad});
    return rest;      
}


