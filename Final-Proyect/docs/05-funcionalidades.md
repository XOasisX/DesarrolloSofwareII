# Funcionalidades del Proyecto

Este documento describe las funcionalidades principales implementadas en la aplicación Star Wars, incluyendo flujos de usuario y casos de uso.

---

## Índice

1. [Sistema de Navegación](#1-sistema-de-navegación)
2. [Gestión de Personajes](#2-gestión-de-personajes)
3. [Visualización de Películas](#3-visualización-de-películas)
4. [Exploración de Planetas](#4-exploración-de-planetas)
5. [Persistencia de Datos](#5-persistencia-de-datos)

---

## 1. Sistema de Navegación

### Descripción General

La aplicación implementa un sistema de navegación basado en rutas de Angular con lazy loading para optimizar el rendimiento.

### Arquitectura de Rutas

**Archivo**: `src/app/app.routes.ts`

```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./starwars/pages/dashboard-page/dashboard-page'),
    children: [
      {
        path: 'people',
        loadComponent: () => import('./starwars/pages/people-page/people-page')
      },
      {
        path: 'movies',
        loadComponent: () => import('./starwars/pages/movies-page/movies-page')
      },
      {
        path: 'planets',
        loadComponent: () => import('./starwars/pages/planets-page/planets-page')
      },
      {
        path: '**',
        redirectTo: 'people'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
```

### Características

- **Lazy Loading**: Los componentes se cargan solo cuando el usuario navega a ellos
- **Rutas anidadas**: Dashboard actúa como contenedor de las rutas hijas
- **Redirecciones automáticas**: 
  - Ruta raíz (`/`) → `/dashboard`
  - Dashboard sin ruta hija → `/dashboard/people`
- **Menú lateral persistente**: El side-menu permanece visible en todas las páginas

### Flujo de Navegación

```
Usuario accede a la app
    ↓
Redirige a /dashboard
    ↓
Redirige a /dashboard/people (por defecto)
    ↓
Usuario puede navegar a:
    - /dashboard/people (Personajes)
    - /dashboard/movies (Películas)
    - /dashboard/planets (Planetas)
```

---

## 2. Gestión de Personajes

### Descripción General

Módulo completo para visualizar, agregar y eliminar personajes de Star Wars, combinando datos de la API SWAPI con almacenamiento local.

### Funcionalidades Principales

#### 2.1 Listado de Personajes

**Ruta**: `/dashboard/people`

**Características**:
- Muestra personajes de la API SWAPI
- Muestra personajes agregados localmente
- Fusiona ambas fuentes en una sola lista
- Indica visualmente el origen de cada personaje

**Datos mostrados por personaje**:
- Nombre
- Género
- Año de nacimiento

**Flujo técnico**:
```
PeoplePage (componente)
    ↓
Llama a StarWarsService.listarTodos()
    ↓
Servicio obtiene datos de SWAPI
    ↓
PeopleMapper transforma datos
    ↓
Servicio obtiene datos de localStorage
    ↓
Combina ambos arrays
    ↓
Retorna lista completa al componente
    ↓
Renderiza en person-list
```

---

#### 2.2 Agregar Personaje

**Ubicación**: Formulario en `person-form` component

**Campos del formulario**:
- **Nombre** (requerido): Nombre del personaje
- **Género** (requerido): Opciones típicas (male, female, n/a, etc.)
- **Año de nacimiento** (requerido): Formato BBY o ABY

**Validaciones**:
- Todos los campos son obligatorios
- El nombre no debe estar vacío
- Se previene el envío de formularios incompletos

**Flujo de usuario**:
```
1. Usuario completa el formulario
2. Usuario hace clic en "Agregar"
3. Componente valida los datos
4. Emite evento al componente padre
5. Padre llama a StarWarsService.agregarPersonajeLocal()
6. Servicio guarda en localStorage
7. Lista se actualiza automáticamente
8. Formulario se resetea
```

**Código de ejemplo**:
```typescript
agregarPersonaje(personaje: Personaje) {
  this.starWarsService.agregarPersonajeLocal(personaje);
  this.cargarPersonajes(); // Recargar lista
}
```

---

#### 2.3 Eliminar Personaje

**Restricción**: Solo se pueden eliminar personajes agregados localmente (no los de la API)

**Flujo de usuario**:
```
1. Usuario identifica personaje local en la lista
2. Usuario hace clic en botón "Eliminar"
3. Componente emite evento con el nombre del personaje
4. Padre llama a StarWarsService.eliminarPersonajeLocal()
5. Servicio filtra el personaje del localStorage
6. Lista se actualiza automáticamente
```

**Código de ejemplo**:
```typescript
eliminarPersonaje(nombre: string) {
  this.starWarsService.eliminarPersonajeLocal(nombre);
  this.cargarPersonajes(); // Recargar lista
}
```

---

### Casos de Uso

#### Caso de Uso 1: Ver todos los personajes

**Actor**: Usuario

**Precondiciones**: Ninguna

**Flujo principal**:
1. Usuario accede a la aplicación
2. Sistema redirige a `/dashboard/people`
3. Sistema carga personajes de SWAPI
4. Sistema carga personajes locales
5. Sistema muestra lista combinada

**Postcondiciones**: Usuario ve todos los personajes disponibles

---

#### Caso de Uso 2: Agregar personaje personalizado

**Actor**: Usuario

**Precondiciones**: Usuario está en `/dashboard/people`

**Flujo principal**:
1. Usuario completa formulario con datos del personaje
2. Usuario hace clic en "Agregar"
3. Sistema valida los datos
4. Sistema guarda en localStorage
5. Sistema actualiza la lista
6. Sistema muestra mensaje de éxito

**Flujo alternativo**:
- Si hay errores de validación, sistema muestra mensajes de error

**Postcondiciones**: Nuevo personaje aparece en la lista

---

#### Caso de Uso 3: Eliminar personaje local

**Actor**: Usuario

**Precondiciones**: Existe al menos un personaje local

**Flujo principal**:
1. Usuario identifica personaje local
2. Usuario hace clic en botón "Eliminar"
3. Sistema elimina del localStorage
4. Sistema actualiza la lista

**Postcondiciones**: Personaje ya no aparece en la lista

---

## 3. Visualización de Películas

### Descripción General

Módulo para explorar todas las películas de la saga Star Wars con información detallada.

### Funcionalidades Principales

#### 3.1 Listado de Películas

**Ruta**: `/dashboard/movies`

**Características**:
- Carga automática al iniciar la aplicación
- Ordenamiento por número de episodio (I-IX)
- Visualización en formato de tarjetas
- Estado de carga visible

**Datos mostrados por película**:
- Número de episodio
- Título
- Director
- Texto de apertura (opening crawl)

**Flujo técnico**:
```
App inicia
    ↓
MovieService se inicializa (constructor)
    ↓
fetchFilms() se ejecuta automáticamente
    ↓
Petición GET a SWAPI /films
    ↓
FilmMapper transforma datos
    ↓
Películas se ordenan por episodio
    ↓
Signal allFilms se actualiza
    ↓
Componentes reactivos se actualizan automáticamente
```

---

#### 3.2 Búsqueda por Episodio

**Método**: `MovieService.getFilmByEpisode(episodeId: number)`

**Uso**: Permite obtener una película específica por su número de episodio

**Ejemplo**:
```typescript
const episodio5 = this.movieService.getFilmByEpisode(5);
console.log(episodio5.titulo); // "The Empire Strikes Back"
```

---

### Casos de Uso

#### Caso de Uso 4: Ver todas las películas

**Actor**: Usuario

**Precondiciones**: Ninguna

**Flujo principal**:
1. Usuario navega a `/dashboard/movies`
2. Sistema muestra indicador de carga
3. Sistema obtiene películas de SWAPI
4. Sistema ordena por episodio
5. Sistema muestra tarjetas de películas

**Postcondiciones**: Usuario ve todas las películas ordenadas

---

## 4. Exploración de Planetas

### Descripción General

Módulo para descubrir planetas del universo Star Wars con generador aleatorio.

### Funcionalidades Principales

#### 4.1 Planeta Aleatorio

**Ruta**: `/dashboard/planets`

**Características**:
- Genera un planeta aleatorio de la base de datos SWAPI (IDs 1-60)
- Muestra información detallada del planeta
- Botón para generar nuevo planeta

**Datos mostrados por planeta**:
- Nombre
- Período de rotación
- Período orbital
- Diámetro
- Clima
- Gravedad
- Terreno
- Agua superficial
- Población

**Flujo técnico**:
```
Usuario hace clic en "Generar Planeta"
    ↓
Componente llama a PlanetaService.obtenerPlanetaAleatorio()
    ↓
Servicio genera ID aleatorio (1-60)
    ↓
Petición GET a SWAPI /planets/{id}
    ↓
Respuesta se mapea a interface Planeta
    ↓
Componente actualiza vista con datos
```

---

### Casos de Uso

#### Caso de Uso 5: Generar planeta aleatorio

**Actor**: Usuario

**Precondiciones**: Usuario está en `/dashboard/planets`

**Flujo principal**:
1. Usuario hace clic en "Generar Planeta Aleatorio"
2. Sistema genera ID aleatorio
3. Sistema obtiene planeta de SWAPI
4. Sistema muestra información del planeta

**Flujo alternativo**:
- Si el ID no existe, sistema muestra error y permite reintentar

**Postcondiciones**: Usuario ve información de un planeta aleatorio

---

## 5. Persistencia de Datos

### Descripción General

Sistema de almacenamiento local para personajes personalizados usando la API de `localStorage` del navegador.

### Características

#### 5.1 Almacenamiento

**Clave**: `'personajes_local'`

**Formato**: JSON string de array de objetos `Personaje`

**Ejemplo de datos almacenados**:
```json
[
  {
    "name": "Ahsoka Tano",
    "gender": "female",
    "birth_year": "36BBY"
  },
  {
    "name": "Din Djarin",
    "gender": "male",
    "birth_year": "unknown"
  }
]
```

---

#### 5.2 Operaciones CRUD

##### Create (Agregar)
```typescript
agregarPersonajeLocal(personaje: Personaje): void {
  const actuales = this.getPersonajesLocal();
  actuales.push(personaje);
  localStorage.setItem(this.localKey, JSON.stringify(actuales));
}
```

##### Read (Leer)
```typescript
getPersonajesLocal(): Personaje[] {
  const data = localStorage.getItem(this.localKey);
  return data ? JSON.parse(data) : [];
}
```

##### Delete (Eliminar)
```typescript
eliminarPersonajeLocal(nombre: string): void {
  const actuales = this.getPersonajesLocal();
  const filtrados = actuales.filter(p => p.name !== nombre);
  localStorage.setItem(this.localKey, JSON.stringify(filtrados));
}
```

---

#### 5.3 Limitaciones

- **Capacidad**: localStorage tiene límite de ~5-10MB según navegador
- **Persistencia**: Datos se pierden si el usuario limpia el caché del navegador
- **Seguridad**: Datos no están encriptados
- **Sincronización**: No hay sincronización entre dispositivos

---

## Flujo Completo de Usuario

### Escenario: Usuario explora la aplicación completa

```
1. Usuario abre la aplicación
   ↓
2. Sistema redirige a /dashboard/people
   ↓
3. Usuario ve listado de personajes (SWAPI + locales)
   ↓
4. Usuario agrega un personaje personalizado
   ↓
5. Sistema guarda en localStorage y actualiza lista
   ↓
6. Usuario navega a /dashboard/movies
   ↓
7. Sistema muestra películas ordenadas por episodio
   ↓
8. Usuario navega a /dashboard/planets
   ↓
9. Usuario genera planeta aleatorio
   ↓
10. Sistema muestra información detallada del planeta
    ↓
11. Usuario genera otro planeta
    ↓
12. Usuario regresa a /dashboard/people
    ↓
13. Usuario elimina un personaje local
    ↓
14. Sistema actualiza localStorage y lista
```

---

## Manejo de Estados

### Estados de Carga

La aplicación maneja diferentes estados para mejorar la experiencia de usuario:

#### Loading (Cargando)
```typescript
isLoading = signal<boolean>(false);

// Mostrar en template
<div *ngIf="isLoading()">
  Cargando datos...
</div>
```

#### Success (Éxito)
```typescript
// Datos disponibles
<div *ngIf="!isLoading() && data.length > 0">
  <!-- Mostrar datos -->
</div>
```

#### Error (Error)
```typescript
// Manejo de errores
error: (err) => {
  console.error('Error:', err);
  this.mostrarMensajeError('No se pudieron cargar los datos');
}
```

#### Empty (Vacío)
```typescript
<div *ngIf="!isLoading() && data.length === 0">
  No hay datos disponibles
</div>
```

---

## Optimizaciones Implementadas

### 1. Lazy Loading
- Componentes se cargan solo cuando se necesitan
- Reduce el tiempo de carga inicial

### 2. Signals de Angular
- Reactividad automática sin necesidad de `ChangeDetectorRef`
- Mejor rendimiento en actualizaciones de UI

### 3. Singleton Services
- Servicios con `providedIn: 'root'` se instancian una sola vez
- Datos de películas se cargan una sola vez y se reutilizan

### 4. Mappers
- Transformación de datos centralizada
- Modelos internos desacoplados de la API externa

---

## Próximos Pasos

Para instrucciones de instalación y ejecución del proyecto, consulta **[06-instalacion-ejecucion.md](./06-instalacion-ejecucion.md)**.
