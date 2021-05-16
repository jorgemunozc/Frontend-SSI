<template>
        <div class="ui vertical labeled icon menu" v-if="userType === 'ADMIN'">
            <router-link class="item" to="/ver-solicitudes">Gestionar Solicitudes</router-link>
            <div class="item" @click="logOut">Cerrar Sesion</div>
            <!-- <li>Gestionar Dominios</li> -->
        </div>
        <div class="ui fixed vertical labeled icon menu" v-else>
            <router-link class="item" to="/home">
                <i class="user icon"></i>
                Mis Datos
            </router-link>
            <div class="item">Ver Formulario 19</div>
            <div class="item" @click="logOut">Cerrar Sesion</div>
        </div>
   
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { Rol } from '@/types/enums/Rol';
import { logout } from '@/services/LoginService';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'Navbar',
    props: {
        userType: {
            type: String,
            default: Rol.EMPRESA
        }
    },
    setup() {
        const router = useRouter();
        const logOut = () => {
            logout();
            router.push({name: 'Login'});
        }

        return {
            logOut,
        }
    }
})
</script>
