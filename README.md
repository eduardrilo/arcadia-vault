# Arcadia Vault

> Proyecto del Módulo 1 — HTML, CSS y JavaScript · Diplomado Fullstack IPSS

Arcadia Vault es un mini-catálogo editorial de videojuegos independientes ficticios. El sitio permite explorar ocho títulos, buscar y filtrar el catálogo, abrir una vista rápida, revisar la ficha completa de un juego y enviar una recomendación mediante un formulario validado con JavaScript.

## Integrante

* Eduardo Estay Atenas

> Proyecto desarrollado individualmente debido al retiro de la segunda integrante. La modalidad individual y el automerge de los Pull Requests fueron autorizados por el profesor.

## Demo

* Repositorio: [github.com/eduardrilo/arcadia-vault](https://github.com/eduardrilo/arcadia-vault)
* Sitio desplegado: [Arcadia Vault](https://eduardrilo.github.io/arcadia-vault/)

![Vista del catálogo de Arcadia Vault](docs/catalogo-portadas.jpg)

## Páginas

* `index.html`: página principal con hero, carrusel de juegos destacados y manifiesto editorial.
* `catalogo.html`: catálogo completo con búsqueda, filtro por género, paginación y modal de vista rápida.
* `detalle.html`: ficha completa de Nebula Drift, acordeón informativo y botón de lista de deseos.
* `contacto.html`: formulario de recomendación con contador de caracteres, validación y mensaje de confirmación.

## Funcionalidades principales

* Navegación responsive entre las diferentes páginas.
* Cambio entre tema claro y tema oscuro.
* Carrusel de juegos destacados.
* Selección aleatoria mediante el botón “Sorpréndeme”.
* Catálogo responsive con ocho videojuegos ficticios.
* Búsqueda de juegos por nombre, estudio o descripción.
* Filtro de juegos por género.
* Contador de resultados visibles.
* Modal con información dinámica del juego seleccionado.
* Ficha detallada de un videojuego.
* Lista de deseos con actualización visual del botón.
* Formulario de contacto validado con JavaScript.
* Contador de caracteres para el mensaje.
* Mensajes de error y confirmación dentro del DOM.

## Componentes Bootstrap utilizados

1. Navbar responsive con `collapse`.
2. Cards para las fichas del catálogo.
3. Modal para la vista rápida.
4. Carousel para los juegos destacados.
5. Accordion en las páginas de detalle y contacto.
6. Formulario con controles de Bootstrap.
7. `Input group` para la búsqueda.
8. Alerts para mensajes de validación y confirmación.
9. Pagination para la navegación visual del catálogo.

## Eventos JavaScript propios

* Click en el botón de tema: alterna entre modo claro y oscuro y modifica atributos del documento.
* Click en “Sorpréndeme”: selecciona un juego aleatorio y muestra su información en el DOM.
* Evento `input` en la búsqueda: filtra las cards del catálogo mientras el usuario escribe.
* Evento `change` en el selector de género: filtra los juegos según la categoría seleccionada.
* Click en “Vista rápida”: actualiza el contenido del modal con la información del juego seleccionado.
* Click en “Guardar”: agrega o elimina el juego de la lista de deseos y actualiza el botón.
* Evento `input` en el mensaje: actualiza el contador de caracteres del formulario.
* Evento `submit`: valida los campos y muestra un mensaje de confirmación sin recargar la página.

## Cómo ejecutar el proyecto localmente

El proyecto no requiere instalación de dependencias ni proceso de compilación.

```bash
git clone https://github.com/eduardrilo/arcadia-vault.git
cd arcadia-vault
python3 -m http.server 8000
```

Luego, abrir la siguiente dirección en el navegador:

```text
http://localhost:8000
```

También es posible abrir el archivo `index.html` directamente, aunque se recomienda utilizar un servidor local.

## Estructura del proyecto

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── feature.md
│   └── pull_request_template.md
├── css/
│   └── custom.css
├── docs/
│   └── catalogo-portadas.jpg
├── img/
│   ├── afterlight.webp
│   ├── echo-line.webp
│   ├── loop-garden.webp
│   ├── mossbound.webp
│   ├── nebula-drift.webp
│   ├── paper-crown.webp
│   ├── pixel-forge.webp
│   └── tidekeeper.webp
├── js/
│   └── main.js
├── catalogo.html
├── contacto.html
├── detalle.html
├── index.html
├── CHECKLIST-ENTREGA.md
└── README.md
```

## Tecnologías utilizadas

* HTML5 semántico.
* CSS3 personalizado con enfoque mobile first.
* Bootstrap 5.3 mediante CDN.
* JavaScript vanilla.
* Google Fonts: Space Grotesk e IBM Plex Mono.
* Imágenes optimizadas en formato WebP.
* Git y GitHub para control de versiones.
* GitHub Pages para el despliegue.

## Flujo de trabajo con Git y GitHub

El desarrollo se organizó utilizando ramas `feature/*`, commits progresivos y Pull Requests hacia la rama `main`.

Debido a que el proyecto pasó a modalidad individual, todos los commits fueron realizados por el mismo integrante. El automerge de los Pull Requests fue autorizado previamente por el profesor.

Ramas utilizadas:

* `feature/base-home-catalogo`
* `feature/interacciones-detalle-contacto`
* `feature/detalle-contacto`

Commits principales:

```text
feat: crear estructura semántica y navegación global
feat: implementar home responsive e interacciones
feat: agregar catálogo responsive de videojuegos
feat: agregar búsqueda filtros y modal del catálogo
feat: crear ficha de juego y lista de deseos
feat: agregar contacto validación y documentación
```

Los cambios fueron subidos mediante Pull Requests. No se realizaron commits de desarrollo directamente sobre la rama `main`.

## Diseño responsive

El sitio fue desarrollado con un enfoque mobile first y contempla los siguientes tamaños:

* Móvil: desde 360 px.
* Tablet: desde 768 px.
* Escritorio: desde 1024 px.
* Pantallas amplias: desde 1440 px.

La navegación, las grillas, las cards, los formularios y los componentes interactivos se adaptan a los diferentes tamaños de pantalla.

## Nota sobre las imágenes

Las portadas utilizadas son composiciones abstractas originales creadas para este proyecto y exportadas en formato WebP.

Todos los nombres de videojuegos, estudios, descripciones y datos presentados en Arcadia Vault son ficticios y fueron creados exclusivamente con fines académicos.
