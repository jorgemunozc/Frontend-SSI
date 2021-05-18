<template>
  <div class="row">
    <div class="three wide column">
      <Navbar userType="ADMIN" />
    </div>
    <div class="ui twelve wide column grid">
      <h1 class="ui blue header">Solicitudes Pendientes de Aprobación</h1>
      <div class="sixteen wide column">
        <SolicitudList />
      </div>
    </div>
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import SolicitudList from "@/components/solicitudes/SolicitudesList.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    SolicitudList,
    Navbar
  },
});
</script>
