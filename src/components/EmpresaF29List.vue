<template>
  <table class="w-52">
    <thead>
      <tr class="bg-gray-300">
        <th>Mes</th>
        <th>Folio</th>
        <th v-if="showButton" />
      </tr>
    </thead>
    <tbody v-if="isLoading">
      <tr>
        <td colspan="3">
          <loading-spinner />
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr 
        v-for="(form, index) in formularios" 
        :key="index"
      >
        <td class="bg-blue-100">{{ meses[form.mes] }}</td>
        <td>{{ form.folio }}</td>
        <th v-if="showButton">
          <router-link 
            :to="`/control/ver-f29/${form.folio}`"
            class="text-blue-700 hover:text-blue-800 cursor-pointer font-normal"
          >
            Ver
          </router-link>
        </th>
      </tr>
      <tr v-if="nadaEncontrado"><td colspan="3">Sin impuestos declarados.</td></tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { resumenF29Empresa, F29ShortResponse } from '@/services/F29Service';
import LoadingSpinner from './LoadingSpinner.vue';
export default defineComponent({
  components: { LoadingSpinner },
  props: {
    rut: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      default: 2021
    },
    showButton: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const formularios = ref<F29ShortResponse[]>([]);
    const nadaEncontrado = ref(true);
    const isLoading = ref(true);
    const meses = [
      'N/A',
      'Enero', 'Febrero', 'Marzo', 'Abril',
      'Mayo', 'Junio', 'Julio', 'Agosto',
      'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const cargarFormularios = function() {
      isLoading.value = true;
      resumenF29Empresa(props.rut, props.year)
        .then(data => {
          formularios.value = data;
          nadaEncontrado.value = data.length === 0;
          })
        .finally(() => {
          isLoading.value = false;
        });
    }
    cargarFormularios()
    watch(
      () => [props.rut, props.year],
      () => cargarFormularios()
    )
      return {
        formularios,
        nadaEncontrado,
        meses,
        isLoading
      }
  },
})
</script>
