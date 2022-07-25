<template>
  <div class="score">
    <p class="font-pokemon">{{message}}</p>
    <p class="font-pokemon">{{ score }} pts</p>
  </div>
</template>

<script>
export default {
  name: "PokemonScore",
  props: {
    score: {
      type: Number,
      required: true,
    },
    message:{
        type: String,
        default: 'Your Score'
    }
  },
};
</script>
<style scoped>
.score{
    max-width: 250px;
    padding: 10px 0;
    margin: 0 auto;
    border-radius: 5px;
}
</style>