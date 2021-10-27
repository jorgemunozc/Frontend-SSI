<template>
  <div class="container">
    <Navbar class="md:h-full" />
  </div>
  <div class="flex flex-col md:ml-48 px-2 md:overflow-y-auto lg:flex-row lg:flex-wrap lg:mr-0">
    <h1 class="w-full text-2xl text-blue-700 font-semibold">
      Información Empresas
    </h1>
    <div class="w-full flex flex-col mb-8 p-2 max-w-lg bg-gray-50 xl:mr-20 2xl:mr-32">
      <label class="font-semibold">Seleccione una empresa</label>
      <EmpresasDropdown
        v-model="empresaSelec"
        class="max-w-md"
      />
      <InfoBasica
        v-if="empresaSelec"
        :rut="empresaSelec.rut"
      />
      <StatusEmpresa
        v-if="empresaSelec" 
        :rut="empresaSelec.rut" 
      />
    </div>
    <div 
      v-if="empresaSelec"
      class="relative w-full flex flex-col px-2 py-4 max-w-lg xl:ml-8 xl:max-w-md bg-gray-50 xl:mx-auto xl:items-center" 
    >
      <h1 class="text-xl font-semibold absolute bottom-full left-0">
        Formularios declarados
      </h1>
      <div class=" mb-4">
        <label class="mr-2 font-semibold">Seleccione año:</label>
        <Dropdown
          v-model="selectedYear"
          :options="years"
        />
      </div>
      <EmpresaF29List
        :year="selectedYear"
        :rut="empresaSelec.rut"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import EmpresasDropdown from '@/components/EmpresasDropdown.vue';
import Navbar from '@/components/Navbar.vue';
import EmpresaF29List from '@/components/EmpresaF29List.vue';
import InfoBasica from '@/components/empresa/InfoBasica.vue';
import StatusEmpresa from '@/components/empresa/StatusEmpresa.vue';

export default defineComponent({
  components: {
    EmpresasDropdown,
    Navbar,
    EmpresaF29List,
    InfoBasica,
    StatusEmpresa
  },
  setup() {
    const years = ref<number[]>([]);
    const currYear = new Date().getUTCFullYear();
    const baseYear = 2021;
    const selectedYear = ref(currYear);
    const empresaSelec = ref<Empresa>();
    for (let y = baseYear; y <= currYear; y++) {
      years.value.push(y);
    }

    return {
      years,
      selectedYear,
      empresaSelec
    }
  }
})
</script>
