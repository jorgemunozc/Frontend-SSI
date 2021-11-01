<template>
  <table class="max-w-sm">
    <thead>
      <tr class="bg-blue-100">
        <th>Id</th>
        <th>Correo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody v-if="hayAuditores">
      <tr 
        v-for="auditor in auditores" 
        :key="auditor.id"
        class="hover:bg-gray-100 h-10"
      >
        <td>{{ auditor.id }}</td>
        <td>{{ auditor.correo }}</td>
        <td class="text-center">
          <div class="flex justify-around">
            <router-link 
              :to="`/auditores/ver/${auditor.id}`"
              class="border px-1 hover:text-red-500"
            >
              <i class="pi pi-eye" />
            </router-link>
            <router-link 
              :to="`/auditores/editar/${auditor.id}`"
              class="border px-1"
            >
              <i class="pi pi-pencil hover:text-red-500" />
            </router-link>
            <button 
              class="border px-1 hover:bg-red-500 relative"
              @click="eliminarAuditorDeBD(auditor.id)"
            >
              <i class="pi pi-trash" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr class="text-center">
        <td colspan="3">
          Sin Auditores
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { eliminarUsuario, obtenerAuditores } from '@/services/UsuarioService';
import store from '@/store/auditores.module';

export default defineComponent({
  setup() {
    const auditoresStore = store;
    const auditores = auditoresStore.state.auditores;
    const hayAuditores = computed(() => auditores.length > 0);

    const eliminarAuditorDeBD = function (id: number) {
      eliminarUsuario(id)
      .then(() => {
        auditoresStore.removerAuditor(id);
      })
    };

    obtenerAuditores().then((data) => {
      auditoresStore.cargarAuditores(data);
    });
    
    return {
      auditores,
      hayAuditores,
      eliminarAuditorDeBD
    }
  },
})
</script>
