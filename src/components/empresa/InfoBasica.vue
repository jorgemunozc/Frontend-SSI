<template>
  <div class="my-4 flex flex-col">
    <div class="flex mb-2">
      <div class="font-bold w-32">Razón Social:</div> 
      <div class="flex-1">{{ empresa.razon_social }}</div>
    </div>
    <div class="flex mb-2">
      <div class="block font-bold w-32">Giro:</div> 
      <div class="flex-1">{{ empresa.giro }}</div>
    </div>
    <div class="flex mb-2">
      <div class="font-bold w-32">Rut:</div> 
      <div class="flex-1">{{ empresa.rut }} - {{ empresa.dv }}</div>
    </div>
    <div class="flex mb-2">
      <div class="font-bold w-32">Dirección:</div> 
      <div class="flex-1">{{ empresa.domicilio }}</div>
    </div>
    <div class="flex mb-2">
      <div class="font-bold w-32">Ciudad:</div> 
      <div class="flex-1">{{ empresa.ciudad }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { obtenerEmpresa } from "@/services/EmpresaService";

export default defineComponent({
  name: "InfoBasica",
  props: {
    rut: {
      type: Number,
      default: undefined
    }
  },
  setup(props) {
    const empresa = ref({} as Empresa);
    const cargarDatos = (rut?: number) => {
      obtenerEmpresa(rut)
        .then((data) => (empresa.value = data))
    };
    cargarDatos(props.rut);
    watch(
      () => props.rut,
      () => cargarDatos(props.rut)
    )
    return {
      empresa,
    };
  },
});
</script>
