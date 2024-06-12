function mayorMenor(a, b){
    if(a>b){
        return a
    }else if(b>a){
        return b
    }else{
        return 'Son iguales'
    }
}

console.log(mayorMenor(2, 5));
