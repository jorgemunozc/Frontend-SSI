<template>
  <div>
    <h1 class="text-xl">
      Editar Auditor
    </h1>
    <!-- <router-link to="/auditores">Volver</router-link> -->
    <div class="flex gap-3">
      <span><em class="not-italic font-semibold">Auditor:</em> {{ infoAuditor }}</span>
      <span><em class="not-italic font-semibold">Correo:</em> {{ correo }}</span>
    </div>
    <template
      v-if="isLoading"
    >
      <LoadingSpinner />
      <ListaEmpresasVisibles
        :empresas="[]" 
      />
    </template>
    <template v-else>
      <form
        class="flex justify-end max-w-md"
        @submit.prevent="editarPermisos"
      >
        <button
          class="
            bg-yellow-500 hover:bg-yellow-600 text-white
            rounded-t w-32 text-center
            flex items-center justify-center
            justify-self-end relative
          "
        >
          <LoadingSpinner 
            v-show="isUpdatingData"
            class="absolute right-1"
          />
          <span>Actualizar</span>
        </button>
      </form>
      <ListaEmpresasVisibles
        :empresas="empresas"
        :empresas-seleccionadas="empresasVisibles"
        @seleccion-cambiada="actualizarSeleccion"
      />
    </template>
  </div>
</template>
<script lang="ts">
//Cargar datos auditor
//cargar permisos
import { computed, defineComponent,ref, watch } from 'vue'
import { listaEmpresas } from '@/services/EmpresaService';
import { actualizarPermisos, obtenerUsuario } from '@/services/UsuarioService';
import ListaEmpresasVisibles from '@/components/auditor/ListaEmpresasVisibles.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
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
    const empresasVisibles = ref<number[]>([]);
    const isLoading = ref(true);
    const isUpdatingData = ref(false);
    const correo = computed(() => {
      return auditor.value? auditor.value.correo : '';
    });
    const infoAuditor = computed(() => {
      return auditor.value? auditor.value.id: '';
    });
    const actualizarSeleccion = function (nuevaSeleccion: number[]) {
      empresasVisibles.value = nuevaSeleccion;
    };
    const cargarDatos = function(id: number) {
      isLoading.value = true;
      Promise.all([listaEmpresas(), obtenerUsuario(id)])
      .then((result) => {
        empresas.value = result[0];
        auditor.value = result[1];
        if (auditor.value.permisos?.ver_empresas) {
          empresasVisibles.value = auditor.value.permisos.ver_empresas;
        }
      }).catch(err => 
        console.error('No se pudo cargar info')
      ).finally(()=> {
        isLoading.value = false;
      });
    }

    const editarPermisos = function () {
      if (isUpdatingData.value) {
        console.warn('Procesando una actualizacion de estado, espere...');
        return;
      }
      const permisos: Permisos = {
        puedeVerEmpresas: empresasVisibles.value
      };
      isUpdatingData.value = true;
      actualizarPermisos(props.id, permisos)
      .then(() => console.log('Guardado con exito!'))
      .catch(() => console.log('NO SE PUDIERON GUARDAR LOS PERMISOS :('))
      .finally(() => isUpdatingData.value = false)
    };

    cargarDatos(props.id);
    watch(
      () => props.id,
      (newId) => {
        cargarDatos(newId);
      }
    );
    
    return {
      auditor,
      empresas,
      empresasVisibles,
      isLoading,
      isUpdatingData,
      correo,
      infoAuditor,
      actualizarSeleccion,
      editarPermisos
    }
  },
})
</script>
