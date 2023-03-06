import pokemonApi from "@/api/pokemonApi"


export const LoadPokemons = async( {commit} ) => {

    let pokemonArray = []

    for (let i = 1; i < 100; i++) {
        const {data} = await pokemonApi.get(`/${i}`)
        pokemonArray.push({
            data
        })
    } 

    const entries = []

    for(let id of Object.keys(pokemonArray)) {

        let datos = pokemonArray[id]
        let {data} = datos
        let namePokemon = data.name
        let idPokemon =  data.id+""

        entries.push({
            id: idPokemon, name: namePokemon

        })
    }

    commit('setPokemons', entries)
}
