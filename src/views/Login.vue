<template>
    <div>
        <h1>Login</h1>
        <form >
            <input type="email" v-model="email" placeholder="Email">
            <input type="password" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data(){
            return {
                email:'',
                password:''               
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>