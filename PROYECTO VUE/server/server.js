const express = require('express');
const cors = require('cors');  // Importa CORS
const app = express();
const port = 8000;

// Habilitar CORS
app.use(cors());  // Esto habilita CORS para todas las solicitudes

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Ruta para obtener canciones populares
app.get('/popular-songs', (req, res) => {
  const popularSongs = [
    { id: 1, title: "Rose Deep", artist: "Leslie B", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Song Title", artist: "Artist Name", image: "https://via.placeholder.com/150" }
  ];
  res.json(popularSongs);  // Envia las canciones populares al frontend
});

// Ruta para obtener publicaciones
app.get('/posts', (req, res) => {
  const posts = [
    { id: 1, content: "This is a post", timestamp: "2025-03-29 12:00", likes: 5, views: 20, comments: [] },
    { id: 2, content: "Another post", timestamp: "2025-03-30 14:30", likes: 3, views: 10, comments: [] }
  ];
  res.json(posts);  // Envia las publicaciones al frontend
});

// Ruta para agregar una publicación
app.post('/posts', (req, res) => {
  const newPost = req.body;  // Recibe los datos de la nueva publicación
  newPost.id = Math.floor(Math.random() * 1000);  // Genera un ID aleatorio
  res.json(newPost);  // Devuelve la publicación creada
});

// Iniciar el servidor en el puerto 8000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
