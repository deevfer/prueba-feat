import { createApp } from 'vue';
import App from './App.vue';
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import './assets/css/all.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
window.bootstrap = require('bootstrap');
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const app = createApp(App);

app.use(Vue3Toastify);

app.mount('#app');