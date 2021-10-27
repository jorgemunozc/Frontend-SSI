<template>
  <Dropdown 
    v-model="selected"
    :options="empresas"
    :show-clear="true"
    :placeholder="placeholder"
    :filter="true"
    option-label="razon_social"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { listaEmpresas } from '@/services/EmpresaService';

export default defineComponent({
  setup() {
    const empresas = ref([] as Empresa[]);
    const selected = ref({} as Empresa);
    const placeholder = ref('Cargando empresas...');
    
    listaEmpresas()
      .then((res) => empresas.value = res)
      .catch()
      .finally(()=> {
        placeholder.value = 'Seleccione una empresa';
      })
    return {
      empresas,
      selected,
      placeholder
    }
  },
})
</script>
<style lang="scss" scoped>
.p-dropdown-panel {
  width: 1px; //min size mobile
  font-size: 0.8rem;
}
</style>