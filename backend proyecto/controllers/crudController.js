const User = require('../models/User');  // Asegúrate de tener el modelo correcto

// Crear un usuario
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();  // Obtener todos los usuarios
    res.status(200).json(users);  // Devuelve todos los usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

// Obtener un usuario por ID (Faltaba esta función)
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);  // Buscar usuario por ID
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);  // Devuelve los detalles del usuario
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { username, email, password }, { new: true });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);  // Devuelve el usuario actualizado
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);  // Eliminar usuario por ID
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,  // Asegúrate de exportar esta función
  updateUser,
  deleteUser
};
