<template>
  <div class="discover-page">
    <header>
      <nav class="navbar">
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
          <li class="active"><router-link to="/discover">Discover</router-link></li>
          <li><router-link to="/charts">Charts</router-link></li>
          <li><router-link to="/marketplace">Marketplace</router-link></li>
        </ul>
      </nav>
    </header>

    <section class="trending">
      <h2>Trending Now</h2>
      <div class="carousel">
        <div v-for="(song, index) in trendingSongs" :key="index" class="song-card">
          <img :src="song.image" :alt="'Portada de ' + song.title" loading="lazy">
          <p>{{ song.title }}</p>
        </div>
      </div>
    </section>

    <section class="best-selling">
      <h2>Best Selling Loop Samples</h2>
      <div class="song-list">
        <div v-for="(song, index) in bestSelling" :key="index" class="song-item">
          <img :src="song.image" :alt="'Portada de ' + song.title" loading="lazy">
          <p>{{ song.title }}</p>
        </div>
      </div>
    </section>

    <section class="featured-artist">
      <h2>Featured Artist of the Week</h2>
      <div class="artist-card">
        <img :src="featuredArtist.image" :alt="'Imagen de ' + featuredArtist.name" loading="lazy">
        <h3>{{ featuredArtist.name }}</h3>
        <p>{{ featuredArtist.description }}</p>
        <router-link to="/artist-profile"><button>Follow</button></router-link>
      </div>
    </section>

    <section class="recommended">
      <h2>Recommended For You</h2>
      <p>Because you liked {{ mostListenedSong.title }}</p>
      <div class="song-list">
        <div v-for="(song, index) in recommendedSongs" :key="index" class="song-item">
          <img :src="song.image" :alt="'Portada de ' + song.title" loading="lazy">
          <p>{{ song.title }}</p>
        </div>
      </div>
      <p>Because you liked {{ favoriteArtist.name }}</p>
      <div class="artist-list">
        <div v-for="(artist, index) in recommendedArtists" :key="index" class="artist-card">
          <img :src="artist.image" :alt="'Imagen de ' + artist.name" loading="lazy">
          <h3>{{ artist.name }}</h3>
        </div>
      </div>
    </section>

    <section class="new-artists">
      <h2>New Artists Spotlight</h2>
      <div class="artist-spotlight">
        <div v-for="(artist, index) in newArtists" :key="index" class="artist-card">
          <img :src="artist.image" :alt="'Imagen de ' + artist.name" loading="lazy">
          <h3>{{ artist.name }}</h3>
          <div class="song-list">
            <div v-for="(song, sIndex) in artist.songs" :key="sIndex" class="song-item">
              <img :src="song.image" :alt="'Portada de ' + song.title" loading="lazy">
              <p>{{ song.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="genres">
      <h2>By Genre</h2>
      <div class="genre-grid">
        <router-link v-for="(genre, index) in genres" :key="index" :to="'/genre/' + genre.toLowerCase()">
          <button class="genre-button">{{ genre }}</button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingSongs: [
        { title: "Rose deep", image: "path-to-image.jpg" },
        { title: "Rose deep", image: "path-to-image.jpg" },
        { title: "Rose deep", image: "path-to-image.jpg" },
      ],
      bestSelling: [
        { title: "Rose deep", image: "path-to-image.jpg" },
        { title: "Rose deep", image: "path-to-image.jpg" },
      ],
      featuredArtist: {
        name: "Leslie B",
        description: "Best Seller of the month, known for her amazing music and innovative style.",
        image: "path-to-artist-image.jpg"
      },
      mostListenedSong: { title: "Your Favorite Song", image: "path-to-favorite-song.jpg" },
      recommendedSongs: [
        { title: "Recommended 1", image: "path-to-image.jpg" },
        { title: "Recommended 2", image: "path-to-image.jpg" },
        { title: "Recommended 3", image: "path-to-image.jpg" },
        { title: "Recommended 4", image: "path-to-image.jpg" },
        { title: "Recommended 5", image: "path-to-image.jpg" },
        { title: "Recommended 6", image: "path-to-image.jpg" },
      ],
      favoriteArtist: { name: "Favorite Artist", image: "path-to-favorite-artist.jpg" },
      recommendedArtists: [
        { name: "Artist 1", image: "path-to-artist.jpg" },
        { name: "Artist 2", image: "path-to-artist.jpg" },
        { name: "Artist 3", image: "path-to-artist.jpg" },
      ],
      newArtists: [
        { name: "New Artist 1", image: "path-to-artist.jpg", songs: [
          { title: "Song 1", image: "path-to-song.jpg" },
          { title: "Song 2", image: "path-to-song.jpg" }
        ]},
        { name: "New Artist 2", image: "path-to-artist.jpg", songs: [
          { title: "Song 1", image: "path-to-song.jpg" },
          { title: "Song 2", image: "path-to-song.jpg" }
        ]},
        { name: "New Artist 3", image: "path-to-artist.jpg", songs: [
          { title: "Song 1", image: "path-to-song.jpg" },
          { title: "Song 2", image: "path-to-song.jpg" }
        ]},
      ],
      genres: ["Pop", "Rock", "Hip-Hop", "Electronic EDM", "Jazz", "Blues", "Classical", "Reggae"]
    };
  }
};
</script>

<style scoped>
.discover-page {
  position: relative;
  width: 100%;
  height: auto;
  background: #24292C;
  overflow: hidden;
  font-family: Roboto, sans-serif;
  color: white;
}

header {
  width: 100%;
  height: 140px;
  background: #1D2224;
  position: relative;
}

.navbar ul {
  list-style: none;
  display: flex;
  padding-left: 384px;
}

.navbar li {
  margin-right: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
}

.navbar .active a {
  color: #28BBDA;
}

.song-card img,
.song-item img,
.artist-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.song-card img:hover,
.song-item img:hover,
.artist-card img:hover {
  transform: scale(1.1);
}

.genre-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.genre-grid button {
  background: linear-gradient(90deg, #28BBDA 0%, #303D4F 100%);
  border: none;
  color: white;
  padding: 15px;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
}

/* Media Query para pantallas más pequeñas */
@media (max-width: 768px) {
  .genre-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .genre-grid {
    grid-template-columns: 1fr;
  }
}
</style>
