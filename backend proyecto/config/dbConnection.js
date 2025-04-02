const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        // Conectar a MongoDB Atlas con el string de conexión desde el archivo .env
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Detener el proceso si la conexión falla
    }
};

module.exports = dbConnection;
