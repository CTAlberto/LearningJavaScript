/**
 * validar que el indice no sea menor a 0
 * elemento exista en el array
 */
function getByIndex(array, index){
    if(array.length===0){
        return 'Array nulo'
    }
    if(index < 0){
        return 'Indice no puede ser menor a cero'
    }
    if(index>array.length-1){
        let longitud = array.length-1;
        return 'Indice ' +index+' es mayor que el tamaño del array:' + longitud;
    }
    return array[index];
}

console.log(getByIndex([1, 2], 11));