const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Usar POST en lugar de GET para login y registro
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
