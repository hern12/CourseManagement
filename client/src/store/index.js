import Vue from "vue";
import Vuex from "vuex";
import { login } from '../services/authentication'
import { getUserProfile, updateUserProfile } from '../services/user'
import { getCategory, createCourse, getCourse, searchCourse } from '../services/course'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userObj: {},
    userProfile: {},

    courseResult: [],
    category: []
    
  },
  mutations: {
    //Authen section
    setUserLogin(state, payload){
      state.userObj = payload
    },
    setUserProfile(state, payload){
      state.userProfile = payload
    },
    //Course section
    setCategroy(state, payload){
      state.category = payload
    },
    setCourse(state, payload){
      state.courseResult = payload
    }
    
  },
  actions: {
    //Authen section
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

    //Course section
    getCourse({commit}){
      getCourse().then((result) => {
        commit('setCourse', result.data.result)
      })
    },
    getCategory({commit}){
      getCategory().then((result) => {
        commit('setCategroy', result.data.result)
      })
    },
    createCourse({commit}, courseItem){
      createCourse(courseItem).then( result => {
        if(result.data.status === 'success'){
          alert('Create course complete')
        }
      })
    },
    searchCoruse({commit}, criteria){
      searchCourse(criteria).then( result => {
        console.log(result.data.result)
        commit('setCourse', result.data.result)
      })
    }
  }
});
