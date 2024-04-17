// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // Ruta de tu archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta de salida para los archivos compilados
    filename: 'bundle.js' // Nombre del archivo de salida
  },
  // Aquí puedes agregar más configuración de Webpack según tus necesidades
};
