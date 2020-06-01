<template>
  <v-container>
    <v-row class="text-center">
      <template v-if="loading">
        <h3>Loading</h3>
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
      </template>
      <template v-else-if="pokemons.length == 0">
        <h3>Não há dados</h3>
      </template>
      <template v-else>
        <template v-for="(poke,index) of pokemons">
          <v-card v-bind:key="index" class="mx-auto" max-width="300">
            <v-img
              v-bind:src="'https://pokeres.bastionbot.org/images/pokemon/'+poke.img_name+'.png'"
              height="200px"
            ></v-img>

            <v-card-title>
              {{poke.name}}
              <v-divider />
              <v-btn color="red" @click="deletePokemon(index,poke.id)" fab x-small dark>
                <v-icon>mdi-delete-outline</v-icon>
              </v-btn>
              <v-btn color="green" @click="openModalEdit(index,poke.id)" fab x-small dark>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-title>
            <v-chip class="ma-2" color="success" outlined>CP @ 40 {{+poke["100%_cp_@_40"]}}</v-chip>
            <v-chip class="ma-2" color="#E31F1F" outlined>CP @ 39 {{+poke["100%_cp_@_39"]}}</v-chip>
            <v-card-text>
              <v-chip class="ma-2" title="Attack" color="#A1D6A0" text-color="black">
                <v-avatar left>
                  <v-icon>mdi-fire</v-icon>
                </v-avatar>
                {{poke["atk"]}}
              </v-chip>
              <v-chip class="ma-2" title="Defense" color="#A0CCD6" text-color="black">
                <v-avatar left>
                  <v-icon>mdi-security</v-icon>
                </v-avatar>
                {{poke["def"]}}
              </v-chip>
              <v-chip class="ma-2" title="Stamina" color="#D6A0A0" text-color="black">
                <v-avatar left>
                  <v-icon>mdi-heart</v-icon>
                </v-avatar>
                {{poke["sta"]}}
              </v-chip>
            </v-card-text>
          </v-card>
        </template>
        <v-btn color="green" @click="loadMore" block>Load more</v-btn>
      </template>
    </v-row>
  </v-container>
</template>



<script>
import db from "../db";
import { mapState } from "vuex";
export default {
  name: "Showcase",
  props: ["search"],
  data: () => ({
    pokemons: [],
    limit: 12,
    loading: true
  }),
  mounted() {
    this.defaultDatas();
  },
  computed: Object.assign(
    mapState({
      filter: state => state.filter
    }),
    {}
  ),
  methods: {
    openModalEdit(index, id) {
      const { dispatch } = this.$store;
      const poke = this.pokemons[index];
      dispatch("setModalAddName", poke.name);
      dispatch("setModalAddCP40", poke["100%_cp_@_40"]);
      dispatch("setModalAddCP39", poke["100%_cp_@_39"]);
      dispatch("setModalAddATK", poke["atk"]);
      dispatch("setModalAddDEF", poke["def"]);
      dispatch("setModalAddSTA", poke["sta"]);
      dispatch("setModalAddTypes", [poke.type_1, poke.type_2]);
      dispatch("setModalAddWeathers", [poke.weather_1, poke.weather_2]);
      dispatch("setModalAddTitle", "Edit pokemon");
      console.log(id);

      const func1 = () => {
        const { ModalAdd } = this.$store.state;
        const doc = {
          type_1: ModalAdd.name,
          img_name: this.pokemons[index].img_name,
          atk: ModalAdd.atk,
          weather_1: ModalAdd.weathers[0],
          "100%_cp_@_39": ModalAdd.cp39,
          weather_2: ModalAdd.weathers[1],
          def: ModalAdd.def,
          sta: ModalAdd.sta,
          aquireable: 0,
          legendary: 0,
          name: ModalAdd.name,
          "100%_cp_@_40": ModalAdd.cp40,
          spawns: 0,
          "not-gettable": 0,
          stat_total: ModalAdd.sta + ModalAdd.atk + ModalAdd.def,
          evolution_stage: "Lower",
          createdAt: Date.now(),
          type_2: ModalAdd.types[0]
        };

        db.collection("pokemon")
          .doc(id)
          .set(doc)
          .then(() => {
            dispatch("setModalAddOpen", false);
            this.pokemons[index] = doc;
            this.pokemons.push(null);
            let position = this.pokemons.length - 1;
            this.pokemons.splice(position, 1);
          });
      };

      dispatch("setModalAddBtn1", {
        name: "Update",
        func: func1
      });

      dispatch("setModalAddOpen", true);
    },
    defaultDatas() {
      this.loading = true;
      this.pokemons = [];
      let query = db
        .collection("pokemon")
        .orderBy("createdAt", "desc")
        .limit(this.limit);

      if (this.filter !== "") query = query.where("type_1", "==", this.filter);

      query.get().then(res => {
        res.docs.forEach(doc => {
          const data = doc.data();
          const id = doc.id;
          data["id"] = id;
          this.pokemons.push(data);
        });
        this.loading = false;
      });
    },
    getNameLike(data) {
      this.$bind(
        "pokemons",
        db.collection("pokemon").where("name", "==", data)
      );
    },
    deletePokemon(index, id) {
      db.collection("pokemon")
        .doc(id)
        .delete()
        .then(() => {
          this.pokemons.splice(index, 1);
        });
    },
    loadMore() {
      let query = db
        .collection("pokemon")
        .orderBy("createdAt", "desc")
        .startAfter(this.pokemons[this.pokemons.length - 1].createdAt)
        .limit(this.limit);

      if (this.filter !== "") query = query.where("type_1", "==", this.filter);

      query.get().then(res => {
        res.docs.forEach(doc => {
          const data = doc.data();
          const id = doc.id;
          data["id"] = id;
          this.pokemons.push(data);
        });
      });
    }
  },
  watch: {
    /* search(newV, oldV) {
      newV.length > 0 ? this.getNameLike(newV) : this.defaultDatas();
    }, */
    filter() {
      this.defaultDatas();
    }
  }
};
</script>
