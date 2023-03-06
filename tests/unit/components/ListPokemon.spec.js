import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"
import ListPokemon from '@/components/ListPokemon'
import pokemonStore from "@/store/pokemonStore"
import { pokemonState } from "../mock-data/test-pokemon-state"


const createVuexStore = (initialState) => 
createStore({
    modules: {
        pokemonStore: {
            ...pokemonStore,
            state: {...initialState}
        }
    }
    
})

describe( "Component: ListPokemon", () => {

    const store = createVuexStore(pokemonState)
    const mockRouter = {
        push: jest.fn()
    }


    let wrapper

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallowMount(ListPokemon, {
            global: {
                mocks:{
                    $router: mockRouter
                },
                plugins: [store]
            }
        })
    })


    test( "Debe llamar a getPokemonsByTerm sin termino de busqueda", () => {

        expect( wrapper.findAll('item-stub').length).toBe(3)
        expect( wrapper.html()).toMatchSnapshot()

    })

    test( "Debe llamar a getPokemonsByTerm y filtrar con el termino de busqueda", async() => {

        const input = wrapper.find('input')
        await input.setValue('ivy')

        expect( wrapper.findAll('item-stub').length).toBe(1)

    })




})