import Vue from "vue";
import Vuex from "vuex";
import { login } from '../services/authentication'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {
    login({commit}, userDetail) {
      console.log(userDetail)
      login(userDetail).then((data) => {
        console.log(data)
      })
    }
  }
});
