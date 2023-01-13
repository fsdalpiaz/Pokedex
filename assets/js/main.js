
const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

//função sintaxe reduzida,
//sem contexto, usado quando tem callback ou
//contexto isolado, não precisa declarar o corpo da função

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => console.log(jsonBody))
  .catch((error) => console.error(error));

// fetch(url)
//   .then(function (response) { //função anônima
//     return response.json()
//   })
//   .then(function (jsonBody) {
//       console.log(jsonBody);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(function () {
//     console.log("Requisição concluída!");
//   })
