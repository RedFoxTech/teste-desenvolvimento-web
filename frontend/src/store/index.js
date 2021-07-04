import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'data',
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    loggedIn: false,
    currentUser: undefined
  },
  mutations: {
    LOGIN(state, payload) {
      state.loggedIn = true;
      state.currentUser = payload.currentUser
    },
    LOGGED_OUT(state) {
      state.loggedIn = false
      state.currentUser = undefined
    },
  },
  actions: {
    login({
      commit
    }, payload) {
      commit("LOGIN", payload);
    },
    logout({
      commit
    }) {
      commit("LOGGED_OUT")
    },
  },
  getters: {
    isLoggedIn: state => state.loggedIn,
    getCurrentUser: state => state.currentUser,
  }
})
