<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <!-- Navbar -->
    <nav class="flex justify-between items-center py-4 border-b border-gray-700">
      <img src="@/assets/Logo.png" alt="logo" />
      <div class="flex space-x-6">
        <router-link to="/home" class="text-blue-400">Home</router-link>
        <router-link to="/search" class="text-blue-400">Search</router-link>
        <router-link to="/discover" class="text-blue-400">Discover</router-link>
        <router-link to="/chats" class="text-blue-400">Chats</router-link>
        <router-link to="/marketplace" class="text-blue-400">Marketplace</router-link>
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

    <div class="container mx-auto p-6">
      <!-- Sección Popular -->
      <section class="popular-section mb-8">
        <h2 class="section-title">Popular</h2>
        <div v-if="popularSongs.length > 0" class="song-grid">
          <div v-for="song in popularSongs" :key="song.id" class="song-card">
            <img :src="song.image" class="song-image" />
            <div class="song-info">
              <p class="song-title">{{ song.title }}</p>
              <p class="song-artist">{{ song.artist }}</p>
            </div>
          </div>
        </div>
        <div v-else class="empty-message">No hay música popular</div>
      </section>

      <!-- Sección Artista Destacado -->
      <section class="artist-section mb-8">
        <div v-if="popularUser" class="artist-card">
          <img src="https://via.placeholder.com/120" class="artist-image" />
          <div class="artist-info">
            <h3 class="artist-name">{{ popularUser.name || 'Sugerencias sin encontrar' }}</h3>
            <span class="artist-badge">{{ popularUser.title }}</span>
            <p class="artist-description">{{ popularUser.description }}</p>
            <button class="follow-button">Follow</button>
          </div>
        </div>
      </section>

      <!-- Sección de Compartir -->
      <section class="share-section mb-8">
        <h2 class="section-title">Share something</h2>
        <textarea v-model="newPost" class="share-input" placeholder="What's on your mind?"></textarea>
        <button @click="addPost" class="post-button">Post</button>
      </section>

      <!-- Sección de Publicaciones -->
      <section class="posts-section mb-8">
        <h2 class="section-title">Recent Posts</h2>
        <div v-if="posts.length === 0" class="empty-posts">No hay publicaciones aún</div>
        <div v-for="post in sortedPosts" :key="post.id" class="post-card">
          <div class="post-header">
            <p class="post-time">{{ post.timestamp }}</p>
            <div class="post-stats">
              <span>{{ post.likes }} <img src="@/assets/Likes.png" alt="Likes" /></span>
              <span>{{ post.views }} <img src="@/assets/Viewers.png" alt="Views" /></span>
              <span>{{ post.comments.length }} <img src="@/assets/comentarios.png" alt="Comments" /></span>
            </div>
          </div>
          <p class="post-content">{{ post.content }}</p>
          <div class="post-actions">
            <button @click="likePost(post.id)" class="post-action"><img src="@/assets/Likes.png" alt="Like" /></button>
            <button @click="commentPost(post.id)" class="post-action"><img src="@/assets/comentarios.png" alt="Comment" /></button>
          </div>
        </div>
      </section>
    </div>

    <!-- Menús Desplegables -->
    <div v-if="showSettings" class="dropdown settings-dropdown">
      <h3>Settings</h3>
      <div class="settings-option">1. Tools & Resources</div>
      <div class="settings-option">2. Preferences</div>
      <div class="settings-option">3. Public & Visibility</div>
      <div class="settings-option">4. Payments</div>
      <div class="settings-option">5. Your Activity</div>
      <div class="settings-option">6. Community Guidelines & Legal</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newPost: "",
      popularSongs: [],
      posts: [],
      showSettings: false,
      popularUser: null,
    };
  },
  computed: {
    sortedPosts() {
      return this.posts.slice().sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }
  },
  methods: {
    addPost() {
      if (this.newPost.trim()) {
        this.posts.push({
          content: this.newPost,
          timestamp: new Date().toLocaleString(),
          likes: 0,
          views: 0,
          comments: [],
        });
        this.newPost = "";
      }
    },
    likePost(id) {
      const post = this.posts.find(post => post.id === id);
      if (post) post.likes++;
    },
    commentPost(id) {
      const post = this.posts.find(post => post.id === id);
      if (post) post.comments.push("New comment...");
    },
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  mounted() {
    // Make sure the API requests are correct
    axios.get('http://localhost:8000/popular-songs')
      .then(response => {
        this.popularSongs = response.data;
      })
      .catch(error => console.error('Error fetching popular songs:', error));

    axios.get('http://localhost:8000/posts')
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => console.error('Error fetching posts:', error));

    axios.get('http://localhost:8000/popular-user')
      .then(response => {
        this.popularUser = response.data || null;
      })
      .catch(error => console.error('Error fetching popular user:', error));
  }
};
</script>
