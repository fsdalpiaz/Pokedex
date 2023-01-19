
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${convertPokemonToLi(pokemon.types).join('')}}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
      </div>        
    </li>
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
  //debugger;
  const newHtml = pokemons.map(convertPokemonToLi).join('')
  pokemonList.innerHTML = newHtml
})  
  

Promise.all([
  fetch
])

  
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
