<template>
    <div class="three wide column">
      <Navbar />
    </div>
  <div class="twelve wide column">
    <div class="row">
      <router-link to="f29-seleccion">Declarar IVA (F29)</router-link>
    </div>
    <div class="row">
      <router-link to="f29-consulta">Consulta F29</router-link>
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
