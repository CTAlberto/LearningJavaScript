function suma(a, b) {
    // con arguments puedo acceder a los argumentos que se pasaron a la función
    console.log(arguments);//devuelve un objeto con los argumentos que se pasaron a la función

    return a + b;
}
let resultado = suma(5, 3);
console.log(resultado);