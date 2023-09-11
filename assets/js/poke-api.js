const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++){
            const pokemon = pokemons[i]
            pokemonList.appendChild(convertPokemonToLi(pokemon))
        }
    })
    .catch((error) => console.error(error))
}
