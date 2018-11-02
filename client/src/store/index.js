import Vue from "vue";
import Vuex from "vuex";
import { login } from '../services/authentication'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userObj: {}
  },
  mutations: {
    setUserLogin(state, payload){
      state.userObj = payload
    }
  },
  actions: {
    login({commit}, userDetail) {
      login(userDetail).then(({userItem}) => {
        if(userItem.data.status === 'fail'){
          alert(userItem.data.statusTxt)
        }else{
          alert('login success')
          localStorage.setItem("userDetail", JSON.stringify(userItem.data.user))
          const userDetail = localStorage.getItem("userDetail")
          commit('setUserLogin', JSON.parse(userDetail))
        }
      })
    },
     isLogin({commit}){
      const userDetail = localStorage.getItem("userDetail")
      if(userDetail){
        commit('setUserLogin', JSON.parse(userDetail))
      }else{
        commit('setUserLogin', null)
      }
    },
    logout({commit}){
      localStorage.clear()
      commit('setUserLogin', null)
    }
  }
});
