import { shallowMount } from "@vue/test-utils"
import PokemonSelected from '@/components/PokemonSelected.vue'
import { pokemonState } from "../mock-data/test-pokemon-state";



describe( "Component: PokemonSelected", () => {

    const mockRouter = {
        push: jest.fn()
    }

    const wrapper = shallowMount(PokemonSelected, {

        props: {
            poke: pokemonState.pokemons[1]
        },
        global: {
            mocks:{
                $router: mockRouter
            }
        }

    })

    test( "Debe de hacer match con el snapshot", () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test( "Debe de redireccionar al hacer click en un elemento", () => {

        const element = wrapper.find('.cursor-pointer')
        console.log("Pokemon seleccionado", element)
        element.trigger('click')

        expect(mockRouter.push).toHaveBeenCalled()
    })

} )