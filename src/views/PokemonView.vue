<template>

    <div class="cursor-pointer mt-5 px-5 pt-5 mx-auto flex flex-col items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-800 dark:hover:bg-gray-800">
      <img class="p-2 border-solid border-2 border-indigo-100 hover:bg-white object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="imgSrc" alt="pokemon">
      <div class="flex flex-col justify-between p-2 leading-normal" >
          <h3 class="mb-2 text-2x2 text-blue-900 dark:text-white"> <span class="font-bold tracking-tight">Name:</span>  {{ pokemon.name }}</h3>
          <h3 class="mb-2 text-2x2 text-blue-900 dark:text-white"> <span class="font-bold tracking-tight">Type Pokemon:</span> {{ pokemon.type }}</h3> <br>
          <h3 class="text-left mb-2 text-2x2 font-bold tracking-tight text-blue-900 dark:text-white">Moves:</h3>

          <div class="columns-2">
            <h2 class="text-blue-900 flex items-center p-3 text-base font-bold rounded-lg bg-blue-50 hover:bg-white hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white mb-2">- {{ pokemon.attack1 }}</h2>
            <h2 class="text-blue-900 flex items-center p-3 text-base font-bold rounded-lg bg-blue-50 hover:bg-white group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white mb-2">- {{ pokemon.attack2 }}</h2>
            <h2 class="text-blue-900 flex items-center p-3 text-base font-bold rounded-lg bg-blue-50 hover:bg-white group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white mb-2">- {{ pokemon.attack3 }}</h2>
          </div>
      </div>
  </div>


  </template>
  
  <script>
import { mapGetters } from 'vuex';


  export default {

    props:{
      id: {
        type: Number,
        required: true,
      }
    },

    data(){
      return{
        pokemon: null
      }
    },

    computed: {
        ...mapGetters('pokemonStore', ['getPokemonsById']),
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`
      }
    },


    methods:{
        loadPokemon(){
            const pokemon = this.getPokemonsById(this.id)
            if(!pokemon) return this.$router.push({name: 'noFound'})

            this.pokemon = pokemon
        },
    },
    created(){
        this.loadPokemon()
    },

    watch: {
      id(){
        this.loadPokemon()
      }
    }
  }
  
  </script>

<style scoped>

#imgPokemon{
    width: 200px;
    height: 200px;
}

</style>
  