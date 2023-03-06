
export const  getPokemonsByTerm = (state) => (term = '') =>{

    if( term.length === 0) return state.pokemons

    return state.pokemons.filter(namePokemon => namePokemon.name.toLowerCase().includes(term.toLocaleLowerCase() ))
    
}


export const  getPokemonsByOrder = (state) => (term = '') =>{

    if( term.length === 0) {
        const pokemonsOrdenados = state.pokemons.sort((a,b) => a.name.localeCompare(b.name))
        return pokemonsOrdenados
    } 


    const pokemonsFiltrados = state.pokemons.filter(namePokemon => namePokemon.name.toLowerCase().includes(term.toLocaleLowerCase() ))
    const pokemonsOrdenados = pokemonsFiltrados.sort((a,b) => a.name.localeCompare(b.name))
    console.log("DESDE GETERS¿¿¿¿¿¿¿¿¿¿¿¿",pokemonsOrdenados)
    return pokemonsOrdenados

}

export const  getPokemonsById = (state) => ( id = '' ) =>{
    
    const poke = state.pokemons.find( poke => poke.id === id )

    if(!poke)  return

    return {...poke}

}


