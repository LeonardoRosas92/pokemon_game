<template>
  <div class="pokemon-container">
    <img
      v-if="!showPokemon"
      :src="imgSrc"
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img v-else :src="imgSrc" alt="pokemon" class="fade-in" />
    
  </div>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data(){
    return{
        showLoader: false,
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  margin-top:15px ;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
}
img {
  height: 200px;
  min-width: 250px;
  user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>