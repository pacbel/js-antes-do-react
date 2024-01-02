//Optional Chaining

const user = {
    nome: 'Carlos',
    idade: 15,
    endereco: {
        rua: 'Solange Bernardes',
        numero: 150,
        complemento: '101'
    },
    // enderecoCompleto(){
    //     return this.endereco.rua + this.endereco.numero + this.endereco.complemento;
    // }
};

document.body.innerHTML = user?.endereco?.rua ?? 'Não Informado';
document.body.innerHTML = user?.enderecoCompleto?.() ?? 'Não existe';

const key = 'rua';
document.body.innerHTML = user.endereco?.[key];