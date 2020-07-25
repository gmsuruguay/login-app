<template>
    <div>
        <h1>Registro de Usuarios</h1>
        <form>
            <input type="email" placeholder="Ingrese email" v-model="email">
            <input type="password" placeholder="Ingrese password" v-model="password">
            <input type="password" placeholder="Repetir password" v-model="retypePassword">
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'Registro',
        data(){
            return {
                email:'',
                password:'',
                retypePassword:'' 
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>