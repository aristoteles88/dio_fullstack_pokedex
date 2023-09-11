function convertPokemonToLi(pokemon) {
    const li = document.createElement('l1')
    li.setAttribute('class', 'pokemon')
    
    const number = document.createElement('span')
    number.setAttribute('class', 'number')
    number.appendChild(document.createTextNode('#001'))

    const name = document.createElement('span')
    name.setAttribute('class', 'name')
    name.appendChild(document.createTextNode(pokemon.name))

    const detail = document.createElement('div')
    detail.setAttribute('class', 'detail')

    const types = document.createElement('ol')
    types.setAttribute('class', 'types')
    
    const type1 = document.createElement('li')
    type1.setAttribute('class', 'type')
    type1.appendChild(document.createTextNode('grass'))
    
    const type2 = document.createElement('li')
    type2.setAttribute('class', 'type')
    type2.appendChild(document.createTextNode('poison'))

    types.appendChild(type1)
    types.appendChild(type2)

    const img = document.createElement('img')
    img.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg')
    img.setAttribute('alt',pokemon.name)

    detail.appendChild(types)
    detail.appendChild(img)

    li.appendChild(number)
    li.appendChild(name)
    li.appendChild(detail)
    

    return li
    
}
const pokemonList = document.getElementById('pokemonList')
fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemons) => {
    for (let i = 0; i < pokemons.length; i++){
        const pokemon = pokemons[i]
        pokemonList.appendChild(convertPokemonToLi(pokemon))
    }
})
.catch((error) => console.error(error))