<template>
  
    <v-tabs v-model="tab" icons background-color="deep-purple accent-4" class="elevation-2" dark grow icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, index) in tabs" :key="index" :href="`#${tab.name}`">
            {{tab.name}}
            <v-icon v-if="icons">{{tab.icon}}</v-icon>
        </v-tab>

        <v-tab-item :value="tabs[0].name">
            <v-card flat tile v-if="api != null">                
                <data-table @remove="remove" title="Tipo" :api='api' :headers="headers"></data-table>
            </v-card>
        </v-tab-item>

        <v-tab-item :value="tabs[1].name">
            <v-card flat tile>
                <v-col cols="12">
                    <v-form ref="form" v-model="valid" lazy-validation>

                        <v-text-field v-model="name" label="Tipo" required>
                        </v-text-field>

                        <v-text-field v-model="description" label="Descrição do tipo" required>
                        </v-text-field>

                        <v-btn color="success" class="mr-4" @click="sendTypePokemon">
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
    name: 'Type',
    mixins: [fetchData],
    components: {        
        DataTable
    },
    data () {
      return {
        name: '',
        valid: true,
        description: '',
        headers: [{
                text: 'Tipo',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            {
                text: 'Descrição',
                value: 'description',
            }                   
        ],
        tab: null,
        icons: true,
        tabs: [{name: 'Tipo', icon: 'mdi-table'}, {name: 'Cadastrar Tipo Pokemon', icon: 'mdi-note-text'}],
      }
    },
    created() {
        this.fetchData('/type')
    },

    methods: {
        remove(obj) {
            fetch(`http://localhost:4000/type/${obj[0]._id}`, {
                    method: 'DELETE',
                })
                .then(r => r.json())
                .then(json => {
                    window.location.reload()
                    return json
                })
                .catch(err => console.log(err))
        },
        sendTypePokemon(){
          const body = JSON.stringify({
              name: this.name,
              description: this.description
          })
          fetch('http://localhost:4000/type', {
              method: 'Post',
              headers: {
                  'Content-type': 'application/json'
              },
              body
          })
          .then(r => r.json())
          .then(json => {
              window.location.reload();
              return json
              })
          .catch(err => console.log(err))
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>