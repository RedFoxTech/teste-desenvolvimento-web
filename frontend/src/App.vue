<template>
  <div id="app">
    <v-img id="bg" src="@/assets/background.jpg"></v-img>
    <router-view/>
  </div>
</template>

<style>
#bg {
  position: fixed;
  right: 0;
  bottom: 0;
  top: 45px;
  min-width: 100%;
  min-height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
