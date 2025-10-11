# Instalación y Ejecución del Proyecto

Este documento proporciona instrucciones detalladas para instalar, configurar y ejecutar el proyecto en tu entorno local.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

### Software Requerido

| Software | Versión Mínima | Versión Recomendada | Verificación |
|----------|----------------|---------------------|--------------|
| **Node.js** | 18.x | 20.x o superior | `node --version` |
| **npm** | 9.x | 10.x o superior | `npm --version` |
| **Git** | 2.x | Última versión | `git --version` |

### Software Opcional

| Software | Propósito |
|----------|-----------|
| **Angular CLI** | Facilita comandos de desarrollo (`ng serve`, `ng build`, etc.) |
| **Visual Studio Code** | Editor recomendado con extensiones para Angular |

---

## Instalación de Requisitos

### 1. Instalar Node.js y npm

#### Windows

1. Descarga el instalador desde [nodejs.org](https://nodejs.org/)
2. Ejecuta el instalador y sigue las instrucciones
3. Verifica la instalación:
   ```bash
   node --version
   npm --version
   ```

#### macOS

Usando Homebrew:
```bash
brew install node
```

#### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

---

### 2. Instalar Angular CLI (Opcional)

```bash
npm install -g @angular/cli
```

Verifica la instalación:
```bash
ng version
```

---

## Clonar el Repositorio

### Opción 1: Clonar desde Git

```bash
git clone <URL_DEL_REPOSITORIO>
cd Final-Proyect
```

### Opción 2: Descargar ZIP

1. Descarga el proyecto como archivo ZIP
2. Extrae el contenido
3. Abre una terminal en la carpeta del proyecto

---

## Instalación de Dependencias

Una vez dentro del directorio del proyecto, instala todas las dependencias:

```bash
npm install
```

Este comando:
- Lee el archivo `package.json`
- Descarga todas las dependencias listadas
- Instala las dependencias en la carpeta `node_modules/`
- Genera/actualiza `package-lock.json`

### Tiempo estimado
- Primera instalación: 2-5 minutos (dependiendo de tu conexión)
- Instalaciones posteriores: 30 segundos - 1 minuto

### Solución de Problemas

#### Error: "EACCES: permission denied"

**Solución (Linux/macOS)**:
```bash
sudo npm install
```

#### Error: "npm ERR! code ERESOLVE"

**Solución**:
```bash
npm install --legacy-peer-deps
```

#### Error: "node-gyp rebuild failed"

**Solución (Windows)**:
```bash
npm install --global windows-build-tools
npm install
```

---

## Configuración del Entorno

### Variables de Entorno

El proyecto utiliza archivos de configuración en `src/environments/`:

#### `environments.ts` (Desarrollo)

```typescript
export const environment = {
  production: false,
  companyName: 'Starwars',
  companyNeme2: 'Apps',
  companySlogan: 'Mundo de Starwars',
  urlBaseStarwars: 'https://swapi.dev/api'
};
```

#### `environments.development.ts`

Archivo específico para desarrollo (si necesitas configuraciones adicionales).

### Modificar URL de la API

Si necesitas cambiar la URL de SWAPI:

1. Abre `src/environments/environments.ts`
2. Modifica `urlBaseStarwars`:
   ```typescript
   urlBaseStarwars: 'https://tu-api-personalizada.com/api'
   ```

---

## Ejecución del Proyecto

### Modo Desarrollo

#### Usando npm

```bash
npm start
```

#### Usando Angular CLI

```bash
ng serve
```

#### Opciones adicionales

```bash
# Especificar puerto
ng serve --port 4300

# Abrir automáticamente en el navegador
ng serve --open

# Modo verbose (más información en consola)
ng serve --verbose
```

### Acceder a la Aplicación

Una vez iniciado el servidor, abre tu navegador y navega a:

```
http://localhost:4200/
```

### Recarga en Caliente (Hot Reload)

El servidor de desarrollo detecta automáticamente cambios en los archivos y recarga la aplicación. No necesitas reiniciar el servidor manualmente.

---

## Construcción para Producción

### Build Estándar

```bash
npm run build
```

o

```bash
ng build
```

### Build Optimizado

```bash
ng build --configuration production
```

### Características del Build de Producción

- **Minificación**: Código JavaScript y CSS minificado
- **Tree Shaking**: Eliminación de código no utilizado
- **AOT Compilation**: Compilación anticipada de templates
- **Optimización de imágenes**: Compresión de assets
- **Source Maps**: Generación opcional de mapas de código fuente

### Ubicación de Archivos Generados

Los archivos compilados se generan en:

```
dist/
└── final-proyect/
    └── browser/
        ├── index.html
        ├── main-[hash].js
        ├── polyfills-[hash].js
        ├── styles-[hash].css
        └── assets/
```

### Servir Build de Producción Localmente

```bash
# Instalar servidor HTTP simple
npm install -g http-server

# Servir archivos de dist/
http-server dist/final-proyect/browser -p 8080
```

Accede a: `http://localhost:8080`

---

## Ejecución de Pruebas

### Pruebas Unitarias

#### Ejecutar todas las pruebas

```bash
npm test
```

o

```bash
ng test
```

#### Ejecutar con cobertura

```bash
ng test --code-coverage
```

Los reportes de cobertura se generan en `coverage/`.

#### Ejecutar en modo headless (CI/CD)

```bash
ng test --watch=false --browsers=ChromeHeadless
```

---

### Pruebas End-to-End (E2E)

El proyecto no incluye framework E2E por defecto. Para agregar uno:

#### Opción 1: Cypress

```bash
npm install --save-dev cypress
npx cypress open
```

#### Opción 2: Playwright

```bash
npm install --save-dev @playwright/test
npx playwright test
```

---

## Scripts Disponibles

Todos los scripts están definidos en `package.json`:

| Script | Comando | Descripción |
|--------|---------|-------------|
| `start` | `ng serve` | Inicia servidor de desarrollo |
| `build` | `ng build` | Construye la aplicación |
| `watch` | `ng build --watch --configuration development` | Build continuo en modo desarrollo |
| `test` | `ng test` | Ejecuta pruebas unitarias |

### Ejemplos de Uso

```bash
# Desarrollo
npm start

# Build
npm run build

# Build con watch
npm run watch

# Tests
npm test
```

---

## Verificación de la Instalación

### Checklist de Verificación

Ejecuta los siguientes comandos para verificar que todo está correctamente instalado:

```bash
# 1. Verificar Node.js
node --version
# Esperado: v18.x.x o superior

# 2. Verificar npm
npm --version
# Esperado: 9.x.x o superior

# 3. Verificar Angular CLI (si está instalado)
ng version
# Esperado: Angular CLI 20.3.3

# 4. Verificar dependencias del proyecto
npm list --depth=0
# Esperado: Lista de dependencias sin errores

# 5. Iniciar servidor
npm start
# Esperado: "Application bundle generation complete"
```

---

## Estructura de Puertos

| Servicio | Puerto | URL |
|----------|--------|-----|
| Servidor de desarrollo | 4200 | http://localhost:4200 |
| Karma (tests) | 9876 | http://localhost:9876 |

---

## Solución de Problemas Comunes

### Problema 1: Puerto 4200 en uso

**Error**: `Port 4200 is already in use`

**Solución**:
```bash
# Opción 1: Usar otro puerto
ng serve --port 4300

# Opción 2: Matar proceso en puerto 4200 (Windows)
netstat -ano | findstr :4200
taskkill /PID <PID> /F

# Opción 2: Matar proceso en puerto 4200 (Linux/macOS)
lsof -ti:4200 | xargs kill -9
```

---

### Problema 2: Errores de compilación TypeScript

**Error**: `TS2307: Cannot find module`

**Solución**:
```bash
# Limpiar caché de Angular
rm -rf .angular/cache

# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

---

### Problema 3: Error al cargar datos de SWAPI

**Error**: `Failed to load resource: net::ERR_FAILED`

**Posibles causas**:
- Sin conexión a internet
- SWAPI está caído
- Bloqueado por firewall/proxy

**Solución**:
1. Verifica tu conexión a internet
2. Prueba acceder a https://swapi.dev/api/people/ en el navegador
3. Si SWAPI está caído, espera a que se restablezca el servicio

---

### Problema 4: localStorage no funciona

**Posibles causas**:
- Navegador en modo incógnito
- localStorage deshabilitado en configuración del navegador

**Solución**:
1. Usa el navegador en modo normal (no incógnito)
2. Verifica configuración de privacidad del navegador
3. Prueba en otro navegador

---

## Despliegue

### Opción 1: Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel
```

### Opción 2: Netlify

```bash
# Build
npm run build

# Subir carpeta dist/ a Netlify
# Configurar:
# - Build command: npm run build
# - Publish directory: dist/final-proyect/browser
```

### Opción 3: GitHub Pages

```bash
# Instalar angular-cli-ghpages
npm install -g angular-cli-ghpages

# Build y deploy
ng build --configuration production --base-href "/nombre-repo/"
npx angular-cli-ghpages --dir=dist/final-proyect/browser
```

### Opción 4: Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar
firebase init hosting

# Deploy
firebase deploy
```

---

## Comandos Útiles de Desarrollo

### Limpiar Caché

```bash
# Limpiar caché de Angular
rm -rf .angular/cache

# Limpiar node_modules
rm -rf node_modules package-lock.json
npm install
```

### Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar todas las dependencias (con cuidado)
npm update

# Actualizar Angular
ng update @angular/core @angular/cli
```

### Generar Componentes/Servicios

```bash
# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio

# Generar página
ng generate component pages/nombre-page
```

---

## Recursos Adicionales

### Documentación Oficial

- [Angular Documentation](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [SWAPI Documentation](https://swapi.dev/documentation)
- [TailwindCSS](https://tailwindcss.com/docs)

### Comunidad

- [Angular GitHub](https://github.com/angular/angular)
- [Stack Overflow - Angular](https://stackoverflow.com/questions/tagged/angular)

---

## Contacto y Soporte

Para problemas o preguntas sobre el proyecto, contacta a:

- **Angie Cantor**
- **Diego Chavez**

---

## Próximos Pasos

Una vez que tengas el proyecto ejecutándose:

1. Explora la estructura del proyecto en **[02-estructura.md](./02-estructura.md)**
2. Revisa los servicios en **[03-servicios.md](./03-servicios.md)**
3. Estudia los componentes en **[04-componentes.md](./04-componentes.md)**
4. Comprende las funcionalidades en **[05-funcionalidades.md](./05-funcionalidades.md)**
