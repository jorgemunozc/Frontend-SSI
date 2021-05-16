<template>
<Dropdown v-model="selected" :options="dominios" 
  optionLabel="dominio" optionValue="dominio" placeholder="Seleccione correo"/>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getDominios } from "@/services/DominioService";

export default defineComponent({
  // emits: ['update:modelValue'],
  // props: ['modelValue'],
  data() {
    const dominios = ref({});
    const getDominiosCorreo = async () => {
      await getDominios()
        .then((res) => (dominios.value = res))
        .catch(() => (dominios.value = []));
    };
    getDominiosCorreo();
    const selected = ref();
    return {
      dominios,
      selected,
    };
  },
});
</script>

<style lang="scss" scoped>
  .p-dropdown {
    width: 100%;
  }
  
</style>