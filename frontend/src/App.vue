
<template>



  <div class="corpo">

    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://i.pinimg.com/originals/a9/4f/4d/a94f4d75a2e429a20838d28d2ae2b996.png" width="89" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" >
        <router-link to="/">Home</router-link>
        
      </a>

      <a class="navbar-item" href="/createpokemon">
          <router-link to="/createpokemon">Criar Pokemon</router-link>
      </a>

    </div>

  </div>
</nav>
   
    <router-view></router-view>

  </div>

</template>

<script>


export default {

   
}
</script>

<style>
    .corpo {
      font-family: Helvetica, sans-serif;
      width: 96%;
      margin: 0 auto;
    }

</style>
