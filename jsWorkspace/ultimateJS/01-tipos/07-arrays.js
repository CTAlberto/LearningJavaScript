/*let animales = ['perro', 'gato', 'jirafa', 'elefante', 'mono'];
animales.push('pez');
console.log(animales);
*/
const perro = {
    raza: 'perro',
    peso: 25,
    edad: 15
}
const gato = {
    raza: 'gato',
    peso: 15,
    edad: 10,
}
const jirafa = {
    raza: 'jirafa',
    peso: 2560,
    edad: 39,
}

let animalesObj = [perro, gato, jirafa];

function darAnimales(){
    return animalesObj;
}
/*
jirafa.edad=23

console.log(animalesObj);

console.log(typeof animales[0]);

console.log(typeof animalesObj);
*/


