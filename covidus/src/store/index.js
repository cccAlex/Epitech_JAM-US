import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    lang: '',
  },
  getters: {
    getLang: ({lang}) => {return lang}
  },
  mutations: {
    setLang: (state, lang) => {
      state.lang = lang
    }
  },
  actions: {
    setLang: ({commit}, user) => {
      commit('setLang', user)
    }
  },
  modules: {
  }
})
