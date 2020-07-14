<template>
  
    <v-tabs v-model="tab" icons background-color="deep-purple accent-4" class="elevation-2" dark grow icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, index) in tabs" :key="index" :href="`#${tab.name}`">
            {{tab.name}}
            <v-icon v-if="icons">{{tab.icon}}</v-icon>
        </v-tab>

        <v-tab-item :value="`Pokemons`">
            <v-card flat tile v-if="api != null">
                <data-table @remove="remove" title="Pokemons" :api='api' :headers="headers"></data-table>
            </v-card>
        </v-tab-item>

        <v-tab-item :value="`Cadastrar Pokemon`">
            <v-card flat tile>
                <v-col cols="12">
                    <v-form ref="form" v-model="valid" lazy-validation>

                        <v-text-field v-model="name" label="Nome Pokemon" required>
                        </v-text-field>

                        <v-select v-if="habitatData" v-model="habitat" :items="dataFormatHabitat" label="Habitat">
                        </v-select>

                        <v-select v-if="typeData" v-model="type" :items="dataFormatType" label="Tipo">
                        </v-select>
                        
                        <v-subheader class="pl-0">Altura</v-subheader>
                        <v-slider track-color="orange" color="orange" v-model="height" thumb-label="always"></v-slider>
                                    
                        <v-subheader class="pl-0">Peso</v-subheader>
                        <v-slider track-color="purple" color="purple" v-model="weight" thumb-label="always"></v-slider>

                        <v-subheader class="pl-0">Experência</v-subheader>
                        <v-slider track-color="black" color="black" v-model="defeat_experience" thumb-label="always"></v-slider>

                        <v-btn color="success" class="mr-4" @click="sendPokemon">
                            criar
                        </v-btn>

                        <v-btn color="error" class="mr-4" @click="reset">
                            Cancelar
                        </v-btn>

                    </v-form>
                </v-col>

            </v-card>
        </v-tab-item>

    </v-tabs>
  
</template>

<script>
import DataTable from '../components/DataTable.vue';
import fetchData from '../mixins/fetchData';

  export default {
    name: 'Pokemon',
    mixins: [fetchData],
    components: {        
        DataTable
    },
    data () {
      return {        
        height: 50,
        weight: 50,
        valid: true,
        name: '',        
        defeat_experience: 50,
        habitat: '',
        habitatData: '',
        type: '',
        typeData: '',
        headers: [{
                text: 'Nome Pokemon',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            {
                text: 'Altura',
                value: 'height',
            },
            {
                text: 'Peso',
                value: 'weight',                
            },
            {
                text: 'Experiência',
                value: 'defeat_experience',                
            },            
        ],
        tab: null,
        icons: true,                
        tabs: [{name: 'Pokemons', icon: 'mdi-table'}, {name: 'Cadastrar Pokemon', icon: 'mdi-note-text'}],
      }
    },
    created() {
        this.fetchData('/pokemon');
        fetch('http://localhost:4000/habitat')
        .then(r => r.json())
        .then(json => {
            this.habitatData = json
        })
        .catch(err => {
            console.log(err);        
        })
        fetch('http://localhost:4000/type')
        .then(r => r.json())
        .then(json => {
            this.typeData = json
        })
        .catch(err => {
            console.log(err);        
        })
    },
    computed: {
      dataFormatHabitat(){
        return this.habitatData.map(data => data.name)
      },
      dataFormatType(){
        return this.typeData.map(data => data.name)
      }
    },
    methods: {
      sendPokemon(){
          const body = JSON.stringify({
              name: this.name,
              weight: this.weight,
              height: this.height,
              defeat_experience: this.defeat_experience,
              habitat: this.habitat,
              type: this.type
          })
          fetch('http://localhost:4000/pokemon', {
              method: 'Post',
              headers: {
                  'Content-type': 'application/json'
              },
              body
          })
          .then(r => r.json())
          .then(json => {
              window.location.reload()
              return json
            })
          .catch(err => console.log(err))
      },
      remove(obj){          
          fetch(`http://localhost:4000/pokemon/${obj[0]._id}`, {
              method: 'DELETE',              
          })
          .then(r => r.json())
          .then(json => {
              window.location.reload()
              return json
              })
          .catch(err => console.log(err)) 
      }
      ,
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>