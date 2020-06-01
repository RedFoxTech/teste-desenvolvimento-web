<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{title}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="d-flex justify-center">
              <v-col cols="4" sm="4" md="4"></v-col>

              <v-col cols="4" sm="4" md="4">
                <v-text-field label="Pokemon name" :value="name" @input="setName" required></v-text-field>
              </v-col>

              <v-col cols="4" sm="4" md="4"></v-col>

              <v-col cols="2" sm="2" md="2"></v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field label="CP @ 40" :value="cp40" @input="setCP40" type="number" required></v-text-field>
              </v-col>
              <v-col cols="4" sm="4" md="4">
                <v-text-field label="CP @ 39" :value="cp39" @input="setCP39" type="number" required></v-text-field>
              </v-col>
              <v-col cols="2" sm="2" md="2"></v-col>
              <v-col cols="3" sm="3" md="3">
                <v-text-field label="Attack" :value="atk" @input="setATK" type="number" required></v-text-field>
              </v-col>
              <v-col cols="3" sm="3" md="3">
                <v-text-field label="Defense" :value="def" @input="setDEF" type="number" required></v-text-field>
              </v-col>
              <v-col cols="3" sm="3" md="3">
                <v-text-field label="Stamina" :value="sta" @input="setSTA" type="number" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="type"
                  @keyup.enter="setTypes"
                  label="Types (grass,pison)"
                  hint="Press enter to add. For more then one use (,)"
                  persistent-hint
                  required
                ></v-text-field>
                <template v-for="(type,index) of types">
                  <v-chip
                    v-bind:key="index"
                    close
                    class="ma-2"
                    @click:close="rmType(index)"
                  >{{type}}</v-chip>
                </template>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="weather"
                  @keyup.enter="setWeathers"
                  label="Weathers (clear,sunny)"
                  hint="Press enter to add. For more then one use (,)"
                  persistent-hint
                  required
                ></v-text-field>
                <template v-for="(weather,index) of weathers">
                  <v-chip
                    v-bind:key="index"
                    close
                    @click:close="rmWeather(index)"
                    class="ma-2"
                  >{{weather}}</v-chip>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeMe">Close</v-btn>
          <v-btn
            color="blue darken-1"
            :loading="buttons.save.loading"
            text
            @click="btn1.func"
          >{{btn1.name}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    dialog: true,
    type: "",
    weather: "",
    buttons: {
      save: { loading: false }
    }
  }),
  computed: Object.assign(
    mapState({
      btn1: state => state.ModalAdd.btn1,
      title: state => state.ModalAdd.title,
      open: state => state.ModalAdd.open,
      name: state => state.ModalAdd.name,
      cp40: state => state.ModalAdd.cp40,
      cp39: state => state.ModalAdd.cp39,
      atk: state => state.ModalAdd.atk,
      def: state => state.ModalAdd.def,
      sta: state => state.ModalAdd.sta,
      types: state => state.ModalAdd.types,
      weathers: state => state.ModalAdd.weathers
    }),
    {
      /* Others computed here */
    }
  ),
  methods: {
    clearup() {
      const { dispatch } = this.$store;
      dispatch("setModalAddName", "");
      dispatch("setModalAddCP40", "");
      dispatch("setModalAddCP39", "");
      dispatch("setModalAddATK", "");
      dispatch("setModalAddDEF", "");
      dispatch("setModalAddSTA", "");
      dispatch("setModalAddTypes", []);
      dispatch("rmModalAddWeathers", []);
      dispatch("setModalAddTitle", "");
    },
    closeMe() {
      this.clearup();
      this.$store.dispatch("setModalAddOpen", false);
    },
    setName(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddName", data);
    },
    setCP40(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddCP40", data);
    },
    setCP39(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddCP39", data);
    },
    setATK(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddATK", data);
    },
    setDEF(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddDEF", data);
    },
    setSTA(data) {
      const { dispatch } = this.$store;
      dispatch("setModalAddSTA", data);
    },
    rmType(index) {
      const { dispatch } = this.$store;
      dispatch("rmModalAddType", index);
    },
    setTypes() {
      const { dispatch } = this.$store;
      const types = this.type.split(",");
      dispatch("setModalAddTypes", types);
      this.type = "";
    },
    rmWeather(index) {
      const { dispatch } = this.$store;
      dispatch("rmModalAddWeathers", index);
    },
    setWeathers() {
      const { dispatch } = this.$store;
      const weathers = this.weather.split(",");
      dispatch("setModalAddWeathers", weathers);
      this.weather = "";
    }
  }
};
</script>