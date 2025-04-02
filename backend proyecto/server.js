const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/dbConnection');  // Conexión a la base de datos
const crudRoutes = require('./routes/crudRoutes');  // Asegúrate de importar las rutas CRUD
const app = express();

// Usar CORS para permitir el acceso desde el frontend
app.use(cors());

// Otras configuraciones
app.use(express.json());  // Permitir recibir datos en formato JSON

// Rutas CRUD
app.use('/api', crudRoutes);  // Usar las rutas CRUD en el prefijo '/api'

// Conexión a la base de datos
dbConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
