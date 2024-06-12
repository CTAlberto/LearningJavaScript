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

/*let animalesObj = [perro, gato, jirafa];

function darAnimales(){
    return animalesObj;
}*/
function saludar(animalesObj){
    for(animal of animalesObj){
        console.log(`Hola, soy un ${animal.raza} y tengo ${animal.edad} años`);
    }
}

const animales = darAnimales();
saludar(animales);