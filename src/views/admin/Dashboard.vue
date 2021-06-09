<template>
  <div class="row">
    <div class="three wide column">
      <Navbar user-type="ADMIN" />
    </div>
    <div class="ui twelve wide column grid">
      <h1 class="ui blue header">
        ADMIN
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
