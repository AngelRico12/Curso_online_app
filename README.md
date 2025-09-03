Curso Online App – README
- Descripción del Proyecto

Este proyecto implementa una API y cliente web para la gestión de cursos en línea, permitiendo a los usuarios crear, listar, actualizar, eliminar y consultar cursos.

- Arquitectura

Backend (Node.js + Express + PostgreSQL): Gestiona las operaciones CRUD y la conexión con la base de datos.

Frontend (JavaScript con fetch API): Consume la API mediante un servicio centralizado (courseService.js frontend).

- Flujo de Trabajo (Gitflow)

Se utilizó un flujo de trabajo basado en tres ramas principales:

- main

Rama estable que contiene la versión lista para producción.

- desarrollo

Rama de integración donde se fusionaron las funcionalidades probadas desde las ramas feature/*.

- feature/* (ramas de características)

Cada operación CRUD fue desarrollada en su propia rama.

Funcionalidades y Ramas

- feature/agregar-curso

Implementa la funcionalidad para crear cursos:

Backend: Ruta POST /api/cursos y función crearCurso().

Frontend: Método crearCurso(data) en courseService.js.

- feature/listar-cursos

Implementa la funcionalidad para listar todos los cursos:

Backend: Ruta GET /api/cursos y función listarCursos().

Frontend: Método listarCursos().

- feature/actualizar-curso

Implementa la funcionalidad para actualizar cursos existentes:

Backend: Ruta PUT /api/cursos/:id y función actualizarCurso().

Frontend: Método actualizarCurso(id, data).

- feature/eliminar-curso

Implementa la funcionalidad para eliminar cursos:

Backend: Ruta DELETE /api/cursos/:id y función eliminarCurso().

Frontend: Método eliminarCurso(id).

- feature/obtener-curso

Implementa la funcionalidad para obtener los detalles de un curso específico:

Backend: Ruta GET /api/cursos/:id y función obtenerCurso().

Frontend: Método obtenerCurso(id).

- Flujo de Pull Requests

Cada funcionalidad se desarrolló en una rama feature/* independiente.

Se crearon PRs de cada feature/* hacia desarrollo para integración y pruebas.

Una vez integradas y verificadas todas las funcionalidades, se creó un PR de desarrollo hacia main para la versión final.

Ejecución
Backend
npm install
node server.js

Estructura del Proyecto
/curso-online-app
├── /public
├── /src
│   ├── /componentes
│   │   ├── CourseCard.jsx
│   │   └── CourseForm.jsx
│   ├── /paginas
│   │   ├── Home.jsx
│   │   └── Courses.jsx
│   ├── /servicios
│   │   └── courseService.js
│   ├── App.js
│   └── index.js
├── .github
│   └── workflows
│       └── ci.yml
├── package.json
└── README.md
