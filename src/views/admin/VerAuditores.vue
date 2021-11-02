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
      <div class="flex flex-col max-w-sm">
        <router-link
          to="/auditores/nuevo"
          class="
            bg-blue-800 hover:bg-blue-900 
            text-white text-center
            h-8 w-32 rounded-t
            flex items-center justify-center
            self-end
          "
        >
          Agregar Auditor
        </router-link>
        <AuditoresList />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { defineComponent, watch } from 'vue'
import AuditoresList from '@/components/auditor/AuditoresList.vue'
import store from '@/store/auditores.module';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { 
    Navbar, 
    AuditoresList,
    // ListaEmpresasVisibles 
  },
  setup() {
    const router = useRouter();
    const auditores = store.state.auditores;
    
    watch(
      () => auditores,
      async () => {
        await router.push('/auditores')
      },
      {deep: true}
    );
  }
})
</script>