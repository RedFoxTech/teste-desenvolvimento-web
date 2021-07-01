<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card class="rounded-xl" style="top: 13vh">
          <v-card-title>
            Pokémon Database
          </v-card-title>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = true" text color="primary">
            Adicionar
            <v-icon>add</v-icon>
          </v-btn>
          <v-card-text>
            <v-data-table>

            </v-data-table>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Pokémon',

    data: () => ({
      
    }),
  }
</script>
