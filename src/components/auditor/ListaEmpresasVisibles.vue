<template>
  <div class="max-w-md mb-4">
    <h2 
      class="relative text-gray-600 font-bold border border-b-0 text-center uppercase"
    >
      Empresas que puede ver
      <slot />
    </h2>
    <table class="w-full">
      <thead class="bg-gray-200">
        <tr>
          <th>Empresa</th>
          <template v-if="editable">
            <th />
            <th>
              <input 
                v-model="checkAll"
                type="checkbox" 
              >
            </th>
          </template>
        </tr>
      </thead>
      <tbody v-if="empresas.length">
        <tr
          v-for="empresa in empresas"
          :key="empresa.rut"
        >
          <td>{{ empresa.razon_social }}</td>
          <template v-if="editable">
            <td class="text-center">
              <input
                v-model="selectedEmpresa"
                type="radio"
                :value="empresa.rut"
              >
            </td>
            <td class="text-center">
              <input
                v-model="selectedEmpresas"
                type="checkbox"
                :value="empresa.rut"
              >
            </td>
          </template>
        </tr>
      </tbody>
      <tbody v-else>
        <tr class="h-7">
          <td colspan="3" />
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, PropType, toRefs, watch } from 'vue'

export default defineComponent({
  props: {
    empresas: {
      type: Object as PropType<Empresa[]>,
      required: true
    },
    empresasSeleccionadas: {
      type: Array as PropType<Array<number>>,
      default: []
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['seleccionCambiada', 'empresaSeleccionada'],
  setup(props, { emit }) {
    const { empresas } = toRefs(props);
    const selectedEmpresas = ref(props.empresasSeleccionadas);
    const selectedEmpresa = ref(0);
    const checkAll = computed({
      get: () => {
        return empresas.value.length? 
            selectedEmpresas.value.length === empresas.value.length : false;
        },
      set: (check: boolean) => {
        let selected: number[] = [];

        if (check) {
          empresas.value.forEach((empresa: Empresa) => {
            selected.push(empresa.rut)
          })
        }
        selectedEmpresas.value = selected;
      }
    });
    /**Emite el evento al componente padre con el arreglo de
     * de empresas actualmente seleccionadas
    */
    watch(
      () => selectedEmpresas.value,
      () => emit('seleccionCambiada', selectedEmpresas.value)
    );

    watch(
      () => selectedEmpresa.value,
      () => emit('empresaSeleccionada', selectedEmpresa.value)
    )

    return {
      checkAll,
      selectedEmpresas,
      selectedEmpresa
    }
  },
})
</script>