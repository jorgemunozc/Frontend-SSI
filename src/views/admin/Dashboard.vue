<template>
  <div class="container overflow-hidden">
    <Navbar class="md:h-full" />
    <div class="flex flex-col md:ml-48 p-2 h-full">
      <template v-if="hasAdminPrivileges">
        <h1 class="text-blue-700 font-semibold text-2xl mb-4">
          Gesti&oacute;n de Solicitudes de Ingreso a Plataforma
        </h1>
        <div class="overflow-y-auto">
          <SolicitudList />
        </div>
      </template>
      <div v-else>
        <h1 class="text-blue-700 font-semibold text-4xl mx-auto max-w-xl text-center">
          Bienvenido a la plataforma de Servicio Simulado de Impuestos
        </h1>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SolicitudList from "@/components/solicitudes/SolicitudesList.vue";
import isAdmin from "@/auth/isAdmin";
export default defineComponent({
  components: {
    Navbar,
    SolicitudList,
  },
  setup() {
    const hasAdminPrivileges = isAdmin();
    return {
      hasAdminPrivileges
    }
  }
});
</script>
