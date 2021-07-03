<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card class="rounded-xl" style="top: 13vh">
          <v-card-title>
            Pokémons
            <v-spacer></v-spacer>
            <v-btn @click="dialog = true" small text color="primary">
              Adicionar
              <v-icon>add</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquise um Pokémon por nome ou atributo"
              single-line
              hide-details
            ></v-text-field>
          </v-card-subtitle>
          <v-card-text>
            <v-data-table
              no-data-text="Sem Pokémons para exibir"
              :headers="headers"
              :items="pokemons"
              :items-per-page="15"
              :search="search"
              :key="key"
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
                  color="dark grey"
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
        <v-card-title class="primary lighten white--text">
          {{formTitle}}
        </v-card-title>
        <v-card-subtitle>
          <br>
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Name']"
                label="Nome"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Pokedex Number']"
                label="N. da Pokedex"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Img name']"
                label="Img name"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Generation']"
                label="Geração"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-select
                v-model="editedItem['Evolution Stage']"
                label="Estágio da Evolução"
                :items="[1, 2, 3, 'Lower', 'Evolved']"
                outlined
              >
              </v-select>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Evolved']"
                label="Evoluído"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['FamilyID']"
                label="ID da Família"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Cross Gen']"
                label="Cruzado Geneticamente"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Type 1']"
                label="Tipo 1"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Type 2']"
                label="Tipo 2"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Weather 1']"
                label="Tempo 1"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['Weather 2']"
                label="Tempo 2"
                outlined
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['STAT TOTAL']"
                label="Stat Total"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['ATK']"
                label="Ataque"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['DEF']"
                label="Defesa"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['STA']"
                label="Estamina"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Legendary']"
                label="Lendário"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Aquireable']"
                label="Adquirível"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Spawns']"
                label="Spawnvável"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Regional']"
                label="Regional"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Raidable']"
                label="Participa de Raids"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Hatchable']"
                label="Eclodível"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Shiny']"
                label="Brilhoso"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Nest']"
                label="Ninho"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['New']"
                label="Novo"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Not-Gettable']"
                label="Não-coletável"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-checkbox
                v-model="editedItem['Future Evolve']"
                label="Evolução Futura"
                outlined
                :true-value="1"
                :false-value="0"
              >
              </v-checkbox>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['100% CP @ 40']"
                label="100% CP @ 40"
                outlined
                type="number"
              >
              </v-text-field>
            </v-col>
            <v-col
              cols="3"
            >
              <v-text-field
                v-model="editedItem['100% CP @ 39']"
                label="100% CP @ 39"
                outlined
                type="number"
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
        <v-card-title class="primary small lighten white--text">Tem certeza de que deseja apagar o pokémon?</v-card-title>
        <v-card-actions>
          <v-btn color="green" small text @click="closeDelete">Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" small text @click="deleteItemConfirm">Apagar</v-btn>
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
    key: 0,
    search: '',
    pokemons: [],
    headers: [
      { text: "Ações", value: "actions", sortable: false},
      { text: "Nome", value: "Name" },
      { text: "N. da Pokedex", value: "Pokedex Number" },
      { text: "Geração", value: "Generation" },
      { text: "Estágio da Evolução", value: "Evolution Stage" },
      { text: "Evoluído", value: "Evolved" },
      { text: "ID da Família", value: "FamilyID" },
      { text: "Cruzado Geneticamente", value: "Cross Gen" },
      { text: "Tipo 1", value: "Type 1" },
      { text: "Tipo 2", value: "Type 2" },
      { text: "Tempo 1", value: "Weather 1" },
      { text: "Tempo 2", value: "Weather 2" },
      { text: "Stat Total", value: "STAT TOTAL" },
      { text: "Ataque", value: "ATK" },
      { text: "Defesa", value: "DEF" },
      { text: "Estamina", value: "STA" },
      { text: "Lendário", value: "Legendary" },
      { text: "Adquirível", value: "Aquireable" },
      { text: "Spawnável", value: "Spawns" },
      { text: "Regional", value: "Regional" },
      { text: "Participa de Raids", value: "Raidable" },
      { text: "Eclodível", value: "Hatchable" },
      { text: "Brilhoso", value: "Shiny" },
      { text: "Ninho", value: "Nest" },
      { text: "Novo", value: "New" },
      { text: "Não-coletável", value: "Not-Gettable" },
      { text: "Evolução Futura", value: "Future Evolve" },
      { text: "100% CP @ 40", value: "100% CP @ 40" },
      { text: "100% CP @ 39", value: "100% CP @ 39" },
    ],
    pokemon: {
      id: null,
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
      id: null,
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
          self.editedItem.id = res.id;
          self.pokemons.push(self.editedItem)
        })
        .catch(err => console.log(err));
      }
      this.saveButtonLoading = false;
      this.key++;
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
