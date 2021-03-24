<template>
  <div
    class="min-h-screen bg-gradient-to-t from-primary-500 to-primary-300 relative flex justify-center items-center"
  >
    <div
      class="p-8 bg-white rounded-3xl inline-block w-full max-w-2xl my-8 relative z-10"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-primary-default text-xl font-bold">Update Pokemon</h1>
        <nuxt-link to="/">
          <img src="/chevron-left.svg" class="text-primary-400" />
        </nuxt-link>
      </div>
      <form class="space-y-6" @submit.prevent="handleCreate">
        <p-input
          v-model="form.name"
          required
          autocomplete="off"
          label="Name"
          :elevate-label="!!form.name"
        />
        <p-input
          v-model="form.pokedexNumber"
          autocomplete="off"
          label="Pokedex number"
          required
          type="number"
          :elevate-label="!!form.pokedexNumber"
        />
        <p-input
          v-model="form.generation"
          autocomplete="off"
          label="Generation"
          required
          type="number"
          :elevate-label="!!form.generation"
        />
        <p-input
          v-model="form.evolutionStage"
          autocomplete="off"
          label="Evolution State"
          required
          type="number"
          :elevate-label="!!form.evolutionStage"
        />

        <p-input
          v-model="form.familyId"
          required
          autocomplete="off"
          label="Family ID"
          type="number"
          :elevate-label="!!form.familyId"
        />
        <p-input
          v-model="form.type1"
          required
          autocomplete="off"
          label="Type"
          :elevate-label="!!form.type1"
        />
        <p-input
          v-model="form.type2"
          autocomplete="off"
          label="Type 2"
          :elevate-label="!!form.type2"
        />
        <p-input
          v-model="form.weather1"
          required
          autocomplete="off"
          label="Weather"
          :elevate-label="!!form.weather1"
        />
        <p-input
          v-model="form.weather2"
          autocomplete="off"
          label="Weather 2"
          :elevate-label="!!form.weather2"
        />
        <p-input
          v-model="form.ATK"
          required
          autocomplete="off"
          label="ATK"
          type="number"
          :elevate-label="!!form.ATK"
        />
        <p-input
          v-model="form.DEF"
          required
          autocomplete="off"
          label="DEF"
          type="number"
          :elevate-label="!!form.DEF"
        />
        <p-input
          v-model="form.STA"
          required
          autocomplete="off"
          label="STA"
          type="number"
          :elevate-label="!!form.STA"
        />
        <p-input
          v-model="form.hatchable"
          required
          autocomplete="off"
          label="Hatchable"
          type="number"
          :elevate-label="!!form.hatchable"
        />
        <p-input
          v-model="form.maxCPat40"
          autocomplete="off"
          label="100% CP @ 40"
          type="number"
          :elevate-label="!!form.maxCPat40"
        />
        <p-input
          v-model="form.maxCPat39"
          autocomplete="off"
          label="100% CP @ 39"
          type="number"
          :elevate-label="!!form.maxCPat39"
        />
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Evolved</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.evolved"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.evolved"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is CrossGen</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.crossGen"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.crossGen"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Legendary</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.legendary"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.legendary"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Aquirable</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.aquirable"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.aquirable"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Spawns</h1>
          <div class="flex items-center space-x-2">
            <input id="true" v-model="form.spawns" :value="true" type="radio" />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.spawns"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Regional</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.regional"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.regional"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Raidable</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.raidable"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.raidable"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Shiny</h1>
          <div class="flex items-center space-x-2">
            <input id="true" v-model="form.shiny" :value="true" type="radio" />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.shiny"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Nest</h1>
          <div class="flex items-center space-x-2">
            <input id="true" v-model="form.nest" :value="true" type="radio" />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input id="false" v-model="form.nest" :value="false" type="radio" />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">New</h1>
          <div class="flex items-center space-x-2">
            <input id="true" v-model="form.new" :value="true" type="radio" />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input id="false" v-model="form.new" :value="false" type="radio" />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Is Not Gettable</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.notGettable"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.notGettable"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->
        <div class="grid grid-cols-3">
          <h1 class="text-gray-600">Future Evolve</h1>
          <div class="flex items-center space-x-2">
            <input
              id="true"
              v-model="form.futureEvolve"
              :value="true"
              type="radio"
            />
            <label class="text-gray-600" for="true">Yes</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              id="false"
              v-model="form.futureEvolve"
              :value="false"
              type="radio"
            />
            <label class="text-gray-600" for="false">No</label>
          </div>
        </div>
        <!--  -->

        <div v-if="url">
          <img :src="url" alt="pokemon image" />
        </div>

        <div class="flex w-full items-center justify-center bg-grey-lighter">
          <label
            class="flex flex-col items-center justify-center space-y-4 text-primary text-primary-400 hover:text-primary-500 cursor-pointer"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base leading-normal">
              Selecione uma imagem...
            </span>
            <input type="file" class="hidden" @change="handleFileChange" />
          </label>
        </div>
        <div class="flex justify-end w-full">
          <p-button
            :disabled="!formIsValid"
            size="base"
            color="primary"
            shape="square"
            >Finalizar</p-button
          >
        </div>
      </form>
    </div>
    <footer class="w-full absolute bottom-0">
      <img src="/wave.svg" alt="wave" />
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        name: '',
        pokedexNumber: undefined,
        generation: undefined,
        evolutionStage: undefined,
        evolved: false,
        familyId: undefined,
        crossGen: false,
        type1: '',
        type2: '',
        weather1: '',
        weather2: '',
        ATK: undefined,
        DEF: undefined,
        STA: undefined,
        legendary: false,
        aquirable: false,
        spawns: false,
        regional: false,
        raidable: false,
        hatchable: undefined,
        shiny: false,
        nest: false,
        new: false,
        notGettable: false,
        futureEvolve: false,
        maxCPat40: undefined,
        maxCPat39: undefined,
      },
      image: undefined,
      url: undefined,
    }
  },

  computed: {
    transformedForm() {
      return {
        name: this.form.name,
        pokedexNumber: Number(this.form.pokedexNumber),
        generation: Number(this.form.generation),
        evolutionStage: Number(this.form.evolutionStage),
        evolved: this.form.evolved,
        familyId: Number(this.form.familyId),
        crossGen: this.form.crossGen,
        type1: this.form.type1,
        type2: this.form.type2,
        weather1: this.form.weather1,
        weather2: this.form.weather2,
        ATK: Number(this.form.ATK),
        DEF: Number(this.form.DEF),
        STA: Number(this.form.STA),
        legendary: this.form.legendary,
        aquirable: this.form.aquirable,
        spawns: this.form.spawns,
        regional: this.form.regional,
        raidable: this.form.raidable,
        hatchable: Number(this.form.hatchable),
        shiny: this.form.shiny,
        nest: this.form.nest,
        new: this.form.new,
        notGettable: this.form.notGettable,
        futureEvolve: this.form.futureEvolve,
        maxCPat40: Number(this.form.maxCPat40),
        maxCPat39: Number(this.form.maxCPat39),
      }
    },
    formIsValid() {
      if (
        this.form.name &&
        this.form.pokedexNumber &&
        this.form.generation &&
        this.form.evolutionStage &&
        this.form.familyId &&
        this.form.type1 &&
        this.form.weather1 &&
        this.form.ATK &&
        this.form.DEF &&
        this.form.STA &&
        this.form.hatchable &&
        this.form.maxCPat40 &&
        this.form.maxCPat39
      ) {
        return true
      }
      return false
    },
  },

  mounted() {
    this.handleShowPokemon()
  },
  methods: {
    ...mapActions({
      update: 'pokemon/update',
      uploadImage: 'pokemon/changeImage',
      showPokemon: 'pokemon/show',
    }),

    async handleShowPokemon() {
      try {
        const id = this.$route.params.id
        const pokemon = await this.showPokemon(id)
        this.form = pokemon
      } catch (error) {}
    },

    async handleCreate() {
      try {
        const pokemon = await this.update({
          pokemonId: this.$route.params.id,
          fields: this.transformedForm,
        })
        if (this.url) {
          const imageFormData = new FormData()
          imageFormData.append('image', this.image)
          await this.uploadImage({
            pokemonId: pokemon.id,
            formData: imageFormData,
          })
        }

        this.$router.push(`/pokemons/${pokemon.id}`)
      } catch (error) {
        if (error.response.status === 409) {
          this.$toast.error('Pokemon conflict', {
            position: 'top-center',
          })
        } else if (error.response.status === 415) {
          this.$toast.error('Invalid image type', { position: 'top-center' })
        } else {
          this.$toast.error('There was an error processing your request', {
            position: 'top-center',
          })
        }
      } finally {
        const TIMEOUT = 7000 // 7 seconds
        setTimeout(() => this.$toast.clear(), TIMEOUT)
      }
    },
    handleFileChange(e) {
      this.image = e.target.files[0]
      this.url = URL.createObjectURL(this.image)
    },
  },
}
</script>
