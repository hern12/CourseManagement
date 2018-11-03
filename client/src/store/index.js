import Vue from "vue";
import Vuex from "vuex";
import { login } from '../services/authentication'
import { getUserProfile, updateUserProfile } from '../services/user'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userObj: {},
    userProfile: {}
  },
  mutations: {
    setUserLogin(state, payload){
      state.userObj = payload
    },
    setUserProfile(state, payload){
      state.userProfile = payload
    }
  },
  actions: {
    login({commit}, userDetail) {
      login(userDetail).then(({userItem}) => {
        if(userItem.data.status === 'fail'){
          alert(userItem.data.statusTxt)
        }else{
          alert('login success')
          const userName = userItem.data.user[0].Username
          const role = userItem.data.user[0].RoleID
          localStorage.setItem("userDetail", JSON.stringify([{Username: userName, RoleID: role}]))
          const userDetail = localStorage.getItem("userDetail")
          commit('setUserLogin', JSON.parse(userDetail))
        }
      })
    },
    getUserProfile({commit}, userLogin){
      getUserProfile(userLogin).then((data) => {
        commit('setUserProfile', data.data.userProfile[0])
      })
    },
    userProfile({commit}, userProfile){
      updateUserProfile(userProfile).then(result => {
        if(result.data.status === true){
          getUserProfile(userProfile.token).then((data) => {
            commit('setUserProfile', data.data.userProfile[0])
            alert('Update success')
          })
        }else{
          alert('Update fail')
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
    },
  }
});
