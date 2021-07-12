<template>
  <div class="container">
    <div>
      <Navbar />
    </div>
    <div class="md:ml-48 p-2">
      <h1 class="text-blue-700 font-semibold text-2xl mb-4">
        Gesti&oacute;n de Solicitudes de Ingreso a Plataforma
      </h1>
      <SolicitudList />
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
