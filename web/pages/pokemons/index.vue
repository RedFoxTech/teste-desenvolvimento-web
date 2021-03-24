<template>
  <div
    class="min-h-screen bg-gradient-to-t from-primary-500 to-primary-300 pt-6 lg:pt-8"
  >
    <main
      v-if="pokemons"
      v-dragscroll
      class="whitespace-nowrap overflow-x-auto space-x-4 p-8 pb-2"
    >
      <div class="absolute top-6 right-12 text-white flex space-x-4">
        <nuxt-link to="/pokemons/create">
          <plus-icon size="32" />
        </nuxt-link>
      </div>
      <nuxt-link
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :to="`/pokemons/${pokemon.id}`"
      >
        <pokemon-card
          :name="pokemon.name"
          :primary-type="pokemon.type1"
          :pokedex-number="pokemon.pokedexNumber"
          :image="getPokemonImage(pokemon.imgName)"
        />
      </nuxt-link>
    </main>
    <footer class="w-full absolute bottom-0">
      <img src="/wave.svg" alt="wave" />
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { PlusIcon } from 'vue-feather-icons'
export default {
  components: { PlusIcon },
  data() {
    return {
      pokemons: undefined,
    }
  },
  mounted() {
    this.listPokemons()
  },
  methods: {
    ...mapActions({ list: 'pokemon/list' }),
    async listPokemons() {
      const { items } = await this.list({ page: 1, limit: 1000 })
      if (items.length === 0) {
        this.$toast.error('Pokemon not found', { position: 'top-center' })
        this.$router.push('/pokemons/create')
      }
      this.pokemons = items
    },
    getPokemonImage(imgName) {
      return `${process.env.API_BASE_URL}/static/images/${imgName}`
    },
  },
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.6);
  border: 0px none #ffffff;
  border-radius: 16px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}
::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border: 0px none #ffffff;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

.grab-bing {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.grab-bing:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}
</style>
