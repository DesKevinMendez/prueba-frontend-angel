<template>
    <div class="h-5/5">
        <img id="imgPokemon" class="mx-auto mt-6 object-scale-down w-45 h-45"  :src="imgSrc" alt="pokemon">
        <h1 class="text-2xl font-bold">{{ pokemon.name }}</h1>
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
  