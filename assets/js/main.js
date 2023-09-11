function convertPokemonTypesToLi(pokemonTypes) {
    const types = document.createElement('ol')
    types.setAttribute('class', 'types')
    pokemonTypes.map((typeName) => {
        const type = document.createElement('li')
        type.setAttribute('class', 'type')
        type.appendChild(document.createTextNode(typeName))
        types.appendChild(type)
    })

    return types
}

function convertPokemonToLi(pokemon) {
    const li = document.createElement('l1')
    li.setAttribute('class', `pokemon ${pokemon.types[0]}`)
    
    const number = document.createElement('span')
    number.setAttribute('class', 'number')
    let pokemonNumber = '000'.concat(pokemon.number)
    pokemonNumber = pokemonNumber.substring(pokemonNumber.length - 4)
    number.appendChild(document.createTextNode(`#${pokemonNumber}`))

    const name = document.createElement('span')
    name.setAttribute('class', 'name')
    let pokemonName = `${pokemon.name}`
    pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)
    name.appendChild(document.createTextNode(pokemonName))

    const detail = document.createElement('div')
    detail.setAttribute('class', 'detail')
    console.log(pokemon.types)
    types = convertPokemonTypesToLi(pokemon.types)

    const img = document.createElement('img')
    img.setAttribute('src',pokemon.photo)
    img.setAttribute('alt',pokemon.name)

    detail.appendChild(types)
    detail.appendChild(img)

    li.appendChild(number)
    li.appendChild(name)
    li.appendChild(detail)
    

    return li
    
}
const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons = []) => {
    pokemons.map((pokemon) => pokemonList.append(convertPokemonToLi(pokemon)))
})