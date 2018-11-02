<template>
  <div id="app">
    <Nav @activeModal="loginModalStatus"/>
    <LoginComponent 
    v-if="modalState" 
    :activeModal="modalState"
     @closeModal="loginModalStatus" />
    <p v-if="!loginState" class="title is-1 alertText">
      Please Login to view content
    </p>
    <router-view v-else/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import LoginComponent from '@/components/LoginModal.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Nav,
    LoginComponent
  },
  data(){
    return{
      modalState: false,
      isLogin: null
    }
  },
  created(){
    this.$store.dispatch('isLogin')
  },
  methods: {
    loginModalStatus (status) {
      this.modalState = status
    }
  },
  computed: mapState({
    loginState: state => state.userObj
  })
};
</script>

<style>
#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  background-image: linear-gradient(#C9D6FF,#E2E2E2);
}
.alertText{
  text-align: center;
  margin-top:200px;
}
</style>
