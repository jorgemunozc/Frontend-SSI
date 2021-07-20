<template>
  <table class="border">
    <tr class="h-12">
      <th class="w-40 sticky top-0 bg-white border-0 border-r border-gray-300 bg-blue-200 z-20">Dominio correo</th>
      <th class="w-20 sticky top-0 bg-white border-0 border-r border-gray-300 bg-blue-200 z-20"></th>
    </tr>
    <tr 
      v-for="dom in dominios" :key="dom.id"
      class="hover:bg-gray-100"
    >
      <td class="border-0">{{ dom.dominio }}</td>
      <td class="border-0 text-center">
        <i class="
          pi pi-trash 
          text-red-700 
          cursor-pointer
          opacity-50
          hover:opacity-100
          " 
          @click="eliminarDom(dom.id)"
        ></i>
      </td>
    </tr>
    <tr v-if="dominios.length === 0">
      <td colspan="2" class="border-0 text-center">Sin dominios registrados.</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { eliminarDominio, getDominios } from '@/services/DominioService'
import { defineComponent, ref } from 'vue';
import store from '@/store/dominios.module';

export default defineComponent({
  setup() {
    const dominiosStore = store;
    const dominios = ref(dominiosStore.state.dominios);
    const eliminarDom = function (id: number) {
      eliminarDominio(id)
      .then(() => {
        dominiosStore.eliminarDominio(id);
      })
      .catch(err => {
        console.error(err.response.data);
      })
    }

    getDominios()
    .then(res => {
      console.log('cargando dominios...');
      dominiosStore.vaciarLista();
      for (let dominio of res) {
        dominios.value.push(dominio);
      }
    });
    return {
      dominios,
      eliminarDom
    }
  },
})
</script>
