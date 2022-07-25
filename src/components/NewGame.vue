<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <p class="font-pokemon">You Lost :(</p>
      <PokemonScore :score="score" :message="message" />
      <i @click="$emit('newGame')" class="fa-solid fa-arrows-rotate"> New Game</i>
    </div>
  </div>
</template>

<script>
import PokemonScore from "../components/PokemonScore.vue";
export default {
  name: "NewGame",
  components:{PokemonScore},
  props: {
    score: {
      type: Number,
      required: true,
    },
    message:{
        type: String,
        default: 'Your Score'
    }
  }
};
</script>
<style scoped>
.modal {
  /* display: none; */ /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  background: url('../img/back2.jpeg');
  background-size: 50%;
  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 70%; /* Could be more or less, depending on screen size */
  max-width: 500px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}
i{
    font-size: 60px;
    opacity: .7;
    transition: all .3s;
    border: 1px solid #888;
    border-radius: 5px;
    padding: 5px;
}

i:hover{
    opacity: 1;
    border: 1px solid #000;
    cursor: pointer;
}

</style>