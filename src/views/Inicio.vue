<template>
    <div>
        <h1>Ruta protegida</h1>
        {{usuario.email}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name: 'Inicio',
        computed:{
            ...mapState(['usuario'])
        }

    }
</script>

<style lang="scss" scoped>

</style>