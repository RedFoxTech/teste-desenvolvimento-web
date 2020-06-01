<template>
  <v-fab-transition>
    <v-btn @click="openModalAdd" color="#1976d2" fab large dark bottom left class="fab-button">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import db from "../db";
import { mapState } from "vuex";
export default {
  name: "Fab",
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null
  }),
  computed: mapState({
    filter: state => state.filter
  }),
  methods: {
    openModalAdd() {
      const { dispatch } = this.$store;
      const func1 = () => {
        const { ModalAdd } = this.$store.state;
        const doc = {
          type_1: ModalAdd.name,
          img_name: "",
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
          .add(doc)
          .then(() => {
            dispatch("setModalAddOpen", false);
            const filter = this.filter;
            dispatch("setFilter", "ice");
            setTimeout(() => {
              dispatch("setFilter", filter);
            }, 500);
          });
      };

      dispatch("setModalAddBtn1", {
        name: "Save",
        func: func1
      });
      dispatch("setModalAddTitle", "Add pokemon");
      dispatch("setModalAddOpen", true);
    }
  }
};
</script>


<style>
.fab-button {
  position: fixed !important;
  right: 1.5rem;
  bottom: 1.5rem;
}
</style>