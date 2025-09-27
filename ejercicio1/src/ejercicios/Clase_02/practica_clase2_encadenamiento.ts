/*1. Define una interfaz Libro con las siguientes propiedades:
titulo: string
autor?: { nombre?: string; pais?: string }
anioPublicacion?: number
/*2. Crea una función llamada mostrarInfoLibro que reciba un objeto de tipo Libro y muestre en consola:
El título (obligatorio).
El nombre del autor (si no está definido, mostrar "Autor desconocido").
El país del autor (si no está definido, mostrar "País desconocido").
El año de publicación (si no está definido, mostrar "Año no disponible").
/*3. Crea al menos tres libros:
Uno con todos los datos completos.
Uno sin autor.
Uno sin año de publicación.
Llama a la función con los tres libros y observa cómo maneja los datos faltantes sin errores.*/


interface Libro {
    titulo: string;
    autor?: { nombre?: string; pais?: string };
    anioPublicacion?: number;
}
function mostrarInfoLibro(libro: Libro): void {
    const titulo = libro.titulo;
    const nombreAutor = libro.autor?.nombre ?? "Autor desconocido";
    const paisAutor = libro.autor?.pais ?? "País desconocido";
    const anioPublicacion = libro.anioPublicacion ?? "Año no disponible";
    console.log(`Título: ${titulo}`);
    console.log(`Autor: ${nombreAutor}`);
    console.log(`País: ${paisAutor}`);
    console.log(`Año de Publicación: ${anioPublicacion}`);
}
const libro1: Libro = {
    titulo: "Cien Años de Soledad",
    autor: { nombre: "Gabriel García Márquez", pais: "Colombia" },
    anioPublicacion: 1967
};
const libro2: Libro = {
    titulo: "1984",
    // Sin autor
    anioPublicacion: 1949
};
const libro3: Libro = {
    titulo: "El Principito",
    autor: { nombre: "Antoine de Saint-Exupéry", pais: "Francia" }
    // Sin año de publicación
};
mostrarInfoLibro(libro1);   
mostrarInfoLibro(libro2);
mostrarInfoLibro(libro3);
