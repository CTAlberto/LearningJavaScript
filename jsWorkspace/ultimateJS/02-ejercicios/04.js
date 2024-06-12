const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function parImpar(array){
    for(let numero of array){
        if(numero % 2 !== 0){
            console.log('Impar ' + numero)
        }
    }
}

parImpar(array);

function otraForma(){
    for(let i = 0; i<=10;i++){
        if(i % 2 !== 0){
            console.log('Impar ' + i)
        }
    }
}

otraForma();