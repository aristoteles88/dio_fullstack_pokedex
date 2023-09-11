const pokeApi = {}

function convertPokeAPIDetailToPokemon(pokemonDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.id
    pokemon.name = pokemonDetail.name
    pokemon.types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
    pokemon.photo = pokemonDetail.sprites.other["official-artwork"].front_default
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemon) => convertPokeAPIDetailToPokemon(pokemon))
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokemon) => pokeApi.getPokemonDetail(pokemon)))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => pokemonDetails)
        .catch((error) => console.error(error))
}
