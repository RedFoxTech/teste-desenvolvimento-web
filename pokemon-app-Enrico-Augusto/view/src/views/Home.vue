<template>
    <v-col cols="12">        
        <v-expansion-panels accordion hover>
            <v-expansion-panel v-for="(item, i) in results" :key="i">
                <v-expansion-panel-header >{{i.toUpperCase()}} <span class="text--disabled ml-4">{{item.register.length}}</span></v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{item.description}}
                    <router-link :to="{name: item.routerName}">
                        <v-btn color="orange" text>
                            Ir para {{i}}
                        </v-btn>
                    </router-link>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-col>
</template>

<script>
import fetchData from '../mixins/fetchData.js';

export default {
    name: 'home',
    data() {
        return {
            paths: ['pokemon', 'habitat', 'type'],
            results: {
                pokemon: {register: [], description: 'Animais que estão registrados na base de dados, aqui você pode encontrar, registrar, excluir ou alterar um determinado Pokemon', routerName: 'pokemons'},
                habitat: {register: [], description: 'Locais onde os animais costumam ser encontrados, aqui você pode encontrar, registrar, excluir ou alterar um determinado Habitat', routerName: 'habitat'},
                type: {register: [], description: 'Tipos de animais que podem ser encontrados, aqui você pode encontrar, registrar, excluir ou alterar um determinado Tipo de Pokemon', routerName: 'type'}
            }
        }
    },
    mixins: [fetchData],
    created() {
        this.paths.forEach(path => {
            fetch(`http://localhost:4000/${path}`)
            .then(r => r.json())
            .then(json => {
                this.results[path].register = json
            })
            .catch(err => console.log(err))
        });        
    },
}
</script>

<style>   
</style>