const express = require('express');
const {
    createUser,
    getUsers,
    getUserById,  // Asegúrate de importar la función correctamente
    updateUser,
    deleteUser
} = require('../controllers/crudController');  // Asegúrate de que el controlador esté importado correctamente
const router = express.Router();

// Crear un usuario
router.post('/users', createUser);

// Obtener todos los usuarios
router.get('/users', getUsers);

// Obtener un usuario por ID
router.get('/users/:id', getUserById);  // Ruta para obtener usuario por ID

// Actualizar un usuario
router.put('/users/:id', updateUser);

// Eliminar un usuario
router.delete('/users/:id', deleteUser);

module.exports = router;
