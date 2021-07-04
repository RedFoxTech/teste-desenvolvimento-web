<template>
  <v-app>
    <v-img
      id="bg"
      v-if="isLoggedIn"
      src="@/assets/background.jpg"
    ></v-img>
    <v-img
      id="bg"
      v-else
      src="@/assets/login_background.jpg"
    ></v-img>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["isLoggedIn"]),
  }
};
</script>
<style>
#bg {
  position: fixed;
  min-width: 100%;
  min-height: 100%;
}
</style>