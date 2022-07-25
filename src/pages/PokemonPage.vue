<template>
  <h1 class="font-pokemon">¿Who's that PokéMoN?</h1>
  <div v-if="!pokemon">
    <Loader />
  </div>
  <div v-else>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
    <template v-if="showAnswer">
      <div class="result">
        <h2>{{ message }}</h2>
      </div>
    </template>
  </div>
  <PokemonScore :score="score" />
  <NewGame v-if="showModal" :score="score" :message="message" @newGame="newGame"/>
  <Lives :lives="lives" />
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonScore from "../components/PokemonScore.vue";
import Loader from "../components/Loader.vue";
import NewGame from "../components/NewGame.vue";
import Lives from "../components/Lives.vue"

import getPokemonOptions from "@/helpers/getPokemonOptions";

//getPokemonOptions();
export default {
  name: "PokemonPage",
  components: {
    PokemonPicture,
    PokemonOptions,
    PokemonScore,
    Loader,
    NewGame,
    Lives
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      showModal: false,
      message: "",
      score: 0,
      lives: 3
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const randomInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[randomInt];
    },
    nextPokemon() {
      console.log("NextPokemon");
      setTimeout(() => {
        this.showPokemon = false;
        this.showAnswer = false;
        this.mixPokemonArray();
      }, 3000);
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      if (pokemonId === this.pokemon.id) {
        this.showAnswer = true;
        this.message = `Correct, it's ${this.pokemon.name}`;
        this.score = this.score + Math.floor(Math.random() * 20);
        this.nextPokemon();
      } else {
        console.log(this.lives);
        this.lives = this.lives - 1;
        if (!this.lives > 0) {
          this.showModal = true;
          this.message = `Oops, it is ${this.pokemon.name}`;
        }else{
          this.nextPokemon();
        }
        
        
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.showModal = false;
      this.score = 0;
      this.lives = 3;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style scoped>
</style>