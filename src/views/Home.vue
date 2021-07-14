<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container px-2">
    <div>
      <h1 class="text-2xl text-blue-700 font-semibold">PERFIL EMPRESA</h1>
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
