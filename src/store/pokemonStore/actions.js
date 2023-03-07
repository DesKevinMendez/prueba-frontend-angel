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
        let typePokemon = data.types[0].type.name
        let mov1 = data.moves[0].move.name
        let mov2 = data.moves[1].move.name
        let mov3 = data.moves[2].move.name

        entries.push({
            id: idPokemon, 
            name: namePokemon, 
            type: typePokemon,
            attack1: mov1,
            attack2: mov2,
            attack3: mov3,
        })
    }

    commit('setPokemons', entries)
}
