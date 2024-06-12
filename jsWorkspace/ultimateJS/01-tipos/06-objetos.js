//Personaje de TV
let nombre = 'Hulk';
let serie = 'Marvel';
let edad = 35;

//Par llave-valor
let personaje = {
    nombre: 'Hulk',
    serie: 'Marvel',
    edad: 35,    
};
console.log(personaje);
console.log(personaje.edad);
//Las comillas simples es para indicar que el tipo de llave es String
console.log(personaje['nombre']);

//Para cambiar el valor de alguna propiedad sería de la siguiente forma
personaje.edad = 0 

//Podemos eliminar propiedades con
delete personaje.serie;

console.log(personaje);

