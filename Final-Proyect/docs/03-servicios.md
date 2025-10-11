# Servicios del Proyecto

Este documento detalla los servicios implementados en la aplicación, su propósito, métodos y ejemplos de uso.

---

## Índice de Servicios

1. [StarWarsService](#1-starwarsservice)
2. [PlanetaService](#2-planetaservice)
3. [MovieService](#3-movieservice)

---

## 1. StarWarsService

**Ubicación**: `src/app/starwars/services/starwars.personajeServices.ts`

### Descripción

Servicio principal para la gestión de personajes de Star Wars. Combina datos obtenidos de la API SWAPI con personajes almacenados localmente en `localStorage`.

### Características

- Consumo de la API SWAPI para obtener personajes
- Almacenamiento local de personajes personalizados
- Fusión de datos de API y localStorage
- Operaciones CRUD sobre personajes locales

### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `http` | `HttpClient` | Cliente HTTP inyectado para peticiones |
| `localKey` | `string` | Clave para almacenamiento en localStorage (`'personajes_local'`) |

### Métodos Públicos

#### `getPersonajes(): Observable<any>`

Obtiene el listado de personajes desde la API SWAPI.

**Endpoint**: `GET https://swapi.dev/api/people/`

**Retorna**: Observable con la respuesta completa de la API

**Ejemplo de uso**:
```typescript
this.starWarsService.getPersonajes().subscribe({
  next: (data) => console.log(data.results),
  error: (err) => console.error(err)
});
```

---

#### `getPersonajesLocal(): Personaje[]`

Obtiene los personajes almacenados localmente en el navegador.

**Retorna**: Array de objetos `Personaje` desde localStorage

**Ejemplo de uso**:
```typescript
const personajesLocales = this.starWarsService.getPersonajesLocal();
console.log(personajesLocales);
```

---

#### `agregarPersonajeLocal(personaje: Personaje): void`

Agrega un nuevo personaje al almacenamiento local.

**Parámetros**:
- `personaje`: Objeto de tipo `Personaje` con propiedades `name`, `gender`, `birth_year`

**Ejemplo de uso**:
```typescript
const nuevoPersonaje: Personaje = {
  name: 'Ahsoka Tano',
  gender: 'female',
  birth_year: '36BBY'
};
this.starWarsService.agregarPersonajeLocal(nuevoPersonaje);
```

---

#### `eliminarPersonajeLocal(nombre: string): void`

Elimina un personaje del almacenamiento local por su nombre.

**Parámetros**:
- `nombre`: Nombre del personaje a eliminar

**Ejemplo de uso**:
```typescript
this.starWarsService.eliminarPersonajeLocal('Ahsoka Tano');
```

---

#### `listarTodos(): Observable<Personaje[]>`

Obtiene todos los personajes combinando los de la API con los almacenados localmente.

**Retorna**: Observable con array de `Personaje` (API + localStorage)

**Proceso**:
1. Consulta la API SWAPI
2. Mapea los resultados usando `PeopleMapper`
3. Obtiene personajes locales
4. Combina ambos arrays y los retorna

**Ejemplo de uso**:
```typescript
this.starWarsService.listarTodos().subscribe({
  next: (personajes) => {
    console.log('Total de personajes:', personajes.length);
    this.personajes = personajes;
  },
  error: (err) => console.error('Error:', err)
});
```

---

### Interface `Personaje`

**Ubicación**: `src/app/starwars/interfaces/people-interfaces.ts`

```typescript
export interface Personaje {
  name: string;
  gender: string;
  birth_year: string;
}
```

---

## 2. PlanetaService

**Ubicación**: `src/app/starwars/services/starwars.planetaService.ts`

### Descripción

Servicio para obtener información de planetas desde SWAPI, con funcionalidad de selección aleatoria.

### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `http` | `HttpClient` | Cliente HTTP inyectado |

### Métodos Públicos

#### `obtenerPlanetaAleatorio(): Observable<Planeta>`

Obtiene un planeta aleatorio de la base de datos de SWAPI.

**Endpoint**: `GET https://swapi.dev/api/planets/{randomId}/`

**Lógica**:
- Genera un ID aleatorio entre 1 y 60
- Realiza petición GET al endpoint de planetas con ese ID

**Retorna**: Observable con objeto `Planeta`

**Ejemplo de uso**:
```typescript
this.planetaService.obtenerPlanetaAleatorio().subscribe({
  next: (planeta) => {
    console.log('Planeta aleatorio:', planeta.name);
    this.planetaActual = planeta;
  },
  error: (err) => console.error('Error al obtener planeta:', err)
});
```

---

### Interface `Planeta`

**Definición en el mismo archivo**:

```typescript
export interface Planeta {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}
```

---

## 3. MovieService

**Ubicación**: `src/app/starwars/services/movie-service.ts`

### Descripción

Servicio para gestionar las películas de Star Wars. Carga automáticamente todas las películas al inicializarse y las mantiene en memoria usando signals de Angular.

### Características

- Carga automática de películas en el constructor
- Uso de Angular Signals para estado reactivo
- Ordenamiento automático por número de episodio
- Búsqueda de películas por episodio

### Propiedades

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `http` | `HttpClient` | Cliente HTTP inyectado |
| `allFilms` | `WritableSignal<Film[] \| null>` | Signal privado con todas las películas |
| `isLoading` | `WritableSignal<boolean>` | Signal público que indica si está cargando |
| `dataReady` | `Signal<Film[] \| null>` | Signal público de solo lectura con las películas |

### Métodos Públicos

#### `getFilmByEpisode(episodeId: number): Film | null`

Busca una película específica por su número de episodio.

**Parámetros**:
- `episodeId`: Número del episodio (1-9)

**Retorna**: Objeto `Film` o `null` si no se encuentra

**Ejemplo de uso**:
```typescript
const episodio5 = this.movieService.getFilmByEpisode(5);
if (episodio5) {
  console.log(episodio5.titulo); // "The Empire Strikes Back"
}
```

---

### Métodos Privados

#### `fetchFilms(): void`

Método privado que se ejecuta automáticamente en el constructor.

**Proceso**:
1. Activa el estado de carga (`isLoading.set(true)`)
2. Realiza petición GET a `https://swapi.dev/api/films`
3. Mapea los resultados usando `FilmMapper`
4. Ordena las películas por número de episodio
5. Actualiza el signal `allFilms`
6. Desactiva el estado de carga

**Endpoint**: `GET https://swapi.dev/api/films`

---

### Interface `Film`

**Ubicación**: `src/app/starwars/interfaces/movie-interface.ts`

```typescript
export interface Film {
  episodio: number;
  titulo: string;
  director: string;
  textoApertura: string;
}
```

### Interfaces de Respuesta SWAPI

```typescript
export interface SwapiFilmResponse {
  episode_id: number;
  title: string;
  director: string;
  opening_crawl: string;
  // ... otros campos
}

export interface SwapiFilmsResult {
  count: number;
  results: SwapiFilmResponse[];
}
```

---

## Mappers

Los servicios utilizan mappers para transformar las respuestas de la API a modelos internos.

### PeopleMapper

**Ubicación**: `src/app/starwars/mapper/people-mapper/people-mapper.ts`

Transforma respuestas de SWAPI People a objetos `Personaje`.

**Método principal**:
```typescript
static mapPersonajes(results: any[]): Personaje[] {
  return results.map(p => ({
    name: p.name,
    gender: p.gender,
    birth_year: p.birth_year
  }));
}
```

---

### FilmMapper

**Ubicación**: `src/app/starwars/mapper/film-mapper/film-mapper.ts`

Transforma respuestas de SWAPI Films a objetos `Film`.

**Método principal**:
```typescript
static mapSwapiFilmsToFilms(results: SwapiFilmResponse[]): Film[] {
  return results.map(filmApi => ({
    episodio: filmApi.episode_id,
    titulo: filmApi.title,
    director: filmApi.director,
    textoApertura: filmApi.opening_crawl
  }));
}
```

---

## Inyección de Dependencias

Todos los servicios utilizan el decorador `@Injectable` con `providedIn: 'root'`:

```typescript
@Injectable({
  providedIn: 'root'
})
```

Esto significa que:
- Se crean como singletons a nivel de aplicación
- No necesitan ser declarados en providers
- Se inyectan automáticamente donde se necesiten

---

## Ejemplo de Uso en Componentes

### Inyección en un Componente

```typescript
import { Component, inject, OnInit } from '@angular/core';
import { StarWarsService } from '../services/starwars.personajeServices.ts';

@Component({
  selector: 'app-people-page',
  standalone: true,
  templateUrl: './people-page.html'
})
export class PeoplePage implements OnInit {
  private starWarsService = inject(StarWarsService);
  personajes: Personaje[] = [];

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.starWarsService.listarTodos().subscribe({
      next: (data) => this.personajes = data,
      error: (err) => console.error(err)
    });
  }

  agregarPersonaje(personaje: Personaje) {
    this.starWarsService.agregarPersonajeLocal(personaje);
    this.cargarPersonajes(); // Recargar lista
  }

  eliminarPersonaje(nombre: string) {
    this.starWarsService.eliminarPersonajeLocal(nombre);
    this.cargarPersonajes(); // Recargar lista
  }
}
```

---

## Manejo de Errores

Los servicios delegan el manejo de errores a los componentes que los consumen. Se recomienda:

```typescript
this.service.metodo().subscribe({
  next: (data) => {
    // Procesar datos exitosos
  },
  error: (err) => {
    console.error('Error:', err);
    // Mostrar mensaje al usuario
    // Registrar en servicio de logging
  }
});
```

---

## Configuración de Entorno

Los servicios obtienen la URL base desde el archivo de configuración:

**`src/environments/environments.ts`**:
```typescript
export const environment = {
  urlBaseStarwars: 'https://swapi.dev/api'
};
```

**Uso en servicios**:
```typescript
import { environment } from '@environments/environments';

this.http.get(`${environment.urlBaseStarwars}/people/`);
```

---

## Próximos Pasos

- Para ver cómo se usan estos servicios en componentes, consulta **[04-componentes.md](./04-componentes.md)**
- Para entender el flujo completo de funcionalidades, revisa **[05-funcionalidades.md](./05-funcionalidades.md)**
