<template>
  <div class="options-container">
    <ul>
        <button v-for="pokemon in pokemons" :key="pokemon.id" 
            @click="$emit('selection', pokemon.id)">
            {{pokemon.name}}
        </button>
    </ul>
  </div>
</template>

<script>
export default {
    name: "PokemonOptions",
    props:{
        pokemons:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
/* Pokemon Options */
.options-container{
    margin-top: 30px;
    display: flex;
    justify-content: center;
}
ul {
    list-style-type: none;
    padding: 0;
    
}
button {
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    box-shadow: 1px 1px 1px 0px rgba(227,225,225,0.75);
}

/* button:hover {
    background-color: #E54222;
    font-weight: bolder;
    color: #1C4CBD;
} */

</style>