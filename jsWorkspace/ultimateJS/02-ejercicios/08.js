/**
 * 
 */


const array = [
    {
        id: 1,
        name: 'alberto',
    }, {
        id:2,
        name: 'juan',
    }, {
        id: 3,
        name: 'Pedro',
    }
];


function toPair(array){
    let matrix = [];

    for(element of array){
        matrix.push([element.id, element]);
    }
    return matrix;
}
console.log(toPair(array));