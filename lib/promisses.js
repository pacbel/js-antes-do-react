//Nem tudo na programação é síncrono
//Não podemos esperar até que a resposta volte para que o código continue a ser
//executado
//Algumas coisas demoram para retornar as informações
//Se vamos buscar uma informação no EUA a latência é maior que no Brasil por exemplo
//Precisamos que algumas coisas possam acontecer em paralelo e
//dar a tratativa correta quando acontecer

// const somaDoisNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(a + b);
//     }, 4000);
//   });
// };

// somaDoisNumeros(1, 23)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// somaDoisNumeros(1, 23)
//   .then((soma) => {
//     document.body.innerText = soma;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Modelo 1
// fetch(
//   "https://virtualmesh.virtual.app.br/api/v1/receitaws/consultar/05065736000161"
// )
//   .then((response) => {
//     response.json().then((body) => {
//       console.log(body.data);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Modelo 2
// fetch(
//   "https://virtualmesh.virtual.app.br/api/v1/receitaws/consultar/05065736000161"
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((body) => {
//     console.log(body.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Função executada com sucesso!");
//   });

//Modelo 3 - Toda função assincrona vira uma promisse
async function buscaDadosCNPJ() {
  try {
    const response = await fetch(
      "https://virtualmesh.virtual.app.br/api/v1/receitaws/consultar/05065736000161"
    );
    const body = await response.json();
    return body.data;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Função executada com sucesso!");
  }
}

const dados = buscaDadosCNPJ().then((data) => {
  console.log(data);
});
