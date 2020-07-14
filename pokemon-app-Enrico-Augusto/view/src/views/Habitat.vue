<template>
  
    <v-tabs v-model="tab" icons background-color="deep-purple accent-4" class="elevation-2" dark grow icons-and-text>
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, index) in tabs" :key="index" :href="`#${tab.name}`">
            {{tab.name}}
            <v-icon v-if="icons">{{tab.icon}}</v-icon>
        </v-tab>

        <v-tab-item :value="`Habitat`">
            <v-card flat tile v-if="api != null">
                <data-table @remove="remove" title="Habitat" :api='api' :headers="headers"></data-table>
            </v-card>
        </v-tab-item>

        <v-tab-item :value="`Cadastrar Habitat`">
            <v-card flat tile>
                <v-col cols="12">
                   <v-text-field v-model="name"  label="Nome Habitat" required>
                   </v-text-field>                
                
                   <v-text-field  v-model="description" label="Descrição" required>
                   </v-text-field>

                   <v-btn @click="sendHabitat" color="success" class="mr-4">
                       criar
                   </v-btn>

                   <v-btn color="error" class="mr-4">
                       Cancelar
                   </v-btn>
                </v-col>
            </v-card>
        </v-tab-item>

    </v-tabs>
  
</template>

<script>
import DataTable from '../components/DataTable.vue';
import fetchData from '../mixins/fetchData';

  export default {
    name: 'Habitat',
    mixins: [fetchData],
    components: {        
        DataTable
    },
    data () {
      return {
        name: '',
        description: '',
        headers: [{
                text: 'Habitat',
                align: 'start',                
                value: 'name',
            },
            {
                text: 'Descrição',
                value: 'description',
            }],
        tab: null,
        icons: true,                
        tabs: [{name: 'Habitat', icon: 'mdi-table'}, {name: 'Cadastrar Habitat', icon: 'mdi-note-text'}],
      }
    },
    methods: {
        remove(obj) {
            fetch(`http://localhost:4000/habitat/${obj[0]._id}`, {
                    method: 'DELETE',
                })
                .then(r => r.json())
                .then(json => {
                    window.location.reload()
                    return json
                })
                .catch(err => console.log(err))
        },
        sendHabitat(){
            const body = JSON.stringify({
                name: this.name,
                description: this.description
            });
            fetch(`http://localhost:4000/habitat`, {
                method: 'Post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body
            })
            .then(r => r.json())
            .then(json => console.log(json))
            .catch(err => err)            
        }
    },
    created() {
        this.fetchData('/habitat')
    },
  }
</script>