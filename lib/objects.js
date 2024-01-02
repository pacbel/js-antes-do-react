
//Objetos

const user = {
    nome: 'Carlos',
    idade: 15,
    endereco: {
        rua: 'Solange Bernardes',
        numero: 150,
        complemento: '101'
    }
};

document.body.innerText = ('endereco' in user);
document.body.innerText = Object.keys(user);
document.body.innerText = JSON.stringify(Object.values(user));
document.body.innerText = JSON.stringify(Object.entries(user));

//Desestruturação de um objeto. Remover uma parte do objeto

//const endereco = user.endereco;
// document.body.innerText = JSON.stringify(endereco);

// const { endereco, idade} = user;
// document.body.innerText = JSON.stringify({endereco, idade});

// const { endereco, idade: age} = user;
// document.body.innerText = JSON.stringify({endereco, age});
//const { endereco, idade: age, nickname = 'Pacbel'} = user;
//document.body.innerText = JSON.stringify({endereco, age, nickname});

function mostraEndereco({endereco}){
return JSON.stringify(endereco);
}

document.body.innerText = mostraEndereco(user);