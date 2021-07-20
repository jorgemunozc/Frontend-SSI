<template>
  <div class="h-screen container mx-auto font-sans flex flex-col">
    <div class="container">
      <Header />
    </div>
    <router-view />
  </div>  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '@/components/Header.vue';

export default defineComponent({
  name: "App",
  components: {
    Header,
  }
});
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
