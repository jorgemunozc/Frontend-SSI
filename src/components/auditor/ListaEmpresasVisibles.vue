<template>
  <div class="max-w-md mb-4">
    <h2 
      class="relative text-gray-600 font-bold border border-b-0 text-center uppercase"
    >
      Empresas que puede ver
      <slot />
    </h2>
    <table class="w-full border border-gray-400 table-fxed">
      <thead class="bg-gray-200">
        <tr>
          <th class="border border-gray-400">Empresa</th>
          <template v-if="editable">
            <th class="border border-gray-400 w-8">
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
          class="h-10"
        >
          <td class="border border-gray-400">{{ empresa.razon_social }}</td>
          <template v-if="editable">
            <td class="text-center border border-gray-400">
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
          <td colspan="3">
            No puede ver ninguna empresa
          </td>
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
      default: () => new Array<number>()
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  emits: ['seleccion-cambiada'],
  setup(props, { emit }) {
    const { empresas } = toRefs(props);
    const selectedEmpresas = ref(props.empresasSeleccionadas);
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
      () => emit('seleccion-cambiada', selectedEmpresas.value)
    );

    return {
      checkAll,
      selectedEmpresas
    }
  },
})
</script>
