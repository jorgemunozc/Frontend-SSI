<template>
    <div class="container">
      <Navbar />
    </div>
  <div class="mx-4 max-w-xl">
    <div class="border px-4 my-4 hover:bg-gray-200">
      <router-link 
        to="f29-declarar-seleccion" 
        class="w-full block"
      >
        Declarar IVA (F29)
      </router-link>
    </div>
    <div class="border px-4 my-4 hover:bg-gray-200">
      <router-link 
        to="f29-consulta"
        class="block w-full"
      >
        Consulta F29
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Navbar,
  }
})
</script>
