<template>
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Navbar -->
      <nav class="flex justify-between items-center py-4 border-b border-gray-700">
        <img src="@/assets/Logo.png" alt="logo">
        <div class="flex space-x-6">
          <router-link to="/home" class="text-blue-400">Home</router-link>
          <router-link to="/search" class="text-blue-400">Search</router-link>
          <router-link to="/discover">Discover</router-link>
          <router-link to="/chats">Chats</router-link>
          <router-link to="/marketplace">Marketplace</router-link>
        </div>
        <div class="flex space-x-4">
          <button @click="toggleNotifications" class="p-2 bg-gray-800 rounded-full">
            <img src="@/assets/Notifications.png" alt="Notificaciones" class="w-6 h-6" />
          </button>
          <button @click="toggleSettings" class="p-2 bg-gray-800 rounded-full">
            <img src="@/assets/Configuracion.png" alt="Ajustes" class="w-6 h-6" />
          </button>
          <button @click="logout" class="p-2 bg-gray-800 rounded-full">
            <img src="@/assets/Salir.png" alt="Cerrar sesión" class="w-6 h-6" />
          </button>
        </div>
      </nav>
  
      <!-- Cuadro de Búsqueda -->
      <div class="container mx-auto p-6">
        <!-- Vista 1: "What are you looking for?" -->
        <div v-if="view === 1">
          <div class="search-container flex flex-col items-center">
            <h2 class="text-2xl mb-4">What are you looking for?</h2>
            <div class="relative w-full max-w-lg">
              <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar rounded-full w-full p-4 bg-gray-800 text-white" />
              <button @click="performSearch" class="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full">Search</button>
            </div>
            <p class="mt-4 text-gray-400">You don't have a search history.</p>
          </div>
        </div>
  
        <!-- Vista 2: Old Searches -->
        <div v-if="view === 2">
          <div class="search-container flex flex-col items-center">
            <h2 class="text-2xl mb-4">Old searches</h2>
            <div class="relative w-full max-w-lg">
              <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar rounded-full w-full p-4 bg-gray-800 text-white" />
              <button @click="performSearch" class="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full">Search</button>
            </div>
            <div v-if="oldSearches.length > 0" class="grid grid-cols-2 gap-4 mt-4">
              <div v-for="search in oldSearches" :key="search" class="search-item bg-gray-700 p-4 rounded-lg">
                {{ search }}
              </div>
            </div>
            <div v-else class="mt-4 text-gray-400">No previous searches</div>
          </div>
        </div>
  
        <!-- Vista 3: Resultados de búsqueda y Categorías -->
        <div v-if="view === 3">
          <div class="search-container flex flex-col items-center">
            <h2 class="text-2xl mb-4">Search Results</h2>
            <div class="relative w-full max-w-lg">
              <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar rounded-full w-full p-4 bg-gray-800 text-white" />
              <button @click="performSearch" class="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full">Search</button>
            </div>
            <p class="mt-4 text-gray-400">Found {{ searchResults.length }} results</p>
  
            <div class="categories mt-4 flex gap-4">
              <button @click="filterByCategory('publications')" class="category-btn">Publications</button>
              <button @click="filterByCategory('artists')" class="category-btn">Artists</button>
              <button @click="filterByCategory('music')" class="category-btn">Music</button>
              <button @click="filterByCategory('video')" class="category-btn">Video</button>
            </div>
  
            <div class="search-results mt-6">
              <div v-for="result in filteredResults" :key="result.id" class="result-card bg-gray-700 p-4 rounded-lg mt-4">
                <p>{{ result.name }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Vista 4: Artistas -->
        <div v-if="view === 4">
          <div class="search-container flex flex-col items-center">
            <h2 class="text-2xl mb-4">Artist Results</h2>
            <div class="relative w-full max-w-lg">
              <input type="text" v-model="searchQuery" placeholder="Search..." class="search-bar rounded-full w-full p-4 bg-gray-800 text-white" />
              <button @click="performSearch" class="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full">Search</button>
            </div>
  
            <div v-if="artists.length > 0" class="grid grid-cols-2 gap-4 mt-4">
              <div v-for="artist in artists" :key="artist.id" class="artist-card bg-gray-700 p-4 rounded-lg">
                <p>{{ artist.name }}</p>
              </div>
            </div>
            <div v-else class="mt-4 text-gray-400">No artists found</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        view: 1, // Estado para manejar las vistas
        searchQuery: '',
        oldSearches: ['Rock', 'Jazz', 'Pop'], // Ejemplo de búsquedas antiguas
        searchResults: [],
        filteredResults: [],
        artists: [],
      };
    },
    methods: {
      performSearch() {
        if (this.searchQuery.trim()) {
          this.view = 3; // Cambiar a la vista de resultados
          this.fetchSearchResults();
        }
      },
      fetchSearchResults() {
        // Simulación de obtención de resultados
        // Aquí deberías hacer la llamada a la API o a tu base de datos
        axios.get(`http://localhost:8000/search?q=${this.searchQuery}`).then(response => {
          this.searchResults = response.data; // Datos de búsqueda
          this.filteredResults = this.searchResults; // Mostrar todos los resultados inicialmente
        });
  
        // Simulación de obtener artistas
        axios.get(`http://localhost:8000/artists?q=${this.searchQuery}`).then(response => {
          this.artists = response.data; // Datos de artistas
        });
      },
      filterByCategory(category) {
        this.filteredResults = this.searchResults.filter(result => result.category === category);
      },
    },
    mounted() {
      // Aquí podrías cargar datos iniciales, si es necesario
    },
  };
  </script>
  
  <style scoped>
  .search-container {
    text-align: center;
  }
  
  .search-bar {
    padding: 10px;
    background-color: #2a2a2a;
    border: none;
    color: white;
  }
  
  .search-item, .result-card, .artist-card {
    padding: 10px;
    border-radius: 8px;
  }
  
  .category-btn {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .category-btn:hover {
    background-color: #555;
  }
  </style>
  