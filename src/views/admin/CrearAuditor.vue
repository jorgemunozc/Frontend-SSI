<template>
  <div 
    class="bg-white max-w-xl
    flex flex-col items-start flex-wrap content-start
    lg:flex-row md:gap-x-7
    "
  >
    <h1 class="text-xl font-semibold w-full">Nuevo Auditor</h1>
    <form
      class="bg-blue=-50 flex flex-wrap pb-2"
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
        "
        :disabled="correo.length === 0"
      >
        Agregar
      </button>
    </form>
    <ListaEmpresasVisibles
      :empresas="empresas"
      @seleccion-cambiada="actualizarSeleccion"
      @empresa-seleccionada="actualizarRutSelec"
    />
    <div
      class="lg:mt-10"
    >
      <h2 
        v-show="selectedEmpresa"
        class="
        uppercase border border-b-0 
        font-bold text-gray-600 text-center
        "
      >
        Formularios
      </h2>
      <EmpresaF29List
        v-if="selectedEmpresa"
        :rut="selectedEmpresa"
        :year="yearF29Report"
        :show-button="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { listaEmpresas } from '@/services/EmpresaService';
import { defineComponent, ref } from 'vue'
import { agregarUsuario } from '@/services/AdminService';
import { Rol } from '@/types/enums/Rol';
import EmpresaF29List from '@/components/EmpresaF29List.vue';
import ListaEmpresasVisibles from '@/components/auditor/ListaEmpresasVisibles.vue';
import { useRouter } from 'vue-router';
import store from '@/store/auditores.module';

export default defineComponent({
  components: { 
    EmpresaF29List,
    ListaEmpresasVisibles
  },
  setup() {
    const auditoresStore = store;
    const router = useRouter();
    const empresas = ref<Empresa[]>([]);
    const selectedEmpresas = ref<number[]>([]);
    const selectedEmpresa = ref(0);
    const correo = ref('');
    const yearF29Report = ref(getCurrentYear());

    const agregarAuditor = function () {
      const permisos: Permisos = { puedeVerEmpresas: selectedEmpresas.value };
      agregarUsuario(Rol.AUDITOR, correo.value, permisos)
      .then((usuario) => {
        auditoresStore.agregarAuditor(usuario);
        router.push('/auditores');
      })
      .catch((err) => console.error(err));
    };

    const actualizarSeleccion = function (nuevaSelec: number[]) {
      selectedEmpresas.value = nuevaSelec;
    };
    const actualizarRutSelec = function (nuevoRut: number) {
      selectedEmpresa.value = nuevoRut;
    }

    function getCurrentYear(): number {
      const currDate = new Date();
      return currDate.getUTCFullYear();
    }

    listaEmpresas().then((data) => {
      empresas.value = data;
    })
    .catch((err) => {
      console.error(err.response);
    })
    
    return {
      selectedEmpresas,
      empresas,
      selectedEmpresa,
      correo,
      yearF29Report,
      agregarAuditor,
      actualizarSeleccion,
      actualizarRutSelec
    }
  },
})
</script>
