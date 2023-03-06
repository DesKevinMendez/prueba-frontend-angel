import { createStore } from "vuex"
import pokemonStore from "@/store/pokemonStore"
import { pokemonState } from "../../mock-data/test-pokemon-state"

pokemonState


const createVuexStore = (initialState) => 
    createStore({
        modules: {
            pokemonStore: {
                ...pokemonStore,
                state: {...initialState}
            }
        }

    })


describe ( "Pruebas en Vuex -  modulo pokemon", () => {

    test( "Asi debe de estar el estado inicial del State", () => {

        const store = createVuexStore(pokemonState)
        const {isLoading, pokemons} = store.state.pokemonStore

        expect( isLoading ).toBeFalsy()
        expect ( pokemons ).toEqual(pokemonState.pokemons)

        expect()

    })


    test( "Mutations: setPokemons", () => {
        const store = createVuexStore({isLoading: true, pokemons:  []})

        store.commit('pokemonStore/setPokemons',pokemonState.pokemons)

        expect( store.state.pokemonStore.pokemons.length).toBe(3)
        expect( store.state.pokemonStore.isLoading).toBeFalsy

    })


    test("Getters: getPokemonsByTerm", () => {

        const store = createVuexStore(pokemonState)

        const[pokemon1, pokemon2, pokemon3] = pokemonState.pokemons

        expect(store.getters['pokemonStore/getPokemonsByTerm']('').length).toBe(3)
        expect(store.getters['pokemonStore/getPokemonsByTerm']('venu').length).toBe(1)
        expect(store.getters['pokemonStore/getPokemonsByTerm']('venu')).toEqual([pokemon3])

    })

    test("Getter: getPokemonsById", () => {

        const store = createVuexStore(pokemonState)
        const[pokemon1, pokemon2, pokemon3] = pokemonState.pokemons
        expect(store.getters['pokemonStore/getPokemonsById']('2')).toEqual(pokemon2)

    })


    test("Actions: LoadPokemons", async() => {
        const store = createVuexStore({isLoading: true, pokemons:  []})
        
        //setTimeOut
        // expect(store.state.pokemonStore.pokemons.length).toBe(99)

    })

    
})