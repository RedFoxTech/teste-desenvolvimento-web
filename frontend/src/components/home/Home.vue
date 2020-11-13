
<template>

  <div>
    <h1 class="title">{{ Nome }}</h1>

    <input type="search" class="input is-rounded" v-on:input="filtro = $event.target.value" placeholder="Procure o Pokemon....">

    <ul class="list-pokemons">
      <li class="list-pokemon" v-for="pokemon of searchPokemon">

        <meu-painel :Nome="pokemon.Nome" :Pokedex="pokemon.PokedexNumber">
          <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwtlnmqL44rQVFJc1vBMT_p7tjT6opPTHhqw&usqp=CAU" :alt="pokemon.Nome">
      
        </meu-painel>

      </li>
    </ul>
  </div>

</template>

<script>
import axios from 'axios';
import Painel from '../shared/painel/Painel.vue';

export default {

   components: {
     'meu-painel' : Painel
   },

   data() {
     return{

       Nome:'Pokedex',
       pokemons: [],
       filtro: ''
    
     }
   },

   computed: {
     searchPokemon() {

       if(this.filtro) {
         let exp = new RegExp(this.filtro.trim(), 'i');
         return this.pokemons.filter(pokemon => exp.test(pokemon.Nome));
       }else{
         return this.pokemons;
       }
     }
   },
   
   created (){
    axios.get("http://localhost:3000").then(res => {
      console.log(res.data);
      this.pokemons = res.data;
      console.log(this.pokemons);
      
    })
  },
}
</script>

<style>

    .title {
      text-align: center;
    }

    .list-pokemons {
      list-style: none;
    }

    .list-pokemons .list-pokemon {
      display: inline-block;

    }

    .list-pokemons .list-pokemon .img {
      width: 100%;
    }
</style>