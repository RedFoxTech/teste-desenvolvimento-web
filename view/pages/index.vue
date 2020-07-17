<template>
  <div>
    <navC pagAtual="home" pagComp="cadastro" />
    <b-container>
      <b-row align-h="center" class="my-4">
        <b-nav-form class="center b">
          <input
            type="search"
            style="marign: 0 auto;"
            class="filtro mr-sm-2"
            v-on:input="filtroA = $event.target.value"
            placeholder="Pesquisar"
          />
        </b-nav-form>
      </b-row>

      <b-row>
        <b-col md="3" v-for="pokemon in filtroPokemon">
          <card
            :id="pokemon.id"
            :nameP="pokemon.nameP"
            :imgName="pokemon.imgName"
            :generation="pokemon.generation"
            :evolutionStage="pokemon.evolutionStage"
            :evolved="pokemon.evolved"
            :familyID="pokemon.familyID"
            :crossGen="pokemon.crossGen"
            :type1="pokemon.type1"
            :type2="pokemon.type2"
            :weather1="pokemon.weather1"
            :weather2="pokemon.weather2"
            :statTotal="pokemon.statTotal"
            :atk="pokemon.atk"
            :def="pokemon.def"
            :sta="pokemon.sta"
            :legendary="pokemon.legendary"
            :arquireable="pokemon.arquireable"
            :spawns="pokemon.spawns"
            :regional="pokemon.regional"
            :raidable="pokemon.raidable"
            :hatchable="pokemon.hatchable"
            :shiny="pokemon.shiny"
            :nest="pokemon.nest"
            :newP="pokemon.newP"
            :notGettable="pokemon.notGettable"
            :futureEvolve="pokemon.futureEvolve"
            :cp40="pokemon.cp40"
            :cp90="pokemon.cp90"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from "./card/card.vue";
import Nav from "./Nav/nav.vue";

export default {
  data() {
    return {
      pokemons: [],
      filtroA: "",
      currentPage: 9,
      pokemonsArray: null
    };
  },
  created() {
    let promise = this.$http.get('pokemons');
    promise.then(res => res.json()).then(pokemons => this.pokemons = pokemons);
  },
  computed: {
    filtroPokemon() {
      if (this.filtroA) {
        let exp = new RegExp(this.filtroA.trim(), "i");
        return this.pokemons.filter(pokemon => exp.test(pokemon.nameP));
      } else {
        return this.pokemons;
      }
    }
  },
  components: {
    navC: Nav,
    card: Card
  },
  methods: {
    showPokemons(currentPage){
      const init = (currentPage - 1) * 8;
      const end = currentPage * 8;
      this.pokemonsArray = [this.pokemons[0]];
      return this.pokemonsArray;
    }
  }
};
</script>

<style></style>
