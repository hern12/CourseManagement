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

            <router-link class="navbar-item" to='/CreateCourse'>
                CreateCourse
            </router-link>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>

                <div class="navbar-dropdown">
                <a class="navbar-item">
                    About
                </a>
                <a class="navbar-item">
                    Jobs
                </a>
                <a class="navbar-item">
                    Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                    Report an issue
                </a>
                </div>
            </div>
            </div>

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-light" @click="setLogin">
                        Log in
                    </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods:{
        setLogin(){
            this.$emit('activeModal', true)
        }
    }
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
