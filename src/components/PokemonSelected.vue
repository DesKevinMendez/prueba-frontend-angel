<template>

    <div 
    id="container" 
    class="mx-auto w-2/5 bg-blue-100 mb-4 cursor-pointer"
    @click="$router.push({ name:'pokemon', params: { id:poke.id}})"
    >
        <h2 class="text-left text-blue-600 border-2 border-blue-600 h-10 pt-2 pb-3 px-3 font-bold">{{ poke.name }}</h2>
    </div>
    
</template>


<script>

export default {
    props:{
        poke:{
            type: Object,
            required: true
        }
    },
}


</script>

