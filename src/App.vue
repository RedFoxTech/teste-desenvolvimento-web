<template>
  <v-app>
    <v-app-bar app color="#353535" dark>
      <div class="d-flex align-center display-1">Pokedex</div>

      <v-spacer></v-spacer>
      <!-- <v-card width="17rem" color="transparent" flat>
        <v-text-field v-model="search" class="search-field" hide-details append-icon="mdi-magnify"></v-text-field>
      </v-card> -->
    </v-app-bar>

    <Drawer />
    <v-content>
      <Showcase v-bind:search="search" />
    </v-content>

    <Fab />
    <ModalAdd />
  </v-app>
</template>

<script>
import Showcase from "./components/Showcase";
import Fab from "./components/Fab";
import Drawer from "./components/Drawer";
import ModalAdd from "./components/ModalAdd";

export default {
  name: "App",
  data: () => ({
    fab: false,
    hidden: false,
    tabs: null,
    search: ""
  }),
  components: {
    Showcase,
    Drawer,
    ModalAdd,
    Fab
  }
};
</script>

<style scoped>
.postion-fixed {
  position: fixed;
  height: 100%;
  left: 0;
  z-index: 8;
}
</style>