const pokemonList = document.getElementById('pokemonList')
const loadMorePokemons = document.getElementById('loadMorePokemons')

const maxRecords = 151
let limit = 10
let offset = 0

function loadPokemonItens(offset, limit) {
    function convertPokemonTypesToLi(pokemonTypes) {
        const types = document.createElement('ol')
        types.setAttribute('class', 'types')
        pokemonTypes.map((typeName) => {
            const type = document.createElement('li')
            type.setAttribute('class', `type ${typeName}`)
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
        name.appendChild(document.createTextNode(`${pokemon.name}`))
    
        const detail = document.createElement('div')
        detail.setAttribute('class', 'detail')
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

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.map((pokemon) => pokemonList.append(convertPokemonToLi(pokemon)))
    })
}

loadPokemonItens(offset, limit)

loadMorePokemons.addEventListener('click', () => {
    offset += limit
    if (offset + limit >= maxRecords){
        limit = (maxRecords - offset)
        loadMorePokemons.parentElement.removeChild(loadMorePokemons)
    }
    
    loadPokemonItens(offset, limit)
})