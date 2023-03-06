<template>
    <div class="flex flex-col h-screen container mx-auto">
        <router-view ></router-view>
        <ListPokemon class="h-full"/>
    </div>

</template>


<script>

    import ListPokemon from '@/components/ListPokemon.vue';

    import { mapActions } from 'vuex';


    export default{

        components: {
            ListPokemon
        },
        methods:{
            ...mapActions('pokemonStore',['LoadPokemons'])
        },
        created(){
            this.LoadPokemons()
        }

    }

</script>


<style scoped>

 
</style>