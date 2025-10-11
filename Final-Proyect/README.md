# Documentación del Proyecto Final - Star Wars App

Bienvenido a la documentación completa del proyecto **Final-Proyect**, una aplicación web interactiva de Star Wars construida con Angular 20.

---

## 📚 Índice de Documentación

Esta documentación está organizada en módulos temáticos para facilitar la navegación y comprensión del proyecto.

### 1. [Introducción](./docs/01-introduccion.md)
**Integrantes, propósito y dependencias**

Contenido:
- Integrantes del proyecto (Angie Cantor y Diego Chavez)
- Propósito y objetivos del proyecto
- Alcance y limitaciones
- Tecnologías utilizadas
- Dependencias de producción y desarrollo
- Requisitos previos
- API externa (SWAPI)
- Arquitectura general
- Convenciones de código

**Ideal para**: Entender el contexto general del proyecto y sus objetivos.

---

### 2. [Estructura del Proyecto](./docs/02-estructura.md)
**Organización de archivos y carpetas**

Contenido:
- Árbol de directorios completo
- Estructura de `src/`
- Estructura de `src/app/`
- Detalle del módulo `starwars/`
- Componentes, servicios, interfaces y mappers
- Archivos de configuración
- Convenciones de nomenclatura

**Ideal para**: Navegar el proyecto y entender dónde se encuentra cada archivo.

---

### 3. [Servicios](./docs/03-servicios.md)
**Lógica de negocio y consumo de APIs**

Contenido:
- **StarWarsService**: Gestión de personajes (API + localStorage)
- **PlanetaService**: Obtención de planetas aleatorios
- **MovieService**: Carga y gestión de películas
- Interfaces de datos
- Mappers (PeopleMapper, FilmMapper)
- Ejemplos de uso
- Manejo de errores
- Configuración de entornos

**Ideal para**: Entender cómo se obtienen y gestionan los datos.

---

### 4. [Componentes y Páginas](./docs/04-componentes.md)
**Estructura de la interfaz de usuario**

Contenido:
- **Páginas principales**: Dashboard, People, Movies, Planets
- **Componentes de navegación**: Side Menu y subcomponentes
- **Componentes de listado**: People List, Movies List, Planets List
- Componente raíz (App)
- Patrón de comunicación entre componentes (Input/Output)
- Componentes standalone
- Estilos con TailwindCSS
- Ciclo de vida de componentes
- Directivas comunes

**Ideal para**: Entender la estructura de la UI y cómo se comunican los componentes.

---

### 5. [Funcionalidades](./docs/05-funcionalidades.md)
**Casos de uso y flujos de usuario**

Contenido:
- **Sistema de navegación**: Rutas y lazy loading
- **Gestión de personajes**: Listar, agregar, eliminar
- **Visualización de películas**: Listado y búsqueda
- **Exploración de planetas**: Generador aleatorio
- **Persistencia de datos**: localStorage
- Casos de uso detallados
- Flujo completo de usuario
- Manejo de estados (loading, success, error, empty)
- Optimizaciones implementadas

**Ideal para**: Comprender qué puede hacer el usuario en la aplicación.

---

### 6. [Instalación y Ejecución](./docs/06-instalacion-ejecucion.md)
**Guía paso a paso para desarrolladores**

Contenido:
- Requisitos previos (Node.js, npm, Git)
- Instalación de dependencias
- Configuración del entorno
- Ejecución en modo desarrollo
- Construcción para producción
- Ejecución de pruebas
- Scripts disponibles
- Solución de problemas comunes
- Opciones de despliegue (Vercel, Netlify, Firebase, GitHub Pages)
- Comandos útiles de desarrollo

### 7. Uso de Intelignecia Artificial

Durante el desarrollo de este proyecto, se emplearon herramientas de inteligencia artificial, incluyendo Windsurf, principalmente como asistentes para el diseño de estilos en los archivos .html y para mejorar aspectos visuales y funcionales de la aplicación.

**Ideal para**: Poner en marcha el proyecto en tu entorno local.

---

## 🚀 Inicio Rápido

Si quieres empezar rápidamente, sigue estos pasos:

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm start
   ```

3. **Abrir en el navegador**:
   ```
   http://localhost:4200
   ```

Para más detalles, consulta **[06-instalacion-ejecucion.md](./docs/06-instalacion-ejecucion.md)**.

---

## 📖 Cómo Usar Esta Documentación

### Para Nuevos Desarrolladores

Recomendamos leer los documentos en este orden:

1. **[Introducción](./docs/01-introduccion.md)** - Contexto general
2. **[Instalación y Ejecución](./docs/06-instalacion-ejecucion.md)** - Poner en marcha el proyecto
3. **[Estructura](./docs/02-estructura.md)** - Familiarizarse con la organización
4. **[Funcionalidades](./docs/05-funcionalidades.md)** - Entender qué hace la aplicación
5. **[Servicios](./docs/03-servicios.md)** - Profundizar en la lógica de negocio
6. **[Componentes](./docs/04-componentes.md)** - Estudiar la UI

---

### Para Evaluadores/Profesores

Documentos clave para evaluación:

1. **[Introducción](./docs/01-introduccion.md)** - Integrantes, propósito, alcance y tecnologías
2. **[Funcionalidades](./docs/05-funcionalidades.md)** - Casos de uso y flujos implementados
3. **[Estructura](./docs/02-estructura.md)** - Organización y arquitectura del código

---

## 🛠️ Tecnologías Principales

- **Angular 20.3.0** - Framework principal
- **TypeScript 5.9.2** - Lenguaje de programación
- **TailwindCSS 4.1.14** - Framework de estilos
- **RxJS 7.8** - Programación reactiva
- **SWAPI** - API de Star Wars

---

## 👥 Integrantes

- **Angie Cantor**
- **Diego Chavez**

---

### Tablas

Las tablas se usan para presentar información estructurada de forma clara.

---

## 📄 Licencia

Este proyecto es de uso académico. Consulta con los integrantes para más información sobre su uso.

---

## 🎯 Próximos Pasos

1. Lee la **[Introducción](./docs/01-introduccion.md)** para entender el contexto
2. Sigue la guía de **[Instalación y Ejecución](./docs/06-instalacion-ejecucion.md)** para ejecutar el proyecto
3. Explora el código siguiendo la **[Estructura](./docs/02-estructura.md)**
4. ¡Empieza a desarrollar! 🚀

---

**¡Gracias por usar esta documentación!**
