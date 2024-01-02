//Template Literals
const name = null;
let message = 'Bem-vindo, ' + name;

message = `Bem-vindo , ${ name ? name : 'Visitante' }`;

document.body.innerText = message;