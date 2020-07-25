<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form @submit.prevent="crearUsuario({email: email, password: password})">
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="Ingrese password" v-model="password">
            <input type="password" placeholder="Repetir password" v-model="retypePassword">
            <button type="submit" :disabled="!desactivar">Registrar</button>
        </form>
        {{error}}
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
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
        },
        computed:{
            ...mapState(['error']),
            desactivar(){
                return this.password === this.retypePassword && this.password.trim() != "" && this.password.length > 5              
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>