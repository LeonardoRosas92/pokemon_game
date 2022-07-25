<template>
  <div class="lives">
    <img v-for="n in lives" :key="n" src="../img/pokeball.png" alt="Pokeball" >
  </div>
</template>

<script>
export default {
  name: "Lives",
  props: {
    lives: {
      type: Number,
      default: 3,
    },
  },
};
</script>

<style scoped>
.lives{
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
}
img{
  width: 70px;
}
</style>