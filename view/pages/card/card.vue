<template>
  <b-card
    no-body
    style="max-width: 20rem;"
    img-src="../../img/pokemon.jpg"
    img-alt="Image"
    img-top
    class="mb-3"
  >
    <template v-slot:header>
      <h4 class="mb-0">{{ nameP }}#{{ id }}</h4>
    </template>

    <b-card-body>
      <b-card-title>Atk: {{ atk }} Def: {{ def }} Sta: {{ sta }}</b-card-title>
      <b-card-sub-title class="mb-2"
        >Total: {{ statTotal }} Shiny: {{ shiny }}</b-card-sub-title
      >
      <b-card-text> cp40: {{ cp40 }} cp90: {{ cp90 }} </b-card-text>
    </b-card-body>

    <b-list-group flush>
      <b-list-group-item
        >Type1: {{ type1 }} Type2: {{ type2 }}</b-list-group-item
      >
      <b-list-group-item
        >Weather1:{{ weather1 }} Weather2:{{ weather2 }}</b-list-group-item
      >
      <b-list-group-item
        >Leg: {{ legendary }} Arq: {{ arquireable }} Spa:{{ spawns }} Reg:{{
          regional
        }}
        Rai:{{ raidable }} Hat:{{ hatchable }}</b-list-group-item
      >
      <b-list-group-item
        >Nest: {{ nest }} New: {{ newP }} NotGet:{{ notGettable }} FutEvo:{{
          futureEvolve
        }}
      </b-list-group-item>
      <div></div>
    </b-list-group>

    <b-card-body>
      <b-row>
        <botao
          class="mr-2"
          tipo="button"
          rotulo="Deletar"
          @botaoAtivado="remove(id)"
          :confirmacao="true"
          estilo="danger"
        />

        <b-link v-bind:href="url"
          ><botao
            class="mr-2"
            tipo="button"
            rotulo="Editar"
            @botaoAtivado="altera(id)"
            :confirmacao="false"
            estilo="warning"
        /></b-link>
      </b-row>
    </b-card-body>

    <b-card-footer
      >Gen: {{ generation }} EvoSta: {{ evolutionStage }} Evolved:
      {{ evolved }} Family: {{ familyID }} CrossGen:
      {{ crossGen }}</b-card-footer
    >
  </b-card>
</template>

<script>
import Botao from "../botao/botao.vue";

export default {
  data() {
    return {
      url: "http://localhost:3000/altera/" + this.id
    };
  },
  props: [
    "id",
    "nameP",
    "pokedexNumber",
    "imgName",
    "generation",
    "evolutionStage",
    "evolved",
    "familyID",
    "crossGen",
    "type1",
    "type2",
    "weather1",
    "weather2",
    "statTotal",
    "atk",
    "def",
    "sta",
    "legendary",
    "arquireable",
    "spawns",
    "regional",
    "raidable",
    "hatchable",
    "shiny",
    "nest",
    "newP",
    "notGettable",
    "futureEvolve",
    "cp40",
    "cp90"
  ],
  components: {
    botao: Botao
  },
  methods: {
    remove(id) {
      let resource = this.$resource("pokemons{/idP}");
      resource.delete({ idP: id }).then(
        () => console.log("removido com sucesso"),
        err => console.log(err)
      );
      //this.$http.delete("pokemons/"+id).then(() =>console.log('removido com sucesso'), err => console.log(err));
    },
    altera(id) {}
  }
};
</script>

<style>
b-row {
  margin: 50px;
}
</style>
