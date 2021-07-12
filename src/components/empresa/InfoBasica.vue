<template>
  <div class="mr-4 my-4">
    <div class="flex">
      <span class="font-bold w-1/2 md:w-40">Raz&oacute;n Social:</span> 
      <span class="">{{ empresa.razon_social }}</span>
    </div>
    <div class="flex">
      <span class="font-bold w-1/2 md:w-40">Giro:</span> 
      <span>{{ empresa.giro }}</span>
    </div>
    <div class="flex">
      <span class="font-bold w-1/2 md:w-40">Rut:</span> 
      <span>{{ empresa.rut }} - {{ empresa.dv }}</span>
    </div>
    <div class="flex">
      <span class="font-bold w-1/2 md:w-40">Direcci&oacute;n:</span> 
      <span>{{ empresa.domicilio }}</span>
    </div>
    <div class="flex">
      <span class="font-bold w-1/2 md:w-40">Ciudad:</span> 
      <span>{{ empresa.ciudad }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { obtenerEmpresa } from "@/services/EmpresaService";

export default defineComponent({
  name: "InfoBasica",
  setup() {
    const empresa = ref({} as Empresa);
    const cargarDatos = () => {
      obtenerEmpresa()
        .then((data) => (empresa.value = data))
        .catch((err) => {
          console.log(err.response);
        });
    };
    cargarDatos();
    return {
      empresa,
    };
  },
});
</script>
