<template>
    <h1>PERFIL EMPRESA</h1>
    <InfoBasica :rut="rut" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
import InfoBasica from "@/components/empresa/InfoBasica.vue";
import { useRoute } from 'vue-router';

export default defineComponent({
    components: {
        InfoBasica,
    },
    setup() {
        const route = useRoute();
        const rut = ref();
        onBeforeMount(() => {
            rut.value = route.params.rut;
            console.log(rut.value);
        });
        onMounted(
            () => {
                console.log('Componente home montado')
            }
        )
        return {
        }
    }
})
</script>
