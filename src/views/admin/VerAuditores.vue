<template>
  <div class="container min-h-0">
    <Navbar class="md:h-full" />
    <div 
      class="flex flex-col lg:flex-row lg:flex-wrap gap-x-20
        md:ml-48 p-2 h-full overflow-y-auto"
    >
      <h1 class="text-blue-700 font-semibold text-2xl mb-4 w-full">
        Auditores
      </h1>
      <div>
        <router-link
          to="/auditores/nuevo"
          class="bg-blue-800 hover:bg-blue-900 text-white rounded-t h-8 w-32 text-center flex items-center justify-center"
        >
          Agregar Auditor
        </router-link>
        <AuditoresList />
      </div>
      <router-view />
      <!-- <ListaEmpresasVisibles :empresas="[]">
        
      </ListaEmpresasVisibles> -->
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { defineComponent, ref, watch } from 'vue'
import AuditoresList from '@/components/auditor/AuditoresList.vue'
import store from '@/store/auditores.module';

export default defineComponent({
  components: { 
    Navbar, 
    AuditoresList,
    // ListaEmpresasVisibles 
  },
  setup() {
    const componente = ref('');
    const posiblesComponentes = ['VerAuditor', 'CrearAuditor', 'EditarAuditor'];
    const auditores = store.state.auditores;
    const mostrarComponente = function (nombreComponente: string) {
      const existeComp = posiblesComponentes.indexOf(nombreComponente) !== -1;
      if (existeComp) {
        componente.value = nombreComponente;
      } else {
        componente.value = '';
      }
    };
    watch(
      () => auditores,
      (valor, previo) => {
        console.log('Nuevo auditor agregado!');
        console.log(valor)
        console.log(previo)
      },
      {deep: true}
    );
    return {
      componente,
      mostrarComponente
    }
  }
})
</script>