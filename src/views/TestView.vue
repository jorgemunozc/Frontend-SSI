<template>
  <Credencial />
</template>

<script lang="ts">
import Credencial from '@/components/empresa/Credencial.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Test',
    components: { Credencial },
    setup(){
        const ciudades: string[] = [];
        for (let i = 0; i < 100; i++) {
            ciudades.push(`Ciudad ${i}`);
            if (i === 50) {
                ciudades.push('CIUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD');
            }
        }
        return {
            ciudades
        }
    }
})
</script>
