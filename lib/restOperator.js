//Rest Operator
const {nome, ...rest} = user;
document.body.innerText = nome;
document.body.innerText = JSON.stringify(rest);

const arrays = [1, 2, 3, 4, 5];
const [first, , third, ...rest2] = arrays;
document.body.innerText = JSON.stringify({first, third, rest2});