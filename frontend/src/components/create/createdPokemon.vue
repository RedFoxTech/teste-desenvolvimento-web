<template>

  <div>

      <form @submit.prevent="Criar()">

        <div class="control is-expanded has-icons-left has-icons-right">
         <label for="Nome" class="label">Nome</label>
         <input id="Nome" class="input" type="text" autocomplete="off" placeholder="Digite o Nome do Pokemon..." v-model="pokemon.Nome">
        </div>

        <div class="field">
         <label for="PokedexNumber" class="label">Número na Pokedex</label>
            <input id="PokedexNumber" class="input" type="text" autocomplete="off" v-model="pokemon.PokedexNumber" placeholder="#">
        </div>

        <div class="field">
         <label for="Generation" class="label">Generation</label>
            <input id="Generation" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Generation"> 
        </div>
    
        <div class="field">
         <label for="Evolution_Stage" class="label">Evolution Stage</label>
            <input id="Evolution_Stage" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Evolution_Stage">
        </div>

        <div class="field">
         <label for="Evolved_FamilyID" class="label">Evolved</label>
            <input id="Evolved_FamilyID" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Evolved_FamilyID">
        </div>
 
        <div class="field">
         <label for="Cross_Gen" class="label">Cross Gen</label>
            <input id="Cross_Gen" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Cross_Gen">
        </div>
    
        <div class="field">
         <label for="Type_1" class="label">Type 1</label>
            <input id="Type_1" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Type_1">
        </div>

        <div class="field">
         <label for="Type_2" class="label">Type 2</label>
            <input id="Type_2" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Type_2">
        </div>

        <div class="field">
         <label for="Weather_1" class="label">Weather 1</label>
            <input id="Weather_1" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Weather_1">
        </div>

        <div class="field">
         <label for="Weather_2" class="label">Weather 2</label>
            <input id="Weather_2" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Weather_2">
        </div>

        <div class="field">
         <label for="STAT_TOTAL" class="label">STAT TOTAL</label>
            <input id="STAT_TOTAL" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.STAT_TOTAL">
        </div>

        <div class="field">
         <label for="ATK" class="label">ATK</label>
            <input id="ATK" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.ATK">
        </div>
    
        <div class="field">
         <label for="DEF" class="label">DEF</label>
            <input id="DEF" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.DEF">
        </div>

        <div class="field">
         <label for="STA" class="label">STA</label>"
            <input id="STA" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.STA">
        </div>

        <div class="field">
         <label for="Legendary" class="label">Legendary</label>
            <input id="Legendary" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Legendary">
        </div>

        <div class="field">
         <label for="Aquireable" class="label"> Aquireable </label>
            <input id="Aquireable" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Aquireable">
        </div>

        <div class="field">
         <label for="Spawns" class="label">Spawns</label>
            <input id="Spawns" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Spawns">
        </div>

        <div class="field">
         <label for="Regional" class="label">Regional</label>
            <input id="Regional" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Regional">
        </div>

        <div class="field">
         <label for="Raidable" class="label">Haidable</label>
            <input id="Raidable" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Raidable">
        </div>

        <div class="field">
         <label for="Hatchable" class="label">Hatchable</label>
            <input id="Hatchable" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Hatchable">
        </div>

        <div class="field">
         <label for="STA" class="label">Estamina</label>
            <input id="STA" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.STA">
        </div>

        <div class="field">
         <label for="Shiny" class="label">Shiny</label>
            <input id="Shiny" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Shiny">
        </div>

        <div class="field">
         <label for="Nest" class="label">Nest</label>
            <input id="Nest" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Nest">
        </div>

        <div class="field">
         <label for="New_" class="label">New</label>
            <input id="New_" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.New_">
        </div>

        <div class="field">
         <label for="Not_Gettable" class="label">Not Gettable</label>
            <input id="Not_Gettable" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Not_Gettable">
        </div>

        <div class="field">
         <label for="Future_Evolve" class="label"> Future Evolve </label>
            <input id="Future_Evolve" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.Future_Evolve">
        </div>

        <div class="field">
         <label for="CP_40" class="label"> 100% CP @ 40 </label>
            <input id="CP_40" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.CP_40">
        </div>

        <div class="field">
         <label for="CP_39" class="label"> 100% CP @ 39 </label>
            <input id="CP_39" class="input" type="text" autocomplete="off" placeholder="#"  v-model="pokemon.CP_39">
        </div>

       <div class="buttons">
          <button class="button is-primary" rotulo="GRAVAR" type="submit">Criar Pokemon</button>
          <router-link to="/"><button class="button is-link">Voltar</button></router-link>
        </div>
    

    </form>


  </div>
</template>

<script>
import Pokemon from '../../domain/pokemon/Pokemon';
import axios from 'axios';

export default {

    data() {

        return{

            pokemon: new Pokemon()
        }
    },

    methods: {

        Criar() {

            axios.post("http://localhost:3000/createpokemon", this.pokemon)
            .then(() => this.pokemon= new Pokemon(), err => console.log(err))

            this.pokemon = new Pokemon();
        }
    }
}

</script>
<style scoped>

  .centralizado {
    text-align: center;
  }
  .controle {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .controle label {
    display: block;
    font-weight: bold;
  }

 .controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .centralizado {
    text-align: center;
  }

</style>