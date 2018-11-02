<template>
    <div class="modal" :class="[modalStatus ? 'is-active' : null]"> 
        <div class="modal-background" @click="loginModalStatus(false)"></div>
            <div class="modal-content">
                <div class="box">
                    <p class="title is-3">Login</p>
                    <div class="field">
                        <label class="label title is-6">Username</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Username" v-model="username">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-6">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Password" v-model="password">
                        </div>
                    </div>
                    <a class="button is-info" @click="login">Login</a>
                </div>
            </div>
        <button class="modal-close is-large" aria-label="close" @click="loginModalStatus(false)"></button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import axios from 'axios'
    export default {
        props:['activeModal'],
        data(){
            return{
                modalStatus: this.activeModal,
                username: 'student1',
                password: '123123'
            }
        },
        methods: {
            loginModalStatus (status) {
                this.modalStatus = status
                this.$emit('closeModal', this.modalStatus)
            },
            login(){
                let userObj = {
                    username: this.username,
                    password: this.password
                }
                this.$store.dispatch('login', userObj)
                console.log(this.$store.state.userObj)
            }
        },
        computed: mapState({
            closeModalIfLoginComplete: state => state.userObj 
        })
    }
</script>

