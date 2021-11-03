<template>
  <div>
    <h1 class="text-xl">
      Información Auditor
    </h1>
    <div>
      <div class="flex gap-3">
        <span>
          <em class="not-italic font-semibold">Auditor:</em> {{ identificacionAuditor }}
        </span>
        <span>
          <em class="not-italic font-semibold">Correo:</em> {{ correo }}
        </span>
      </div>
      <div v-if="isLoading">
        <LoadingSpinner />
      </div>
      <ListaEmpresasVisibles
        v-else
        :empresas="empresas"
        :editable="false"
      >
        <router-link
          :to="`/auditores/editar/${id}`"
          class="bordr text-sm w-6
              absolute inset-y-0 right-0
              hover:text-red-500"
        >
          <i
            class="pi pi-pencil pt-1"
          />
        </router-link>
      </ListaEmpresasVisibles>
    </div>
  </div>
</template>

<script lang="ts">
import ListaEmpresasVisibles from '@/components/auditor/ListaEmpresasVisibles.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { obtenerEmpresasVisibles, obtenerUsuario } from '@/services/UsuarioService';
import { computed, defineComponent, ref, watch } from 'vue'

export default defineComponent({
  components: { 
    ListaEmpresasVisibles,
    LoadingSpinner
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const auditor = ref<Usuario>();
    const empresas = ref<Empresa[]>([]);
    const correo = computed(() => auditor.value? auditor.value.correo : '');
    const identificacionAuditor = computed(() => auditor.value? auditor.value.id : '');
    const isLoading = ref(true);

    const cargarDatosAuditor = function (id: number) {
      isLoading.value = true;
      Promise.all([obtenerUsuario(id), obtenerEmpresasVisibles(id)])
      .then((result) => {
        auditor.value = result[0];
        empresas.value = result[1];
      })
      .catch((err) => console.log(err))
      .finally(() => isLoading.value = false);
    };
    cargarDatosAuditor(props.id);
    watch(
      () => props.id,
      (newId) => {
        cargarDatosAuditor(newId);
      }
    );
    return {
      auditor,
      empresas,
      identificacionAuditor,
      correo,
      isLoading
    }
  },
})
</script>
