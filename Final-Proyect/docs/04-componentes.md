# Componentes y Páginas del Proyecto

Este documento describe los componentes y páginas implementados en la aplicación, su estructura y responsabilidades.

---

## Índice

1. [Páginas Principales](#páginas-principales)
2. [Componentes de Navegación](#componentes-de-navegación)
3. [Componentes de Listado](#componentes-de-listado)
4. [Componente Raíz](#componente-raíz)

---

## Páginas Principales

Las páginas son componentes standalone que se cargan mediante lazy loading en las rutas de la aplicación.

### 1. Dashboard Page

**Ubicación**: `src/app/starwars/pages/dashboard-page/`

**Ruta**: `/dashboard`

#### Descripción

Página contenedora principal que incluye el menú lateral de navegación y un `<router-outlet>` para renderizar las páginas hijas (People, Movies, Planets).

#### Estructura

```
dashboard-page/
├── dashboard-page.ts       # Lógica del componente
└── dashboard-page.html     # Template con layout
```

#### Responsabilidades

- Proporcionar el layout principal de la aplicación
- Renderizar el componente `side-menu`
- Contener el `<router-outlet>` para las rutas hijas
- Gestionar el diseño responsivo

#### Rutas Hijas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/dashboard/people` | PeoplePage | Vista de personajes |
| `/dashboard/movies` | MoviesPage | Vista de películas |
| `/dashboard/planets` | PlanetsPage | Vista de planetas |

---

### 2. People Page

**Ubicación**: `src/app/starwars/pages/people-page/`

**Ruta**: `/dashboard/people`

#### Descripción

Página dedicada a la gestión y visualización de personajes de Star Wars.

#### Estructura

```
people-page/
├── people-page.ts          # Lógica del componente
└── people-page.html        # Template
```

#### Responsabilidades

- Cargar personajes desde `StarWarsService`
- Renderizar el componente `people-list-pricipal`
- Gestionar el estado de carga
- Manejar errores de la API

#### Funcionalidades

- Listado de personajes de SWAPI
- Listado de personajes locales
- Formulario para agregar nuevos personajes
- Opción para eliminar personajes locales

---

### 3. Movies Page

**Ubicación**: `src/app/starwars/pages/movies-page/`

**Ruta**: `/dashboard/movies`

#### Descripción

Página que muestra el listado completo de películas de la saga Star Wars.

#### Estructura

```
movies-page/
├── movies-page.ts          # Lógica del componente
└── movies-page.html        # Template
```

#### Responsabilidades

- Acceder a los datos de `MovieService`
- Renderizar el componente `movies-list`
- Mostrar estado de carga
- Ordenar películas por episodio

#### Funcionalidades

- Listado de todas las películas
- Visualización de detalles (título, episodio, director)
- Texto de apertura de cada película

---

### 4. Planets Page

**Ubicación**: `src/app/starwars/pages/planets-page/`

**Ruta**: `/dashboard/planets`

#### Descripción

Página dedicada a la exploración de planetas del universo Star Wars.

#### Estructura

```
planets-page/
├── planets-page.ts         # Lógica del componente
└── planets-page.html       # Template
```

#### Responsabilidades

- Renderizar el componente `planets-list-pricipal`
- Gestionar la visualización de planetas
- Integrar el generador de planeta aleatorio

#### Funcionalidades

- Listado de planetas
- Generador de planeta aleatorio
- Visualización de características de planetas

---

## Componentes de Navegación

### Side Menu

**Ubicación**: `src/app/starwars/components/side-menu/`

#### Descripción

Menú lateral de navegación que permite al usuario moverse entre las diferentes secciones de la aplicación.

#### Estructura

```
side-menu/
├── side-menu.ts                    # Componente principal
├── side-menu.html                  # Template
├── side-menu-header/               # Subcomponente de encabezado
│   ├── side-menu-header.ts
│   └── side-menu-header.html
└── side-menu-options/              # Subcomponente de opciones
    ├── side-menu-options.ts
    └── side-menu-options.html
```

#### Subcomponentes

##### Side Menu Header

**Responsabilidades**:
- Mostrar el logo o título de la aplicación
- Renderizar información de la empresa/proyecto
- Proporcionar branding visual

**Datos mostrados**:
- Nombre de la aplicación (desde `environment.companyName`)
- Slogan (desde `environment.companySlogan`)

##### Side Menu Options

**Responsabilidades**:
- Renderizar las opciones de navegación
- Gestionar el estado activo de cada opción
- Manejar la navegación mediante `RouterLink`

**Opciones de navegación**:
```typescript
opciones = [
  { label: 'Personajes', route: '/dashboard/people', icon: 'people' },
  { label: 'Películas', route: '/dashboard/movies', icon: 'movie' },
  { label: 'Planetas', route: '/dashboard/planets', icon: 'planet' }
];
```

---

## Componentes de Listado

### 1. People List Principal

**Ubicación**: `src/app/starwars/components/people-list-pricipal/`

#### Descripción

Componente principal para la gestión de personajes, que integra el listado y el formulario.

#### Estructura

```
people-list-pricipal/
├── people-list-pricipal.ts         # Componente principal
├── people-list-pricipal.html       # Template
├── person-form/                    # Formulario de personajes
│   └── person-form.html
└── person-list/                    # Lista de personajes
    ├── person-list.ts
    └── person-list.html
```

#### Subcomponentes

##### Person Form

**Responsabilidades**:
- Renderizar formulario para agregar personajes
- Validar datos de entrada
- Emitir evento al agregar personaje

**Campos del formulario**:
- Nombre (name)
- Género (gender)
- Año de nacimiento (birth_year)

**Ejemplo de uso**:
```html
<person-form (onAgregarPersonaje)="agregarPersonaje($event)"></person-form>
```

##### Person List

**Responsabilidades**:
- Mostrar listado de personajes
- Identificar personajes locales vs. API
- Proporcionar botón de eliminar para personajes locales
- Emitir evento al eliminar personaje

**Inputs**:
- `personajes: Personaje[]` - Array de personajes a mostrar

**Outputs**:
- `onEliminarPersonaje: EventEmitter<string>` - Emite el nombre del personaje a eliminar

**Ejemplo de uso**:
```html
<person-list 
  [personajes]="personajes" 
  (onEliminarPersonaje)="eliminarPersonaje($event)">
</person-list>
```

---

### 2. Movies List

**Ubicación**: `src/app/starwars/components/movies-list/`

#### Descripción

Componente para mostrar el listado de películas con sus detalles.

#### Estructura

```
movies-list/
├── movies-list.ts              # Lógica del componente
└── movies-list.html            # Template
```

#### Responsabilidades

- Recibir array de películas como input
- Renderizar tarjetas de películas
- Mostrar detalles: episodio, título, director, texto de apertura
- Aplicar estilos responsivos

#### Inputs

- `peliculas: Film[]` - Array de películas a mostrar

#### Ejemplo de uso

```html
<movies-list [peliculas]="todasLasPeliculas"></movies-list>
```

---

### 3. Planets List Principal

**Ubicación**: `src/app/starwars/components/planets-list-pricipal/`

#### Descripción

Componente principal para la visualización de planetas.

#### Estructura

```
planets-list-pricipal/
├── planets-list-pricipal.ts        # Componente principal
├── planets-list-pricipal.html      # Template
└── planeta-aleatorio/              # Generador aleatorio
    ├── planeta-aleatorio.ts
    └── planeta-aleatorio.html
```

#### Subcomponentes

##### Planeta Aleatorio

**Responsabilidades**:
- Consumir `PlanetaService` para obtener planeta aleatorio
- Renderizar información del planeta
- Proporcionar botón para generar nuevo planeta

**Datos mostrados**:
- Nombre del planeta
- Período de rotación
- Período orbital
- Diámetro
- Clima
- Gravedad
- Terreno
- Agua superficial
- Población

**Ejemplo de uso**:
```html
<planeta-aleatorio></planeta-aleatorio>
```

---

## Componente Raíz

### App Component

**Ubicación**: `src/app/app.ts`

#### Descripción

Componente raíz standalone de la aplicación.

#### Estructura

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'final-proyect';
}
```

#### Responsabilidades

- Ser el punto de entrada de la aplicación
- Contener el `<router-outlet>` principal
- Importar módulos necesarios (RouterOutlet)

#### Template (`app.html`)

```html
<router-outlet></router-outlet>
```

---

## Patrón de Comunicación entre Componentes

### Parent → Child (Input)

Los componentes padres pasan datos a los hijos mediante `@Input()`:

```typescript
// Componente hijo
@Input() personajes: Personaje[] = [];

// Componente padre (template)
<person-list [personajes]="listaPersonajes"></person-list>
```

---

### Child → Parent (Output)

Los componentes hijos emiten eventos a los padres mediante `@Output()`:

```typescript
// Componente hijo
@Output() onEliminarPersonaje = new EventEmitter<string>();

eliminar(nombre: string) {
  this.onEliminarPersonaje.emit(nombre);
}

// Componente padre (template)
<person-list (onEliminarPersonaje)="eliminarPersonaje($event)"></person-list>
```

---

## Componentes Standalone

Todos los componentes del proyecto son **standalone**, lo que significa:

- No requieren `NgModule`
- Importan directamente sus dependencias
- Se pueden cargar de forma perezosa (lazy loading)

**Ejemplo de componente standalone**:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-menu.html'
})
export class SideMenu {
  // Lógica del componente
}
```

---

## Estilos de Componentes

### TailwindCSS

Todos los componentes utilizan clases de TailwindCSS para el estilo:

```html
<div class="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
  <h2 class="text-2xl font-bold text-gray-800">Título</h2>
  <p class="text-gray-600">Contenido</p>
</div>
```

### Estilos Globales

Los estilos globales se definen en `src/styles.css`:

```css
@import 'tailwindcss';
```

---

## Ciclo de Vida de Componentes

Los componentes utilizan hooks del ciclo de vida de Angular:

### OnInit

Se ejecuta al inicializar el componente:

```typescript
export class PeoplePage implements OnInit {
  ngOnInit() {
    this.cargarPersonajes();
  }
}
```

### OnDestroy

Se ejecuta al destruir el componente (útil para limpiar suscripciones):

```typescript
export class MoviesPage implements OnDestroy {
  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
```

---

## Directivas Comunes Utilizadas

### Estructurales

- **`*ngIf`**: Renderizado condicional
  ```html
  <div *ngIf="personajes.length > 0">
    <!-- Contenido -->
  </div>
  ```

- **`*ngFor`**: Iteración sobre arrays
  ```html
  <div *ngFor="let personaje of personajes">
    {{ personaje.name }}
  </div>
  ```

### De Atributo

- **`[class]`**: Binding de clases CSS
  ```html
  <div [class.active]="isActive">Contenido</div>
  ```

- **`[routerLink]`**: Navegación
  ```html
  <a [routerLink]="['/dashboard/people']">Personajes</a>
  ```

---

## Próximos Pasos

- Para entender el flujo completo de funcionalidades, consulta **[05-funcionalidades.md](./05-funcionalidades.md)**
- Para instrucciones de instalación y ejecución, revisa **[06-instalacion-ejecucion.md](./06-instalacion-ejecucion.md)**
