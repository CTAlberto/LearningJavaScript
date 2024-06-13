const fs = require('node:fs');

const stats = fs.statSync('archivo.txt');

console.log(
    stats.isFile(), // isFile() verifica si es un archivo
    stats.isDirectory(), // isDirectory() verifica si es un directorio
    stats.isSymbolicLink(), // isSymbolicLink() verifica si es un enlace simbólico
    stats.size, // size() devuelve el tamaño del archivo en bytes
);

