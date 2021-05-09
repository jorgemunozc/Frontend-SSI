<template>
    <form @submit.prevent="login">
        <div>
            <label for="correo">Rut</label>
            <input type="text" v-model="user">
        </div>
        <div>
            <label for="pass">Contrasena</label>
            <input type="password" v-model="pass">
        </div>
        <input type="submit" value="Ingresar">
    </form>

    <span>No tiene cuenta? Registrese <router-link to="registro">aqui</router-link></span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import auth from '@/services/LoginService';

export default defineComponent({
    data() {
        return {
            pass: '',
            user: '',
        }
    },

    methods: {
        login() {
            console.log('Intentando loguear...');
            if (this.pass.length === 0 || this.user.length === 0) {
                console.log('campos vacios');
                return
            }

            const credenciales = this.crearCredenciales();
            auth(credenciales)
                .then((rol) =>{
                    let redirect = 'profile';
                    if (rol === 'ADMIN') {
                        redirect = 'dashboard';
                    }
                    this.$router.push(redirect);
                })
                .catch(() => console.log('No se pudo loguear :('));
        },

        crearCredenciales() {
            const password = this.pass;
            let credenciales: {[k: string]: string} = {
                'password': password
            };
            if (this.metodoLogin() === 'correo') {
                credenciales.correo = this.user;
            } else {
                credenciales.rut = this.user;
            }
            return credenciales;
        },

        metodoLogin() {
            let metodo = 'rut';
            const esCorreo = this.user.indexOf('@') != -1;
            if (esCorreo) {
                metodo = 'correo';
            }

            return metodo;
        }
    }
})
</script>
