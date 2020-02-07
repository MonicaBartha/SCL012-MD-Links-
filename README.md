# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Instaliación](#2-instalación)
* [3. Diagrama de flujo ](#3-diagrama-de-flujo)
* [4. Javascript API](#4-javascript-api)
* [5. CLI Command Line Interface](#5-cli-command-line-interface)
* [6. Opciones](#6-opciones)
* [6. Algoritmo](#6-algoritmo)
* [7. Backlog](#7-backlog)
* [8. Autor](#8-autor)


***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

### Objetivo del proyecto


## 2. Instalación

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 3. Diagrama de flujo

## 4. Javascript API

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otros developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

A continuación puedes ver los objetivos de aprendizaje de este proyecto:

### Argumentos

* [ ] Uso de callbacks
* [ ] Consumo de Promesas
* [ ] Creacion de Promesas
* [ ] Modulos de JS (CommonJS vs ES Modules)
* [ ] Recursión

### Valor de retorno

* [ ] Sistema de archivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] crear módulos [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] Instalar y usar módulos ([npm](https://www.npmjs.com/))
* [ ] [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)
* [ ] [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)

## 5. CLI Command Line Interface

* [ ] Testeo de tus funciones
* [ ] Testeo asíncrono
* [ ] Uso de librerias de Mock
* [ ] Mocks manuales
* [ ] Testeo para multiples Sistemas Operativos

## 6. Opciones

* Este proyecto se debe "resolver" de manera individual.

* La librería y script ejecutable (herramienta de línea de comando -
  CLI) debe estar implementada en JavaScript para ser ejecutada con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo debe ser instalable via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

* Para este proyecto no está permitido utilizar `async/await`.

* Para este proyecto es opcional el uso de ES Modules `(import/export)`, en el
  caso optes utilizarlo deberás de crear un script de `build` en el `package.json`
  que los transforme en `requires` y `module.exports` con ayuda de babel.

## 7. Algoritmo

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

Antes de comenzar a codear, es necesario crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo y en una serie de _issues_
y _milestones_ para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada quien
considere necesarios.

## 8. Backlog

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar una función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo no
  se debe cambiar.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu inplementación debe pasar estos tets.


## 9. Autor

Módulo instalable via `npm install <github-user>/md-links`. Este módulo debe
incluir tanto un ejecutable como una interfaz que podamos importar con `require`
para usarlo programáticamente.

