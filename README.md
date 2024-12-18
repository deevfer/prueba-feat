# prueba-feat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Customize configuration

Si necesitas personalizar la configuración de Webpack o cualquier otra parte de la estructura del proyecto, puedes hacerlo en los archivos de configuración de Vue CLI. Más detalles sobre la configuración se pueden encontrar en la [Configuración de Vue CLI](https://cli.vuejs.org/config/).

## Funcionalidades

1. **Catálogo de productos**: Se presenta un catálogo de productos filtrables por categoría.
2. **Carrito de compras**: Los usuarios pueden agregar productos al carrito y ver el total de la compra.
3. **Notificaciones de acción**: Al agregar productos al carrito, se muestra una notificación en pantalla.
4. **Slider**: Se utiliza el slider Slick para mostrar productos en una presentación atractiva con soporte para dispositivos móviles (1 slide en pantallas pequeñas).
5. **Responsive**: El diseño del sitio es completamente responsive y se adapta a diferentes tamaños de pantalla, usando breakpoints en el slider para garantizar una experiencia óptima en dispositivos móviles y tablets.

## Tecnologías utilizadas

- **Vue.js**: Framework para construir interfaces de usuario interactivas.
- **Bootstrap**: Framework de diseño para facilitar el desarrollo de la interfaz.
- **Slick Carousel**: Librería para la implementación de sliders de imágenes.
- **Vue3 Toastify**: Librería para mostrar notificaciones en la interfaz de usuario.
- **jQuery**: Para la manipulación de DOM y la integración del slider.
- **npm**: Gestor de dependencias.

## Estructura del proyecto

- `src/`: Contiene los archivos fuente del proyecto.
  - `assets/`: Archivos estáticos como imágenes y hojas de estilo.
  - `components/`: Componentes reutilizables de Vue.
  - `views/`: Páginas o vistas de la aplicación.
  - `App.vue`: Componente raíz de la aplicación.
  - `main.js`: Punto de entrada del proyecto, donde se inicializa Vue.

## Uso del Carrito de Compras

1. Los productos pueden ser agregados al carrito haciendo clic en el botón "Agregar al carrito" en cada producto.
2. El carrito se puede visualizar en cualquier momento, y los productos se mostrarán con la cantidad seleccionada.
3. El botón de "Proceder con la compra" se habilitará solo cuando haya productos en el carrito.
4. Al hacer clic en "Proceder con la compra", se muestra una notificación de "Compra realizada exitosamente".

## Notas de desarrollo

- Este proyecto utiliza Vue 3 con la Composition API.
- Se han configurado breakpoints en el slider para garantizar una visualización adecuada en dispositivos móviles y de escritorio.
- La funcionalidad de las notificaciones se maneja con la librería **Vue3 Toastify** para una experiencia de usuario interactiva.
