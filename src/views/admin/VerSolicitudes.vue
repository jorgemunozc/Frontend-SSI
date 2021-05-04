<template>
    <ul>
        <li v-for="solicitud in solicitudes" :key="solicitud.id">{{solicitudes}}</li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { listaSolicitudes } from '@/services/SolicitudService';

export default defineComponent({
    async setup() {
        let solicitudes = ref({});
        await listaSolicitudes().then(res => {
            solicitudes.value = res;
        });
        return {
            solicitudes,
        }
    },
})
</script>
