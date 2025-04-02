module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',  // Dirección de tu backend
        changeOrigin: true,
        secure: false
      }
    }
  }
}
