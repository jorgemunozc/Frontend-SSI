<template>
  <table class="w-full table-fixed border border-gray-400">
    <thead>
      <tr class="bg-blue-100">
        <th class="w-14">
          Id
        </th>
        <th>Correo</th>
        <th class="w-24">
          Acciones
        </th>
      </tr>
    </thead>
    <tbody 
      v-if="hayAuditores" 
      class="relative"
    >
      <div
        v-show="isProcessing"
        class="
          absolute
          inset-0
          bg-gray-200
          z-10
          flex
          items-center
          justify-center
          bg-opacity-60
        "
      >
        <LoadingSpinner />
      </div>
      <tr 
        v-for="auditor in auditores" 
        :key="auditor.id"
        class="
          hover:bg-gray-100 hover:bg-opacity-50 h-10 relative
          border border-gray-400
        "
      >
        <td>{{ auditor.id }}</td>
        <td class="truncate">
          {{ auditor.correo }}
        </td>
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
        <td 
          v-show="!isLoading"
          colspan="3" 
        >
          Sin Auditores
        </td>
        <td 
          v-show="isLoading"
          class="h-10"
          colspan="3" 
        >
          <LoadingSpinner />
        </td>
      </tr>
    </tbody>
  </table>
  <AlertBase 
    v-show="isAlertOpen"
    v-model:isOpen="isAlertOpen"
    :mensaje="message"
  />
</template>
<script lang="ts">
import { computed, defineComponent,ref } from 'vue'
import { eliminarUsuario, obtenerAuditores } from '@/services/UsuarioService';
import store from '@/store/auditores.module';
import AlertBase from '@/components/AlertBase.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

export default defineComponent({
  components: { 
    AlertBase,
    LoadingSpinner
  },
  setup() {
    const message = ref('');
    const isAlertOpen = ref(false);
    const isProcessing = ref(false);
    const auditoresStore = store;
    const auditores = auditoresStore.state.auditores;
    const hayAuditores = computed(() => auditores.length > 0);
    const isLoading = ref(false);

    const eliminarAuditorDeBD = function (id: number) {
      isProcessing.value = true;
      eliminarUsuario(id)
      .then(() => {
        auditoresStore.removerAuditor(id);
      })
      .catch(err => {
        message.value = err.response.data.error;
        isAlertOpen.value = true;
      })
      .finally(() => isProcessing.value = false);
    };

    isLoading.value = true;
    obtenerAuditores()
    .then((data) => {
      auditoresStore.cargarAuditores(data);
    })
    .catch((err) => console.log(err.response.data))
    .finally(() => isLoading.value = false);
    
    
    return {
      auditores,
      hayAuditores,
      message,
      isAlertOpen,
      isProcessing,
      isLoading,
      eliminarAuditorDeBD
    }
  }
})
</script>
