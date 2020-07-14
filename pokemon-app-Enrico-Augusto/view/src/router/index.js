import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pokemons from '../views/Pokemons.vue'
import Habitat from '../views/Habitat.vue'
import Type from '../views/Type.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'pokemons',
      path: '/pokemons',
      component: Pokemons
    },
    {
      name: 'habitat',
      path: '/habitat',
      component: Habitat
    },
    {
      name: 'type',
      path: '/type',
      component: Type
    }
  ]
})

export default router
