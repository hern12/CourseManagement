<template>
    <div class="wrapper">
        <div class="container">
            <section class="hero">
                <div class="hero-body">
                    <div class="is-undeline is-flex rm_padding mr_bot mr_bot">
                        <h1 class="title is-2 course_title">
                            Profile Management
                        </h1>
                    </div>
                    <div class="field">
                        <label class="label title is-4">First name</label>
                        <div class="control">
                            <input class="input" v-model="userProfile.FirstName" type="text" placeholder="Pakkawat">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Last name</label>
                        <div class="control">
                            <input class="input"  v-model="userProfile.LastName" type="text" placeholder="Suwannasam">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Nickname</label>
                        <div class="control">
                            <input class="input"  v-model="userProfile.NickName" type="text" placeholder="Hern">
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <div class="field">
                                <label class="label title is-4">Birthday</label>
                                <div class="control">
                                    <datepicker class="fullwidth" v-model="userProfile.BirthDay" placeholder="Format ('Y-m-d')" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="field">
                                <label class="label title is-4">Gender</label>
                                <div class="control">
                                    <div class="select">
                                    <select v-model="userProfile.Gender" :value="userProfile.Gender === 'M' ? 'Male' : 'Female' ">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="button is-primary" @click="updateUserProfile">
                            Confirm
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

import Datepicker from 'vue-bulma-datepicker'
import { mapState, mapAction } from 'vuex'

export default {
    components:{
        Datepicker
    },
    data(){
        return{
            userLogin: this.$store.state.userObj,
            userProfile: this.$store.state.userProfile
        }
    },
    created(){
        this.$store.dispatch('getUserProfile', this.userLogin)
    },
    methods: {
        updateUserProfile(){
            this.$store.dispatch('userProfile', {
                userProfile: this.userProfile,
                token: this.userLogin 
            })
        }
    },
    computed: mapState({
        getUserProfile: state => state.userProfile
    }),
    watch: {
        getUserProfile(val){
             this.userProfile = this.$store.state.userProfile
        }
    }
}
</script>


<style scoped>
    .hero-body{
        width: 50%;
        margin: 0 auto;
    }
    select, .select{
        width: 100%;
    }
</style>

