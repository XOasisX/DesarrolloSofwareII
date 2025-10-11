# Estructura del Proyecto

Este documento describe la organización de archivos y carpetas del proyecto **Final-Proyect**.

---

## Árbol de Directorios Principal

```
Final-Proyect/
├── .angular/                    # Caché de Angular CLI
├── .vscode/                     # Configuración de Visual Studio Code
├── docs/                        # Documentación del proyecto (este directorio)
├── node_modules/                # Dependencias instaladas
├── public/                      # Recursos públicos estáticos
├── src/                         # Código fuente de la aplicación
│   ├── app/                     # Módulo principal de la aplicación
│   ├── environments/            # Configuración de entornos
│   ├── index.html               # Documento HTML raíz
│   ├── main.ts                  # Punto de entrada de la aplicación
│   └── styles.css               # Estilos globales (TailwindCSS)
├── .editorconfig                # Configuración del editor
├── .gitignore                   # Archivos ignorados por Git
├── .postcssrc.json              # Configuración de PostCSS
├── angular.json                 # Configuración de Angular CLI
├── package.json                 # Dependencias y scripts del proyecto
├── package-lock.json            # Lockfile de dependencias
├── README.md                    # Documentación principal
├── tsconfig.app.json            # Configuración TypeScript para la app
├── tsconfig.json                # Configuración base de TypeScript
└── tsconfig.spec.json           # Configuración TypeScript para tests
```

---

## Estructura del Directorio `src/`

### Directorio Raíz de `src/`

```
src/
├── app/                         # Aplicación Angular
├── environments/                # Variables de entorno
├── index.html                   # HTML principal
├── main.ts                      # Bootstrap de la aplicación
└── styles.css                   # Estilos globales
```

#### Archivos Clave

- **`main.ts`**: Punto de entrada que inicializa la aplicación Angular
- **`index.html`**: Documento HTML base donde se monta la aplicación
- **`styles.css`**: Archivo de estilos globales con directivas de TailwindCSS

---

## Estructura del Directorio `src/app/`

```
src/app/
├── starwars/                    # Módulo de dominio Star Wars
│   ├── components/              # Componentes reutilizables
│   ├── interfaces/              # Interfaces TypeScript
│   ├── mapper/                  # Transformadores de datos
│   ├── pages/                   # Páginas/vistas principales
│   └── services/                # Servicios de lógica de negocio
├── app.config.ts                # Configuración de la aplicación
├── app.css                      # Estilos del componente raíz
├── app.html                     # Template del componente raíz
├── app.routes.ts                # Definición de rutas
├── app.spec.ts                  # Tests del componente raíz
└── app.ts                       # Componente raíz (AppComponent)
```

### Archivos Principales

| Archivo | Descripción |
|---------|-------------|
| `app.ts` | Componente raíz standalone de la aplicación |
| `app.routes.ts` | Configuración de rutas con lazy loading |
| `app.config.ts` | Configuración de providers y servicios globales |
| `app.html` | Template principal con `<router-outlet>` |

---

## Estructura del Módulo `starwars/`

### Vista General

```
src/app/starwars/
├── components/
│   ├── movies-list/
│   ├── people-list-pricipal/
│   │   ├── person-form/
│   │   └── person-list/
│   ├── planets-list-pricipal/
│   │   └── planeta-aleatorio/
│   └── side-menu/
│       ├── side-menu-header/
│       └── side-menu-options/
├── interfaces/
│   ├── movie-interface.ts
│   └── people-interfaces.ts
├── mapper/
│   ├── film-mapper/
│   │   └── film-mapper.ts
│   └── people-mapper/
│       └── people-mapper.ts
├── pages/
│   ├── dashboard-page/
│   ├── movies-page/
│   ├── people-page/
│   └── planets-page/
└── services/
    ├── movie-service.ts
    ├── starwars.personajeServices.ts
    └── starwars.planetaService.ts
```

---

## Detalle de Subcarpetas

### 1. `components/`

Componentes reutilizables organizados por funcionalidad:

#### **`movies-list/`**
- Componente para mostrar el listado de películas
- Archivos: `movies-list.ts`, `movies-list.html`

#### **`people-list-pricipal/`**
- Componente principal para gestión de personajes
- Subcomponentes:
  - **`person-form/`**: Formulario para agregar personajes
  - **`person-list/`**: Lista de personajes con opción de eliminar

#### **`planets-list-pricipal/`**
- Componente principal para gestión de planetas
- Subcomponentes:
  - **`planeta-aleatorio/`**: Generador de planeta aleatorio

#### **`side-menu/`**
- Menú lateral de navegación
- Subcomponentes:
  - **`side-menu-header/`**: Encabezado del menú
  - **`side-menu-options/`**: Opciones de navegación

---

### 2. `interfaces/`

Definiciones de tipos TypeScript:

| Archivo | Descripción |
|---------|-------------|
| `movie-interface.ts` | Interfaces para películas (`Film`, `SwapiFilmResponse`, `SwapiFilmsResult`) |
| `people-interfaces.ts` | Interfaces para personajes (`Personaje`, `SwapiPeopleResponse`) |

---

### 3. `mapper/`

Transformadores de datos de la API a modelos internos:

#### **`film-mapper/`**
- **`film-mapper.ts`**: Convierte respuestas de SWAPI a objetos `Film`
- Mapea: `episode_id`, `title`, `director`, `opening_crawl`

#### **`people-mapper/`**
- **`people-mapper.ts`**: Convierte respuestas de SWAPI a objetos `Personaje`
- Mapea: `name`, `gender`, `birth_year`

---

### 4. `pages/`

Páginas principales de la aplicación (componentes de ruta):

| Página | Ruta | Descripción |
|--------|------|-------------|
| `dashboard-page/` | `/dashboard` | Página contenedora con menú lateral |
| `people-page/` | `/dashboard/people` | Vista de personajes |
| `movies-page/` | `/dashboard/movies` | Vista de películas |
| `planets-page/` | `/dashboard/planets` | Vista de planetas |

Cada página contiene:
- Archivo TypeScript (`.ts`)
- Template HTML (`.html`)

---

### 5. `services/`

Servicios inyectables para lógica de negocio:

| Servicio | Archivo | Responsabilidad |
|----------|---------|-----------------|
| `StarWarsService` | `starwars.personajeServices.ts` | Gestión de personajes (API + localStorage) |
| `PlanetaService` | `starwars.planetaService.ts` | Obtención de planetas aleatorios |
| `MovieService` | `movie-service.ts` | Carga y gestión de películas |

---

## Estructura de `environments/`

```
src/environments/
├── environments.ts              # Configuración de desarrollo
└── environments.development.ts  # Configuración específica de desarrollo
```

### Contenido de `environments.ts`

```typescript
export const environment = {
    production: false,
    companyName: 'Starwars',
    companyNeme2: 'Apps',
    companySlogan: 'Mundo de Starwars',
    urlBaseStarwars: 'https://swapi.dev/api'
};
```

---

## Archivos de Configuración Raíz

### `angular.json`
Configuración de Angular CLI:
- Rutas de build
- Configuración de assets
- Opciones de desarrollo y producción
- Configuración de tests

### `tsconfig.json`
Configuración base de TypeScript:
- Opciones del compilador
- Paths aliases (ej: `@environments`)
- Configuración de módulos

### `package.json`
Metadatos del proyecto:
- Scripts de ejecución
- Dependencias de producción y desarrollo
- Configuración de Prettier

### `.postcssrc.json`
Configuración de PostCSS para TailwindCSS:
```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

---

## Convenciones de Nomenclatura

### Componentes
- Formato: `nombre-componente.ts` y `nombre-componente.html`
- Ejemplo: `side-menu.ts`, `side-menu.html`

### Servicios
- Formato: `nombre.service.ts` o `dominio.nombreService.ts`
- Ejemplo: `movie-service.ts`, `starwars.personajeServices.ts`

### Interfaces
- Formato: `nombre-interface.ts` o `nombre-interfaces.ts`
- Ejemplo: `movie-interface.ts`, `people-interfaces.ts`

### Páginas
- Formato: `nombre-page/nombre-page.ts`
- Ejemplo: `dashboard-page/dashboard-page.ts`

---

## Próximos Pasos

- Para entender los servicios en detalle, consulta **[03-servicios.md](./03-servicios.md)**
- Para conocer los componentes, revisa **[04-componentes.md](./04-componentes.md)**
- Para ver las funcionalidades, lee **[05-funcionalidades.md](./05-funcionalidades.md)**
