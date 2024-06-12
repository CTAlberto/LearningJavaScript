/**
 * Crea un array de longitud n
 * sus elementos han de ser números desde 1 hasta n
 */
function nLength(n){
    let array = [];

    for(let i = 1; i<= n; i++){
        array.push(i)
    }
    return array;
}

console.log(nLength(5));