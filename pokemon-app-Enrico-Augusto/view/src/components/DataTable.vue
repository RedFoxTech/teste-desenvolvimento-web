<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>            
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
            </v-text-field>
        </v-card-title>        
            <v-data-table v-model="selected" single-select item-key="name" show-select :headers="headers" :items="api" :search="search">                
                <template v-slot:top>
                    <v-col cols='12'>
                        <v-btn color="error" class="mr-4" @click="excluir">
                            Excluir
                        </v-btn>
                    </v-col>                    
                </template>
            </v-data-table>
    </v-card>
</template>
<script>
    export default {
        data() {
            return {
                dialog: false,
                selected: [],
                search: '',
            }
        },
        props: ['headers', 'api', 'title'],
        methods: {
            deleteItem(item){
                console.log(item);
                
            },
            excluir(){
                this.$emit('remove', this.selected)                
            },
            editItem(item){
                console.log(item);
                
            }
        },
        watch: {
            selected(){
                console.log(this.selected);
                
            }
        },
    }
</script>