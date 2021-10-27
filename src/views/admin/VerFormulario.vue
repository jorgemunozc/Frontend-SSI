<template>
  <div class="container">
    <Navbar class="md:h-full" />
  </div>
  <div class="relative md:ml-48 flex-grow flex flex-col min-h-0">
    <div
      v-if="isLoading"
      class="
        bg-gray-400 
        bg-opacity-40
        overflow-hidden 
        flex 
        items-center 
        absolute 
        z-40
        w-full
        h-full"
    >
      <loading-spinner class="h-full w-16" />
    </div>
    <div class="flex-grow flex-shrink overflow-auto px-2">
      <Formulario29
        :folio="folio"
        :periodo="periodoTributario"
        :datos-empresa="empresa"
        :editable="false"
        class="transform scale-50 md:scale-60 lg:scale-100 origin-top-left mx-auto"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref } from 'vue';
import Formulario29 from '@/views/f29/Formulario29.vue';
import { obtenerEmpresa } from '@/services/EmpresaService';
import { useRoute, useRouter } from 'vue-router';
import store from '@/store/f29.module';
import { obtenerF29 } from '@/services/F29Service';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  components: {
    Formulario29,
    LoadingSpinner,
    Navbar
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const folio = ref();
    const isLoading = ref(true);
    const periodoTributario = reactive({
      month: 0,
      year: 1900
    })
    const empresa = reactive({
      razonSocial: "",
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      rut: "",
    });
    const f29Store = store;
    const cargarFormulario = async function (f: number) {
      isLoading.value = true;
      obtenerF29(f)
        .then((f29) => {
          f29Store.loadData(f29);
          folio.value = f;
          const periodo = new Date(f29.periodo);
          periodoTributario.month = periodo.getMonth() + 1;
          periodoTributario.year = periodo.getFullYear();
          return obtenerEmpresa(f29.rut)
        })
      .then((data) => {
        empresa.razonSocial = data.razon_social;
        empresa.rut = `${data.rut}-${data.dv}`;
      })
      .catch(() => {
        router.push('/');
      })
      .finally(() => {
        isLoading.value = false;
      })
    };
    onBeforeMount(async () => await cargarFormulario(Number(route.params.folio)))
    return {
      empresa,
      folio,
      periodoTributario,
      isLoading,
      cargarFormulario
    }
  },
})
</script>
