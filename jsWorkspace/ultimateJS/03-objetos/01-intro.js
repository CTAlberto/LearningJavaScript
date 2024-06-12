const user = {
    name: 'João',
    age: 31,
    email: 'joao@gmail.com',
    adress: {
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        street: 'Rua dos Pinheiros',
        number: 1290,
    },
    sex: 'man',
    active: true,
    changePassword: function(newPassword) {
        this.password = newPassword;
    }
};

