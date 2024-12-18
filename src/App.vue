<template>
  <div class="__body">

    <div class="__header">
      <div class="container-in">
        <nav>
          <button 
            @click="changeRoute('index')" 
            :class="{ white: currentRoute === 'catalogo' || currentRoute === 'carrito' }">
            Inicio
          </button>
          <button 
            @click="changeRoute('catalogo')" 
            :class="{ white: currentRoute === 'catalogo' || currentRoute === 'carrito' }">
            Tienda
          </button>
          <button 
            @click="changeRoute('carrito')" 
            :class="{ white: currentRoute === 'catalogo' || currentRoute === 'carrito' }">
            Carrito
          </button>
        </nav>
      </div>
    </div>
    

    <div v-if="currentRoute === 'index'" class="__home">
      <div class="__cover">
        <div class="__backCover">
          <img :src="require('@/assets/img/_backCover.png')"/>
        </div>
        <div class="__coverImg">
          <img :src="require('@/assets/img/__coverDesktop.png')" class="desktop"/>
          <img :src="require('@/assets/img/__coverResponsive.png')" class="responsive"/>
        </div>
      </div>
      <div class="__productosTemp">
        <div class="container-in">
          <div class="__productosTempTitle">
            <img :src="require('@/assets/img/__titleProductosDeTemporada.png')"/>
          </div>
        </div>
        <div class="__sliderContent">  
          <div class="slider">
            <div v-for="producto in productos.slice(0, 10)" :key="producto.nombre" class="producto">
              <img :src="getImageUrl(producto.imagen)" alt="Producto" />
              <h3>{{ producto.nombre }}</h3>
              <p>GTQ.{{ producto.precio }}</p>
              <button @click="addToCart(producto)">Agregar a carrito</button>
            </div>
          </div>
          <div class="__ctaProductos">
            <button @click="changeRoute('catalogo')">ver todos los productos</button>
          </div>
        </div>
      </div>
      <div class="__ctaSuscription">
        <div class="__ctaSuscriptionImg">
          <img :src="require('@/assets/img/__freshAndHot.png')"/>
        </div>
        <div class="__suscriptionContent">
          <div class="container-in">
            <div class="__suscriptionContentBody">
              <div class="row __centerVertical">
                <div class="col-md-6">
                </div>
                <div class="col-md-6">
                  <div class="__titleCta">
                    <h1>¡Suscríbete y <span>disfruta</span> del pan más fresco cada semana!</h1>
                  </div>
                  <div class="__contentCta">
                    <p>Convierte tus mañanas en momentos especiales con nuestro pan artesanal recién horneado. Suscríbete a nuestras entregas semanales y déjanos llevarte el sabor de la panadería a la puerta de tu hogar. ¡Fácil, delicioso y siempre a tiempo!</p>
                  </div>
                  <div class="__btnsCTA">
                    <div class="__suscribe">
                      <div class="__ctaProductos">
                        <button>suscribirme</button>
                      </div>
                      <div class="__ctaBeneficios">
                        <button @click="openModal">beneficios</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div v-if="currentRoute === 'catalogo'">
      <div class="__coverProductos">
        <div class="__backCoverProductos">
          <img class="desktop" :src="require('@/assets/img/__coverCart.png')" />
          <img class="responsive" :src="require('@/assets/img/__coverCartResponsive.png')" />
        </div>
        <div class="__titleCover">
          <img :src="require('@/assets/img/__titleProductosDeLaPanaderia.png')"/>
        </div>
      </div>
      <div class="__productosCatalogo">
        <div class="container-in">
          <div class="__categorias">
            <nav>
              <button 
                :class="{ active: selectedCategory === 'Todos' }" 
                @click="filterCategory('Todos')">Todos</button>
              <button 
                :class="{ active: selectedCategory === 'Pan' }" 
                @click="filterCategory('Pan')">Pan</button>
              <button 
                :class="{ active: selectedCategory === 'Galletas' }" 
                @click="filterCategory('Galletas')">Galletas</button>
              <button 
                :class="{ active: selectedCategory === 'Pasteleria' }" 
                @click="filterCategory('Pasteleria')">Pastelería</button>
            </nav>
          </div>
          <div class="__productList">
            <div class="row">
              <div v-for="producto in filteredProductos" :key="producto.nombre" class="col-md-3">
                <div class="producto">
                  <img :src="getImageUrl(producto.imagen)" alt="Producto" />
                  <h3>{{ producto.nombre }}</h3>
                  <p>GTQ.{{ producto.precio }}</p>
                  <button @click="addToCart(producto)">Agregar a carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div v-if="currentRoute === 'carrito'">
      <div class="__coverProductos">
        <div class="__backCoverProductos">
          <img class="desktop" :src="require('@/assets/img/__coverCart.png')" />
          <img class="responsive" :src="require('@/assets/img/__coverCartResponsive.png')" />
        </div>
        <div class="__titleCover">
          <img :src="require('@/assets/img/__titleProductosDeMiCarrito.png')" />
        </div>
      </div>
      <div class="__productosCatalogo">
        <div class="container-in">
          <div class="__titleCarrito">
            <h1>Carrito de <span>compras</span></h1>
          </div>
          <div class="__carritoContent">
            <div class="row __centerVertical">
              <div class="col-md-8">
                <div class="__tableCarrito">
                  <table class="table table-responsive">
                    <thead v-if="cartItems.length > 0">
                      <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody class="__productCartContent">
                      <tr v-for="(item, index) in cartItems" :key="index">
                        <td class="__productInfoTable">
                          <img :src="getImageUrl(item.producto.imagen)" alt="Producto" />
                          <p>{{ item.producto.nombre }}</p>
                        </td>
                        <td class="__qty">
                          <input type="number" v-model="item.cantidad" min="1" />
                        </td>
                        <td class="__price">GTQ.{{ (item.producto.precio * item.cantidad).toFixed(2) }}</td>
                        <td class="__delete">
                          <button @click="removeFromCart(index)">x</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="__emptyCart" v-if="cartItems.length === 0">
                    <h1>Actualmente tu carrito está vacío, añade productos para proceder con la compra.</h1>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="__resumeCarrito">
                  <h1>Resumen</h1>
                  <div class="__resumeBody">
                    <div class="__resumeContent">
                      <h2>Subtotal</h2>
                      <h1>GTQ. {{ subtotal }}</h1>
                    </div>
                    <div class="__resumeContent">
                      <h3>Delivery</h3>
                      <h1>GTQ. 35.00</h1>
                    </div>
                    <div class="__resumeContent total">
                      <h3>Total</h3>
                      <h1>GTQ. {{ total }}</h1>
                    </div>
                  </div>
                  <div class="__terms">
                    <img :src="require('@/assets/img/__iconTerms.png')" />
                    <p>Al finalizar la compra aceptas los <span>términos y condiciones</span></p>
                  </div>
                  <div class="__ctaProductos __proceed">
                    <button :disabled="cartItems.length === 0" @click="proceedToCheckout">Proceder con la compra</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div class="__footer">
      <div class="container-in">
        <div class="__logoFooter">
          <img :src="require('@/assets/img/__logoFooter.png')"/>
        </div>
        <div class="__textFooter">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="__social">
          <a href="#">
            <img :src="require('@/assets/img/__fb.png')"/>
          </a>
          <a href="#">
            <img :src="require('@/assets/img/__ig.png')"/>
          </a>
        </div>
      </div>
    </div>
    
        <!-- Modal -->
    <div class="modal fade" id="beneficiosModal" tabindex="-1" aria-labelledby="beneficiosModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="beneficiosModalLabel">Beneficios</h5>
          </div>
          <div class="modal-body">
            <ul>
              <li>Ahorra un 10% en cada pedido semanal al formar parte de nuestro plan de suscripción.</li>
              <li>Recibe tu pan favorito en la puerta de tu casa sin preocuparte por hacer pedidos cada semana.</li>
              <li>Te llevamos pan recién horneado, elaborado con ingredientes frescos y mucho amor.</li>
              <li>Elige los tipos de pan que más te gustan y ajusta tus entregas según tus necesidades.</li>
              <li>Cancela o ajusta tu suscripción en cualquier momento, sin penalizaciones ni complicaciones.</li>
            </ul>
          </div>
          <div class="modal-footer">
            <div class="__ctaProductos">
              <button type="button" data-bs-dismiss="modal">suscribirme</button>
            </div>
            <div class="__ctaBeneficios">
              <button type="button" data-bs-dismiss="modal">cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>
<script>
import 'bootstrap';
import productos from './assets/js/productosTemporada.json';
import $ from 'jquery';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  name: 'App',
  data() {
    return {
      currentRoute: 'index',
      productos: productos,
      selectedCategory: 'Todos',
      cartItems: [], // Arreglo de Carrito de compras
    };
  },
  computed: {
    // Filtro de productos por categoría seleccionada
    filteredProductos() {
      if (this.selectedCategory === 'Todos') {
        return this.productos;
      }
      return this.productos.filter(producto => 
        producto.categoria && producto.categoria.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    },
    // Calculando el subtotal
    subtotal() {
      return (this.cartItems.reduce((total, item) => total + item.producto.precio * item.cantidad, 0)).toFixed(2);
    },
    // Calculando el total
    total() {
      return (parseFloat(this.subtotal) + 35.00).toFixed(2);
    },
  },
  methods: {
    
    // Agregar producto al carrito
    addToCart(producto) {
      const existingItem = this.cartItems.find(item => item.producto.nombre === producto.nombre);
      if (existingItem) {
        existingItem.cantidad += 1; // Si ya existe, incrementa la cantidad
      } else {
        this.cartItems.push({ producto, cantidad: 1 }); // Si no existe, lo agrega al carrito
      }
      toast.success(`¡Producto añadido correctamente!, ${producto.nombre} ha sido añadido a tu carrito.`, {
        "theme": "auto",
        "type": "success",
        "position": "bottom-right",
        "dangerouslyHTMLString": true
      })

      console.log('Producto añadido correctamente');
    },
    proceedToCheckout() {
      // Verificar si el carrito tiene productos
      if (this.cartItems.length > 0) {
        // Mostrar alerta de compra exitosa
        toast.success(`¡Compra realizada exitosamente!`, {
          "theme": "auto",
          "type": "success",
          "position": "bottom-right",
          "dangerouslyHTMLString": true
        });

        // Vaciar el carrito después de la compra
        this.cartItems = [];
      }
    },
    // Eliminar producto del carrito
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    // Cambiar de ruta
    changeRoute(route) {
      if (this.currentRoute === route) return;

      this.currentRoute = route;

      // Cambiar el título de la página
      document.title =
        route === 'index'
          ? 'Inicio'
          : route === 'catalogo'
            ? 'Catálogo de Productos'
            : 'Carrito de Compras';

      // Manejo del slider solo si es 'index'
      if (route === 'index') {
        this.$nextTick(() => {
          this.initializeSlider();
        });
      } else {
        this.destroySlider();
      }
    },
    openModal() {
      this.$nextTick(() => {
        const modal = new window.bootstrap.Modal(document.getElementById('beneficiosModal'));
        modal.show();
      });
    },
    getImageUrl(imagePath) {
      return require(`@/assets/img/${imagePath}`);
    },
    filterCategory(category) {
      this.selectedCategory = category;
    },
    initializeSlider() {
      const slider = $(this.$el).find('.slider');
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }

      slider.slick({
        speed: 10000,
        autoplay: false,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // Si el ancho de la pantalla es menor a 1024px
            settings: {
              slidesToShow: 3, // Muestra 3 slides
            },
          },
          {
            breakpoint: 768, // Si el ancho de la pantalla es menor a 768px
            settings: {
              slidesToShow: 1, // Muestra 1 slide
            },
          },
        ],
      });
    },
    destroySlider() {
      const slider = $(this.$el).find('.slider');
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
    },
  },
  mounted() {
    document.title = 'Inicio';
    this.initializeSlider();
  },
  beforeUnmount() {
    this.destroySlider();
  },
};
</script>


