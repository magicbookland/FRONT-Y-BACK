const Post = require('../models/Post');

// Crear post
const createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newPost = new Post({
            title,
            content,
            user: req.user._id // Asumiendo que usas middleware de autenticación
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el post' });
    }
};

// Obtener todos los posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'email');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los posts' });
    }
};

// Obtener un post por ID
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('user', 'email');
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el post' });
    }
};

// Actualizar un post
const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el post' });
    }
};

// Eliminar un post
const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        res.json({ message: 'Post eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el post' });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
};
