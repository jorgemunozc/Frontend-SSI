<template>
    Giros
    <Vselect :option='giros'/>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Vselect from 'vue-select';
import {getGiros} from '@/services/GiroService';
export default defineComponent({
    components: {Vselect},
    setup() {
        let giros: any = ref({});
        let selected = "";
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
