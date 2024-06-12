/**
 * Recibiendo un array de números aleatorios
 * devuelve un array con dos posiciones
 * p0 = numero menor
 * p1 = numero mayor
 */

const array = [2, 5, 7, 15, -5, -100, 55];

function getMinMax(array){
    let min = array[0];
    let max = array[0];
    for(let i = 0; i<array.length;i++){
        if (array[i]<min){
            min = array[i];
        }
        if (array[i]>max){
            max = array[i];
        }
    }
   
    return [min, max];
}


const numeros = getMinMax(array);
console.log(numeros);


//Otra forma de hacerlo sería
function getMinMax(array){
    let min = array[0];
    let max = array[0];
    for(numero of array){
        min = min < numero ? min : numero;
        max = max > numero ? max : numero;
    }
   
    return [min, max];
}

console.log(getMinMax(array))
