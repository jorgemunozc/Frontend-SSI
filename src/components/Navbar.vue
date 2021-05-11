<template>
    <h1>Navbar</h1>
    <ul class="navbar" v-if="userType === 'ADMIN'">
        <li>Ver Solicitudes</li>
        <li>Gestionar Dominios</li>
    </ul>
    <ul class="navbar" v-else>
        <li>Datos Empresa</li>
        <li>Ver Formulario 19</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Navbar',
    props: {
        userType: {
            type: String,
            default: 'EMPRESA'
        }
    },
})
</script>
