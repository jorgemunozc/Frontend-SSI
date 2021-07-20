<template>
  <form
    @submit.prevent="submit"
    class="
      flex flex-wrap
      max-w-sm
      borde border-gray-30
      items-baseline
      mb-4
      p-2
    "
  >
    <!-- <label for="dominio" class="w-full mb-2">Ingrese nuevo dominio</label> -->
    <input
      type="text"
      id="dominio"
      name="dominio"
      placeholder="Ingrese dominio de correo"
      class="
        w-48
        h-8
        px-1
        bg-gray-100
        border
        border-r-0
        focus:outline-none
        focus:bg-gray-200
        font-light
      "
      v-model="nuevoDominio"
    />
    <button
      class="bg-blue-800 hover:bg-blue-900 text-white rounded-r w-20 h-8"
    >
      Agregar
    </button>
    <small class="w-full text-xs ml-2">Ej: gmail.com</small>
  </form>
  <AlertBase v-if="hasError" v-model:isOpen="hasError" :mensaje="msg" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import store from '@/store/dominios.module';
import { agregarDominio } from '@/services/DominioService';
import AlertBase from '@/components/AlertBase.vue';

export default defineComponent({
  components: {
    AlertBase
  },
  setup() {
    const dominiosStore = store;
    const nuevoDominio =  ref("");
    const hasError = ref(false);
    const msg = ref('');
    const submit = function () {
    agregarDominio(nuevoDominio.value)
    .then(res => {
      dominiosStore.agregarDominio(res);
    })
    .then(() => nuevoDominio.value = '')
    .catch(err => {
      if (err.response.data.errors) {
        const errores = err.response.data.errors;
        console.error(errores.dominio[0])
        msg.value = errores.dominio[0];
        hasError.value = true;
      } else {
        console.log("Error inesperado");
      }
    })
    };

    return {
      nuevoDominio,
      hasError,
      msg,
      submit,
    }
  },
})
</script>
