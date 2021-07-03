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
              
            >
              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  color="primary"
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                  small
                  color="primary"
                  @click="deleteItem(item)"
                >
                  mdi-delete
                </v-icon>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      persistent
      fullscreen
    >
      <v-card>
        <v-card-title class="primary lighten white--text">{{formTitle}}</v-card-title>
        <v-card-text>
          <v-row>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Name']"
                label="Nome"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Pokedex Number']"
                label="N. da Pokedex"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Img name']"
                label="Img name"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Generation']"
                label="Geração"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Evolution Stage']"
                label="Estágio da Evolução"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Evolved']"
                label="Evoluído"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['FamilyID']"
                label="ID da Família"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Cross Gen']"
                label="Cruzamento Genético"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Type 1']"
                label="Tipo 1"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Type 2']"
                label="Tipo 2"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Weather 1']"
                label="Tempo 1"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Weather 2']"
                label="Tempo 2"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['STAT TOTAL']"
                label="Stat Total"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['ATK']"
                label="Ataque"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['DEF']"
                label="Defesa"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['STA']"
                label="Estamina"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Legendary']"
                label="Lendário"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Aquireable']"
                label="Adquirível"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Spawns']"
                label="Aparições"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Regional']"
                label="Regional"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Raidable']"
                label="Raidable"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Hatchable']"
                label="Eclodível"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Shiny']"
                label="Refletível"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Nest']"
                label="Ninho"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['New']"
                label="Novo"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Not-Gettable']"
                label="Não-coletável"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['Future Evolve']"
                label="Evolução Futura"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['100% CP @ 40']"
                label="100% CP @ 40"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="pokemon['100% CP @ 39']"
                label="100% CP @ 39"
                outlined
              >
            
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="close" text color="dark grey">
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="save" :loading="saveButtonLoading" text color="primary">
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="primary small lighten white--text">Tem certeza de que deseja apagar este pokémon?</v-card-title>
        <v-card-actions>
          <v-btn color="dark grey" small text @click="closeDelete">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" small text @click="deleteItemConfirm">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import DB from '@/db'
const db = new DB();

export default {
  name: 'Pokémon',

  data: () => ({
    dialog: false,
    dialogDelete: false,
    saveButtonLoading: false,
    editedIndex: -1,
    pokemons: [],
    headers: [
      { text: "Nome", value: "Name" },
      { text: "N. da Pokedex", value: "Pokedex Number" },
      { text: "Geração", value: "Generation" },
      { text: "Evoluído", value: "Evolved" },
      { text: "Ações", value: "actions", sortable: false}
    ],
    pokemon: {
      'Name': null,
      'Pokedex Number': null,
      'Img name': null,
      'Generation': null,
      'Evolution Stage': null,
      'Evolved': null,
      'FamilyID': null,
      'Cross Gen': null,
      'Type 1': null,
      'Type 2': null,
      'Weather 1': null,
      'Weather 2': null,
      'STAT TOTAL': null,
      'ATK': null,
      'DEF': null,
      'STA': null,
      'Legendary': null,
      'Aquireable': null,
      'Spawns': null,
      'Regional': null,
      'Raidable': null,
      'Hatchable': null,
      'Shiny': null,
      'Nest': null,
      'New': null,
      'Not-Gettable': null,
      'Future Evolve': null,
      '100% CP @ 40': null,
      '100% CP @ 39': null
    },
    editedItem: {
      'Name': null,
      'Pokedex Number': null,
      'Img name': null,
      'Generation': null,
      'Evolution Stage': null,
      'Evolved': null,
      'FamilyID': null,
      'Cross Gen': null,
      'Type 1': null,
      'Type 2': null,
      'Weather 1': null,
      'Weather 2': null,
      'STAT TOTAL': null,
      'ATK': null,
      'DEF': null,
      'STA': null,
      'Legendary': null,
      'Aquireable': null,
      'Spawns': null,
      'Regional': null,
      'Raidable': null,
      'Hatchable': null,
      'Shiny': null,
      'Nest': null,
      'New': null,
      'Not-Gettable': null,
      'Future Evolve': null,
      '100% CP @ 40': null,
      '100% CP @ 39': null
    }
  }),
  methods: {
    async save() {
      this.saveButtonLoading = true;
      var self = this;
      if (this.editedIndex > -1) {
        await db.updatePokemon(JSON.parse(JSON.stringify(this.editedItem)))
        .then(res => {
          console.log(res)
          self.pokemons[self.editedIndex] = JSON.parse(JSON.stringify(self.editedItem));
        })
        .catch(err => console.log(err));
      } else {
        await db.createPokemon(JSON.parse(JSON.stringify(this.editedItem)))
        .then(res => {
          self.editedItem.id = res;
          self.pokemons.push(self.editedItem)
        })
        .catch(err => console.log(err));
      }
      this.saveButtonLoading = false;
      this.close()
    },

    editItem(item) {
      this.editedIndex = this.pokemons.indexOf(item)
      console.log('edited index')
      console.log(this.editedIndex)
      this.editedItem = JSON.parse(JSON.stringify(this.pokemons[this.editedIndex]))
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.pokemons.indexOf(item)
      this.editedItem = JSON.parse(JSON.stringify(item))
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.pokemons.splice(this.editedIndex, 1)
      db.deletePokemon(this.editedItem.id)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.imageUploadError = undefined
      this.$nextTick(() => {
        this.editedItem = JSON.parse(JSON.stringify(this.pokemon))
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = JSON.parse(JSON.stringify(this.pokemon))
        this.editedIndex = -1
      })
    },
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Adicionar Pokémon' : 'Editar Pokémon'
    },
  },
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
