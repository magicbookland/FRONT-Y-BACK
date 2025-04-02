const User = require('../models/User');
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

// Registrar usuario
const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
};

// Iniciar sesión
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: user._id }, constants.JWT_SECRET, { expiresIn: constants.JWT_EXPIRATION });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor' });
    }
};

module.exports = {
    registerUser,
    loginUser
};
