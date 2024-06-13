const spiderman = {
    nombre: 'Peter Parker',
    edad: 17,
    poderes: ['trepar', 'fuerza', 'agilidad', 'telarañas'],
}

// Forma tradicional de acceder a las propiedades de un objeto
/*const nombre = spiderman.nombre;
const edad = spiderman.edad;
const poderes = spiderman.poderes;
*/
// Atajos para acceder a las propiedades de un objeto
const { nombre, edad, poderes } = spiderman;
console.log(nombre, edad, poderes);

// Tambien podemos asignar nombres de variables personalizados
const { nombre: nombreHeroe, edad: edadHeroe, poderes: poderesHeroe } = spiderman;
console.log(nombreHeroe, edadHeroe, poderesHeroe); // De este modo ya no podremos acceder a las variables nombre, edad y poderes
// Pero si podremos acceder a ellas con spiderman.nombre, spiderman.edad, spiderman.poderes

// Podemos asignar valores por defecto a las propiedades
const { vuela = false } = spiderman;
console.log(vuela);
