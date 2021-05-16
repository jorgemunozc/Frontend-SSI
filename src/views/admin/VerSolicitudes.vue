<template>
  <div class="ui centered grid">
      <h2 class="header">Solicitudes Pendientes de Aprobacion</h2>
      <SolicitudList />
  </div>
</template>

<script lang="ts"> 
import { defineComponent } from "vue";
import SolicitudList from "@/components/solicitudes/SolicitudesList.vue";

export default defineComponent({
  components: {
    SolicitudList,
  },
});
</script>
