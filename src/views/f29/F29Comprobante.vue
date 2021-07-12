<template>
  <div class="container">
    <Navbar />
  </div>
  <div class="mx-auto w-3/4 max-w-2xl bg-gray-100 p-4">
    <h1 class="text-2xl text-center mb-4 font-bold">
      Formulario 29 enviado exitosamente
    </h1>
    <div class="text-lg">
      <span class="text-blue-800 font-semibold">Folio: </span> {{ folio }}
    </div>
    <div class="text-lg">
      <span class="text-blue-800 font-semibold">Fecha de env&iacute;o:</span
      >{{ date }}
    </div>
    <div class="flex w-full text-white justify-around mt-8">
      <router-link to="home" class="h-8 mx-4 px-2 bg-blue-800 rounded align-top">Volver a Inicio</router-link>
      <router-link :to="{name: 'Seleccion Periodo'}" class="h-8 mx-4 px-2 bg-blue-800 rounded vertical"> Nuevo Formulario</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
  },
  setup() {
    const f29Data = store.state;
    const folio = f29Data.folio;
    const options = { year: "numeric", month: "long", day: "numeric" } as const;
    const date = new Date().toLocaleDateString("es-CL", options);
    return {
      folio,
      date,
    };
  },
});
</script>
