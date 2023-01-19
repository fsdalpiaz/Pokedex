const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151
const limit = 5;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.numbero}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>
              <img src="${pokemon.photo}" alt="${pokemon.name}">
          </div>
      </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit
  const qtdRecordsWithNexPage = offset + limit

  if (qtdRecordsWithNexPage >= maxRecords) {
      const newLimit = maxRecords - offset
      loadPokemonItens(offset, newLimit)

      loadMoreButton.parentElement.removeChild(loadMoreButton)
  } else {
      loadPokemonItens(offset, limit)
  }
})



// TRASH OF CODES

//   const listItems = []

//   for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
//     listItems.push(convertPokemonToLi(pokemon))
//   }

//   pokemonList.innerHTML += convertPokemonToLi(pokemon)

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

// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

// pokeApi.getPokemons().then((pokemons = []) => {
//     //debugger;
//     const newHtml = pokemons.map(convertPokemonToLi).join('')
//     pokemonList.innerHTML = newHtml
//   })