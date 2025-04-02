import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Configurar Axios globalmente para apuntar al backend
axios.defaults.baseURL = 'http://localhost:5000/api'; // Asegúrate de que tu backend esté corriendo en el puerto 5000

// Interceptor para agregar el token a las cabeceras de las solicitudes
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Agregar el token a las cabeceras
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Crear la instancia de la aplicación Vue y montarla
createApp(App).use(router).mount('#app');
