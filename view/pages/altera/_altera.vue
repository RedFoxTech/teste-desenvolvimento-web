<template>
  <div>
    <navC pagAtual="home" pagComp="cadastro" />
    <div class="container">
      <div v-for="pokemon of pokemons">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <!-- Nome -->
          <b-form-group id="input-group-2" label="Name:" label-for="input-2"
            >{{ pokemon.nameP }}
            <b-form-input
              id="input-2"
              v-model="form.nameP"
              required
              placeholder="nome"
            ></b-form-input>
          </b-form-group>

          <!-- Geracao -->
          <b-form-group
            id="input-group-2"
            label="Generation:"
            label-for="input-2"
            >{{ pokemon.generation }}
            <b-form-input
              id="input-2"
              v-model="form.generation"
              required
              placeholder="Geração"
            ></b-form-input>
          </b-form-group>

          <!-- evolved -->
          <b-form-group id="input-group-3" label="Evoluido?" label-for="input-3"
            >{{ pokemon.evolved }}
            <b-form-select
              id="input-3"
              v-model="form.evolved"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- family id -->
          <b-form-group
            id="input-group-2"
            label="ID da família:"
            label-for="input-2"
            >{{ pokemon.familyId }}
            <b-form-input
              id="input-2"
              v-model="form.familyId"
              required
              placeholder="ID da família"
            ></b-form-input>
          </b-form-group>

          <!-- cross gen -->
          <b-form-group
            id="input-group-3"
            label="Cross gen:"
            label-for="input-3"
            >{{ pokemon.crossGen }}
            <b-form-select
              id="input-3"
              v-model="form.crossGen"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- Evolution stage -->
          <b-form-group
            id="input-group-2"
            label="Estágio de evolução:"
            label-for="input-2"
            >{{ pokemon.evolutionStage }}
            <b-form-input
              id="input-2"
              v-model="form.evolutionStage"
              required
              placeholder="Estágio de evolução"
            ></b-form-input>
          </b-form-group>

          <!-- type 1 -->
          <b-form-group id="input-group-2" label="Type 1:" label-for="input-2"
            >{{ pokemon.type1 }}
            <b-form-input
              id="input-2"
              v-model="form.type1"
              required
              placeholder="Type 1"
            ></b-form-input>
          </b-form-group>

          <!-- type 2 -->
          <b-form-group id="input-group-2" label="Type 2:" label-for="input-2"
            >{{ pokemon.type2 }}
            <b-form-input
              id="input-2"
              v-model="form.type2"
              required
              placeholder="Type 2"
            ></b-form-input>
          </b-form-group>

          <!-- weather 1-->
          <b-form-group
            id="input-group-2"
            label="weather 1:"
            label-for="input-2"
            >{{ pokemon.weather1 }}
            <b-form-input
              id="input-2"
              v-model="form.weather1"
              required
              placeholder="Weather 1"
            ></b-form-input>
          </b-form-group>

          <!-- weather 2 -->
          <b-form-group
            id="input-group-2"
            label="weather 2:"
            label-for="input-2"
            >{{ pokemon.weather1 }}
            <b-form-input
              id="input-2"
              v-model="form.weather2"
              required
              placeholder="Weather 2"
            ></b-form-input>
          </b-form-group>

          <!-- stat Total -->
          <b-form-group
            id="input-group-2"
            label="Stat Total:"
            label-for="input-2"
            >{{ pokemon.statTotal }}
            <b-form-input
              id="input-2"
              v-model="form.statTotal"
              required
              placeholder="Stat Total"
            ></b-form-input>
          </b-form-group>

          <!-- atk -->
          <b-form-group id="input-group-2" label="ATK:" label-for="input-2"
            >{{ pokemon.atk }}
            <b-form-input
              id="input-2"
              v-model="form.atk"
              required
              placeholder="ATK"
            ></b-form-input>
          </b-form-group>

          <!-- def -->
          <b-form-group id="input-group-2" label="DEF:" label-for="input-2"
            >{{ pokemon.def }}
            <b-form-input
              id="input-2"
              v-model="form.def"
              required
              placeholder="DEF"
            ></b-form-input>
          </b-form-group>

          <!-- sta-->
          <b-form-group id="input-group-2" label="STA:" label-for="input-2"
            >{{ pokemon.sta }}
            <b-form-input
              id="input-2"
              v-model="form.sta"
              required
              placeholder="STA"
            ></b-form-input>
          </b-form-group>

          <!-- Legendary -->
          <b-form-group
            id="input-group-3"
            label="Legendary:"
            label-for="input-3"
            >{{ pokemon.legendary }}
            <b-form-select
              id="input-3"
              v-model="form.legendary"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- arquierable -->
          <b-form-group
            id="input-group-3"
            label="Arquierable:"
            label-for="input-3"
            >{{ pokemon.arquierable }}
            <b-form-select
              id="input-3"
              v-model="form.arquireable"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- spawns -->
          <b-form-group id="input-group-3" label="Spawns:" label-for="input-3"
            >{{ pokemon.spawns }}
            <b-form-select
              id="input-3"
              v-model="form.spawns"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- regional -->
          <b-form-group id="input-group-3" label="Regional:" label-for="input-3"
            >{{ pokemon.regional }}
            <b-form-select
              id="input-3"
              v-model="form.regional"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- raidable -->
          <b-form-group id="input-group-3" label="Raidable:" label-for="input-3"
            >{{ pokemon.raidable }}
            <b-form-select
              id="input-3"
              v-model="form.raidable"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- hatchable -->
          <b-form-group
            id="input-group-2"
            label="Hatchable:"
            label-for="input-2"
            >{{ pokemon.hatchable }}
            <b-form-input
              id="input-2"
              v-model="form.hatchable"
              required
              placeholder="HATCHABLE"
            ></b-form-input>
          </b-form-group>

          <!-- shiny -->
          <b-form-group id="input-group-3" label="Shiny:" label-for="input-3"
            >{{ pokemon.shiny }}
            <b-form-select
              id="input-3"
              v-model="form.shiny"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- nest -->
          <b-form-group id="input-group-3" label="Nest:" label-for="input-3"
            >{{ pokemon.nest }}
            <b-form-select
              id="input-3"
              v-model="form.nest"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- new -->
          <b-form-group id="input-group-3" label="New:" label-for="input-3"
            >{{ pokemon.newP }}
            <b-form-select
              id="input-3"
              v-model="form.newP"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- not-gettable -->
          <b-form-group
            id="input-group-3"
            label="Not-gettable:"
            label-for="input-3"
            >{{ pokemon.notGettable }}
            <b-form-select
              id="input-3"
              v-model="form.notGettable"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- future evolve -->
          <b-form-group
            id="input-group-3"
            label="Future evolve:"
            label-for="input-3"
            >{{ pokemon.futureEvolve }}
            <b-form-select
              id="input-3"
              v-model="form.futureEvolve"
              :options="opcoes"
              required
            ></b-form-select>
          </b-form-group>

          <!-- cp90 -->
          <b-form-group id="input-group-2" label="cp 90:" label-for="input-2"
            >{{ pokemon.cp90 }}
            <b-form-input
              id="input-2"
              v-model="form.cp90"
              required
              placeholder="cp90"
            ></b-form-input>
          </b-form-group>

          <!-- cp40 -->
          <b-form-group id="input-group-2" label="cp 40:" label-for="input-2"
            >{{ pokemon.cp40 }}
            <b-form-input
              id="input-2"
              v-model="form.cp40"
              required
              placeholder="cp40"
            ></b-form-input>
          </b-form-group>

          <!--Botoes-->
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../Nav/nav.vue";
export default {
  props: ["tipo"],
  data() {
    return {
      form: {
        nameP: "",
        pokedexNumber: "1",
        imgName: "",
        generation: "",
        evolutionStage: "",
        evolved: null,
        familyId: "",
        crossGen: "",
        type1: "",
        type2: "",
        weather1: "",
        weather2: "",
        statTotal: "",
        atk: "",
        def: "",
        sta: "",
        legendary: null,
        arquireable: null,
        spawns: null,
        regional: null,
        raidable: null,
        hatchable: "",
        shiny: null,
        nest: null,
        newP: null,
        notGettable: null,
        futureEvolve: null,
        cp40: "",
        cp90: ""
      },
      opcoes: [{ text: "Selecione", value: null }, "Sim", "Não"],
      show: true,
      id: this.$route.params.altera,
      pokemons: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      this.$http.put("pokemons/" + this.id, this.form).then(
        () => console.log("Alterado com sucesso"),
        err => console.log(err)
      );
      onReset(this.evt);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nameP = "";
      this.form.pokedexNumber = "";
      this.form.imgName = "";
      this.form.generation = "";
      this.form.evolutionStage = "";
      this.form.evolved = null;
      this.form.familyId = "";
      this.form.crossGen = "";
      this.form.type1 = "";
      this.form.type2 = "";
      this.form.weather1 = "";
      this.form.weather2 = "";
      this.form.statTotal = "";
      this.form.atk = "";
      this.form.def = "";
      this.form.sta = "";
      this.form.legendary = null;
      this.form.arquireable = null;
      this.form.spawns = null;
      this.form.regional = null;
      this.form.raidable = null;
      this.form.hatchable = "";
      this.form.shiny = null;
      this.form.nest = null;
      this.form.newP = null;
      this.form.notGettable = null;
      this.form.futureEvolve = null;
      this.form.cp40 = "";
      this.form.cp90 = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  components: {
    navC: Nav
  },
  created() {
    if (this.id) {
      let promise = this.$http.get("pokemons/" + this.id);
      promise
        .then(res => res.json())
        .then(pokemons => (this.pokemons = pokemons));
    }
  }
};
</script>

<style></style>
