<template>
  <Dropdown
    v-model="selected"
    :options="dominios" 
    option-label="dominio"
    option-value="dominio"
    placeholder="Seleccione correo"
  />
</template>

<script lang="ts">
//TODO: CARGAR CORREOS AL ABRIR DROPDOWN
import { defineComponent, ref } from "vue";
import { getDominios } from "@/services/DominioService";

export default defineComponent({
  data() {
    const dominios = ref<DominioCorreo[]>([]);
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
  }
});
</script>

<style lang="scss" scoped>
  .p-dropdown {
    width: 100%;
  }
  
</style>