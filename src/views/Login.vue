<template>
    <form @sumbit.prevent="login">
        <div>
            <label for="correo">Correo</label>
            <input type="text">
        </div>
        <div>
            <label for="pass">Contrasena</label>
            <input type="password">
        </div>
    </form>

    <button @click="login">otro boton</button>
    <span>No tiene cuenta? Registrese <router-link to="registro">aqui</router-link></span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        console.log('hola');
        return {
            hola: "hola"
        }
    },

    methods: {
        login() {
            this.$router.push({name: 'registro'});
        }
    }
})
</script>
