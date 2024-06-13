const fs = require('node:fs');

console.log('Leyendo archivo.txt...');
const text = fs.readFileSync('archivo.txt', 'utf-8');
console.log(text); // Hello, world!

console.log('Leyendo archivo2.txt...');
const text2 = fs.readFileSync('archivo2.txt', 'utf-8');
console.log(text2);

//con readFile leemos de manera asincrona
console.log('Leyendo archivo.txt... de forma asincrona');
/* Esto me esta diciendo:
Lee el archivo, codificado en utf-8, y cuando termines,
ejecuta la funcion que te paso
*/
fs.readFile('archivo.txt', 'utf-8', (err, text) =>{
    console.log(text);
});


console.log('Leyendo archivo2.txt... de forma asincrona');
fs.readFile('archivo2.txt', 'utf-8', (err, text) =>{
    console.log(text);
});
