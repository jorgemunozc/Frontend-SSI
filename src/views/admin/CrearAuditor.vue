<template>
  <div 
    class="bg-white max-w-xl
    flex flex-col items-start flex-wrap content-start
    lg:flex-row md:gap-x-7
    "
  >
    <h1 class="text-xl font-semibold w-full">
      Nuevo Auditor
    </h1>
    <form
      class="bg-blue=-50 flex flex-wrap pb-2 w-full max-w-sm"
      @submit.prevent="agregarAuditor"
    >
      <label
        class="w-full"
      >
        Ingrese correo
      </label>
      <input
        v-model="correo"
        type="text"
        class="border px-1
          focus:outline-none
          focus:border-blue-500
        "
      >
      <button
        class="
          bg-green-800
          text-white rounded-r px-2 align-middle
          hover:bg-green-900
          disabled:opacity-50
          w-20
        "
        :disabled="isDisabled"
      >
        <span v-show="!isProcessing">Agregar</span>
        <LoadingSpinner v-show="isProcessing" />
      </button>
      <small 
        class="w-full my-1 pl-1 
          bg-red-200 text-red-800 
          rounded-b max-w-xs text-xs"
        :class="showError"
      >
        Error: {{ errorMsg }}
      </small>
    </form>
    <div 
      v-show="isLoading"
      class="w-full max-w-xs"
    >
      <LoadingSpinner />
    </div>
    <ListaEmpresasVisibles
      v-show="!isLoading"
      :empresas="empresas"
      @seleccion-cambiada="actualizarSeleccion"
    />
  </div>
</template>

<script lang="ts">
import { listaEmpresas } from '@/services/EmpresaService';
import { computed, defineComponent, ref } from 'vue'
import { agregarUsuario } from '@/services/AdminService';
import { Rol } from '@/types/enums/Rol';
import ListaEmpresasVisibles from '@/components/auditor/ListaEmpresasVisibles.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { useRouter } from 'vue-router';
import store from '@/store/auditores.module';

export default defineComponent({
  components: { 
    ListaEmpresasVisibles,
    LoadingSpinner
  },
  setup() {
    const auditoresStore = store;
    const router = useRouter();
    const empresas = ref<Empresa[]>([]);
    const selectedEmpresas = ref<number[]>([]);
    const correo = ref('');
    const yearF29Report = ref(getCurrentYear());
    const isProcessing = ref(false);
    const isLoading = ref(false);
    const hasError = ref(false);
    const errorMsg = ref('');
    const showError = computed(
      () => {
        if (hasError.value) {
          return '';
        }
        return { 'opacity-0' : true }
      }
    );
    const isDisabled = computed(
      () => {
        return correo.value.length === 0 || isProcessing.value
    });

    const agregarAuditor = function () {
      isProcessing.value = true;
      const permisos: Permisos = { puedeVerEmpresas: selectedEmpresas.value };
      agregarUsuario(Rol.AUDITOR, correo.value, permisos)
      .then((usuario) => {
        auditoresStore.agregarAuditor(usuario);
        router.push('/auditores');
      })
      .catch((err) => {
        errorMsg.value = err.response.data.errors?.correo[0] || 'Error inesperado del servidor.';
        hasError.value = true;
      })
      .finally(() => isProcessing.value = false);
    };

    const actualizarSeleccion = function (nuevaSelec: number[]) {
      selectedEmpresas.value = nuevaSelec;
    };

    function getCurrentYear(): number {
      const currDate = new Date();
      return currDate.getUTCFullYear();
    }
    isLoading.value = true;
    listaEmpresas().then((data) => {
      empresas.value = data;
    })
    .catch((err) => {
      console.error(err.response);
    })
    .finally(() => isLoading.value = false);
    
    return {
      selectedEmpresas,
      empresas,
      correo,
      yearF29Report,
      isProcessing,
      isDisabled,
      isLoading,
      hasError,
      errorMsg,
      showError,
      agregarAuditor,
      actualizarSeleccion
    }
  },
})
</script>
