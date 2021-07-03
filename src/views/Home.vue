<template>
  <div class="three wide column">
    <Navbar />
  </div>
  <div class="twelve wide column grid">
    <div>
      <h1 class="ui blue header">PERFIL EMPRESA</h1>
    </div>
    <InfoBasica />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBasica from "@/components/empresa/InfoBasica.vue";
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    InfoBasica,
    Navbar,
  },
});
</script>
