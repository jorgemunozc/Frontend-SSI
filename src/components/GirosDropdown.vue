<template>
    <Dropdown 
    v-model="selected"
    :options="giros" :filter="true" :showClear="true"
    optionLabel="giro" optionValue="giro" placeholder="Seleccione un giro" />
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue'
import { getGiros } from '@/services/GiroService';

export default defineComponent({
    name: 'GirosDropdown',
    setup() {
        const giros = ref();
        const selected = ref();
        const loadGiros = async () => {
            giros.value = await getGiros().then(res => res);
        }
        return {
            giros,
            selected,
            loadGiros,
        }
    },

    mounted() {
        this.loadGiros();
    }
})
</script>

<style lang="scss" scoped>
    .p-dropdown {
        width: 100%;
    }
    .p-dropdown .p-dropdown-clear-icon {
        color: rgb(214, 21, 21);
    }
</style>