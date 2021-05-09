<template>
  <select v-model="selected" @change="$emit('update:modelValue', $event.target.value)">
      <option disabled value="">Seleccione correo</option>
      <option v-for="dom in dominios" :key="dom.id" :value="dom.dominio">@{{dom.dominio}}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getDominios } from "@/services/DominioService";

export default defineComponent({
  // emits: ['update:modelValue'],
  // props: ['modelValue'],
  data() {
    let dominios = ref({});
    let getDominiosCorreo = async () => {
      await getDominios()
        .then((res) => (dominios.value = res))
        .catch(() => (dominios.value = []));
    };
    getDominiosCorreo();
    let selected = "";
    return {
      dominios,
      selected,
    };
  },
});
</script>
