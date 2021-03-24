<template>
  <div
    class="min-h-screen bg-gradient-to-t from-primary-500 to-primary-300 relative"
  >
    <div
      v-if="pokemon"
      class="absolute top-6 right-12 text-white flex space-x-4"
    >
      <trash-2-icon size="32" class="cursor-pointer" @click="deletePokemon" />

      <nuxt-link :to="`/pokemons/${pokemon.id}/update`">
        <edit-2-icon size="32" />
      </nuxt-link>

      <nuxt-link to="/pokemons">
        <home-icon size="32" />
      </nuxt-link>
    </div>
    <div
      v-if="pokemon"
      class="min-h-screen lg:flex lg:justify-center lg:items-center"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 pb-32">
        <div class="pt-4 flex flex-col justify-center items-center">
          <h1
            class="text-white text-4xl text-center font-bold lg:hidden capitalize"
          >
            {{ pokemon.name }}
          </h1>
          <img
            :src="computedPokemonImage"
            alt="pokemon"
            class="max-w-xs p-8 lg:p-0"
          />
        </div>

        <div class="flex justify-center lg:hidden">
          <div v-dragscroll class="whitespace-nowrap overflow-x-auto px-8 py-2">
            <tag color="warning">ATK {{ pokemon.ATK }} </tag>
            <tag color="warning">DEF {{ pokemon.DEF }} </tag>
            <tag color="warning">STA {{ pokemon.STA }}</tag>
            <tag color="warning"
              >STAT TOTAL {{ pokemon.ATK + pokemon.DEF + pokemon.STA }}</tag
            >
          </div>
        </div>

        <div class="flex justify-center lg:hidden">
          <div
            v-dragscroll
            class="whitespace-nowrap overflow-x-auto px-8 py-2 space-x-1"
          >
            <tag
              v-for="(tag, index) in filteredTags"
              :key="index"
              color="info"
              size="sm"
            >
              {{ tag }}
            </tag>
          </div>
        </div>

        <div class="pt-4">
          <h1
            class="text-white text-6xl text-left font-bold hidden lg:inline-block capitalize"
          >
            {{ pokemon.name }}
          </h1>
          <div class="flex justify-start">
            <div class="whitespace-nowrap py-2 hidden lg:inline-block">
              <tag color="warning">ATK {{ pokemon.ATK }} </tag>
              <tag color="warning">DEF {{ pokemon.DEF }} </tag>
              <tag color="warning">STA {{ pokemon.STA }}</tag>
              <tag color="warning"
                >STAT TOTAL {{ pokemon.ATK + pokemon.DEF + pokemon.STA }}</tag
              >
            </div>
          </div>
          <div class="flex justify-start">
            <div
              class="whitespace-nowrap py-2 hidden lg:inline-block space-x-1"
            >
              <tag
                v-for="(tag, index) in filteredTags"
                :key="index"
                color="info"
                size="sm"
              >
                {{ tag }}
              </tag>
            </div>
          </div>
          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 px-8 lg:px-0">
            <div>
              <h1 class="text-white font-bold">Type</h1>
              <p class="text-white">{{ pokemon.type1 }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">Weather</h1>
              <p class="text-white">{{ pokemon.weather1 }}</p>
            </div>

            <div v-if="pokemon.type2">
              <h1 class="text-white font-bold">Type2</h1>
              <p class="text-white">{{ pokemon.type2 }}</p>
            </div>
            <span v-else></span>

            <div v-if="pokemon.weather2">
              <h1 class="text-white font-bold">Weather 2</h1>
              <p class="text-white">{{ pokemon.weather2 }}</p>
            </div>
            <span v-else></span>

            <div>
              <h1 class="text-white font-bold">Nº</h1>
              <p class="text-white">{{ pokemon.pokedexNumber }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">Generation</h1>
              <p class="text-white">{{ pokemon.generation }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">Evolution Stage</h1>
              <p class="text-white">{{ pokemon.evolutionStage }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">Family ID</h1>
              <p class="text-white">{{ pokemon.familyId }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">100% CP @ 40</h1>
              <p class="text-white">{{ pokemon.maxCPat40 }}</p>
            </div>

            <div>
              <h1 class="text-white font-bold">100% CP @ 39</h1>
              <p class="text-white">{{ pokemon.maxCPat39 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="w-full absolute bottom-0">
      <img src="/wave.svg" alt="wave" />
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { HomeIcon, Edit2Icon, Trash2Icon } from 'vue-feather-icons'
export default {
  components: { HomeIcon, Edit2Icon, Trash2Icon },
  data() {
    return {
      pokemon: undefined,
    }
  },
  computed: {
    filteredTags() {
      const tags = Object.entries(this.pokemon)
        .filter(([, value]) => value === true)
        .map(([key]) => key)
      return tags
    },

    computedPokemonImage() {
      return `${process.env.API_BASE_URL}/static/images/${this.pokemon.imgName}`
    },
  },
  mounted() {
    this.showPokemon()
  },
  methods: {
    ...mapActions({ show: 'pokemon/show', delete: 'pokemon/delete' }),
    async showPokemon() {
      const id = this.$route.params.id
      try {
        const pokemon = await this.show(id)
        this.pokemon = pokemon
      } catch {
        this.$toast.error('Pokemon not found', { position: 'top-center' })
        this.$router.push('/')
      } finally {
        const TIMEOUT = 7000 // 7 seconds
        setTimeout(() => this.$toast.clear(), TIMEOUT)
      }
    },

    async deletePokemon() {
      try {
        await this.delete(this.pokemon.id)
        this.$toast.success('Pokemon Deleted', {
          position: 'top-center',
        })
      } catch {
        this.$toast.error('The was an error on delete pokemon', {
          position: 'top-center',
        })
      } finally {
        const TIMEOUT = 7000 // 7 seconds
        setTimeout(() => this.$toast.clear(), TIMEOUT)
        this.$router.push('/pokemons')
      }
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
