let pairs = [
    [1, {name: 'Alberto'}],
    [2, {name: 'Pedro'}],
    [3, {nem: 'Acosta'}],
];

function toCollection(pairs){
    let array = []
    for(element of pairs){
        let object = Object.assign({id: element[0],name: element[1].name})
        array.push(object);
    }

    return array;
}

let k = toCollection(pairs);
console.log(k);