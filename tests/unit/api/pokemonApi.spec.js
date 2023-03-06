import pokemonApi from "@/api/pokemonApi"


describe ( "Pruebas en la Api", () => {

    test( "Axios debe de estar configurado correctante con PokemonApi", () => {

        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')


    })

})

