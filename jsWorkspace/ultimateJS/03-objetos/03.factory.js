let user = {
    id:1,
    email: 'emilio@chencho.com',
    name: 'Emilio',
    active: true,
    restoreKey: function (){
        console.log('Restaurando contraseña');
    }
}
function createUser(email, name){
    return {
        email,
        name,
        active: true,
        restoreKey: function (){
            console.log('Restaurando contraseña');
        }
    }
}

let user1 = createUser(2, 'juanEstafador@gamil.com', 'Juan Estafador');

