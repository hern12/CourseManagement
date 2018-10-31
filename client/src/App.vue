<template>
  <div id="app">
    <Nav @activeModal="loginModalStatus"/>
    <LoginComponent 
    v-if="modalState" 
    :activeModal="modalState"
     @closeModal="loginModalStatus" />
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import LoginComponent from '@/components/LoginModal.vue'

export default {
  components: {
    Nav,
    LoginComponent
  },
  data(){
    return{
      modalState: false
    }
  },
  methods: {
    loginModalStatus (status) {
      this.modalState = status
    }
  }
};
</script>

<style>
#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  background-image: linear-gradient(#C9D6FF,#E2E2E2);
}
</style>
