<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card class="rounded-xl" style="top: 13vh">
          <v-card-title>
            Pokémons
            <v-spacer></v-spacer>
            <v-btn @click="dialog = true" text color="primary">
              Adicionar
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-data-table
              no-data-text="Sem pokémons para exibir"
              :headers="headers"
              :items="pokemons"
              :items-per-page="15"
            ></v-data-table>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DB from '@/db'
const db = new DB();

export default {
  name: 'Pokémon',

  data: () => ({
    pokemons: [],
    headers: [
      { text: "Nome", value: "Name" },
      { text: "Número da Pokedex", value: "Pokedex Number" },
      { text: "Geração", value: "Generation" },
      { text: "Evoluído", value: "Evolved" },
    ]
  }),

  async mounted() {
    await db.getPokemons()
    .then(res => {
      this.pokemons = res.data.slice()
      console.log('pokemons')
      console.log(this.pokemons)
    })
    .catch(err => console.log(err))
  }
}
</script>
