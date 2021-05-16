<template>
  <h1>ADMIN</h1>
  <div>
    <Navbar userType="ADMIN" />
  </div>
  <SolicitudList />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import SolicitudList from '@/components/solicitudes/SolicitudesList.vue';
export default defineComponent({
  components: {
      Navbar,
      SolicitudList,
  }
});
</script>
