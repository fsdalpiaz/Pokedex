

const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.error(error));
}

//função sintaxe reduzida,
//sem contexto, usado quando tem callback ou
//contexto isolado, não precisa declarar o corpo da função
