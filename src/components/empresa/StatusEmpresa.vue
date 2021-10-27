<template>
  <div 
    class="flex flex-wrap items-center"
  >
    <label class="font-bold w-32">Estado:</label>
    <div 
      class="w-20"
    >
      <LoadingSpinner
        v-if="isPending"
        class=""
      />
      <span v-else>
        {{ estado }}
      </span>
    </div>
    <div 
      class="relative w-16 rounded-full border-2 z-0 flex items-center transition-colors"
      :class="switchBgColorClass"
    >
      <button
        class="w-8 h-7 bg-gray-50 absolute transform opacity-0"
        :class="{'translate-x-7': !isActive}"
        :disabled="isPending"
        @click="modificarEstado"
      />
      <div 
        class=" rounded-full w-7 h-7 bg-white transform transition-all"
        :class="toggledClass"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { activarEmpresa, desactivarEmpresa, estadoEmpresa } from '@/services/EmpresaService';
import { computed, defineComponent, ref, watch } from 'vue';
import LoadingSpinner from '../LoadingSpinner.vue';

export default defineComponent({
  components: { LoadingSpinner },
  props: {
    rut: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const isActive = ref(false);
    const isReady = ref(false);
    const isPending = ref(true);
    const estado = computed(() => {
      return isActive.value? 'ACTIVA': 'INACTIVA';
    });

    const modificarEstado = async function () {
      try {
        isPending.value = true;
        if (isActive.value) {
          await desactivarEmpresa(props.rut);
          isActive.value = false;
        } else {
          await activarEmpresa(props.rut);
          isActive.value = true;
        }
      } catch (error) {
        console.warn('No se pudo modificar estado de empresa');
        isActive.value = !isActive.value;
      } finally {
        isPending.value = false;
      }
    }

    //CLASES CSS
    const toggledClass = computed(() => {
      return {
        'translate-x-8': isActive.value,
      }
    });
    const switchBgColorClass = computed(() => {
      return {
        'bg-red-400': !isPending.value && !isActive.value,
        'border-red-400': !isPending.value && !isActive.value,
        'bg-green-400': !isPending.value && isActive.value,
        'border-green-400': !isPending.value && isActive.value,
        'bg-gray-300': isPending.value,
        'border-gray-300': isPending.value
      }
    });

    //INICIALIZACION ESTADO
    estadoEmpresa(props.rut)
    .then((res) => {
      isActive.value = res.estado === 1;
      isPending.value = false;
    })
    .catch(() => {
      isPending.value = true;
    })

    watch(
      () => props.rut,
      (newRut) => {
        isPending.value = true;
        estadoEmpresa(newRut)
        .then((res) => {
          isActive.value = res.estado === 1;
          isPending.value = false;
        })
      }
    )
    

    return {
      isActive,
      isReady,
      isPending,
      toggledClass,
      switchBgColorClass,
      estado,
      modificarEstado,
    }
  },
})
</script>
