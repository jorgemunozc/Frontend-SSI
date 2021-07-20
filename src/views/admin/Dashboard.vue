<template>
  <div class="container overflow-hidden">
    <Navbar class="md:h-full"/>
    <div class="flex flex-col md:ml-48 p-2 h-full">
      <h1 class="text-blue-700 font-semibold text-2xl mb-4">
        Gesti&oacute;n de Solicitudes de Ingreso a Plataforma
      </h1>
      <div class="overflow-y-auto">
        <SolicitudList />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SolicitudList from "@/components/solicitudes/SolicitudesList.vue";
export default defineComponent({
  components: {
    Navbar,
    SolicitudList,
  },
});
</script>
