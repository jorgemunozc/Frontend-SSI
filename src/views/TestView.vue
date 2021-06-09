<template>
  <Dropdown :options="ciudades" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Test',
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
