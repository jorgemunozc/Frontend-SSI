<template>
  <h1>PDF</h1>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import obtenerCredencial from '@/services/PdfService';
export default defineComponent({
   
    setup() {
        const dataSrc = ref();
        const getPdf = () => {
            obtenerCredencial().then(res => {
                const blob = new Blob([res.data]);
                const objUrl = URL.createObjectURL(blob);
                dataSrc.value = objUrl;
            })
        }

        getPdf();
        return {
            dataSrc,
        }
    }
})
</script>
