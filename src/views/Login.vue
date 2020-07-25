<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="loginUsuario({email: email, password: password})">
            <input type="email" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
        {{error}}
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

    export default {
        name:'Login',
        data(){
            return {
                email:'',
                password:''               
            }
        },
        methods:{
            ...mapActions(['loginUsuario'])
        },
        computed:{
            ...mapState(['error'])
        }
    }
</script>

<style lang="scss" scoped>

</style>