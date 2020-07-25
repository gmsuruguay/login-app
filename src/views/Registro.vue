<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, password: password})">
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="Ingrese password" v-model="password">
            <input type="password" placeholder="Repetir password" v-model="retypePassword">
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        name:'Registro',
        data(){
            return {
                email:'',
                password:'',
                retypePassword:'' 
            }
        },
        methods:{
            ...mapActions(['crearUsuario'])
        }
        
    }
</script>

<style lang="scss" scoped>

</style>