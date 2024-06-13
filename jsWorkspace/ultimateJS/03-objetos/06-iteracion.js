// Aqui veremos como se puede iterar sobre un objeto
const spiderman = {
    nombre: 'Peter Parker',
    edad: 17,
    poderes: ['trepar', 'fuerza', 'agilidad', 'telarañas'],
}
// Iterar sobre un objeto
for (const property in spiderman) {
    console.log(property); // nombre, edad, poderes
    console.log(spiderman[property]); // Peter Parker, 17, ['trepar', 'fuerza', 'agilidad', 'telarañas']
    console.log('------');
}
console.log('----------------');
// Iterar sobre un objeto
for(const property in spiderman) {
    console.log(property, spiderman[property]);
}

//Con Object.keys() podemos obtener un array con las propiedades de un objeto
const keys = Object.keys(spiderman);
console.log(keys); // ['nombre', 'edad', 'poderes']
// Podemos iterar sobre el array de propiedades
keys.forEach(property => {
    console.log(property, spiderman[property]);
});
//Con Object.values() podemos obtener un array con los valores de las propiedades de un objeto
const values = Object.values(spiderman);
console.log(values); // ['Peter Parker', 17, ['trepar', 'fuerza', 'agilidad', 'telarañas']]
values.forEach(value => {
    console.log(value);
});
//Con Object.entries() podemos obtener una matriz con las propiedades y valores de un objeto
const entries = Object.entries(spiderman);
console.log(entries); // [['nombre', 'Peter Parker'], ['edad', 17], ['poderes', ['trepar', 'fuerza', 'agilidad', 'telarañas']]]


const meme = {
    a : true,
    b : 2,
    c : false
};

const array = [];
// con el bucle for...in podemos iterar sobre las propiedades de un objeto (no sobre los valores)
for (const property in meme) { // meme = {a: true, b: 2, c: false} || property = a, b, c
    // Si la propiedad es booleana, la añadimos al array (El nombre de la propiedad, no el valor)
    if(typeof meme[property] === 'boolean') {
        array.push(property);
    }
}

//Operador de encadenamiento opcional
const pepe = {
    a : true,
    b : 2,
    c : false
};

console.log(pepe?.a); // true
console.log(pepe?.d); // undefined
