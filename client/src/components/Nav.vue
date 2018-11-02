<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">
                    Home
                </router-link>
            </div>

            <div class="navbar-end">
                <router-link v-if="userObj && userObj[0].RoleID === 2" class="navbar-item" to='/CreateCourse'>
                    CreateCourse
                </router-link>
            <div class="navbar-item">
                <div class="buttons">
                    <div v-if="userObj" class="navbar-item has-dropdown is-hoverable">
                        <a class="button is-light">
                            {{userObj[0].Username}}
                        </a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Profile
                            </a>
                            <a class="navbar-item" @click="setLogout">
                                Log out
                            </a>
                        </div>
                    </div>
                    <a v-else class="button is-light" @click="setLogin">
                        Log in
                    </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapState } from 'vuex'
export default {

    methods:{
        setLogin(){
            this.$emit('activeModal', true)
        },
        setLogout(){
            this.$store.dispatch('logout')
        }
    },
    computed: mapState({
        userObj: state => state.userObj
    })
}
</script>



<style scoped>
.navbar {
  box-shadow: 0 1.5px 2px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.active_first {
  background: rgb(0, 150, 250);
  border-bottom-left-radius: 5px;
  color: azure;
}
.active {
  background: rgb(0, 150, 250);
  color: azure;
}
</style>
