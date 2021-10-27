<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="container px-2 h-full">
    <div>
      <h1 class="text-2xl text-blue-700 font-semibold">
        CREDENCIAL EMPRESA
      </h1>
    </div>
    <Credencial />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Credencial from '@/components/empresa/Credencial.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Credencial,
    Navbar
  }
})
</script>
