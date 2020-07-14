<template>
  <v-app>
    <side-bar></side-bar>

    <v-main>
      <v-container class="" fluid>
        <v-row dense>          
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>   
  </v-app>
</template>

<script>
import SideBar from './components/SideBar.vue';

  export default {
    components: {
      SideBar
    }    
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>