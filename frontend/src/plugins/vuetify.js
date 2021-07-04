import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import pt from 'vuetify/es5/locale/pt'

Vue.component('App', {
    methods: {
      changeLocale () {
        this.$vuetify.lang.current = 'pt'
      },
    },
  })

export default new Vuetify({
    lang: {
    locales: { pt },
    current: 'pt',
  },
});
