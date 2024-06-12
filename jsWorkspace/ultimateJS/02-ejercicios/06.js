/**
 * Devuelve la cantidad de números positivos y negativos de un array
 */
const array = [2, 5, 7, 15, -5, -100, 55];

function countPosNeg(array){
    let pos= 0;
    let neg = 0;
    for(number of array){
        if(number>=0){pos++}else{neg++};
    }
    return [pos, neg];
}

console.log(countPosNeg(array));