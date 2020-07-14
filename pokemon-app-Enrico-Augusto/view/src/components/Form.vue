<template>
<v-col cols="12">
    <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="name" :counter="40" :rules="nameRules" label="Nome Pokemon" required></v-text-field>
        
        <v-select v-if="habitatData" v-model="habitat" :items="dataFormatHabitat" label="Habitat"></v-select>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="sendPokemon">
            criar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
            Cancelar
        </v-btn>
        
    </v-form>
</v-col>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      habitat: '',
      habitatData: [],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 40) || 'Nome deve possuir no máximo 40 caracteres',
      ],            
      items: [],      
    }),

    created(){
      fetch('http://localhost:4000/habitat')
      .then(r => r.json())
      .then(json => {
        this.habitatData = json
      })
      .catch(err => {
        console.log(err);        
      })
    },

    computed: {
      dataFormatHabitat(){
        return this.habitatData.map(data => data.name)
      }
    },

    methods: {
      sendPokemon(){

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