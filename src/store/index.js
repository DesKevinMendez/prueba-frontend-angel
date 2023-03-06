import { createStore } from "vuex"

import pokemonStore from "./pokemonStore"

const store = createStore({
    modules: {
        pokemonStore
    }
})

export default store
