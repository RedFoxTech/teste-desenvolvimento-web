import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ModalAdd: {
      title: "",
      open: false,
      name: "",
      cp40: "",
      cp39: "",
      atk: "",
      def: "",
      sta: "",
      types: [],
      weathers: [],
      btn1: {
        name: "",
        func: () => { }
      }
    },
    ModalView: {
      open: false,
      name: "",
      cp40: "",
      cp39: "",
      atk: "",
      def: "",
      sta: "",
      types: [],
      weathers: []
    },
    filter: "",
  },
  mutations: {
    setFilter(state, data) {
      state.filter = data
    },
    setModalAddBtn1(state, obj) {
      state.ModalAdd.btn1 = obj
    },
    setModalAddTitle(state, title) {
      state.ModalAdd.title = title
    },
    setModalAddOpen(state, bool) {
      state.ModalAdd.open = bool
    },
    setModalAddTypes(state, arr) {
      state.ModalAdd.types = state.ModalAdd.types.concat(arr)
    },
    rmModalAddType(state, index) {
      state.ModalAdd.types.splice(index, 1)
    },
    setModalAddWeathers(state, arr) {
      state.ModalAdd.weathers = state.ModalAdd.weathers.concat(arr)
    },
    rmModalAddWeathers(state, index) {
      state.ModalAdd.weathers.splice(index, 1)
    },
    setModalAddName(state, name) {
      state.ModalAdd.name = name
    },
    setModalAddCP40(state, value) {
      state.ModalAdd.cp40 = value
    },
    setModalAddCP39(state, value) {
      state.ModalAdd.cp39 = value
    },
    setModalAddATK(state, value) {
      state.ModalAdd.atk = value
    },
    setModalAddDEF(state, value) {
      state.ModalAdd.def = value
    },
    setModalAddSTA(state, value) {
      state.ModalAdd.sta = value
    }
  },
  actions: {
    setFilter({ commit }, data) {
      commit("setFilter", data)
    },
    setModalAddBtn1({ commit }, obj) {
      commit("setModalAddBtn1", obj)
    },
    setModalAddTitle({ commit }, title) {
      commit("setModalAddTitle", title)
    },
    setModalAddOpen({ commit }, bool) {
      commit("setModalAddOpen", bool)
    },
    setModalAddTypes({ commit }, arr) {
      commit("setModalAddTypes", arr)
    },
    rmModalAddType({ commit }, index) {
      commit("rmModalAddType", index)
    },
    setModalAddWeathers({ commit }, arr) {
      commit("setModalAddWeathers", arr)
    },
    rmModalAddWeathers({ commit }, index) {
      commit("rmModalAddWeathers", index)
    },
    setModalAddName({ commit }, name) {
      commit("setModalAddName", name)
    },
    setModalAddCP40({ commit }, value) {
      commit("setModalAddCP40", value)
    },
    setModalAddCP39({ commit }, value) {
      commit("setModalAddCP39", value)
    },
    setModalAddATK({ commit }, value) {
      commit("setModalAddATK", value)
    },
    setModalAddDEF({ commit }, value) {
      commit("setModalAddDEF", value)
    },
    setModalAddSTA({ commit }, value) {
      commit("setModalAddSTA", value)
    }
  },
  modules: {
  }
})
