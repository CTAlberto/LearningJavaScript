const user = {
    id:1, 
}

user.name = 'Alberto'
console.log(user);
//Como vemos aun declarando el objero user como una constante, podemos agregarle propiedades sin problema
//Esto es debido a que los objetos son dinamicos, es decir, podemos agregarle propiedades sin problema

//Si quisieramos que el objeto no se pueda modificar, podemos usar Object.freeze(objeto)
const user1 = Object.freeze({id:1, name:'Pepe'});
user1.name = 'Juan';
console.log(user1);
//Como vemos, al intentar modificar el objeto, no se puede hacer, ya que el objeto esta congelado
user1.activo = true;
console.log(user1);
//Tampoco podemos agregarle propiedades al objeto, ya que esta congelado

//Si quisieramos que el objeto no se pueda modificar, pero si agregarle propiedades, podemos usar Object.seal(objeto)
const user2 = Object.seal({id:1, name:'Pepe'});
user2.name = 'Juan';
console.log(user2);
//Como vemos, al intentar modificar el objeto, no se puede hacer, ya que el objeto esta sellado
user2.activo = true;
console.log(user2);
//Pero si podemos agregarle propiedades al objeto, ya que esta sellado
