# Introducción al Proyecto Final - Star Wars App

## Integrantes del Proyecto

- **Angie Cantor**
- **Diego Chavez**

---

## Propósito del Proyecto

Este proyecto es una **aplicación web interactiva** construida con **Angular 20** que permite explorar el universo de Star Wars mediante el consumo de la API pública **SWAPI** (Star Wars API). La aplicación ofrece una interfaz moderna y responsiva para visualizar información sobre personajes, películas y planetas de la saga.

### Objetivos Principales

1. **Consumo de API REST**: Integración con SWAPI para obtener datos actualizados de Star Wars.
2. **Gestión de datos locales**: Permitir a los usuarios agregar, listar y eliminar personajes personalizados almacenados en `localStorage`.
3. **Navegación fluida**: Implementar un sistema de rutas con carga perezosa (lazy loading) para optimizar el rendimiento.
4. **Interfaz moderna**: Utilizar TailwindCSS para crear una experiencia visual atractiva y responsiva.

---

## Alcance del Proyecto

### Funcionalidades Implementadas

- **Dashboard principal** con navegación entre secciones
- **Módulo de Personajes (People)**:
  - Listado de personajes desde SWAPI
  - Fusión con personajes almacenados localmente
  - Formulario para agregar nuevos personajes
  - Opción para eliminar personajes locales
- **Módulo de Películas (Movies)**:
  - Listado completo de las películas de la saga
  - Ordenamiento por número de episodio
  - Visualización de detalles (director, texto de apertura)
- **Módulo de Planetas (Planets)**:
  - Listado de planetas
  - Generador de planeta aleatorio
  - Información detallada (clima, terreno, población, etc.)
- **Menú lateral de navegación** con opciones para cada sección

### Limitaciones

- No incluye autenticación de usuarios
- Los datos locales se almacenan únicamente en el navegador (localStorage)
- Dependencia de la disponibilidad de SWAPI

---

## Tecnologías Utilizadas

### Framework Principal

- **Angular 20.3.0**: Framework de desarrollo web moderno con arquitectura basada en componentes standalone

### Lenguajes

- **TypeScript 5.9.2**: Lenguaje principal para lógica de negocio
- **HTML5**: Estructura de las vistas
- **CSS3 + TailwindCSS**: Estilos y diseño responsivo

### Bibliotecas y Herramientas

- **RxJS 7.8**: Programación reactiva para manejo de observables y streams de datos
- **HttpClient**: Módulo de Angular para peticiones HTTP
- **Angular Router**: Sistema de navegación y rutas
- **Angular Forms**: Manejo de formularios reactivos

---

## Dependencias del Proyecto

### Dependencias de Producción

```json
{
  "@angular/common": "^20.3.0",
  "@angular/compiler": "^20.3.0",
  "@angular/core": "^20.3.0",
  "@angular/forms": "^20.3.0",
  "@angular/platform-browser": "^20.3.0",
  "@angular/router": "^20.3.0",
  "@tailwindcss/postcss": "^4.1.14",
  "postcss": "^8.5.6",
  "rxjs": "~7.8.0",
  "tailwindcss": "^4.1.14",
  "tslib": "^2.3.0",
  "zone.js": "~0.15.0"
}
```

### Dependencias de Desarrollo

```json
{
  "@angular/build": "^20.3.3",
  "@angular/cli": "^20.3.3",
  "@angular/compiler-cli": "^20.3.0",
  "@types/jasmine": "~5.1.0",
  "jasmine-core": "~5.9.0",
  "karma": "~6.4.0",
  "karma-chrome-launcher": "~3.2.0",
  "karma-coverage": "~2.2.0",
  "karma-jasmine": "~5.1.0",
  "karma-jasmine-html-reporter": "~2.1.0",
  "typescript": "~5.9.2"
}
```

---

## Requisitos Previos

Para ejecutar este proyecto en tu entorno local, necesitas tener instalado:

1. **Node.js** (versión 18 o superior recomendada)
2. **npm** (incluido con Node.js) o **yarn**
3. **Angular CLI** (opcional, pero recomendado):
   ```bash
   npm install -g @angular/cli
   ```

---

## API Externa Utilizada

### SWAPI - The Star Wars API

- **URL Base**: `https://swapi.dev/api`
- **Documentación**: [https://swapi.dev/documentation](https://swapi.dev/documentation)

#### Endpoints Consumidos

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/people/` | GET | Obtiene listado de personajes |
| `/films/` | GET | Obtiene listado de películas |
| `/planets/` | GET | Obtiene listado de planetas |
| `/planets/{id}/` | GET | Obtiene un planeta específico por ID |

---

## Arquitectura del Proyecto

El proyecto sigue una **arquitectura modular** basada en:

- **Componentes Standalone**: Sin necesidad de NgModules tradicionales
- **Lazy Loading**: Carga diferida de componentes para optimizar el rendimiento
- **Separación por dominios**: Organización del código por funcionalidad (starwars/)
- **Servicios inyectables**: Lógica de negocio centralizada y reutilizable
- **Mappers**: Transformación de datos de la API a modelos internos

---

## Convenciones de Código

El proyecto utiliza **Prettier** para mantener un estilo de código consistente:

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
```

---

## Próximos Pasos

Para comenzar a trabajar con el proyecto, consulta el documento **[06-instalacion-ejecucion.md](./06-instalacion-ejecucion.md)** donde encontrarás instrucciones detalladas de instalación y ejecución.
