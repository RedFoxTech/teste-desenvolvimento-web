<template>
  <v-navigation-drawer permanent expand-on-hover class="accent-4" app dark>
    <v-toolbar color="#353535" flat>
      <v-btn icon class="hidden-xs-only">
        <v-img src="./pokeball.svg" max-width="34px" />
      </v-btn>

      <v-toolbar-title>Options</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="item in items" @click="setFilter(item.filter)" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>-->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      items: [
        { title: "Clear filter", filter: "", icon: "mdi-dashboard" },
        { title: "Grass", filter: "grass", icon: "mdi-gavel" },
        { title: "Fire", filter: "fire", icon: "mdi-gavel" },
        { title: "Water", filter: "water", icon: "mdi-gavel" },
        { title: "Bug", filter: "bug", icon: "mdi-gavel" },
        { title: "Normal", filter: "normal", icon: "mdi-gavel" },
        { title: "Poison", filter: "poison", icon: "mdi-gavel" },
        { title: "Ground", filter: "ground", icon: "mdi-gavel" },
        { title: "Fairy", filter: "fairy", icon: "mdi-gavel" },
        /*{ title: "Fighting", filter: "fightig", icon: "mdi-gavel" },
         { title: "Psychic", filter: "psychic", icon: "mdi-gavel" },
        { title: "Rock", filter: "rock", icon: "mdi-gavel" },
        { title: "Ghost", filter: "ghost", icon: "mdi-gavel" },
        { title: "Ice", filter: "ice", icon: "mdi-gavel" }, */
      ]
    };
  },
  methods: {
    setFilter(name) {
      const { dispatch } = this.$store;
      dispatch("setFilter", name);
    }
  }
};
</script>