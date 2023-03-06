

export const setPokemons = ( state, pokemons) => {
 
    state.pokemons = [...state.pokemons, ...pokemons]
    state.isLoading = true

}