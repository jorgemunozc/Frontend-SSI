<template>
    <div class="ui text container">
        <div class="column">
            <h2 class="ui blue image header">Ingresar a Sistema</h2>
            <form @submit.prevent="login" class="ui form large stacked segment">
                <div class="field">
                    <div class="ui left icon input">
                        <i class="user icon" />
                        <input type="text" v-model="user">
                    </div>
                </div>
                <div class="field">
                    <div class="ui left icon input">
                        <i class="lock icon"/>
                        <input type="password" v-model="pass">
                    </div>
                </div>
                <input class="ui big fluid submit button blue" type="submit" value="Ingresar">
            </form>
        </div>
    <div class="ui message"><span>No tiene cuenta? Registrese <router-link to="registro">aqui</router-link></span></div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import auth from '@/services/LoginService';
import { setLoggedIn, setAdminSession } from '@/auth/setAuth';

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
                    let redirect = 'home';
                    setLoggedIn();
                    if (rol === 'ADMIN') {
                        redirect = 'dashboard';
                        setAdminSession();
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
