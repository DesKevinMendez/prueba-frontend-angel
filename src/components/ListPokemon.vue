<template>

    <div :key="order" class="bg-blue-100 mx-auto w-2/3 flex flex-col mt-5">

        <input type="text" 
        class="bg-white border-2 border-blue-500 p-2" 
        placeholder="Escribir nombre del Pokemon"
        v-model="term"
        >

        <!-- <label class="relative inline-flex items-center mr-5 cursor-pointer mt-5 ml-5" >
            <input @click="changeOrder" type="checkbox" value="" class="sr-only peer" checked>
                <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Ordenar alfabeticamente</span>
        </label> -->

        <button @click="changeOrder" class="bg-blue-500 w-1/4 mt-5 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Ordenar
        </button>

        <div v-if="order" class="overflow-y-auto h-50  mt-5">
            <Item 
                v-for="poke in pokemonByTerm"
                :key="poke"
                :poke="poke"
            />
        </div>

        <div v-if="!order" class="overflow-y-auto h-50  mt-5">
            <Item 
                v-for="poke in orderByAlphabetic"
                :key="poke"
                :poke="poke"
            />
        </div>

    </div>

</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { mapGetters } from 'vuex';

export default{

    data(){
        return{
            term: '',
            order: false,
        }
    },

    components: {
        Item: defineAsyncComponent( () => import('./PokemonSelected.vue'))
    },
    computed:{
        ...mapGetters('pokemonStore',['getPokemonsByTerm','getPokemonsById', 'getPokemonsByOrder']),
        pokemonByTerm(){
            return this.getPokemonsByTerm(this.term)
        },

        orderByAlphabetic(){
            return this.getPokemonsByOrder(this.term)
        }
        

    }, 

    methods:{
        changeOrder(){
            this.order = !this.order
            console.log("Se hizo clic", this.order)
            return
        }
    },
    mounted(){
        this.changeOrder()
    },

    watch:{
        order(){
            
        }
    }

}

</script>