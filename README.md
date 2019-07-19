# Prestamosfrontend

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

Tambien corresponde a la versión FrontEnd de la prueba propuesta. Involucra el consumo del API desarrollada por separado y el manejo de las vistas del proyecto.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Prerequisitos

Node js (versión 12.2.0)
NPM (version 6.9.0)
Angular CLI

## Instalación

Una vez clonado el proyecto, acceda desde la terminal del servidor a la carpeta raiz en la cual se alojó el proyecto y ejecute el comando 'npm install' a fin de que se instalen las dependencias necesarias para que el proyecto funcione.

Cuando ya se instalen las dependencias, acceda al directorio 'src' y a su vez al directorio 'config'. Allí se encuentra alojado un archivo llamado 'ServiceSettings.ts' en el cual se encuentra una constante llamada 'ROOT_URL_SERVICE'. Esta constante almacena la ruta raíz desde la que se va a acceder a los distintos métodos del API. Asegurese de definir dicha constante con la ruta del host que usted eligió para el consumo de los servicios .

Habiendo definido la constante para la ruta raíz del API, puede proceder a usar el comando 'ng serve' de Angular CLI para iniciar el servidor de desarrollo y correr el proyecto. Una vez esté conforme con lo visto en el servidor de desarrollo, puede proceder a generar el archivo de produccion con el comando 'ng build'.


## Agradecimientos

Se agradece la oportunidad ofrecida en este proceso de selección de formar parte de un equipo de desarrollo con grandes posibilidades de crecimiento a nivel profesional y personal.

Muchas gracias