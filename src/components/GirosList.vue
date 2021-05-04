<template>
    Giros
    <Dropdown 
    v-model='selected' 
    :options="giros" :filter="true" :showClear="true"
    optionLabel="giro" optionValue="codigo" placeholder="Seleccione un giro">
    </Dropdown>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dropdown from 'primevue/dropdown';
import {getGiros} from '@/services/GiroService';
export default defineComponent({
    components: {Dropdown},
    setup() {
        let giros: any = ref({});
        let selected = ref();
        async function loadGiros(){
            giros.value = await getGiros().then(res => res);
        }
        loadGiros();
        return {
            giros,
            selected
        }
    },
})
</script>
<style lang="scss" scoped>
    .p-dropdown {
        width: 300px;
    }

   

</style>
